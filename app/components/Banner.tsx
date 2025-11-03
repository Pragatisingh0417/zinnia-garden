"use client";

import Image from "next/image";
import FixedFlowers from "./FixedFlowers";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

export default function Banner() {
  const slides = [
    "/images/zinnia-image-4.jpg",
    "/images/zinnia-image-5.jpg",
    "/images/zinnia-image-6.jpg",
    "/images/zinnia-image-7.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const getPrevIndex = () => (activeIndex - 1 + slides.length) % slides.length;
  const getNextIndex = () => (activeIndex + 1) % slides.length;

  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-[#f2f8f3] py-16 sm:py-24 overflow-hidden">
      <FixedFlowers />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-[#191919] mb-4 px-4"
      >
        PLAN · IT · TO · PERFECTION
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg italic text-[#c68c7c] max-w-2xl mx-auto mb-10 sm:mb-12 px-4"
      >
        A secret outdoor venue, which virtually transforms from a stunning day,
        to a magical evening setting.
      </motion.p>

      {/* Slider wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="relative w-full flex items-end justify-center gap-4 sm:gap-8 px-4"
      >
        {/* Left preview */}
        <motion.div
          key={getPrevIndex()}
          className="hidden sm:block w-32 sm:w-44 md:w-56 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0.7, scale: 0.9, y: 60 }}
          animate={{ opacity: 1, scale: 0.95, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={slides[getPrevIndex()]}
            alt="Previous"
            width={220}
            height={180}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Center Swiper */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-3 sm:p-4 w-[85%] sm:w-[600px] md:w-[650px] overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="rounded-3xl"
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[260px] sm:h-[350px] md:h-[380px]">
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                    priority={i === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dot animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-1"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 bg-[#c68c7c] rounded-full"
              ></span>
            ))}
          </motion.div>
        </div>

        {/* Right preview */}
        <motion.div
          key={getNextIndex()}
          className="hidden sm:block w-32 sm:w-44 md:w-56 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0.7, scale: 0.9, y: 60 }}
          animate={{ opacity: 1, scale: 0.95, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={slides[getNextIndex()]}
            alt="Next"
            width={220}
            height={180}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
