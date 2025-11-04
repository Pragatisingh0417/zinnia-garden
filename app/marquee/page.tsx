"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Sun,
  Layout,
  Droplets,
} from "lucide-react"; // 👑 beautiful minimal icons
import ShowcaseSection from "../components/ShowcaseSection";

export default function MarqueePage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax for hero background
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);

  return (
    <main className="bg-[#f8f9f7] overflow-hidden text-[#191919]">
      {/* ✅ HERO SECTION */}
     {/* ✅ HERO SECTION */}
<section
  ref={ref}
  className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden"
>
  {/* Background with parallax */}
  <motion.div
    style={{ y: yHero, opacity: opacityHero }}
    className="absolute inset-0"
  >
    <Image
      src="/images/LavenderFields (1).jpg"
      alt="Luxury Marquee"
      fill
      priority
      loading="eager"
      className="object-cover object-center"
    />
  </motion.div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 sm:bg-black/35 md:bg-black/30" />

  {/* Hero Title */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="relative z-10 text-white text-3xl sm:text-5xl lg:text-7xl font-light tracking-[4px] sm:tracking-[8px] text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] px-4"
  >
    Step Into Elegance
  </motion.h1>
</section>


      {/* ✅ INTRO VIDEO + CONTENT */}
      <section className="relative bg-gradient-to-b from-[#fffaf5] via-[#fffaf5] to-[#ffffff] py-20 sm:py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* Left Video */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
              <video
                src="/videos/Video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#B98B4E]/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <span className="uppercase tracking-[6px] text-[#B98B4E] text-sm font-semibold mb-3 inline-block">
              Welcome to Zinnia Gardens
            </span>

            <h2 className="text-4xl sm:text-5xl font-light text-[#191919] mb-6 leading-tight">
              Where Every Celebration Feels Like Home

            </h2>

            <p className="text-[#5c5c5c] leading-relaxed mb-5 text-[1.05rem]">
             Tucked away in a serene estate,{" "}
              <strong className="text-[#3A1E01]">Zinnia Gardens</strong> hosts a limited number of private events each year — ensuring every occasion receives our full attention
            </p>

            <p className="text-[#5c5c5c] leading-relaxed mb-10 text-[1.05rem]">
              A seamless blend of modern sophistication and natural grace, it’s the ideal backdrop for those who desire something truly extraordinary.
            </p>

            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-[#3A1E01] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#B98B4E] transition-all duration-300"
              >
                Discover More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative floating shape */}
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src="/images/img-right.png"
          alt="Decorative leaf"
          className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] pointer-events-none select-none"
        />
      </section>

      {/* ✅ MARQUEE EXPERIENCE SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 sm:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            “Your marquee is tailor-made for your vision.”
          </h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Float down a red-carpeted stairway into a breathtaking marquee —
            designed to reflect your individuality and occasion.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Whether you’re planning a cozy gathering or a lavish celebration,
            our flexible layout allows total creative freedom in design,
            lighting, and décor.
          </p>
          <p className="text-[#555] leading-relaxed">
            Ivory satin draping, soft chandeliers, and ambient lighting add a
            touch of magic — creating an atmosphere of elegance and warmth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-lg "
        >
          <Image
            src="/images/zinnia-image-7.jpg"
            alt="Marquee Interior"
            width={500}
            height={300}
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </section>

<ShowcaseSection />

      {/* ✅ ENHANCED VENUE HIGHLIGHTS */}
      <section className="relative bg-[#fffaf5] py-18 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-16">
            Venue Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                icon: <Layout className="w-10 h-10 text-[#B98B4E]" />,
                title: "Custom Layouts",
                desc: "Flexible designs tailored to suit both intimate and grand celebrations.",
              },
              {
                icon: <Sparkles className="w-10 h-10 text-[#B98B4E]" />,
                title: "Luxury Draping",
                desc: "Ivory satin interiors and statement lighting for pure sophistication.",
              },
              {
                icon: <Sun className="w-10 h-10 text-[#B98B4E]" />,
                title: "Mood Lighting",
                desc: "Dimmable chandeliers and soft tones to match your event’s ambiance.",
              },
              {
                icon: <Droplets className="w-10 h-10 text-[#B98B4E]" />,
                title: "Climate Control",
                desc: "Comfort all year round — rain or shine, your guests stay at ease.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 15px 30px rgba(185,139,78,0.25), 0 0 10px rgba(185,139,78,0.4)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#B98B4E]/10 hover:border-[#B98B4E]/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-5">{item.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-[#3A1E01]">
                  {item.title}
                </h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section className="relative py-18 text-white text-center overflow-hidden">
        <Image
          src="/images/zinnia-image-1.jpg"
          alt="Marquee Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            See the Marquee in Person
          </h2>
          <p className="text-[#ddd] mb-8">
            Schedule a private viewing and experience the grandeur up close.
          </p>
          <Link href="/contact">
            <button className="bg-[#3A1E01] text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-[#B98B4E] transition">
              Book a Viewing
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
