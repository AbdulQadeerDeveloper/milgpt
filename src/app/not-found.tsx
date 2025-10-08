"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoHome } from "react-icons/io5";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d0e10] text-white text-center px-6">
      {/* Logo / Brand */}
      <Link
        href="/"
        className="text-3xl font-bold mb-8 hover:text-[#4A6B48] transition-colors"
      >
        MilGPT
      </Link>

      {/* Error Code */}
      <h1 className="text-[100px] font-extrabold leading-none text-[#4A6B48]">
        404
      </h1>
      <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
      <p className="mt-3 text-gray-400 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved. Try
        returning to the homepage or the MILGPT chat.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => router.back()}
          className="px-6 py-3 rounded bg-[#1a1b1e] border border-white/20 hover:bg-[#222] transition-colors"
        >
          Go Back
        </button>
        <Link
          href="/milgpt"
          className="flex items-center gap-2 px-6 py-3 rounded bg-[#4A6B48] hover:bg-[#3b5639] transition-colors"
        >
          <IoHome className="w-5 h-5" /> Go to MILGPT
        </Link>
      </div>
    </div>
  );
}
