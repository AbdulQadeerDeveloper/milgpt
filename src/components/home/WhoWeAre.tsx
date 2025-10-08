// components/WhoWeAre.tsx
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section className="relative w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Decorative Images */}
      <Image
        src="/home/GreenStain.svg"
        alt="decoration"
        width={110}
        height={130}
        className="absolute -top-2 -left-6 hidden md:block"
      />
      <Image
        src="/home/GreenStain.svg"
        alt="decoration"
        width={110}
        height={130}
        className="absolute -top-2 -right-6 hidden md:block"
      />

      {/* Left Image Section */}
      <div className="rounded-xl shadow-xl overflow-hidden bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-[2px]">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/home/contact-banner.jpg"
            alt="Team discussion"
            width={600}
            height={650}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-white leading-tight">
          Who <span className="text-[#997452]">We Are</span>
        </h2>

        <p className="text-gray-200 mb-8 text-base md:text-lg leading-relaxed">
          MilGPT is designed to boost your productivity with powerful AI-driven
          solutions. Whether it is generating content, creating visuals, or
          enhancing customer satisfaction
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#6B946A] mt-1" />
            <span className="text-white text-sm md:text-sm">
              Create engaging AI content in seconds
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#6B946A] mt-1" />
            <span className="text-white text-sm md:text-sm">
              Generate keyword-rich, plagiarism-free results
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#6B946A] mt-1" />
            <span className="text-white text-sm md:text-sm">
              Multilingual support for 25+ languages
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#6B946A] mt-1" />
            <span className="text-white text-sm md:text-sm">
              Scale your workflow with smart AI automation
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
