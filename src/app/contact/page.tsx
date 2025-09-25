"use client";

import Grid from "@/components/home/Grid";
import { useState, FormEvent, ChangeEvent } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
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
    setStatus("✅ Your message has been sent to the MILGPT team!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Banner */}
        <div className="w-full  bg-[#4A6B48]  to-black py-10 sm:py-14 text-center shadow-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
            Contact - MilGPT
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Have questions, feedback, or collaboration ideas? Reach out to the
            MILGPT team and we’ll get back to you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="container mx-auto grid md:grid-cols-2 gap-10 max-w-6xl px-4 py-10">
          {/* Left Info Section */}
          <div className="bg-[#111111] p-8 rounded-2xl shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
            <p className="text-white mb-6">
              We’re here to support your AI-powered journey with MILGPT. Get in
              touch anytime.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#4A6B48] text-xl" />
                <p>London, United Kingdom, E6 2JA</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#4A6B48] text-xl" />
                <p> +1 856-761-1000</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#4A6B48] text-xl" />
                <p>support@milgpt.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaGlobe className="text-[#4A6B48] text-xl" />
                <p>www.milgpt.com</p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#111111] p-8 rounded-2xl shadow-lg space-y-5"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-[#4A6B48] outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-[#4A6B48] outline-none"
                required
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg 
                       focus:ring-2 focus:ring-[#4A6B48] outline-none"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg 
                       focus:ring-2 focus:ring-[#4A6B48] outline-none"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#4A6B48] hover:bg-[#4A6B48] transition-colors py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

            {/* Status Message */}
            {status && (
              <p className="text-[#4A6B48] text-center font-medium mt-2">
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
