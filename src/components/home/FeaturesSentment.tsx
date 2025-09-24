"use client";
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
      <div className="w-full text-center flex flex-col items-center justify-center gap-6 mb-16 lg:mb-24">
        <div className="w-full flex flex-col gap-6 lg:gap-8 items-center justify-center relative">
          {/* Animated background elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#997452]/20 to-[#6B946A]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#6B946A]/15 to-[#997452]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold uppercase relative z-10 animate-fade-in">
            Explore <span className="mr-32 text-[#997452] relative">
              Sentiment Insights
            </span>
          </h2>
<<<<<<< HEAD
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#997452] to-transparent rounded-full animate-expand"></div>
          <p className="text-base lg:text-lg text-[#fff] max-w-4xl leading-relaxed animate-fade-in-up delay-300">
            Gain a deeper understanding of customer emotions, opinions, and
            reactions with AI-powered sentiment analysis, visual reports,
            <br className="hidden md:block" /> and real-time dashboards.
=======
          <p className="text-base lg:text-base text-[#fff] lg:w-[75%]">
            Gain a deeper understanding of customer emotions, opinions, and
            reactions with AI-powered sentiment analysis, visual reports, and
            real-time dashboards.
>>>>>>> 57b8d74 (Add Sentiment Insights section with contact)
          </p>
        </div>
      </div>

      {/* Features Mapping */}
      <div className="w-full flex flex-col gap-20 2xl:gap-28 z-10">
        {HomeSentimentData.map((FeatureSentiment: FeatureSentiment, index: number) => (
          <div 
            key={FeatureSentiment.id} 
            className="relative group animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Enhanced Background Stains with glow */}
            <div className="absolute -left-12 -top-20 2xl:-left-7 2xl:-top-7 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#997452]/30 to-[#6B946A]/30 rounded-full blur-xl animate-pulse"></div>
              <Image
                src={
                  FeatureSentiment.id % 2 === 0
                    ? "/home/GreenStain.svg"
                    : "/home/BrownStain.svg"
                }
                width={110}
                height={130}
                alt="Decorative background stain"
                className="relative z-10"
              />
            </div>
            <div className="absolute -right-12 -bottom-10 2xl:-right-7 2xl:-bottom-7 transform transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B946A]/30 to-[#997452]/30 rounded-full blur-xl animate-pulse delay-500"></div>
              <Image
                src={
                  FeatureSentiment.id % 2 === 0
                    ? "/home/BrownStain.svg"
                    : "/home/GreenStain.svg"
                }
                width={110}
                height={130}
                alt="Decorative background stain"
                className="relative z-10"
              />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#997452]/40 rounded-full animate-float"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#6B946A]/60 rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#997452]/30 rounded-full animate-float-slow"></div>
            </div>

            <section
              className={`w-full flex ${
                FeatureSentiment.id % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } flex-col items-start justify-between gap-8 lg:gap-12 px-0 2xl:px-16 backdrop-blur-sm bg-gradient-to-br from-transparent via-black/5 to-transparent rounded-2xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#997452]/10 border border-transparent group-hover:border-[#997452]/20`}
            >
              {/* Text Section */}
              <div className="w-full md:w-[55%] xl:w-1/2 flex flex-col items-start justify-center gap-6 lg:gap-8 text-left text-white">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6B946A]/20 to-[#6B946A]/10 rounded-full blur-md animate-pulse"></div>
                  <h3 className="text-xs xl:text-sm border border-[#6B946A] rounded-full px-6 py-2 uppercase relative z-10 bg-gradient-to-r from-[#6B946A]/10 to-transparent backdrop-blur-sm transition-all duration-300 group-hover:border-[#6B946A]/80 group-hover:shadow-lg group-hover:shadow-[#6B946A]/20">
                    {FeatureSentiment.headingSentiment}
                  </h3>
                </div>
                
                <h2 className="text-2xl md:text-3xl 2xl:text-4xl uppercase font-bold transition-all duration-500 group-hover:scale-105 origin-left">
                  <span className="inline-block transition-all duration-300 group-hover:text-shadow-glow">
                    {FeatureSentiment.titleWhiteSentiment}
                  </span>{" "}
                  <span className="text-[#997452] inline-block transition-all duration-300 group-hover:drop-shadow-lg relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#997452] via-[#B8956A] to-[#997452] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer bg-[length:200%_100%]">
                      {FeatureSentiment.titleBrownSentiment}
                    </span>
                    {FeatureSentiment.titleBrownSentiment}
                  </span>
                </h2>
                
                <p className="text-base lg:text-lg leading-relaxed transition-all duration-300 group-hover:text-gray-100">
                  {FeatureSentiment.descriptionSentiment}
                </p>

                <Link href="#" passHref>
                  <button
                    className="text-sm lg:text-base w-fit px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-[#4A6B48] via-[#6B946A] to-[#8C8A62] flex items-center font-semibold text-white shadow-lg transition-all duration-500 ease-in-out relative overflow-hidden group/btn hover:from-[#997452] hover:via-[#B8956A] hover:to-[#997452] hover:shadow-2xl hover:shadow-[#997452]/30 hover:scale-105 transform hover:-translate-y-1 active:scale-95"
                    aria-label={FeatureSentiment.buttonText}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700 ease-in-out"></span>
                    <span className="relative z-10">{FeatureSentiment.buttonText}</span>
                  </button>
                </Link>
              </div>

              {/* Image Section */}
<<<<<<< HEAD
              <div className="w-full md:w-[45%] xl:w-fit relative group/image">
                <div className="absolute inset-0 bg-gradient-to-br from-[#997452]/10 to-[#6B946A]/10 rounded-3xl blur-2xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"></div>
                <div className="relative z-10 transform transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#997452]/20 via-transparent to-[#6B946A]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Image
                    src={FeatureSentiment.img}
                    width={500}
                    height={600}
                    alt={`${FeatureSentiment.titleWhiteSentiment} ${FeatureSentiment.titleBrownSentiment} feature image`}
                    className="object-contain relative z-10 transition-all duration-700 ease-out group-hover:drop-shadow-2xl filter group-hover:brightness-110"
                  />
                </div>
=======
              <div className="w-full md:w-[45%] xl:w-fit relative top-10">
                <Image
                  src={FeatureSentiment.img}
                  width={500}
                  height={600}
                  alt={`${FeatureSentiment.titleWhiteSentiment} ${FeatureSentiment.titleBrownSentiment} feature image`}
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
                />
>>>>>>> 57b8d74 (Add Sentiment Insights section with contact)
              </div>
            </section>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 2s; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite 4s; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-expand { animation: expand 1s ease-out forwards 0.5s; }
        .text-shadow-glow { text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
      `}</style>
    </PageWrapper>
  );
};

export default FeaturesSentiment;