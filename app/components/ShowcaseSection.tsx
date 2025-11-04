"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ShowcaseItem {
  type: "image" | "video";
  src: string;
  title: string;
  desc: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    type: "video",
    src: "/videos/20190802_115533.mp4",
    title: "Grand Entrance",
    desc: "Step through a floral archway into an atmosphere of grandeur and grace — the perfect start to your celebration.",
  },
  {
    type: "image",
    src: "/images/zinnia-image-2.jpg",
    title: "Elegant Interiors",
    desc: "Every detail inside the marquee is crafted for luxury — ivory drapes, soft lighting, and endless charm.",
  },
  {
    type: "video",
    src: "/videos/20190705_190619.mp4",
    title: "The Celebration Space",
    desc: "A versatile layout designed to adapt beautifully to weddings, galas, or private soirées.",
  },
  {
    type: "image",
    src: "/images/zinnia-image-3.jpg",
    title: "Nature’s Backdrop",
    desc: "Surrounded by landscaped gardens and peaceful water features, the venue radiates serenity.",
  },
  {
    type: "video",
    src: "/videos/20220603_092246.mp4",
    title: "Evening Glow",
    desc: "As the sun sets, the venue transforms with golden light — setting the tone for unforgettable memories.",
  },
  {
    type: "image",
    src: "/images/zinnia-image-4.jpg",
    title: "Perfect Finishing Touches",
    desc: "From décor to dining, every aspect of your event reflects elegance and attention to detail.",
  },
];

export default function ShowcaseSection() {
  return (
    <section className="bg-[#fffaf5] py-18">
      <div className="max-w-[1400px] mx-auto px-6 space-y-15">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Media (video or image) */}
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl group">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-light text-[#3A1E01] mb-4">
                {item.title}
              </h3>
              <p className="text-[#555] text-[1.05rem] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
