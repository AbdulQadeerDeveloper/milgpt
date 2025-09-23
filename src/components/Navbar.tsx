"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Shield, Zap, Users, ExternalLink, Code, Star, Briefcase, Lock, Radar, Eye } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const links = [
    { 
      name: "Intel", 
      href: "/", 
      icon: Eye,
      hasDropdown: false,
      description: "Strategic Intelligence"
    },
    { 
      name: "Arsenal", 
      href: "/", 
      icon: Zap,
      hasDropdown: true,
      description: "AI Tools & Weapons"
    },
    { 
      name: "Command", 
      href: "/", 
      icon: Users,
      hasDropdown: true,
      description: "Community Operations"
    },
    { 
      name: "Alliance", 
      href: "/", 
      icon: ExternalLink,
      description: "Partner Network"
    },
    { 
      name: "Protocol", 
      href: "/", 
      icon: Code,
      description: "API Access"
    },
    { 
      name: "Operators", 
      href: "/", 
      icon: Star,
      description: "Elite Members"
    },
    { 
      name: "Recruitment", 
      href: "/", 
      icon: Briefcase,
      description: "Join Forces"
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden xl:flex w-full h-[90px] sticky top-0 z-30 relative overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/home/heroBG.svg')" }}
        />
        
        {/* Military-themed Overlays - Same as Hero */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-br from-slate-900/95 via-emerald-900/85 to-slate-800/95' 
            : 'bg-gradient-to-br from-slate-900/85 via-emerald-900/70 to-slate-800/90'
        }`} />
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
        
        {/* Bottom Border */}
        <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-lg shadow-emerald-500/20' 
            : 'bg-gradient-to-r from-transparent via-slate-700/50 to-transparent'
        }`} />

        <div className="container mx-auto flex justify-between items-center h-full px-4 text-white relative z-10">
          
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-3 transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            </div>
            <div>
              <h1 className="text-2xl font-black uppercase bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                MilGPT
              </h1>
              <div className="text-xs text-emerald-400 font-mono uppercase tracking-wider">
                AI Command
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8 font-medium">
            {links.map((link, index) => (
              <li 
                key={index} 
                className="group relative"
                onMouseEnter={() => setActiveDropdown(link.hasDropdown ? index : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 relative overflow-hidden"
                >
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:to-transparent transition-all duration-300" />
                  
                  <link.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative z-10 font-semibold">{link.name}</span>
                  
                  {link.hasDropdown && (
                    <MdOutlineKeyboardArrowDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  )}
                  
                  {/* Active Indicator */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-emerald-500/30 rounded-xl shadow-2xl shadow-emerald-500/20 p-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="text-emerald-400 font-semibold mb-2">{link.description}</div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-300 hover:text-white cursor-pointer p-2 rounded hover:bg-emerald-500/10 transition-colors">
                        Advanced Operations
                      </div>
                      <div className="text-sm text-slate-300 hover:text-white cursor-pointer p-2 rounded hover:bg-emerald-500/10 transition-colors">
                        Mission Control
                      </div>
                      <div className="text-sm text-slate-300 hover:text-white cursor-pointer p-2 rounded hover:bg-emerald-500/10 transition-colors">
                        Strategic Planning
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Status Indicator */}
            <div className="hidden lg:flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="text-slate-400">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="group relative">
                <button className="flex items-center gap-2 px-4 py-2 text-slate-300 font-semibold transition-all duration-300 hover:text-emerald-400">
                  <Lock className="w-4 h-4" />
                  <span>Access</span>
                </button>
              </Link>
              
              <Link href="#" className="group">
                <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg font-semibold text-white transition-all duration-300 hover:from-emerald-500 hover:to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Deploy</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex xl:hidden w-full h-[80px] sticky top-0 z-30 px-4 md:px-8 justify-between items-center relative overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/home/heroBG.svg')" }}
        />
        
        {/* Military-themed Overlays - Same as Hero */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-br from-slate-900/95 via-emerald-900/85 to-slate-800/95' 
            : 'bg-gradient-to-br from-slate-900/85 via-emerald-900/70 to-slate-800/90'
        }`} />
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
        
        {/* Bottom Border */}
        <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-lg shadow-emerald-500/20' 
            : 'bg-gradient-to-r from-transparent via-slate-700/50 to-transparent'
        }`} />
        
        {/* Mobile Logo */}
        <Link href="/" className="flex items-center gap-3 text-white relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              MilGPT
            </h1>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-emerald-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 relative z-10"
        >
          <GiHamburgerMenu className="w-6 h-6 text-emerald-400" />
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Slide Panel */}
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-slate-900/95 backdrop-blur-xl border-l border-emerald-500/30 shadow-2xl transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white uppercase">MilGPT</h2>
                <div className="text-xs text-emerald-400 font-mono">COMMAND CENTER</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center transition-colors hover:bg-red-500/20 hover:border-red-500"
            >
              <IoClose className="w-6 h-6 text-slate-300 hover:text-red-400" />
            </button>
          </div>

          {/* Status Bar */}
          <div className="px-6 py-4 bg-slate-800/50">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">OPERATIONAL</span>
              </div>
              <div className="text-slate-400 font-mono">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="px-6 py-4">
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between w-full p-4 rounded-lg text-white transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 group"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <div className="font-semibold">{link.name}</div>
                        <div className="text-xs text-slate-400 group-hover:text-emerald-300">
                          {link.description}
                        </div>
                      </div>
                    </div>
                    {link.hasDropdown && (
                      <MdOutlineKeyboardArrowDown className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Auth Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700/50 bg-slate-800/50">
            <div className="grid grid-cols-2 gap-4">
              <Link href="#" onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 py-3 border border-slate-600 rounded-lg text-slate-300 font-semibold transition-all duration-300 hover:border-emerald-500 hover:text-emerald-400">
                  <Lock className="w-4 h-4" />
                  Access
                </button>
              </Link>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg font-semibold text-white transition-all duration-300 hover:from-emerald-500 hover:to-emerald-600">
                  Deploy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;