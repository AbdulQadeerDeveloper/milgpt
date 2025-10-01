"use client";

import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Requirement Analysis",
    desc: "We start by understanding your goals, needs, and expectations to create a clear roadmap.",
    icon: "/home/Icon-1.png",
    bg: "bg-[#4A6B48DB]",
  },
  {
    id: "02",
    title: "Planning & Estimation",
    desc: "Based on the requirements, we design a tailored plan with transparent cost and time estimates.",
    icon: "/home/Icon-2.png",
    bg: "bg-[#DCD194E0]",
  },
  {
    id: "03",
    title: "Execution & Development",
    desc: "Our experts implement the plan with precision while keeping you updated at every stage.",
    icon: "/home/Icon-3.png",
    bg: "bg-[#997452C4]",
  },
  {
    id: "04",
    title: "Testing & Delivery",
    desc: "We rigorously test for performance and quality before seamless final delivery.",
    icon: "/home/Vector-4.png",
    bg: "bg-[#3A3E4BC2]",
  },
];

export default function WorkingProcess() {
  return (
    <section
      className="relative bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: "url('/home/banner-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-6 text-center">
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

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          OUR WORKING PROCESS
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-12">
          We follow a transparent, step-by-step process to ensure clarity,
          efficiency, and high-quality results for every project.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${step.bg} p-8 rounded-md shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2`}
            >
              <span className="text-sm font-medium text-white/80 mb-3">
                {step.id}
              </span>
              <Image
                src={step.icon}
                alt={step.title}
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-100">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
