"use client";

import Grid from "@/components/home/Grid";
import { useState, FormEvent, ChangeEvent } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("Message sent successfully ✅");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-background text-white">
        {/* Banner */}
        <div className="w-full bg-gradient-to-r from-[#4A6B48] via-[#395438] to-[#2A3C29] py-8 sm:py-12 text-center shadow-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
            Contact us
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-white/80 max-w-[280px] lg:max-w-[800px] sm:max-w-xs md:max-w-md mx-auto">
            Communicate with confidence. Reach out to us anytime.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12 md:py-16">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4 md:mb-6">
              Contact Us
            </h2>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 border border-white/30 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6B48]"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 border border-white/30 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6B48]"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 border border-white/30 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6B48]"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#4A6B48] py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-base sm:text-lg md:text-xl hover:bg-[#395438] transition-colors"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-3 sm:mt-4 text-center text-green-400 font-medium text-sm sm:text-base md:text-lg">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
      <Grid />
    </>
  );
}
