"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <video
              src="/videos/20190802_115533.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-[#191919] tracking-wide mb-6">
            About Zinnia Gardens
          </h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-6">
            Nestled in the heart of Surrey, <strong>Zinnia Gardens</strong> is a
            privately owned estate — a secluded and exclusive location that has
            delighted guests for over a decade. The grounds are made available
            for a select number of private events each year, all professionally
            managed by independent event organisers.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-8">
            From intimate wedding receptions and milestone celebrations to
            fashion shows and product launches, the estate transforms
            effortlessly for every occasion, combining elegance with
            unforgettable charm.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#c68c7c] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#b47a6b] transition-all"
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative background leaf or shape (optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] opacity-10 pointer-events-none"
      >
        <img
          src="/images/img-right.png"
          alt="Decorative leaf"
          className="object-contain w-full h-full"
        />
      </motion.div>
    </section>
  );
}
