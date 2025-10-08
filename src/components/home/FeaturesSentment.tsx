"use client";

import React from "react";
import PageWrapper from "../PageWrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Feature {
  id: number;
  img: string;
  heading: string;
  titleWhite: string;
  titleBrown: string;
  description: string;
  buttonText: string;
}

export const HomeSentimentData: Feature[] = [
  {
    id: 1,
    img: "/home/charts_charts-removebg-preview.png",
    heading: "Comprehensive Sentiment Insights",
    titleWhite: "Customer",
    titleBrown: "Sentiment Analysis",
    description:
      "Gain deep understanding of customer emotions with advanced AI-powered sentiment analysis. milgpt helps you uncover valuable insights, identify trends, and improve decision-making with precision-driven analytics.",
    buttonText: "Get Started with milgpt",
  },
  {
    id: 2,
    img: "/home/processing-ai.png",
    heading: "AI-Powered Language Processing",
    titleWhite: "Natural Language",
    titleBrown: "Processing Engine",
    description:
      "Transform the way you understand and interact with text using our cutting-edge AI language engine. Unlock insights, automate workflows, and enhance communication with precision-driven natural language processing.",
    buttonText: "Explore NLP Solutions",
  },
  {
    id: 3,
    img: "/home/dashboard-charts.png",
    heading: "Interactive Analysis Dashboard",
    titleWhite: "Sentiment",
    titleBrown: "Intelligence Dashboard",
    description:
      "Visualize and interpret customer sentiment like never before. Our interactive dashboard provides real-time analytics, intuitive insights, and actionable metrics to help you make smarter, data-driven decisions.",
    buttonText: "Explore Dashboard",
  },
  {
    id: 4,
    img: "/home/collection-charts.png",
    heading: "Customizable Sentiment Collections",
    titleWhite: "Sentiment",
    titleBrown: "Collection Tools",
    description:
      "Organize, manage, and analyze customer sentiments effortlessly with our customizable tools. Tailor collections to your business needs, track trends over time, and gain actionable insights that drive smarter decisions.",
    buttonText: "Start Collecting Insights",
  },
];

const FeaturesSentment: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/milgpt"); // logged in → go to milgpt
    } else {
      router.push("/auth/login"); // not logged in → go to login
    }
  };

  return (
    <PageWrapper>
      <div className="w-full flex flex-col gap-16 2xl:gap-24 z-10 items-center">
        {/* Section Heading */}
        <div className="w-full flex flex-col gap-4 lg:gap-4 lg:max-w-[700px] mx-auto items-center justify-center ">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl uppercase font-bold text-[#fff]">
            Sentiment <span className="text-[#997452]">Analysis</span>
          </h2>
          <p className="text-base lg:text-base text-[#fff]">
            Instant access to military-grade intelligence at your fingertips.
            Get quick, reliable answers about weapons, protocols, tactics, and
            unit structures through voice or text — anytime, anywhere.
          </p>
        </div>

        {/* Features List */}
        {HomeSentimentData.map((feature) => {
          // Conditional button color
          const buttonClasses =
            feature.id === 1 || feature.id === 3
              ? "bg-gradient-to-r from-[#4A6B48] to-[#8C8A62] hover:from-[#997452] hover:to-[#997452]"
              : "bg-[#997452] hover:bg-[#6B4E32]";

          return (
            <section
              key={feature.id}
              className={`relative w-full max-w-[1308px] min-h-[388px] 
                flex ${
                  feature.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }
                flex-col items-start justify-between gap-6 lg:gap-10
                px-[60px] py-[60px] 
                bg-[#0d0e10] border border-[#997452] rounded-[25px]
                shadow-[0px_12.58px_35.93px_0px_#99745240] overflow-hidden`}
            >
              {/* Decorative Backgrounds */}
              <Image
                src="/home/GreenStain.svg"
                alt="decor top left"
                width={110}
                height={130}
                className="absolute -top-5 -left-5 z-0 pointer-events-none"
              />
              <Image
                src="/home/BrownStain.svg"
                alt="decor bottom right"
                width={110}
                height={130}
                className="absolute -bottom-5 -right-5 z-0 pointer-events-none"
              />

              {/* Text Section */}
              <div className="w-full md:w-[55%] xl:w-1/2 flex flex-col items-start justify-center gap-4 lg:gap-6 text-left text-white relative z-10">
                <h3 className="text-xs xl:text-sm border border-[#6B946A] rounded-full px-4 py-1 uppercase">
                  {feature.heading}
                </h3>
                <h2 className="text-1xl md:text-2xl lg:text-[20px] 2xl:text-2xl uppercase font-bold">
                  {feature.titleWhite}{" "}
                  <span className="text-[#997452]">{feature.titleBrown}</span>
                </h2>
                <p className="text-base lg:text-[12px]">
                  {feature.description}
                </p>

                {/* Login Check Button */}
                <button
                  onClick={handleButtonClick}
                  className={`text-sm lg:text-base w-fit px-6 py-3 cursor-pointer rounded-full 
                    flex items-center font-semibold text-white shadow-md
                    transition-all duration-300 ease-in-out ${buttonClasses}`}
                  aria-label={feature.buttonText}
                >
                  {feature.buttonText}
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-[45%] xl:w-fit relative flex justify-center items-center z-10">
                <Image
                  src={feature.img}
                  width={450}
                  height={450}
                  alt={`${feature.titleWhite} ${feature.titleBrown} feature image`}
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
                />
              </div>
            </section>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default FeaturesSentment;
