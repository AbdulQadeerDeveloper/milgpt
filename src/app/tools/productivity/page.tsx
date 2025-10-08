"use client";

import Image from "next/image";
import { CheckCircle, Zap, Shield, BarChart } from "lucide-react";
import Grid from "@/components/home/Grid";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function ProductivityPage() {
  return (
    <>
      <Navbar />
      <main className="w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto  text-white">
        {/* SECTION 1: Hero */}
        <section className="relative w-full py-28 text-center overflow-hidden">
          {/* Background stains */}
          <div className="absolute top-0 left-0 opacity-20">
            <Image
              src="/home/GreenStain.svg"
              alt="decor"
              width={200}
              height={200}
            />
          </div>
          <div className="absolute bottom-0 right-0 opacity-20">
            <Image
              src="/home/BrownStain.svg"
              alt="decor"
              width={200}
              height={200}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Supercharge Your{" "}
              <span className="text-[#6B946A]">Productivity</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover AI-powered productivity tools designed to streamline your
              workflow, automate tasks, and unlock new levels of efficiency.
            </p>
            <div className="mt-8">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6B946A] to-[#997452] text-white font-semibold hover:opacity-90 transition shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: Features Grid */}
        <section className="relative py-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#6B946A] to-[#997452] rounded-full text-sm font-medium mb-6 shadow-md">
              Tools That Save Time
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Key <span className="text-[#6B946A]">Features</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              All-in-one productivity toolkit with automation, collaboration,
              and real-time insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Automation",
                desc: "Automate repetitive tasks and save hours every week.",
              },
              {
                icon: Shield,
                title: "Security",
                desc: "Enterprise-grade encryption for your files and workflows.",
              },
              {
                icon: BarChart,
                title: "Analytics",
                desc: "Track performance with AI-powered insights and dashboards.",
              },
              {
                icon: CheckCircle,
                title: "Collaboration",
                desc: "Work seamlessly with your team on one platform.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111] p-8 rounded-[24px] rounded-tr-[50px] border border-[#222] border-b-[6px] border-b-[#6B946A] shadow-lg hover:shadow-[0_0_20px_#6B946A55] transition"
              >
                <item.icon className="w-12 h-12 mb-6 text-[#6B946A]" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Use Cases */}
        <section className="relative py-24 bg-[#111]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#6B946A] to-[#997452] rounded-full text-sm font-medium mb-6 shadow-md">
                Real World Applications
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Use <span className="text-[#997452]">Cases</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Productivity tools designed for businesses, startups, and
                professionals across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Startups",
                  desc: "Quickly draft agreements, automate tasks, and stay ahead of deadlines.",
                },
                {
                  title: "Enterprises",
                  desc: "Streamline workflows, reduce legal bottlenecks, and enhance collaboration.",
                },
                {
                  title: "Freelancers",
                  desc: "Simplify contracts, secure your documents, and focus on client delivery.",
                },
              ].map((use, idx) => (
                <div
                  key={idx}
                  className="bg-black p-8 rounded-[24px] border border-[#222] border-b-[6px] border-b-[#997452] shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3">{use.title}</h3>
                  <p className="text-gray-400">{use.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CTA */}
        <section className="relative py-24 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-[#6B946A]">Boost</span> Your
              Productivity?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Start using our AI-powered productivity tools today and transform
              the way you work.
            </p>
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#6B946A] to-[#997452] text-white font-semibold hover:opacity-90 transition shadow-md">
              Try Now
            </button>
          </div>
        </section>
      </main>
      <Grid />
      <Footer />
    </>
  );
}
