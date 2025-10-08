"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Grid from "@/components/home/Grid";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const AIToolsPage = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto bg-background text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Tools</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Discover the latest AI-powered tools that boost creativity,
            efficiency, and productivity.
          </p>
        </section>

        {/* Section 1: AI Writing Assistants */}
        <section className="py-16 border-t border-white/20">
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">AI Writing Assistants</h2>
              <p className="text-gray-300 mb-6">
                Create blogs, emails, and professional content faster with
                AI-powered writing tools like ChatGPT and Jasper.
              </p>
              <Link
                href="/milgpt"
                className="px-6 py-3 bg-[#4A6B48] rounded-lg font-semibold hover:bg-[#39553a] transition-colors"
              >
                Explore Tools
              </Link>
            </div>
            <Image
              src="/home/processing-ai.png"
              alt="AI Writing Tools"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 2: AI Design & Image Generation */}
        <section className="py-16 border-t border-white/20">
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/home/collection-charts.png"
              alt="AI Design Tools"
              width={500}
              height={400}
              className="rounded-lg shadow-lg order-1 md:order-2"
            />
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">
                AI Design & Image Generation
              </h2>
              <p className="text-gray-300 mb-6">
                Generate stunning visuals, graphics, and illustrations using
                AI-powered tools like MidJourney and DALL·E.
              </p>
              <Link
                href="/milgpt"
                className="px-6 py-3 bg-[#4A6B48] rounded-lg font-semibold hover:bg-[#39553a] transition-colors"
              >
                Explore Tools
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: AI Video Creation */}
        <section className="py-16 border-t border-white/20">
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">AI Video Creation</h2>
              <p className="text-gray-300 mb-6">
                Turn ideas into professional videos with AI tools like
                Synthesia, Pictory, and Runway.
              </p>
              <Link
                href="/milgpt"
                className="px-6 py-3 bg-[#4A6B48] rounded-lg font-semibold hover:bg-[#39553a] transition-colors"
              >
                Explore Tools
              </Link>
            </div>
            <Image
              src="/home/dashboard-charts.png"
              alt="AI Video Tools"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 4: AI Productivity Tools */}
        <section className="py-16 border-t border-white/20">
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/home/charts_charts-removebg-preview.png"
              alt="AI Productivity Tools"
              width={500}
              height={400}
              className="rounded-lg shadow-lg order-1 md:order-2"
            />
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">AI Productivity Tools</h2>
              <p className="text-gray-300 mb-6">
                Automate tasks, organize work, and improve efficiency with
                AI-powered productivity apps.
              </p>
              <Link
                href="/milgpt"
                className="px-6 py-3 bg-[#4A6B48] rounded-lg font-semibold hover:bg-[#39553a] transition-colors"
              >
                Explore Tools
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: AI Chatbots & Assistants */}
        <section className="py-16 border-t border-white/20">
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                AI Chatbots & Virtual Assistants
              </h2>
              <p className="text-gray-300 mb-6">
                Provide smarter customer support and personal assistance with AI
                chatbots like Intercom and Drift.
              </p>
              <Link
                href="/milgpt"
                className="px-6 py-3 bg-[#4A6B48] rounded-lg font-semibold hover:bg-[#39553a] transition-colors"
              >
                Explore Tools
              </Link>
            </div>
            <Image
              src="/home/AI-Coding.png"
              alt="AI Chatbots"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 6: AI Data & Analytics */}
        <section className="py-16 border-t border-white/20">
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/home/imgi_320_How-AI-Writing-Assistants-Boost-Content-Creation-in-2024-scaled.jpg"
              alt="AI Analytics Tools"
              width={500}
              height={400}
              className="rounded-lg shadow-lg order-1 md:order-2"
            />
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">AI Data & Analytics</h2>
              <p className="text-gray-300 mb-6">
                Analyze data faster and gain smarter insights with AI-powered
                analytics platforms.
              </p>
              <Link
                href="/milgpt"
                className="px-6 py-3 bg-[#4A6B48] rounded-lg font-semibold hover:bg-[#39553a] transition-colors"
              >
                Explore Tools
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Grid />
      <Footer />
    </>
  );
};

export default AIToolsPage;
