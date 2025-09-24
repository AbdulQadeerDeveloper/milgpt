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

      {/* Content */}
      <div className="w-full md:w-[83%] lg:w-[75%] 2xl:w-2/3 flex flex-col items-center justify-center gap-4 xl:gap-6 text-center py-10 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-bold">
          Military AI Suite: Strategics Smarter, Operate Faster
        </h1>
        <p className="text-base lg:text-lg">
          Deploy the power of Artificial Intelligence for modern warfare,
          strategy, and decision-making. From real-time surveillance to
          psychological operations, our tools are designed for military
          excellence. Gain the edge with precision, speed, and intelligence.
        </p>

        <div className="w-full md:w-[83%] lg:w-[75%] 2xl:w-2/3 p-1 lg:pl-3 rounded-full bg-white color-black ring-2 ring-white/50 text-sm lg:text-base flex items-center justify-between">
          <p className="w-2/3 line-clamp-1">
            An enchanted forest bathed in the soft, golden light...
          </p>
          <button className="w-fit p-2 lg:px-4 lg:py-3 rounded-full ring-2 ring-[#a0b99f] bg-[#4A6B48] flex items-center justify-between gap-2 md:gap-4 text-white">
            <BsStars />
            <span>Generate</span>
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Hero;