import React from "react";
import PageWrapper from "@/components/PageWrapper";
import { BsStars } from "react-icons/bs";

const Hero = () => {
  return (
    <PageWrapper background="bg-[url('/home/heroBG.svg')] bg-center bg-no-repeat bg-cover">
      {/* background effects */}
      <div className="h-full w-20 bg-background blur-xl absolute -left-4 -z-10" />
      <div className="h-full w-20 bg-background blur-xl absolute -right-4 -z-10" />
      <div className="w-[800px] h-[800px] rounded-full bg-background blur-3xl opacity-60 absolute left-[30%] -z-10" />

<<<<<<< HEAD
      {/* Content */}
      <div className="w-full md:w-[83%] lg:w-[75%] 2xl:w-2/3 flex flex-col items-center justify-center gap-4 xl:gap-6 text-center py-10 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-bold">
          Military AI Suite: Strategics Smarter, Operate Faster
        </h1>
        <p className="text-base lg:text-lg">
=======
      <div className="w-full md:w-[83%] lg:w-[75%] 2xl:w-2/3 flex flex-col items-center justify-center gap-5 xl:gap-7 text-center py-12 text-white">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-5xl uppercase font-extrabold leading-snug">
          Military AI Suite: Strategize Smarter, Operate Faster
        </h1>

        {/* Description */}
        <p className="text-base lg:text-base text-[#D1D5DB]">
>>>>>>> 57b8d74 (Add Sentiment Insights section with contact)
          Deploy the power of Artificial Intelligence for modern warfare,
          strategy, and decision-making. From real-time surveillance to
          psychological operations, our tools are designed for military
          excellence. Gain the edge with precision, speed, and intelligence.
        </p>

<<<<<<< HEAD
        <div className="w-full md:w-[83%] lg:w-[75%] 2xl:w-2/3 p-1 lg:pl-3 rounded-full bg-white color-black ring-2 ring-white/50 text-sm lg:text-base flex items-center justify-between">
          <p className="w-2/3 line-clamp-1">
            An enchanted forest bathed in the soft, golden light...
          </p>
          <button className="w-fit p-2 lg:px-4 lg:py-3 rounded-full ring-2 ring-[#a0b99f] bg-[#4A6B48] flex items-center justify-between gap-2 md:gap-4 text-white">
            <BsStars />
            <span>Generate</span>
=======
        {/* Input + Button */}
        <div className="w-full md:w-[70%] lg:w-[70%] 2xl:w-2/3 flex items-center gap-2 p-2 bg-[#1a1b1f] rounded-full border border-[#4A6B48] shadow-md">
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
            className="px-4 py-2 lg:px-6 lg:py-3 rounded-full flex items-center justify-center gap-2 md:gap-3 
               bg-[#4A6B48] text-white font-medium shadow-md 
               transition-all duration-300 ease-in-out
               hover:bg-[#997452] hover:shadow-lg"
          >
            <BsStars className="text-lg lg:text-xl" />
            <span className="text-sm lg:text-base">Generate</span>
>>>>>>> 57b8d74 (Add Sentiment Insights section with contact)
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Hero;