"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MarqueePreview() {
  return (
    <section className="bg-white py-20 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-md"
        >
          <Image
            src="/images/zinnia-image-5.jpg"
            alt="Elegant marquee view"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-3xl sm:text-4xl font-light text-[#191919] mb-4">
            Step Into Elegance
          </h3>
          <p className="text-[#555] mb-6 leading-relaxed">
            Float down a red-carpeted stairway into a lavish marquee — designed
            to transform your vision into reality.
          </p>
          <Link
            href="/marquee"
            className="inline-block bg-[#c68c7c] text-white px-6 py-3 rounded-full text-sm tracking-widest hover:bg-[#b47d6e] transition"
          >
            Explore the Marquee
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
