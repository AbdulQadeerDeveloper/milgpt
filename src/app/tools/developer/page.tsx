"use client";
import React from "react";
import {
  Code2,
  CloudCog,
  GitBranch,
  Rocket,
  ShieldCheck,
  FileText,
} from "lucide-react";
import Grid from "@/components/home/Grid";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

const sections = [
  {
    id: 1,
    title: "Code Generation & AI Assistance",
    description:
      "Speed up your workflow with AI-powered code generation, debugging, and real-time development assistance.",
    image: "/images/code-gen.svg",
    icon: Code2,
  },
  {
    id: 2,
    title: "API Testing & Integration",
    description:
      "Easily test, document, and integrate APIs with automated tools designed for developers and teams.",
    image: "/images/api.svg",
    icon: CloudCog,
  },
  {
    id: 3,
    title: "Version Control & Collaboration",
    description:
      "Manage projects with Git-based version control, branch management, and collaborative workflows.",
    image: "/images/git.svg",
    icon: GitBranch,
  },
  {
    id: 4,
    title: "DevOps & Deployment",
    description:
      "Streamline CI/CD pipelines, automate deployments, and monitor system performance with smart DevOps tools.",
    image: "/images/devops.svg",
    icon: Rocket,
  },
  {
    id: 5,
    title: "Security & Testing",
    description:
      "Run automated code scans, penetration testing, and vulnerability checks to secure applications.",
    image: "/images/security.svg",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Documentation & Productivity",
    description:
      "Generate clean documentation, manage tasks, and track progress with AI-backed developer productivity tools.",
    image: "/images/docs.svg",
    icon: FileText,
  },
];

const DeveloperToolsPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto  text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#6B946A] to-[#997452] bg-clip-text text-transparent">
            Developer Tools
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Build, test, and deploy smarter with AI-driven tools tailored for
            developers, engineers, and software teams.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-[#111] border border-[#222] rounded-2xl shadow-lg p-8 hover:shadow-[#6B946A]/30 hover:scale-105 transition-transform duration-300"
            >
              {/* Image + Icon */}
              <div className="flex flex-col items-center mb-6 space-y-3">
                <section.icon className="w-10 h-10 text-[#6B946A]" />
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

export default DeveloperToolsPage;
