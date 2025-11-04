"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MarqueePreview() {
  return (
    <section className="relative bg-gradient-to-b from-[#f9f5f0] via-[#fdfbf9] to-[#ffffff] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/zinnia-image-5.jpg"
            alt="Elegant marquee view"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition duration-700" />

          {/* Subtle Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#B98B4E]/30 to-transparent blur-2xl opacity-0 group-hover:opacity-70 transition duration-700" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <span className="uppercase tracking-[6px] text-[#B98B4E] text-sm font-semibold mb-3 inline-block">
            The Marquee Experience
          </span>

          <h3 className="text-4xl sm:text-5xl font-light text-[#191919] mb-6 leading-tight">
            Step Into Timeless Elegance
          </h3>

          <p className="text-[#555] text-base sm:text-lg leading-relaxed mb-5">
            Float down a red-carpeted stairway into a stunning marquee, designed
            to capture the essence of sophistication. Each detail — from
            draping, floral arrangements, and soft lighting — reflects the charm
            and beauty that defines{" "}
            <span className="text-[#3A1E01] font-medium">Zinnia Gardens</span>.
          </p>

          <p className="text-[#555] text-base sm:text-lg leading-relaxed mb-8">
            Our marquee transforms effortlessly for weddings, receptions,
            galas, and intimate celebrations. With customizable layouts,
            luxurious textures, and a seamless connection to the surrounding
            gardens, your event becomes an experience that transcends the
            ordinary.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/marquee"
              className="inline-block bg-[#3A1E01] text-white px-8 py-3 rounded-full text-sm tracking-widest shadow-md hover:bg-[#B98B4E] transition-all duration-300"
            >
              Explore the Marquee
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] pointer-events-none"
      >
        <Image
          src="/images/img-left.png"
          alt="Decorative leaf"
          width={350}
          height={350}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
