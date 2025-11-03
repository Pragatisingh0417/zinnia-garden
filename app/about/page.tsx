"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroVideo from "../components/HeroVideo";

export default function AboutPage() {
  return (
    <main className="bg-[#f8f9f7] text-[#191919] overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center bg-[#f2f8f3] overflow-hidden">
             <HeroVideo />

      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src="/images/zinnia-image-5.jpg"
            alt="Venue Garden"
            width={600}
            height={500}
            loading="eager"
            priority
            className="aspect-[6/5] w-full rounded-3xl shadow-md object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            The Essence of Zinnia Gardens
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nestled in the heart of Surrey, Zinnia Gardens is a privately owned
            estate — a secluded and exclusive location that has delighted guests
            for over a decade. We open our gates to a select number of private
            events each year, ensuring every moment receives our utmost care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From intimate weddings and milestone celebrations to elegant
            corporate events, every occasion here becomes timeless. Our team and
            partners take pride in creating experiences that blend natural
            beauty with refined elegance.
          </p>
        </motion.div>
      </section>

      {/* Additional Visual Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text First on Mobile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            Nature Meets Celebration
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The gardens flow seamlessly into event areas — letting you enjoy
            open skies, blooming floral archways, and peaceful surroundings.
            Whether it's a morning ceremony or a starlit dinner, the setting
            transforms beautifully from day to night.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We invite you to explore, dream, and celebrate — surrounded by the
            charm of nature and elegance of design.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 md:order-2"
        >
          <Image
            src="/images/zinnia-image-6.jpg"
            alt="Zinnia Gardens Evening"
            width={600}
            height={500}
            loading="eager"
            className="aspect-[6/5] w-full rounded-3xl shadow-md object-cover"
          />
        </motion.div>
      </section>
    </main>
  );
}
