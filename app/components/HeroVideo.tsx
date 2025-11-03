"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
      {/* ===== Background Video ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/03 Mera Wedding for Friends (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ===== Centered Text ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-4">
          ZINNIA GARDENS
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto">
          Where timeless elegance meets unforgettable moments.
        </p>
      </motion.div>
    </section>
  );
}
