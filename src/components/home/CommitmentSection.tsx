"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import PageWrapper from "../PageWrapper";

export default function CommitmentSection() {
  // ✅ Memoized static data (prevents ESLint dependency warnings)
  const data = useMemo(
    () => ({
      heading: "COMMITMENT TO COUNTRY DEDICATION TO DUTY",
      description:
        "At MailGPT, we are committed to serving with excellence — combining cutting-edge AI, security, and precision in every task we undertake.",
      features: [
        { icon: "/home/greenSymbol.png", text: "AI-Powered Inbox Management" },
        {
          icon: "/home/greenYellowSymbol.png",
          text: "Smart Email Categorization",
        },
        { icon: "/home/greenSymbol.png", text: "Advanced Spam Protection" },
        {
          icon: "/home/greenYellowSymbol.png",
          text: "Personalized Reply Suggestions",
        },
        { icon: "/home/greenSymbol.png", text: "Military-Grade Security" },
        {
          icon: "/home/greenYellowSymbol.png",
          text: "Seamless Multi-Device Sync",
        },
      ],
      progress: [
        { title: "SECURITY", value: 97, color: "#6B946A" },
        { title: "EFFICIENCY", value: 92, color: "#997452" },
        { title: "USER EXPERIENCE", value: 89, color: "#997452" },
      ],
      rightImage: "/home/right-image.png",
      decorImage: "/home/GreenStain.svg",
    }),
    []
  );

  // ✅ Animated progress bar values
  const [animatedValues, setAnimatedValues] = useState(
    data.progress.map(() => 0)
  );

  // ✅ Trigger animation once on mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedValues(data.progress.map((bar) => bar.value));
    }, 300);
    return () => clearTimeout(timeout);
  }, [data.progress]); // ESLint happy ✅

  return (
    <PageWrapper>
      <section className="relative py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Decorative Image */}
        <Image
          src={data.decorImage}
          alt="Decorative stain"
          width={120}
          height={120}
          className="absolute -top-10 -left-10 z-0 pointer-events-none"
        />

        {/* Left Section */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-extrabold leading-snug">
            {data.heading}
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-lg mt-2">
            {data.description}
          </p>

          {/* Features List */}
          <div className="grid grid-cols-2 gap-y-3 mt-6 text-sm md:text-sm">
            {data.features.map((item, idx) => (
              <p key={idx} className="flex items-center gap-2">
                <Image src={item.icon} alt={item.text} width={14} height={14} />
                {item.text}
              </p>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="mt-8 space-y-6 max-w-md">
            {data.progress.map((bar, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-[12px] font-semibold">
                  <span>{bar.title}</span>
                  <span>{bar.value}%</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded mt-2 overflow-hidden">
                  <div
                    className="h-1.5 rounded transition-all duration-1000 ease-out"
                    style={{
                      width: `${animatedValues[idx]}%`,
                      backgroundColor: bar.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center md:justify-end">
          <Image
            src={data.rightImage}
            alt="Commitment visual"
            width={500}
            height={600}
            className="rounded-md relative z-10"
          />
        </div>
      </section>
    </PageWrapper>
  );
}
