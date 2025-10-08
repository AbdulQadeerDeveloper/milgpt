"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(
    null
  );

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Tools",
      href: "/tools",
      submenu: [
        { title: "AI Tools", href: "/tools/ai" },
        { title: "Productivity Tools", href: "/tools/productivity" },
        { title: "Marketing Tools", href: "/tools/marketing" },
        { title: "Developer Tools", href: "/tools/developer" },
      ],
    },
    { name: "Services", href: "/services" },
    { name: "Submit Project", href: "/submit-project" },
    { name: "Contact us", href: "/contact" },
  ];

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex w-full h-[90px] sticky top-0 bg-background border-b border-white/30 z-30">
        <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-8 text-white">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            MilGPT
          </Link>

          {/* Links */}
          <ul className="flex items-center gap-8 md:gap-10 font-inter text-sm md:text-base lg:text-base">
            {links.map((link, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 md:gap-2 group-hover:text-[#4A6B48] font-semibold transition-all duration-300"
                >
                  {link.name}
                  {link.submenu && (
                    <MdOutlineKeyboardArrowDown className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {link.submenu && dropdownOpen === index && (
                  <div className="absolute top-full left-0 w-[300px] md:w-[350px] bg-background text-white shadow-lg rounded-md p-4 z-50">
                    <ul className="flex flex-col gap-2">
                      {link.submenu.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 rounded hover:bg-[#4A6B48] transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right buttons */}
          <div className="flex items-center gap-6">
            <Link href="/auth/login">
              <p className="font-semibold text-sm md:text-base hover:text-[#4A6B48] transition-colors">
                Sign In
              </p>
            </Link>
            <Link href="/auth/register">
              <p className="font-semibold text-sm md:text-base px-4 py-2 rounded bg-[#4A6B48] hover:bg-[#3b5639] transition-colors">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden w-full h-[90px] sticky top-0 bg-background z-30 px-4 md:px-8 justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          MilGPT
        </Link>
        <GiHamburgerMenu
          onClick={() => setIsOpen(true)}
          className="w-6 h-6 cursor-pointer text-white"
        />
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[320px] md:w-[360px] lg:w-[400px] bg-background text-white z-40 transform transition-transform duration-300 shadow-md shadow-[#4A6B48] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <Link href="/" className="text-xl font-bold">
            MilGPT
          </Link>
          <IoClose
            className="w-7 h-7 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Mobile links */}
        <ul className="flex flex-col gap-4 p-6 font-inter text-base">
          {links.map((link, index) => (
            <li key={index} className="w-full">
              <div
                className="flex justify-between items-center w-full cursor-pointer font-semibold transition-all duration-300"
                onClick={() =>
                  setMobileDropdownOpen(
                    mobileDropdownOpen === index ? null : index
                  )
                }
              >
                <Link
                  href={link.href}
                  className="py-2 block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <MdOutlineKeyboardArrowDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      mobileDropdownOpen === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {link.submenu && mobileDropdownOpen === index && (
                <ul className="pl-4 mt-2 flex flex-col gap-2">
                  {link.submenu.map((item, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={item.href}
                        className="block py-2 hover:text-[#4A6B48]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile auth buttons */}
        <div className="flex flex-col gap-4 px-6 py-4 border-t border-white/20">
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <p className="font-semibold text-base hover:text-[#4A6B48]">
              Sign In
            </p>
          </Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>
            <p className="font-semibold text-base px-4 py-2 rounded bg-[#4A6B48] hover:bg-[#3b5639] text-center transition-colors">
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
