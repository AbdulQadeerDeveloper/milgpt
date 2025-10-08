// components/ServicesHero.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative h-[350px] w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/home/banner-about.jpg"
        alt="Paintball background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#000000] opacity-60"></div>

      {/* Content Box */}
      <div className="relative bg-gradient-to-r from-[#4A6B48] to-[#8C8A62] text-center px-18 py-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold">Services</h1>
        <p className="text-white text-sm mt-2">
          <Link href="/">Home</Link>
          <span className="mx-1">&gt;</span> Services
        </p>
      </div>
    </section>
  );
}
