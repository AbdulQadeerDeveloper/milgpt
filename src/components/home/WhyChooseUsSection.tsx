import React from "react";
import Image from "next/image";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#E7B10C] to-[#CA9C0F] text-white rounded-full text-sm font-medium mb-2">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto leading-snug">
            Your Trusted Advocates In The Legal Landscape
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="space-y-5">
            {/* Image Card */}
            <div className="relative">
              <Image
                src="/images/Services-man.jpg"
                alt="Professional lawyer"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>

            {/* Box Card */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundColor: "rgba(255, 246, 238, 1)" }}
            >
              <h3 className="text-2xl font-bold mb-2 text-black/90">
                Trusted Advocacy
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                We specialize in handling complex cases with proven strategies.
              </p>
            </div>
          </div>

          {/* Column 2 → Tall Image */}
          <div className="relative">
            <Image
              src="/images/Services-2.jpg"
              alt="Trusted Clients"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-5xl font-bold">
                5000<span className="text-2xl">+</span>
              </div>
              <div className="text-lg opacity-90">Trusted Clients</div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            {/* Box Card */}
            <div className="bg-gradient-to-br from-[#166358] to-[#034B24] rounded-2xl p-7 text-white">
              <h3 className="text-2xl font-bold ">Trusted Advocacy</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                We specialize in handling complex cases with proven strategies.
              </p>
            </div>

            {/* Image Card */}
            <div className="relative">
              <Image
                src="/images/Services-3.jpg"
                alt="Scales of justice"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
