import React from "react";
import PageWrapper from "../PageWrapper";
import Image from "next/image";

const Challenge = () => {
  return (
    <PageWrapper background="bg-[url('/home/ChallengeBg.jpg')] bg-center bg-no-repeat bg-cover !z-20">
      {/* background effects */}
      <div className="h-full w-full bg-gradient-to-b from-[#010B00] to-[#010B004D] blur-xl absolute -left-4 -top-4 -z-10" />
      <div className="w-[800px] h-full rounded-full bg-background blur-3xl opacity-60 absolute left-[30%] -z-10" />

      {/* Content */}
      <div className="w-full md:w-[90%] lg:w-[83%]  flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 md:py-10 text-center text-white">
        <div className="w-full md:w-[40%] space-y-4 xl:space-y-6 text-left">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl uppercase font-bold">
            Let&apos;s Challenge Your Adrenaline
          </h2>
          <p className="text-base lg:text-lg">
            Get ready for intense, real-life military training with the help of
            AI. Face exciting missions, fast decisions, and realistic combat
            situations — all designed to boost your skills and keep you sharp in
            the field.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <Image
            src={"/home/Airsoft military game.svg"}
            width={400}
            height={450}
            alt="image"
            className="md:absolute md:bottom-10 lg:-bottom-0 2xl:-bottom-32 md:right-[10%] lg:right-[15%] 2xl:right-1/4 w-full md:w-[300px] 2xl:w-[400px] h-auto"
          />

          <div className="md:absolute md:right-1/4 md:-bottom-20 2xl:-bottom-48 2xl:right-[40%] bg-[#4A6B48] p-4 lg:p-6 2xl:p-8 md:w-[350px] xl:w-[400px]">
            <q className="text-sm lg:text-base">
              “Looked over at the campfire, where three party ponies were
              teaching Tyson to operate a paintball gun. I hoped they knew what
              they were getting into.”
            </q>
            <div className="relative flex items-end justify-between z-10 mt-6">
              <Image
                src={"/home/LightBrownStain.svg"}
                width={110}
                height={110}
                alt="Stain"
                className="absolute bottom-0 left-0 -z-10"
              />
              <p className="text-lg xl:text-xl font-bold text-right w-full">
                - Rick Riordan
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Challenge;
