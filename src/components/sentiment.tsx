"use client";

import { useState } from "react";
import { FaClock, FaChartBar, FaExclamationTriangle } from "react-icons/fa";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{
    label: string;
    message: string;
  } | null>(null);

  const handleAnalyze = () => {
    if (!text.trim()) return;

    let label = "Neutral";
    const lower = text.toLowerCase();
    if (
      lower.includes("good") ||
      lower.includes("love") ||
      lower.includes("excellent")
    ) {
      label = "Positive";
    } else if (
      lower.includes("bad") ||
      lower.includes("hate") ||
      lower.includes("worst")
    ) {
      label = "Negative";
    }

    setResult({ label, message: text });
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-[#0d0e10] via-[#1a1b1f] to-[#0d0e10] 
      text-white flex flex-col items-center justify-center px-4 py-12 border-t border-[#4A6B48]"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center tracking-wide">
        Sentiment Analysis
      </h1>
      <p className="text-[#A0A0A0] text-center max-w-2xl mb-10">
        Analyze your text instantly and see whether it’s Positive, Negative, or
        Neutral.
      </p>

      {/* Input + Result */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-6">
        {/* Input Section */}
        <div className="flex-1 w-full bg-[#1a1b1f] p-6 rounded-xl shadow-lg border border-[#4a6b48]">
          <input
            type="text"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#0d0e10] border border-[#4a6b48] 
            text-[#FFFFFF] placeholder-[#5c5d61] focus:outline-none focus:ring-2 focus:ring-[#5f7550]"
          />

          <button
            onClick={handleAnalyze}
            className="mt-4 text-sm lg:text-base w-full px-6 py-3 rounded-lg cursor-pointer 
            bg-gradient-to-r from-[#4A6B48] to-[#8C8A62] 
            text-white font-semibold shadow-md 
            transition-all duration-300 ease-in-out 
            hover:from-[#997452] hover:to-[#997452] hover:shadow-xl"
          >
            Analyze Sentiment
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div
            className={`flex-1 rounded-xl p-6 text-center shadow-lg border border-[#4a6b48] ${
              result.label === "Neutral"
                ? "bg-[#4a6b48] text-white"
                : "bg-[#1a1b1f]"
            }`}
          >
            <p
              className={`text-2xl font-bold mb-2 ${
                result.label === "Positive"
                  ? "text-green-400"
                  : result.label === "Negative"
                  ? "text-[#997452]"
                  : "text-white"
              }`}
            >
              {result.label}
            </p>
            <p className="text-[#F0F0F0]">{result.message}</p>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-center">
        {/* Card 1 */}
        <div
          className="group bg-[#1a1b1f] rounded-xl p-6 border border-[#4a6b48] shadow-md 
          transition-all duration-500 ease-out 
          hover:bg-gradient-to-br hover:from-[#4A6B48] hover:to-[#8C8A62] 
          hover:shadow-2xl hover:border-transparent hover:-translate-y-2"
        >
          <FaClock
            className="text-4xl mb-3 mx-auto text-[#997452] transition-all duration-500 
            group-hover:scale-125 group-hover:rotate-6 group-hover:text-white 
            group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          />
          <h3 className="font-semibold mb-2 text-white transition-colors duration-500 group-hover:text-white">
            Fast Analysis
          </h3>
          <p className="text-[#A0A0A0] text-sm transition-colors duration-500 group-hover:text-white">
            Get instant sentiment results for your text.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="group bg-[#1a1b1f] rounded-xl p-6 border border-[#4a6b48] shadow-md 
          transition-all duration-500 ease-out 
          hover:bg-gradient-to-br hover:from-[#4A6B48] hover:to-[#8C8A62] 
          hover:shadow-2xl hover:border-transparent hover:-translate-y-2"
        >
          <FaChartBar
            className="text-4xl mb-3 mx-auto text-[#4a6b48] transition-all duration-500 
            group-hover:scale-125 group-hover:rotate-6 group-hover:text-white 
            group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          />
          <h3 className="font-semibold mb-2 text-white transition-colors duration-500 group-hover:text-white">
            Insights
          </h3>
          <p className="text-[#A0A0A0] text-sm transition-colors duration-500 group-hover:text-white">
            Understand emotions behind the words.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="group bg-[#1a1b1f] rounded-xl p-6 border border-[#4a6b48] shadow-md 
          transition-all duration-500 ease-out 
          hover:bg-gradient-to-br hover:from-[#4A6B48] hover:to-[#8C8A62] 
          hover:shadow-2xl hover:border-transparent hover:-translate-y-2"
        >
          <FaExclamationTriangle
            className="text-4xl mb-3 mx-auto text-[#F44336] transition-all duration-500 
            group-hover:scale-125 group-hover:rotate-6 group-hover:text-white 
            group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          />
          <h3 className="font-semibold mb-2 text-white transition-colors duration-500 group-hover:text-white">
            Risk Detection
          </h3>
          <p className="text-[#A0A0A0] text-sm transition-colors duration-500 group-hover:text-white">
            Identify negative signals quickly.
          </p>
        </div>
      </div>
    </main>
  );
}
