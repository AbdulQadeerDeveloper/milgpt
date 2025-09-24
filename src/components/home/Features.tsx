import React from "react";
import PageWrapper from "../PageWrapper";
import Image from "next/image";
import { HomeFeaturesData } from "@/constants/Data";
import Link from "next/link";

interface Feature {
  id: number;
  img: string;
  heading: string;
  titleWhite: string;
  titleBrown: string;
  description: string;
  features: string[];
  buttonText: string;
}

const Features: React.FC = () => {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col gap-16 2xl:gap-24 z-10">
        {HomeFeaturesData.map((feature: Feature) => (
          <div key={feature.id} className="relative">
            {/* Background-effect */}
            <Image
              src={
                feature.id % 2 === 0
                  ? "/home/GreenStain.svg"
                  : "/home/BrownStain.svg"
              }
              width={110}
              height={130}
              alt="Decorative background stain"
              className="absolute -left-12 -top-20 2xl:-left-7 2xl:-top-7"
            />
            <Image
              src={
                feature.id % 2 === 0
                  ? "/home/BrownStain.svg"
                  : "/home/GreenStain.svg"
              }
              width={110}
              height={130}
              alt="Decorative background stain"
              className="absolute -right-12 -bottom-10 2xl:-right-7 2xl:-bottom-7"
            />
            <section
              className={`w-full flex ${
                feature.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col items-start justify-between gap-6 lg:gap-10 px-0 2xl:px-16`}
            >
              <div className="w-full md:w-[55%] xl:w-1/2 flex flex-col items-start justify-center gap-4 lg:gap-6 text-left text-white">
                <h3 className="text-xs xl:text-sm border border-[#6B946A] rounded-full px-4 py-1 uppercase">
                  {feature.heading}
                </h3>
                <h2 className="text-2xl md:text-3xl 2xl:text-4xl uppercase font-bold">
                  {feature.titleWhite}{" "}
                  <span className="text-[#997452]">{feature.titleBrown}</span>
                </h2>
                <p className="text-base lg:text-lg">{feature.description}</p>

                <Link href="#" passHref>
                  <button
                    className="text-sm lg:text-base w-fit px-6 py-3 cursor-pointer rounded-full 
               bg-gradient-to-r from-[#4A6B48] to-[#8C8A62] 
               flex items-center font-semibold text-white shadow-md
               transition-all duration-300 ease-in-out
               hover:from-[#997452] hover:to-[#997452] hover:shadow-lg"
                    aria-label={feature.buttonText}
                  >
                    {feature.buttonText}
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-[45%] xl:w-fit relative">
                <Image
                  src={feature.img}
                  width={500}
                  height={500}
                  alt={`${feature.titleWhite} ${feature.titleBrown} feature image`}
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
                />
              </div>
            </section>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Features;
