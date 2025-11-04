"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  "/images/zinnia-image-1.jpg",
  "/images/zinnia-image-2.jpg",
  "/images/zinnia-image-3.jpg",
  "/images/zinnia-image-4.jpg",
  "/images/zinnia-image-5.jpg",
  "/images/zinnia-image-6.jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-[#f9f5f0] via-[#fdfbf9] to-[#ffffff] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px]  mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-light text-[#191919] mb-4"
        >
          Our Beautiful Venue
        </motion.h2>
        <p className="text-[#5c5c5c] text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover the serene elegance and timeless charm of{" "}
          <span className="text-[#3A1E01] font-medium">Zinnia Gardens</span>.
          Each moment here is wrapped in natural beauty and unforgettable warmth.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(src)}
              className="relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Golden Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A1E01]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Caption */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white text-sm sm:text-base uppercase tracking-widest bg-[#3A1E01]/70 px-4 py-2 rounded-full backdrop-blur-sm">
                  View
                </span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-[#B98B4E]/20 opacity-0 group-hover:opacity-60 blur-xl transition duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative flower background */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] pointer-events-none"
      >
        <Image
          src="/images/img-right.png"
          alt="Decorative flower"
          width={350}
          height={350}
          className="object-contain"
        />
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-md transition"
            >
              <X size={28} />
            </motion.button>

            {/* Selected Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-4xl w-full relative"
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                width={1000}
                height={700}
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
