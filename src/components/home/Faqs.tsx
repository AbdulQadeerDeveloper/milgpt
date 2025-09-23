"use client";

import PageWrapper from "../PageWrapper";
import Accordion from "./Accordion";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

const Faqs = ({ faqs }: { faqs?: AccordProps[] }) => {
  return (
    <PageWrapper background="bg-black">
      <div
        id="faqs"
        className="w-full px-0 lg:px-10 2xl:px-16 flex flex-col md:flex-row items-start justify-center gap-6 lg:gap-16"
      >
        <div className="w-full md:w-1/2 xl:w-[45%] space-y-6">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl text-white uppercase font-bold">
            Have questions? We have answers!
          </h2>
          <p className="text-base lg:text-base text-[#fff]">
            Want to know more? You can email us anytime at{" "}
            <span className="text-[#997452]">web.support@milgpt</span>
          </p>

          <button className="relative overflow-hidden px-8 py-3 text-white bg-[#4A6B48] font-semibold rounded-xl focus:outline-none focus:ring-4 hover:from-[#997452] hover:to-[#997452]  focus:ring-blue-300 text-sm lg:text-base  hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get in Touch
          </button>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Accordion faqs={faqs} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Faqs;
