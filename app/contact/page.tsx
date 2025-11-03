"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ===== Hero Banner ===== */}
      <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
        <Image
          src="/images/zinnia-contact-banner.jpg"
          alt="Zinnia Gardens Contact Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-3">
            CONTACT US
          </h1>
          <p className="text-lg max-w-2xl">
            We’d love to hear from you — let’s start planning your unforgettable event.
          </p>
        </div>
      </section>

      {/* ===== Main Section ===== */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/zinnia-garden-view.jpg"
            alt="Zinnia Gardens Venue"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
            Get in Touch
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+44 123 456 789"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your event..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-amber-600 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* ===== Contact Info Section ===== */}
      <section className="bg-amber-50 py-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Other Ways to Reach Us
        </h3>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-700">
          <div className="flex items-center gap-3">
            <FiMail className="text-amber-600 text-2xl" />
            <a href="mailto:info@zinniagardens.com" className="hover:underline">
              info@zinniagardens.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FiPhone className="text-amber-600 text-2xl" />
            <a href="tel:+44123456789" className="hover:underline">
              +44 123 456 789
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FiMapPin className="text-amber-600 text-2xl" />
            <span>Surrey, United Kingdom</span>
          </div>
        </div>
      </section>
    </main>
  );
}
