"use client";
import React from "react";
import { Share2, Mail, Search, Megaphone, FileText, Users } from "lucide-react";
import Grid from "@/components/home/Grid";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const sections = [
  {
    id: 1,
    title: "Social Media Management",
    description:
      "Plan, schedule, and manage your social media posts with AI-driven insights to maximize reach and engagement.",
    icon: Share2,
  },
  {
    id: 2,
    title: "Email Marketing Automation",
    description:
      "Automate personalized email campaigns, track open rates, and boost conversions with advanced analytics.",
    icon: Mail,
  },
  {
    id: 3,
    title: "SEO & Keyword Research",
    description:
      "Find the right keywords, optimize your content, and rank higher on search engines using AI-powered tools.",
    icon: Search,
  },
  {
    id: 4,
    title: "Ad Campaign Optimization",
    description:
      "Run smarter ad campaigns on Google, Facebook, and LinkedIn with real-time AI recommendations.",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "Content Creation & Analytics",
    description:
      "Generate blogs, ad copies, and visuals tailored to your audience, and track their performance effectively.",
    icon: FileText,
  },
  {
    id: 6,
    title: "Customer Engagement & CRM",
    description:
      "Build stronger customer relationships with AI-driven CRM tools, chatbots, and engagement strategies.",
    icon: Users,
  },
];

const MarketingToolsPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto  text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#6B946A] to-[#997452] bg-clip-text text-transparent">
            Marketing Tools
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Boost your marketing game with AI-powered solutions for social
            media, ads, content, CRM, and more.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-[#111] border border-[#222] rounded-2xl shadow-lg p-8 hover:shadow-[#6B946A]/30 hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <section.icon className="w-16 h-16 text-[#6B946A]" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6B946A] to-[#997452] bg-clip-text text-transparent text-center">
                {section.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-center">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Grid />
      <Footer />
    </>
  );
};

export default MarketingToolsPage;
