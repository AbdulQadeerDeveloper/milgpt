/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { HomeFaqsData } from "@/constants/Data";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

const Accordion = ({ faqs }: { faqs?: AccordProps[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center text-white w-full mx-auto ">
      {HomeFaqsData.map((item, index) => (
        <div
          key={index}
          className="bg-background rounded-lg mb-4 w-full shadow-lg"
          onClick={() => toggleAccordion(index)}
        >
          {/* FAQ Question */}
          <div className="flex justify-between  items-center p-4 cursor-pointer  hover:shadow-md transition-shadow duration-300">
            <h3 className="text-sm md:text-lg font-semibold">
              {item.question}
            </h3>
            <span className="text-xl">
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </div>

          {/* FAQ Answer */}
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === index ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="mx-4 pb-4 text-white border-t py-3">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
