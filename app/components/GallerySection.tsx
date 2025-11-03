"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react"; // for close icon

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
    <section className="relative bg-[#f8f9f7] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-light text-[#191919] mb-12"
        >
          Our Beautiful Venue
        </motion.h2>

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
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-sm uppercase tracking-widest">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft background flower */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
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

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>

            {/* Selected Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="max-w-4xl w-full relative"
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                width={1000}
                height={700}
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
