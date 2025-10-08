import React from "react";

const ServicesHeroSection: React.FC = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      {/* Background Image - uncomment and add your image path */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/Services-bg-image.jpg')` }}
      ></div>

      {/* Green Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(9, 36, 29, 0.8)" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-left">
          <span className="text-white opacity-80">Home</span>
          <span className="mx-2 text-white opacity-60">›</span>
          <span className="text-white">Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Services
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Access Legal Expertise at Your Fingertips. Discover the ultimate
          online legal advisor that puts the power of legal knowledge in your
          hands. Our app provides instant access to
        </p>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
