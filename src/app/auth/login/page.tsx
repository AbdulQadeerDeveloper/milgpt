"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
  sub: string;
}

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          renderButton: (
            element: HTMLElement | null,
            options: { theme: string; size: string; width: string }
          ) => void;
        };
      };
    };
  }
}

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleResponse = useCallback(
    async (response: { credential: string }) => {
      try {
        const userObject = jwtDecode<GoogleUser>(response.credential);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: userObject.name,
              email: userObject.email,
              picture: userObject.picture,
              googleId: userObject.sub,
            }),
          }
        );

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Google login failed");

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        router.push("/milgpt");
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      }
    },
    [router]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          callback: handleGoogleResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-login"),
          { theme: "outline", size: "large", width: "100%" }
        );
      }
    };

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, [handleGoogleResponse]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/milgpt");
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Background */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/home/banner-about.jpg')" }}
      >
        <Link
          href="/"
          className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
        >
          Back
        </Link>
      </div>

      {/* Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-8">
        <div className="w-full max-w-md bg-[#111] rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
          <p className="text-gray-400 mb-6">
            Welcome back! Please sign in to continue.
          </p>

          <div id="google-login" className="mb-4"></div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="px-2 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DCD194] text-white placeholder-gray-400"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DCD194] text-white placeholder-gray-400"
              required
            />
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#4A6B48] to-[#DCD194] text-black font-semibold py-3 rounded-lg transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-6 text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-[#DCD194] hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
