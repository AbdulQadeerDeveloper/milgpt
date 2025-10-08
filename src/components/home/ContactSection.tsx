"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export default function ContactSection() {
  const cards = [
    {
      title: (
        <>
          MILGPT: AI-Powered Legal <br /> Guidance
        </>
      ),
      text: "With MILGPT, I was able to understand my case in simple terms and explore all possible legal outcomes before meeting my lawyer. It saved me both time and money.",
    },
    {
      title: (
        <>
          Secure & Reliable <br /> Business Partner
        </>
      ),
      text: "As a startup founder, I constantly face legal complexities. MILGPT provided instant clarity, helping me draft agreements and contracts with confidence.",
    },
    {
      title: (
        <>
          Smart Consultations <br /> Backed by AI
        </>
      ),
      text: "The hybrid model of expert lawyers + AI-driven insights gave me peace of mind. I knew I wasn’t missing any important legal details.",
    },
    {
      title: (
        <>
          Future of Legal <br /> Technology
        </>
      ),
      text: "MILGPT is more than just a tool—it’s a trusted advisor. Its AI-driven predictions and strategies are shaping the future of legal consultations.",
    },
  ];

  return (
    <section className="relative  py-35 overflow-hidden">
      {/* Decorative Background Images */}
      <div className="absolute top-0 left-0 z-0 opacity-30">
        <Image
          src="/home/GreenStain.svg"
          alt="decor top left"
          width={140}
          height={150}
          priority
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0 opacity-30">
        <Image
          src="/home/BrownStain.svg"
          alt="decor bottom right"
          width={160}
          height={180}
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#6B946A] to-[#997452] text-white rounded-full text-sm font-medium mb-6 shadow-md">
            Trusted by Businesses & Professionals
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Clients Choose <span className="text-[#6B946A]">MILGPT</span>
          </h2>
          <p className="text-gray-300 text-md max-w-2xl mx-auto leading-relaxed">
            From entrepreneurs to enterprises, MILGPT empowers users with{" "}
            <span className="text-[#997452] font-semibold">
              AI-driven insights
            </span>{" "}
            and human expertise. See how it transforms the way people approach
            legal and business challenges.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-arrow",
              prevEl: ".prev-arrow",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
            }}
            className="pb-12"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="flex">
                <div className="relative flex flex-col bg-[#111111] rounded-[24px] rounded-tr-[50px] border border-[#222] border-b-[6px] border-b-[#6B946A] w-full min-h-[320px] p-8 flex-1 shadow-lg">
                  {/* Decorative Corner */}
                  <div
                    className="absolute top-0 right-0 
                      w-[70px] h-[55px] md:w-[100px] md:h-[81px] 
                      bg-[#6B946A] 
                      rounded-tr-[40px] md:rounded-tr-[50px] 
                      rounded-bl-[40px] md:rounded-bl-[50px] 
                      shadow-md"
                  />

                  <h3 className="text-lg md:text-xl font-semibold text-white text-center mt-6 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base text-justify mt-4 leading-7">
                    {card.text}
                  </p>

                  {/* Button always bottom */}
                  <div className="mt-auto flex pt-5 justify-center">
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6B946A] to-[#997452] text-white font-semibold hover:opacity-90 transition shadow-md">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop/Tablet Arrows */}
          <button
            className="prev-arrow hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 
              w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full 
              bg-gradient-to-b from-[#6B946A] to-[#997452] text-white shadow-lg 
              hover:opacity-90 transition z-20"
          >
            <HiArrowLeft size={20} className="md:w-6" />
          </button>
          <button
            className="next-arrow hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 
              w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full 
              bg-gradient-to-b from-[#6B946A] to-[#997452] text-white shadow-lg 
              hover:opacity-90 transition z-20"
          >
            <HiArrowRight size={20} className="md:w-6" />
          </button>

          {/* Mobile Arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              className="prev-arrow w-10 h-10 flex items-center justify-center rounded-full 
                bg-gradient-to-b from-[#6B946A] to-[#997452] text-white shadow-md 
                hover:opacity-90 transition"
            >
              <HiArrowLeft size={18} />
            </button>
            <button
              className="next-arrow w-10 h-10 flex items-center justify-center rounded-full 
                bg-gradient-to-b from-[#6B946A] to-[#997452] text-white shadow-md 
                hover:opacity-90 transition"
            >
              <HiArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
