"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Weddings & Receptions",
    description:
      "Celebrate your love story in the most enchanting garden setting, surrounded by nature’s charm and timeless elegance.",
    image: "/images/zinnia-image-3.jpg",
  },
  {
    title: "Private Celebrations",
    description:
      "From birthdays to anniversaries, we transform every occasion into an unforgettable experience for you and your guests.",
    image: "/images/zinnia-image-4.jpg",
  },
  {
    title: "Corporate & Product Launches",
    description:
      "Impress clients and partners with a sophisticated open-air venue, ideal for launches, galas, and team events.",
    image: "/images/zinnia-image-5.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#f9f9f9] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-light text-[#191919] mb-10"
        >
          Our Event Services
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-[#191919] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5c5c5c] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    href="/contact"
    className="mt-2 inline-block px-5 py-2 rounded-full bg-[#c68c7c] text-white text-sm shadow-md hover:bg-[#b47a6b] transition-colors"
  >
    Learn More
  </Link>
</motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-10 left-0 w-[250px] sm:w-[350px] pointer-events-none"
      >
        <Image
          src="/images/img-left.png"
          alt="Decor"
          width={300}
          height={300}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
