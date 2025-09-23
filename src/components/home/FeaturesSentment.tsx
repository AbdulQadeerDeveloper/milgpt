"use client";
import React, { useState, useEffect } from "react";
import { Shield, Eye, Zap, Brain, Target, Radar } from "lucide-react";

interface MilitaryFeature {
  id: number;
  icon: React.ReactNode;
  headingTag: string;
  titleWhite: string;
  titleAccent: string;
  description: string;
  buttonText: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const FeaturesSentiment: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const militaryFeatures: MilitaryFeature[] = [
    {
      id: 1,
      icon: <Radar className="w-16 h-16" />,
      headingTag: "Real-Time Intelligence",
      titleWhite: "Advanced",
      titleAccent: "Surveillance Systems",
      description: "Deploy autonomous surveillance networks with AI-powered threat detection. Monitor vast territories in real-time with predictive analytics and automated response protocols for maximum operational awareness.",
      buttonText: "Engage Systems",
      stats: [
        { label: "Detection Range", value: "50km+" },
        { label: "Response Time", value: "<0.3s" },
        { label: "Accuracy Rate", value: "99.7%" }
      ]
    },
    {
      id: 2,
      icon: <Brain className="w-16 h-16" />,
      headingTag: "Strategic Operations",
      titleWhite: "Tactical",
      titleAccent: "Decision Engine",
      description: "Leverage machine learning algorithms for strategic planning and battlefield analysis. Process thousands of variables instantly to provide commanders with optimal tactical recommendations and risk assessments.",
      buttonText: "Deploy Intelligence",
      stats: [
        { label: "Data Processing", value: "1TB/s" },
        { label: "Scenarios Analyzed", value: "10,000+" },
        { label: "Strategic Accuracy", value: "97.2%" }
      ]
    },
    {
      id: 3,
      icon: <Target className="w-16 h-16" />,
      headingTag: "Precision Warfare",
      titleWhite: "Automated",
      titleAccent: "Target Systems",
      description: "Advanced targeting solutions with predictive trajectory calculations and environmental factor analysis. Ensure mission success with AI-assisted precision strikes and minimal collateral impact.",
      buttonText: "Lock & Load",
      stats: [
        { label: "Precision Rating", value: "99.9%" },
        { label: "Target Lock Time", value: "0.8s" },
        { label: "Success Rate", value: "98.5%" }
      ]
    },
    {
      id: 4,
      icon: <Shield className="w-16 h-16" />,
      headingTag: "Cyber Defense",
      titleWhite: "Quantum",
      titleAccent: "Security Protocols",
      description: "Deploy next-generation cybersecurity measures with quantum encryption and AI-driven threat neutralization. Protect critical infrastructure from advanced persistent threats and state-level cyber attacks.",
      buttonText: "Fortify Networks",
      stats: [
        { label: "Threat Blocking", value: "99.8%" },
        { label: "Encryption Level", value: "2048-bit" },
        { label: "Response Speed", value: "<100ms" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-amber-500/10"></div>
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-emerald-400/20 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-600/20 to-amber-600/20 rounded-full border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Classified • Top Secret Clearance Required
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 bg-gradient-to-r from-white via-emerald-200 to-amber-200 bg-clip-text text-transparent">
            Military AI <span className="text-amber-400">Sentiment Analysis</span>
          </h1>

          {/* Status Indicators */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">SYSTEMS ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400 text-sm font-semibold">THREAT LEVEL: ELEVATED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-semibold">AI READY</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-32">
          {militaryFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveFeature(feature.id)}
            >
              <div className="relative">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-amber-500/5 rounded-3xl blur-xl"></div>
                
                {/* Main Content Container */}
                <div className={`relative backdrop-blur-sm bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 md:p-12 hover:border-emerald-500/50 transition-all duration-500 ${
                  activeFeature === feature.id ? 'shadow-2xl shadow-emerald-500/20' : ''
                }`}>
                  <div className={`grid grid-cols-1 ${feature.id % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-12 items-center`}>
                    
                    {/* Content Section */}
                    <div className={`space-y-6 ${feature.id % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Tag */}
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-slate-600/20 rounded-full border border-emerald-500/30">
                        <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                          {feature.headingTag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl font-black uppercase">
                        <span className="text-white">{feature.titleWhite}</span>{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                          {feature.titleAccent}
                        </span>
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 py-6">
                        {feature.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl font-bold text-white uppercase tracking-wider transition-all duration-300 hover:from-emerald-500 hover:to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105">
                        <span className="relative z-10">{feature.buttonText}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>

                    {/* Icon/Visual Section */}
                    <div className={`flex justify-center ${feature.id % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative">
                        {/* Animated Rings */}
                        <div className="absolute inset-0 animate-spin-slow">
                          <div className="w-80 h-80 border-2 border-emerald-500/20 rounded-full"></div>
                        </div>
                        <div className="absolute inset-4 animate-spin-reverse">
                          <div className="w-72 h-72 border-2 border-amber-500/20 rounded-full border-dashed"></div>
                        </div>
                        
                        {/* Main Icon Container */}
                        <div className={`relative w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border border-slate-600/50 flex items-center justify-center transition-all duration-500 hover:scale-105 ${
                          activeFeature === feature.id ? 'shadow-2xl shadow-emerald-500/30' : ''
                        }`}>
                          <div className="text-emerald-400 transform transition-transform duration-500 hover:scale-110">
                            {feature.icon}
                          </div>
                          
                          {/* Pulsing Dot */}
                          <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400/20 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-32 space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Deploy?
          </h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Contact our military liaison for classified briefings and system integration protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-bold text-white uppercase tracking-wider hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
              Request Clearance
            </button>
            <button className="px-8 py-4 border-2 border-emerald-500 rounded-xl font-bold text-emerald-400 uppercase tracking-wider hover:bg-emerald-500 hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturesSentiment;