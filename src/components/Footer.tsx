"use client";
import React from "react";
// import LogoIcon from "@/assets/icons/LogoWhite.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background text-white w-full py-6 md:py-8 lg:pt-14 xl:pt-20">
      <div className="container mx-auto px-4 md:px-6 space-y-6 md:space-y-8 lg:space-y-12">
        <div className="flex flex-col xl:flex-row flex-wrap xl:flex-nowrap items-start xl:items-center justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Logo + Description */}
          <div className="w-full flex flex-col gap-3 md:gap-4 lg:max-w-sm">
            <Link href="/" className="w-32 md:w-40 text-xl font-bold">
              {/* <LogoIcon /> */}
              MilGPT
            </Link>
            <p className="text-xs md:text-sm lg:text-base">
              Endless Possibilities. Just Imagine.
            </p>
          </div>

          {/* <hr className="w-20 md:w-32 lg:!w-40 border-[#f5f5f5] rotate-90 hidden xl:flex" /> */}

          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-5 justify-between">
            {/* About Section */}
            <nav className="flex flex-col gap-2 md:gap-3">
              <h4 className="text-base md:text-lg font-semibold">About</h4>
              <ul className="text-xs md:text-sm lg:text-base text-nowrap space-y-2 md:space-y-3">
                {[
                  "AI Image Generator",
                  "AI Headshot Generator",
                  "AI Animal Generator",
                ].map((item, idx) => (
                  <li key={idx} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </nav>

            {/* <hr className="w-20 md:w-32 lg:!w-40 border-[#f5f5f5] rotate-90 hidden xl:flex" /> */}

            {/* Support Section */}
            <nav className="flex flex-col gap-2 md:gap-3">
              <h4 className="text-base md:text-lg font-semibold">Tools</h4>
              <ul className="text-xs md:text-sm lg:text-base text-nowrap space-y-2 md:space-y-3">
                {["Text to Image", "Creative Enhance", "Image Remix"].map(
                  (item, idx) => (
                    <li key={idx} className="hover:underline cursor-pointer">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* <hr className="w-20 md:w-32 lg:!w-40 border-[#f5f5f5] rotate-90 hidden xl:flex" /> */}

            {/* Newsletter Section */}
            <section className="flex flex-col gap-2 md:gap-3 max-w-xs w-full">
              <h4 className="text-base md:text-lg font-semibold">Newsletter</h4>
              <p className="text-xs md:text-sm lg:text-base">
                Sign up to our newsletter to get updated information,
                promotions, and insight.
              </p>
              <form
                className="flex items-start sm:items-center justify-between bg-white gap-0 w-fit "
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="px-7 py-2 color-black bg-white placeholder:text-gray-600 border-none outline-none rounded-none w-auto"
                />
                <button
                  type="submit"
                  className="bg-background text-white px-4 py-2 text-sm rounded-none w-fit md:after:content-['Signup'] after:content-['>'] mr-[1.5px]"
                ></button>
              </form>
            </section>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <p className="text-xs md:text-sm">Terms of Use</p>
            <p className="text-xs md:text-sm">Privacy Policy</p>
          </div>

          <p className="w-full text-center text-xs md:text-sm">
            Copyright © 2025 MilGPT, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
