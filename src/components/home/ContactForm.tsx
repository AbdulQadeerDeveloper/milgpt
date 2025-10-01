import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-black text-white py-16 lg:py-20 pt-5 px-6 md:px-12 lg:px-20 relative">
      <div className="w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        {/* Left Side */}
        <div className="relative">
          {/* Top-left Green Stain */}
          <Image
            src="/home/GreenStain.svg"
            alt="Green Stain"
            width={120}
            height={120}
            className="absolute -top-20 -left-6 w-28 h-28 opacity-90 pointer-events-none"
          />

          <h2 className="text-xl md:text-4xl font-bold uppercase relative z-10">
            <span className="text-[#4A6B48]">Let’s </span>
            <span className="text-[#c49a6c]">Connect us</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-lg relative z-10">
            Get in touch with the MilGPT team for AI-powered solutions, support,
            and collaboration opportunities. We are here to assist you 24/7.
          </p>

          {/* Info Grid (2x2) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            {/* Location */}
            <div className="flex items-start gap-4">
              <Image
                src="/home/location.png"
                alt="Location Icon"
                width={32}
                height={32}
                className="mt-1"
              />
              <div className="text-sm lg:text-sm">
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">Jimbaran Regency</p>
                <p className="text-gray-400">ST.2290 DPS, Bali</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start text-sm gap-4">
              <Image
                src="/home/phone.png"
                alt="Phone Icon"
                width={32}
                height={32}
                className="mt-1"
              />
              <div className="text-sm lg:text-sm">
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">+923170704493</p>
                <p className="text-gray-400">1245 33 4567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Image
                src="/home/email.png"
                alt="Email Icon"
                width={32}
                height={32}
                className="mt-1"
              />
              <div className="text-sm lg:text-sm">
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">milgpt@support.com</p>
                <p className="text-gray-400">milgpt@domain.com</p>
              </div>
            </div>

            {/* Work Hours */}
            <div className="flex items-start gap-4">
              <Image
                src="/home/watch.png"
                alt="Clock Icon"
                width={32}
                height={32}
                className="mt-1"
              />
              <div className="text-sm lg:text-sm">
                <h4 className="font-semibold">Work Hours</h4>
                <p className="text-gray-400">Mon – Sat 09:00 – 18:00</p>
                <p className="text-gray-400">Sun 07:00 – 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-[#111] p-8 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Leave a Message
          </h3>
          <p className="text-gray-400 mb-8">
            Have questions about MilGPT? Fill out the form and our AI team will
            reach out to you shortly.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-transparent border border-gray-700 focus:border-[#4A6B48] outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-transparent border border-gray-700 focus:border-[#4A6B48] outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-transparent border border-gray-700 focus:border-[#4A6B48] outline-none"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full p-3 bg-transparent border border-gray-700 focus:border-[#4A6B48] outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 bg-transparent border border-gray-700 focus:border-[#4A6B48] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4A6B48] to-[#DCD194] text-black font-semibold py-3 rounded transition hover:opacity-90"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
