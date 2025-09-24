"use client";
import React, { useState } from "react";
import { HomepricingPlansData } from "@/constants/Data";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import PageWrapper from "../PageWrapper";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const router = useRouter();

  const send = () => {
    router.push("/auth/login");
  };

  return (
    <PageWrapper>
      <div className="w-full px-0 2xl:px-16 flex flex-col items-center justify-center gap-6 pt-0 md:pt-20 2xl:pt-48">
        <div className="w-full flex flex-col gap-4 lg:gap-6 items-center justify-center ">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl uppercase font-bold text-[#997452]">
            Choose your <span className="text-[#997452]">Plan</span>
          </h2>
          <p className="text-base lg:text-lg text-[#fff]">
            Simple pricing plans for everyone and every budget.
          </p>
        </div>

        <div className="flex justify-center items-center mb-6 gap-2 md:gap-8 mt-6 px-2 md:px-0 ">
          <p className="font-bold text-center text-sm sm:text-[15px] 2xl:text-base text-white">
            Monthly
          </p>
          <label className="group relative inline-flex cursor-pointer flex-col items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
            />
            <div
              className="relative h-12 w-24 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 shadow-[inset_0_2px_8px_rgba(255,255,255,0.4)] transition-all duration-500
      after:absolute after:left-1 after:top-1 after:h-10 after:w-10 after:rounded-full after:bg-gradient-to-br after:from-white after:to-gray-100 after:shadow-[2px_2px_8px_rgba(255,255,255,0.3)] after:transition-all after:duration-500 
      peer-checked:bg-gradient-to-r peer-checked:from-[#997452] peer-checked:to-[#4A6B48] 
      peer-checked:after:translate-x-12 peer-checked:after:from-[#f8f8f8] peer-checked:after:to-white 
      hover:after:scale-95 active:after:scale-90"
            >
              <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-transparent"></span>
              <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_15px_rgba(76,124,92,0.5)]"></span>
            </div>
          </label>
          <p className="font-bold text-center text-sm sm:text-[15px] 2xl:text-base text-white">
            Yearly
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center flex-wrap gap-6">
          {HomepricingPlansData.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col space-y-4 lg:space-y-6 justify-between rounded-xl text-white p-4 md:p-6 lg:p-8 ${
                plan.isFeatured
                  ? "bg-black/30 border border-[#4A6B48]"
                  : "bg-black border-none"
              }`}
            >
              <div className="space-y-4 lg:space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-left uppercase">
                    {plan.title}
                  </h3>
                  <p className="text-sm lg:text-sm text-left ">
                    {plan.description}
                  </p>
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-left">
                  {isYearly ? plan.priceYearlyUSD : plan.priceMonthlyUSD}
                  <span>
                    {plan.id !== 3 && (isYearly ? " /year" : " /mon")}
                  </span>
                </p>

                <ul className="mt-6 mb-8 space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-left">
                    Inclusions
                  </h3>
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="relative flex items-center justify-start"
                    >
                      <FaCheckCircle className="text-[#8C8A62] absolute  w-5 h-5 left-0" />
                      <span className="text-sm lg:text-sm ml-7">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={send}
                className="relative cursor-pointer text-white bg-gradient-to-r from-[#4A6B48] to-[#8C8A62] overflow-hidden px-8 py-3 font-semibold text-sm lg:text-base rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300  hover:bg-[#997452] hover:shadow-lg hover:scale-105 transition-all duration-300 "
              >
                Get Started
                <span className="absolute  hover:bg-[#997452] hover:shadow-lg inset-0 bg-[#F7F7FF] opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Pricing;
