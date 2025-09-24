"use client";
import React, { useState } from "react";
import Link from "next/link";
// import LogoIcon from "@/assets/icons/Logo.svg";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Blog", href: "/" },
    { name: "Tools", href: "/" },
    { name: "Community", href: "/" },
    { name: "Affiliate", href: "/" },
    { name: "API", href: "/" },
    { name: "Creators", href: "/" },
    { name: "Careers", href: "/" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden xl:flex w-full h-[90px] sticky top-0 bg-background border-b border-white/30 z-30">
        <div className="container mx-auto flex justify-between items-center h-full px-4 text-white">
          <Link href="/" className="text-xl font-bold">
            {/* <LogoIcon className="w-[245px] h-[56px]" /> */}
            MilGPT
          </Link>

          <ul className="flex items-center gap-10 font-inter">
            {links.map((link, index) => (
              <li key={index} className="group">
                <Link
                  href={link.href}
                  className="flex items-center justify-center gap-2 group-hover:text-[#4A6B48] font-semibold transition-all duration-300"
                >
                  {link.name}
                  {index === 1 || index === 2 ? (
                    <MdOutlineKeyboardArrowDown className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative flex items-center gap-6">
            <Link href="#">
              <p className="font-semibold">Login</p>
            </Link>
            <Link href="#">
              <p className="font-semibold">Register</p>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex xl:hidden w-full h-[90px] sticky top-0 bg-background z-30 px-4 md:px-8 justify-between items-center">
        <Link href="/">
          {/* <Image src="/Logo.svg" width={200} height={50} alt="logo" /> */}
          MilGPT
        </Link>
        <GiHamburgerMenu
          onClick={() => setIsOpen(true)}
          className="w-4 h-4 md:w-6 md:h-6  cursor-pointer"
        />
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 shadow-md text-white shadow-[#4A6B48] h-full w-full md:w-[280px] bg-background shadow-3xl z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-[1000px]"
        }`}
      >
        <div className="flex justify-end p-4">
          <IoClose
            className="w-7 h-7  cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="w-full py-4 px-4 flex justify-start text-xl font-bold">
          {/* <Image src="/Logo.svg" width={200} height={50} alt="logo" /> */}
          Logo
        </div>

        <ul className="flex flex-col justify-between gap-8 p-6 font-inter">
          {links.map((link, index) => (
            <li key={index} className="group w-full">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-full justify-between flex items-center gap-2  group-hover:text-[#4A6B48] font-semibold transition-all duration-300"
              >
                {link.name}
                {index === 1 || index === 2 ? (
                  <MdOutlineKeyboardArrowDown className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-between lg:justify-end gap-10 py-2 px-6">
          <Link href="#" onClick={() => setIsOpen(false)}>
            <p className=" font-semibold">Login</p>
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            <p className=" font-semibold">Register</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;