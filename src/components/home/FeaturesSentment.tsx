import React from "react";
import PageWrapper from "../PageWrapper";
import Image from "next/image";
import Link from "next/link";
import { HomeSentimentData } from "@/constants/DataSentiment";

interface FeatureSentiment {
  id: number;
  img: string;
  headingSentiment: string;
  titleWhiteSentiment: string;
  titleBrownSentiment: string;
  descriptionSentiment: string;
  buttonText: string;
}

const FeaturesSentiment: React.FC = () => {
  return (
    <PageWrapper>
      {/* Top Section Heading + Short Description */}
      <div className="w-full text-center flex flex-col items-center justify-center gap-4 mb-12 lg:mb-20">
        <div className="w-full flex flex-col gap-4 lg:gap-6 items-center justify-center ">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold uppercase">
            Explore <span className="text-[#997452]">Sentiment Insights</span>
          </h2>
          <p className="text-base lg:text-base text-[#fff] lg:w-[75%]">
            Gain a deeper understanding of customer emotions, opinions, and
            reactions with AI-powered sentiment analysis, visual reports, and
            real-time dashboards.
          </p>
        </div>
      </div>

      {/* Features Mapping */}
      <div className="w-full flex flex-col gap-16 2xl:gap-24 z-10">
        {HomeSentimentData.map((FeatureSentiment: FeatureSentiment) => (
          <div key={FeatureSentiment.id} className="relative">
            {/* Background Stains */}
            <Image
              src={
                FeatureSentiment.id % 2 === 0
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
                FeatureSentiment.id % 2 === 0
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
                FeatureSentiment.id % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } flex-col items-start justify-between gap-6 lg:gap-10 px-0 2xl:px-16`}
            >
              {/* Text Section */}
              <div className="w-full md:w-[55%] xl:w-1/2 flex flex-col items-start justify-center gap-4 lg:gap-6 text-left text-white">
                <h3 className="text-xs xl:text-sm border border-[#6B946A] rounded-full px-4 py-1 uppercase">
                  {FeatureSentiment.headingSentiment}
                </h3>
                <h2 className="text-2xl md:text-3xl 2xl:text-4xl uppercase font-bold">
                  {FeatureSentiment.titleWhiteSentiment}{" "}
                  <span className="text-[#997452]">
                    {FeatureSentiment.titleBrownSentiment}
                  </span>
                </h2>
                <p className="text-base lg:text-lg">
                  {FeatureSentiment.descriptionSentiment}
                </p>

                <Link href="#" passHref>
                  <button
                    className="text-sm lg:text-base w-fit px-6 py-3 cursor-pointer rounded-full 
                    bg-gradient-to-r from-[#4A6B48] to-[#8C8A62] 
                    flex items-center font-semibold text-white shadow-md
                    transition-all duration-300 ease-in-out
                    hover:from-[#997452] hover:to-[#997452] hover:shadow-lg"
                    aria-label={FeatureSentiment.buttonText}
                  >
                    {FeatureSentiment.buttonText}
                  </button>
                </Link>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-[45%] xl:w-fit relative top-10">
                <Image
                  src={FeatureSentiment.img}
                  width={500}
                  height={600}
                  alt={`${FeatureSentiment.titleWhiteSentiment} ${FeatureSentiment.titleBrownSentiment} feature image`}
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

export default FeaturesSentiment;
