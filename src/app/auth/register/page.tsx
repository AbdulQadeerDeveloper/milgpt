"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
  sub: string; // Google user ID
}

// Extend Window interface to include google property
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
            options: {
              theme: string;
              size: string;
              width: string;
            }
          ) => void;
        };
      };
    };
  }
}

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle Google Register response
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
        if (!res.ok)
          throw new Error(data.message || "Google registration failed");

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

  // Load Google Script and Initialize
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
          document.getElementById("google-register"),
          {
            theme: "outline",
            size: "large",
            width: "100%",
          }
        );
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [handleGoogleResponse]);

  // Handle form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Email/Password registration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/milgpt");
      } else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Side Image */}
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

      {/* Right Side Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-6">
        <div className="w-full max-w-md bg-[#111] rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-2">Register</h1>
          <p className="text-gray-400 mb-6 text-sm">
            Start generating your thoughts with{" "}
            <span className="text-[#DCD194] font-semibold">MilGPT</span>
          </p>

          {/* Google Sign-In Button */}
          <div id="google-register" className="mb-4"></div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#DCD194] text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#DCD194] text-white placeholder-gray-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#DCD194] text-white placeholder-gray-400"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#DCD194] text-white placeholder-gray-400"
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
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#DCD194] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
