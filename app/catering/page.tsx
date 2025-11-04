"use client";
import Link from "next/link";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CateringPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* 🏞️ Banner Section */}
      <section className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
        <Image
          src="/catering/catering-10.jpg"
          alt="Zinnia Gardens Catering"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold drop-shadow-lg"
          >
            Zinnia Gardens Preferred Catering
          </motion.h1>
          <p className="text-lg mt-4 max-w-2xl drop-shadow-md">
            Exceptional service and unforgettable flavours for your event.
          </p>
        </div>
      </section>

      {/* 🍽️ Catering Content Section */}
      <section className="max-w-[1400px] mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image Slider */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            {[
              "/catering/catering-4.jpg",
              "/catering/catering-2.jpg",
              "/catering/catering-3.jpg",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  alt={`Catering setup ${i + 1}`}
                  width={500}
                  height={400}
                  className="object-cover w-full h-[350px] md:h-[450px] rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Zinnia Gardens Preferred Catering
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You may choose to use our preferred caterers or select one of your choice,
            provided they have the required credentials and follow health & safety
            regulations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If chosen, our preferred caterers are able to manage your complete catering
            for the day and evening — from table setup, guest management, buffet or full
            seated service, evening snack/BBQ, and bar management to name a few of their
            services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#3A1E01] hover:bg-[#B98B4E] text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>
      </section>
      <section className="relative py-20 text-white text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/zinnia-image-2.jpg" // ← change to your background image path
          alt="Marquee Background"
          fill
          className="object-cover object-center"
        />
      
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      
        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            See the Zinnia Garden in Person
          </h2>
          <p className="text-[#ddd] mb-8">
            Schedule a private viewing and experience the grandeur up close.
          </p>
      
          {/* Contact Page Link Button */}
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
