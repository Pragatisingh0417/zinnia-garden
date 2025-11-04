"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#fffaf5] via-[#fffdfb] to-[#ffffff] py-20 sm:py-28 overflow-hidden">
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
              src="/videos/20190802_115533.mp4"
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
            A Private Estate for Timeless Celebrations
          </h2>

          <p className="text-[#5c5c5c] leading-relaxed mb-5 text-[1.05rem]">
            Nestled in the heart of Surrey, <strong className="text-[#3A1E01]">Zinnia Gardens</strong> 
            is a privately owned estate — a secluded and exclusive venue that has 
            delighted guests for over a decade. The grounds host a limited number 
            of private events each year, ensuring every experience is truly exceptional.
          </p>

          <p className="text-[#5c5c5c] leading-relaxed mb-10 text-[1.05rem]">
            From intimate wedding receptions and milestone celebrations to 
            fashion shows and product launches — Zinnia Gardens transforms 
            effortlessly for every occasion, blending sophistication with 
            natural beauty.
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
  );
}
