"use client";
import React from "react";
import { CalendarDays, Brain, Handshake } from "lucide-react";

const ScheduleConsultationSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-4 sm:px-6 lg:px-16"
      style={{ backgroundImage: "url('/home/banner-background.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#6B946A] to-[#997452] text-white rounded-full text-sm font-medium mb-5 shadow-md">
            MILGPT Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Schedule Your Free{" "}
            <span className="text-[#6B946A]">AI-Powered</span> Consultation
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Unlock the future of legal and business strategy. Book a secure
            session, connect with AI + human experts, and get a personalized
            roadmap tailored for your success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center relative">
            <div className="relative mb-6">
              <div className="w-28 h-28 mx-auto bg-gradient-to-br from-[#6B946A] to-[#997452] rounded-full flex items-center justify-center shadow-lg">
                <CalendarDays className="w-12 h-12 text-white" />
                <div className="absolute -top-2 -right-2 w-9 h-9 bg-[#997452] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  01
                </div>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 left-[65%] w-24 border-t-2 border-dotted border-[#997452] transform -translate-y-1/2"></div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Choose Your Time
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Select your preferred date and time. MILGPT ensures secure and
              hassle-free scheduling.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="relative mb-6">
              <div className="w-28 h-28 mx-auto bg-gradient-to-br from-[#6B946A] to-[#997452] rounded-full flex items-center justify-center shadow-lg">
                <Brain className="w-12 h-12 text-white" />
                <div className="absolute -top-2 -right-2 w-9 h-9 bg-[#997452] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  02
                </div>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 left-[65%] w-24 border-t-2 border-dotted border-[#997452] transform -translate-y-1/2"></div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              AI + Expert Session
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Collaborate with a legal expert enhanced by MILGPT AI for accurate
              and intelligent case insights.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative">
            <div className="relative mb-6">
              <div className="w-28 h-28 mx-auto bg-gradient-to-br from-[#6B946A] to-[#997452] rounded-full flex items-center justify-center shadow-lg">
                <Handshake className="w-12 h-12 text-white" />
                <div className="absolute -top-2 -right-2 w-9 h-9 bg-[#997452] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  03
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Personalized Strategy
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Receive a tailored legal strategy crafted with MILGPT intelligence
              for long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleConsultationSection;
