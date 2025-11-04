"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Banner from "../components/Banner";
import Link from "next/link";


export default function AboutPage() {
  return (
    <main className="bg-[#fffaf5] text-[#191919] overflow-hidden">
      {/* Hero Section */}
<Banner />

      {/* About Content */}
      <section className="max-w-[1400px]  mx-auto px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src="/gallery/wedding-image.jpg"
            alt="Venue Garden"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
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
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-[#3A1E01] text-white px-8 py-3 mt-4 rounded-full shadow-lg hover:bg-[#B98B4E] transition-all duration-300"
            >
              Discover More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Additional Visual Section */}
      <section className="max-w-[1400px] mx-auto mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 items-center">
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
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-[#3A1E01] text-white px-8 py-3  mt-5 rounded-full shadow-lg hover:bg-[#B98B4E] transition-all duration-300"
            >
              Know More
            </Link>
          </motion.div>
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
            height={400}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </section>

       {/* ✅ CTA SECTION */}
      <section className="relative py-18 text-white text-center overflow-hidden">
        <Image
          src="/images/zinnia-image-2.jpg"
          alt="Marquee Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
know More About Zinnia Garden By Contacting Us Directly          </h2>
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
