"use client";

import { Footer } from "@/components/Footer";
import Grid from "@/components/home/Grid";
import UploadHero from "@/components/home/UploadHero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";

type FormDataType = {
  username: string;
  instituteName: string; // Changed from 'institute' to match backend
  email: string;
  mobile: string;
  location: string;
  city: string;
  feedback: string;
  file: File | null;
};

export default function SubmitProjectPage() {
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    instituteName: "", // Updated field name
    email: "",
    mobile: "",
    location: "",
    city: "",
    feedback: "",
    file: null,
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Clear error when user starts typing
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
    setError(null); // Clear error when file is selected
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.file) {
      setError("Please upload your ZIP project file before submitting.");
      setLoading(false);
      return;
    }

    // Validate file type
    if (!formData.file.name.toLowerCase().endsWith(".zip")) {
      setError("Please upload a ZIP file.");
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();

      // Append all form fields
      data.append("username", formData.username);
      data.append("instituteName", formData.instituteName);
      data.append("email", formData.email);
      data.append("mobile", formData.mobile);
      data.append("location", formData.location);
      data.append("city", formData.city);
      data.append("feedback", formData.feedback);

      // Append the file
      if (formData.file) {
        data.append("file", formData.file);
      }

      // Send data to your API
      const response = await fetch(
        "http://localhost:5000/api/projects/submit",
        {
          method: "POST",
          body: data,
          // Don't set Content-Type header for FormData - browser will set it automatically with boundary
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit project");
      }

      const result = await response.json();
      console.log("Project submitted successfully:", result);
      setSuccess(true);

      // Reset form after successful submission
      setFormData({
        username: "",
        instituteName: "",
        email: "",
        mobile: "",
        location: "",
        city: "",
        feedback: "",
        file: null,
      });
    } catch (err) {
      console.error("Error submitting project:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <UploadHero />

      <section className="relative min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#111111] text-white py-16 px-6 md:px-12 lg:px-24">
        {/* Decorative Images */}
        <Image
          src="/home/GreenStain.svg"
          alt="decoration"
          width={110}
          height={130}
          className="absolute -top-2 left-6 hidden md:block"
        />
        <Image
          src="/home/GreenStain.svg"
          alt="decoration"
          width={110}
          height={130}
          className="absolute -top-2 right-6 hidden md:block"
        />

        <div className="relative w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto bg-[#111111] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-[#4A6B48]/30">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4A6B48] mb-10">
            Upload Your Project
          </h1>

          {success ? (
            <div className="text-center text-green-500 font-semibold text-lg animate-pulse">
              Your project has been submitted successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Username", name: "username", type: "text" },
                {
                  label: "Institute Name",
                  name: "instituteName",
                  type: "text",
                }, // Updated name
                { label: "Email", name: "email", type: "email" },
                {
                  label: "Mobile Number",
                  name: "mobile",
                  type: "tel",
                  pattern: "[0-9]{10,15}",
                },
                { label: "Location", name: "location", type: "text" },
                { label: "City", name: "city", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof FormDataType] as string}
                    onChange={handleChange}
                    required
                    pattern={field.pattern}
                    className="w-full px-5 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 focus:border-[#4A6B48] outline-none transition-all duration-200 hover:border-[#4A6B48]"
                  />
                </div>
              ))}

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload Project (ZIP format)
                </label>
                <input
                  type="file"
                  name="file"
                  accept=".zip"
                  onChange={handleFileChange}
                  required
                  className="w-full px-3 py-2 text-sm text-gray-300 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-[#4A6B48] file:text-white hover:file:bg-[#3b5639] cursor-pointer transition-all duration-200"
                />
              </div>

              {/* Feedback */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Feedback / Notes
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-5 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 focus:border-[#4A6B48] outline-none resize-none transition-all duration-200 hover:border-[#4A6B48]"
                ></textarea>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-center font-medium p-3 bg-red-500/10 rounded-lg">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#4A6B48] hover:bg-[#3b5639] font-semibold text-white text-lg transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Project"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Grid />
      <Footer />
    </>
  );
}
