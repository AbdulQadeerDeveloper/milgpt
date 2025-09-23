"use client";
import React, { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { Shield, Zap, Target, Eye, Lock, Radar } from "lucide-react";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeStats, setActiveStats] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const militaryStats = [
    { label: "Active Operations", value: "127", unit: "" },
    { label: "Threat Detection", value: "99.7", unit: "%" },
    { label: "Response Time", value: "0.3", unit: "s" },
    { label: "Systems Online", value: "24", unit: "/7" }
  ];

  const floatingIcons = [Shield, Target, Eye, Lock, Radar, Zap];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveStats(prev => (prev + 1) % militaryStats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    setIsTyping(true);
    // Simulate processing
    setTimeout(() => setIsTyping(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Military Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/home/heroBG.svg')" }}
      />
      
      {/* Military-themed Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-emerald-900/70 to-slate-800/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Radar Sweep */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
        <div className="w-full h-full border-2 border-emerald-500/50 rounded-full relative animate-pulse">
          <div className="absolute inset-4 border border-emerald-400/30 rounded-full animate-spin" style={{ animationDuration: '4s' }}>
            <div className="w-full h-0.5 bg-emerald-400/60 absolute top-1/2 left-0 origin-left animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating Military Icons */}
      {floatingIcons.map((Icon, index) => (
        <div
          key={index}
          className="absolute opacity-20 text-emerald-400 animate-pulse"
          style={{
            left: `${15 + (index * 15)}%`,
            top: `${20 + (index % 2) * 60}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + index}s`
          }}
        >
          <Icon size={24} />
        </div>
      ))}

      {/* Side Blur Effects */}
      <div className="h-full w-32 bg-gradient-to-r from-slate-900 to-transparent absolute left-0 -z-10" />
      <div className="h-full w-32 bg-gradient-to-l from-slate-900 to-transparent absolute right-0 -z-10" />
      
      {/* Central Glow Effect */}
      <div className="w-[1200px] h-[800px] rounded-full bg-gradient-to-r from-emerald-600/20 via-slate-600/10 to-amber-600/20 blur-3xl absolute opacity-40" />

      {/* Status Bar */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              SYSTEMS OPERATIONAL
            </span>
          </div>
          <div className="text-emerald-400 text-sm font-mono">
            {new Date().toLocaleTimeString()} UTC
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm">SECURE</span>
          </div>
          <div className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full">
            <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">
              CLASSIFIED
            </span>
          </div>
        </div>
      </div>

      {/* Live Stats Ticker */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="bg-slate-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3">
          <div className="flex justify-between items-center">
            {militaryStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  activeStats === index ? 'scale-110 text-emerald-400' : 'text-slate-400'
                }`}
              >
                <div className="font-bold text-lg font-mono">
                  {stat.value}<span className="text-sm">{stat.unit}</span>
                </div>
                <div className="text-xs uppercase tracking-wider opacity-70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Classification Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-amber-600/20 border border-red-500/30 rounded-full backdrop-blur-sm">
            <Lock size={16} className="text-red-400" />
            <span className="text-red-400 font-bold text-sm uppercase tracking-widest">
              TOP SECRET • EYES ONLY
            </span>
            <Lock size={16} className="text-red-400" />
          </div>
        </div>

        {/* Main Title with Glitch Effect */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-4 leading-tight">
            <span className="inline-block bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent animate-pulse">
              Military AI
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Suite
            </span>
          </h1>
          
          {/* Subtitle with Typewriter Effect */}
          <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6 font-mono">
            <span className="inline-block animate-pulse">></span>
            <span className="ml-2">Strategize Smarter, Operate Faster</span>
            <span className="inline-block animate-pulse ml-1">_</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Deploy the power of <span className="text-emerald-400 font-semibold">Artificial Intelligence</span> for modern warfare,
          strategy, and decision-making. From <span className="text-amber-400 font-semibold">real-time surveillance</span> to
          tactical operations, our tools are designed for military excellence.
          <br />
          <span className="text-white font-bold">Gain the edge with precision, speed, and intelligence.</span>
        </p>

        {/* Enhanced Command Input */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/50 to-amber-500/50 rounded-2xl blur opacity-75" />
            
            {/* Main Input Container */}
            <div className="relative bg-slate-900/90 backdrop-blur-sm border-2 border-emerald-500/50 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-4">
                {/* Terminal Prompt */}
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
                  <span>MILAI$</span>
                  <div className="w-2 h-4 bg-emerald-400 animate-pulse" />
                </div>
                
                {/* Input Field */}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter mission parameters or tactical query..."
                  className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-slate-400 font-mono"
                />
                
                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={isTyping}
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl font-bold text-white uppercase tracking-wider transition-all duration-300 hover:from-emerald-500 hover:to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-3">
                    <BsStars className={`text-xl ${isTyping ? 'animate-spin' : ''}`} />
                    <span>{isTyping ? 'Processing...' : 'Execute'}</span>
                  </div>
                  
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/20 group-hover:to-amber-500/20 rounded-xl transition-all duration-300" />
                </button>
              </div>

              {/* Processing Indicator */}
              {isTyping && (
                <div className="mt-4 flex items-center gap-3 text-emerald-400 text-sm font-mono">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                  <span>Analyzing tactical parameters...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: Eye, label: "Surveillance", color: "emerald" },
            { icon: Target, label: "Targeting", color: "red" },
            { icon: Shield, label: "Defense", color: "blue" },
            { icon: Radar, label: "Intel", color: "amber" }
          ].map((action, index) => (
            <button
              key={index}
              className={`group flex items-center gap-2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 hover:border-${action.color}-500/50 hover:bg-${action.color}-500/10`}
            >
              <action.icon size={18} />
              <span className="font-semibold">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-2px); }
          20% { transform: translateX(2px); }
          30% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
        }
      `}</style>
    </div>
  );
};
export default Hero;