"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VenueHighlights() {
  const highlights = [
    {
      title: "Lush Outdoor Gardens",
      desc: "A beautifully landscaped garden with blooming florals, perfect for open-air receptions, evening cocktails, or pre-wedding photography.",
      img: "/images/zinnia-image-3.jpg",
    },
    {
      title: "Luxury Marquee Setup",
      desc: "Step into a grand marquee designed with elegant drapery, warm lighting, and spacious interiors — crafted to elevate any celebration.",
      img: "/images/zinnia-image-4.jpg",
    },
    {
      title: "Private & Peaceful Estate",
      desc: "Enjoy complete privacy and exclusivity in our serene venue, surrounded by greenery and away from the city's noise.",
      img: "/images/zinnia-image-6.jpg",
    },
    {
      title: "Convenient Facilities",
      desc: "From secure parking and event coordination to high-end amenities, every detail is thoughtfully managed for your comfort.",
      img: "/images/zinnia-image-2.jpg",
    },
  ];

  return (
    <section className="bg-[#fdfbf9] py-24 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-light text-[#191919] mb-6"
        >
          Discover the Beauty of Zinnia Gardens
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#555] max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Every detail of Zinnia Gardens is crafted to leave a lasting
          impression — from serene pathways to the elegant marquee interiors.
          Explore what makes our venue a truly one-of-a-kind destination.
        </motion.p>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold text-[#3A1E01] mb-3">
                  {item.title}
                </h4>
                <p className="text-[#666] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
