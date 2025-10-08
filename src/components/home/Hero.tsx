"use client";

import React from "react";
import PageWrapper from "@/components/PageWrapper";
import { BsStars } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleGenerate = () => {
    // Check login status (example: from localStorage)
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/milgpt"); // logged in → go to milgpt page
    } else {
      router.push("/auth/login"); // not logged in → redirect to login
    }
  };

  return (
    <PageWrapper background="bg-[url('/home/heroBG.svg')] bg-center bg-no-repeat bg-cover">
      {/* background effects */}
      <div className="h-full w-20 bg-background blur-xl absolute -left-4 -z-10" />
      <div className="h-full w-20 bg-background blur-xl absolute -right-4 -z-10" />
      <div className="w-[800px] h-[800px] rounded-full bg-background blur-3xl opacity-60 absolute left-[30%] -z-10" />

      <div className="w-full md:w-[83%] lg:w-[75%] 2xl:w-2/3 flex flex-col items-center justify-center gap-5 xl:gap-7 text-center py-12 text-white">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-extrabold leading-snug">
          Military AI Suite: Strategize Smarter, Operate Faster
        </h1>

        {/* Description */}
        <p className="text-base lg:text-lg text-[#D1D5DB] max-w-3xl">
          Deploy the power of Artificial Intelligence for modern warfare,
          strategy, and decision-making. From real-time surveillance to
          psychological operations, our tools are designed for military
          excellence. Gain the edge with precision, speed, and intelligence.
        </p>

        {/* Input + Button */}
        <div className="w-full md:w-[70%] lg:w-[70%] 2xl:w-2/3 flex items-center gap-2 p-2 bg-[#1a1b1f] rounded-full border border-[#4A6B48] shadow-md mt-6">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Type your prompt here..."
            className="flex-1 bg-transparent border-none outline-none 
               text-sm lg:text-base text-[#F0F0F0] 
               placeholder-[#A0A0A0] pl-3"
          />

          {/* Button */}
          <button
            onClick={handleGenerate}
            className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-full 
              flex items-center justify-center gap-2 sm:gap-3 
              bg-[#4A6B48] text-white font-medium shadow-md 
              transition-all duration-300 ease-in-out
              hover:bg-[#997452] hover:shadow-lg mx-auto sm:mx-0"
          >
            <BsStars className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base">Generate</span>
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Hero;
