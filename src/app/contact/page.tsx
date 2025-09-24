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
    // 🔗 TODO: integrate with API or email service
    setStatus("Message sent successfully ✅");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-background text-white">
        {/* 🔰 MilGPT Banner */}
        <div className="w-full bg-gradient-to-r from-[#4A6B48] via-[#395438] to-[#2A3C29] py-16 text-center shadow-lg">
          <h1 className="text-5xl font-extrabold tracking-wide">Contact us</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Communicate with confidence. Reach out to us anytime.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-white/30 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6B48]"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-white/30 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6B48]"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-white/30 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6B48]"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#4A6B48] py-3 rounded-lg font-semibold text-lg hover:bg-[#395438] transition-colors"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-center text-green-400 font-medium">
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
