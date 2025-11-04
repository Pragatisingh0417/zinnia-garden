"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Weddings & Receptions",
    description:
      "Celebrate your love story in an enchanting garden setting, surrounded by nature’s beauty and timeless elegance.",
    image: "/images/zinnia-image-3.jpg",
  },
  {
    title: "Private Celebrations",
    description:
      "From birthdays to anniversaries, we craft intimate and unforgettable experiences for you and your guests.",
    image: "/images/zinnia-image-4.jpg",
  },
  {
    title: "Corporate & Product Launches",
    description:
      "Impress your guests with a sophisticated open-air venue ideal for launches, galas, and special corporate events.",
    image: "/images/zinnia-image-5.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f9f5f0] via-[#afa8a0] to-[#fff] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-light text-[#191919] mb-6"
        >
          Our Event Services
        </motion.h2>
        <p className="text-[#5c5c5c] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12">
          At <span className="text-[#3A1E01] font-medium">Zinnia Gardens</span>,
          we create experiences that blend elegance, joy, and natural charm —
          tailored perfectly for your special occasion.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative bg-white/70 backdrop-blur-md border border-white/30 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-8 text-center relative z-10">
                <h3 className="text-2xl font-medium text-[#3A1E01] mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-[#5c5c5c] text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2.5 rounded-full bg-[#3A1E01] text-white text-sm font-medium shadow-md hover:bg-[#B98B4E] transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>

              {/* Soft hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#B98B4E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-10 left-0 w-[250px] sm:w-[350px] pointer-events-none"
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
