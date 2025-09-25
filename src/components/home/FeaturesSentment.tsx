"use client";

import React from "react";
import PageWrapper from "../PageWrapper";
import Image from "next/image";
import Link from "next/link";

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
    img: "/home/charts_charts.png",
    heading: "Comprehensive Sentiment Insights",
    titleWhite: "Customer",
    titleBrown: "Sentiment Analysis",
    description:
      "Gain deep understanding of customer emotions with advanced AI-powered sentiment analysis. milgpt helps you uncover valuable insights, identify trends, and improve decision-making with precision-driven analytics.",
    buttonText: "Get Started with milgpt",
  },
  {
    id: 2,
    img: "/home/sentiment-charts.png",
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
  return (
    <PageWrapper>
      <div className="w-full flex flex-col gap-16 2xl:gap-24 z-10">
        {HomeSentimentData.map((feature) => (
          <div key={feature.id} className="relative">
            {/* Decorative background */}
            <Image
              src={
                feature.id % 2 === 0
                  ? "/home/GreenStain.svg"
                  : "/home/BrownStain.svg"
              }
              width={110}
              height={130}
              alt="Background Stain"
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
              alt="Background Stain"
              className="absolute -right-12 -bottom-10 2xl:-right-7 2xl:-bottom-7"
            />

            <section
              className={`w-full flex ${
                feature.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col items-start justify-between gap-6 lg:gap-10 px-0 2xl:px-16`}
            >
              {/* Text Section */}
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

              {/* Image Section */}
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

export default FeaturesSentment;
