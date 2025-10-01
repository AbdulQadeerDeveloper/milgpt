"use client";

export default function BookingSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: "url('/home/service-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10  w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            GET <span className="text-[#997452]">API ACCESS EASILY</span>
          </h2>
          <p className="text-gray-200 max-w-xl">
            Simplify your development with instant GPT API access. Generate your
            API key, scale your applications, and start using AI-powered
            features within minutes. No hassle, no delay — just fast and
            reliable AI.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-[#111] p-8 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">
            REQUEST API KEY
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Fill out the form below to request your GPT API key and start
            integrating powerful AI into your projects.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 1 */}
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#997452] col-span-1"
            />
            <input
              type="text"
              placeholder="Company / Organization"
              className="bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#997452] col-span-1"
            />

            {/* Row 2 */}
            <input
              type="email"
              placeholder="Work Email"
              className="bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#997452] col-span-1"
            />
            <select className="bg-[#111] border border-gray-600 px-4 py-3 rounded focus:outline-none focus:border-[#997452] col-span-1 text-[#757575] font-bold">
              <option value="">Select API Plan</option>
              <option value="free">Free (Trial Access)</option>
              <option value="pro">Pro (Commercial Use)</option>
              <option value="enterprise">Enterprise</option>
            </select>

            {/* Row 3 */}
            <input
              type="text"
              placeholder="Use Case (e.g. Chatbot, Analytics)"
              className="bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#997452] md:col-span-2"
            />

            {/* Row 4 */}
            <textarea
              placeholder="Additional Notes"
              rows={4}
              className="bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#997452] md:col-span-2"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4A6B48] to-[#DCD194] text-black font-semibold py-3 rounded md:col-span-2 transition hover:opacity-90"
            >
              REQUEST KEY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
