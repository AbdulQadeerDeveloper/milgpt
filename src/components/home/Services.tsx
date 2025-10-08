import Image from "next/image";
import Link from "next/link";
import { Brain, Key, FileText, ShieldCheck, Users, Scale } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServicesData: ServiceItem[] = [
  {
    title: "MILGPT AI Brain",
    description:
      "Harness the power of MILGPT’s AI-driven intelligence for instant legal research, case analysis, and decision support.",
    icon: Brain,
  },
  {
    title: "Secure MILGPT Key",
    description:
      "Unlock premium ecosystem tools with MILGPT Key — ensuring encrypted, verified, and private access across platforms.",
    icon: Key,
  },
  {
    title: "Smart Legal Docs",
    description:
      "Generate, review, and manage AI-assisted contracts, agreements, and legal prescriptions seamlessly.",
    icon: FileText,
  },
  {
    title: "Shielded Security",
    description:
      "Built-in legal-grade security and MILGPT’s encryption layer protect sensitive data end-to-end.",
    icon: ShieldCheck,
  },
  {
    title: "Global Collaboration",
    description:
      "Lawyers, clients, and organizations connect, collaborate, and share insights securely within MILGPT ecosystem.",
    icon: Users,
  },
  {
    title: "AI Legal Governance",
    description:
      "Ensure fairness and compliance with MILGPT-powered digital justice tools and AI-driven governance.",
    icon: Scale,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Decorative Images */}
      <Image
        src="/home/GreenStain.svg"
        alt="decor top left"
        width={140}
        height={150}
        priority
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src="/home/GreenStain.svg"
        alt="decor top right"
        width={140}
        height={150}
        priority
        className="absolute top-0 right-0 z-0"
      />

      <div className="relative w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#997452] mb-2 tracking-wide uppercase">
            MILGPT Ecosystem
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Explore Our Intelligent Legal Services
          </h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The MILGPT ecosystem transforms how legal and AI-powered services
            operate. From smart contracts to secure client-lawyer collaboration,
            MILGPT provides the tools for the future of legal technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((item, index) => (
            <div
              key={index}
              className="group bg-[#111] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-800 hover:border-transparent hover:bg-gradient-to-br hover:from-[#6B946A] hover:to-[#997452] cursor-pointer relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-5 bg-gray-200 group-hover:bg-white rounded-full flex items-center justify-center text-gray-800 group-hover:text-[#997452] text-2xl transition-all duration-300">
                <item.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 group-hover:text-gray-100 leading-relaxed mb-5 text-sm">
                {item.description}
              </p>

              {/* CTA */}
              <Link
                href="https://milgpt.com"
                target="_blank"
                className="inline-flex items-center text-sm font-medium text-[#6B946A] group-hover:text-white transition-colors duration-300"
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
