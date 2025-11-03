"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
      <section
        ref={ref}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax */}
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0"
        >
          <Image
            src="/images/zinnia-image-5.jpg"
            alt="Luxury Marquee"
            fill
            priority
            loading="eager"
            className="object-cover"
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-white text-4xl sm:text-6xl font-light tracking-widest text-center drop-shadow-lg"
        >
          Step Into Elegance
        </motion.h1>
      </section>

      {/* ✅ MAIN CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            “Your marquee is tailor-made for your requirements”
          </h2>

          <p className="text-[#555] leading-relaxed mb-4">
            Float down a red-carpeted stairway and you'll arrive at the entrance
            to a lavish marquee — a space designed to transform your vision into
            reality.
          </p>

          <p className="text-[#555] leading-relaxed mb-4">
            Tailored to suit your guest list, the open-span marquee offers
            complete freedom in layout and styling, whether you're planning an
            intimate celebration or a large-scale gathering.
          </p>

          <p className="text-[#555] leading-relaxed">
            Inside, the space is adorned with ivory satin draping, creating a
            graceful and refined atmosphere. Chandeliers, candelabras, and
            dimmable mood lighting enhance the ambience with a timeless touch.
          </p>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-lg aspect-[6/5]"
        >
          <Image
            src="/images/zinnia-image-7.jpg"
            alt="Marquee Interior"
            width={600}
            height={500}
            loading="eager"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>
    </main>
  );
}
