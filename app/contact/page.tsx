"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ===== Hero Banner ===== */}
      <section className="relative w-full h-[300px] sm:h-[600px] overflow-hidden">
        <Image
          src="/images/zinnia-image-7.jpg"
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

      {/* ===== Contact Section ===== */}
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
            src="/suppliers/supplier-image-1.jpg"
            alt="Zinnia Gardens Venue"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Form */}
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c68c7c]transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c68c7c] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+44 123 456 789"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c68c7c] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your event..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c68c7c] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-[#c68c7c] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* ===== Find Us Section ===== */}
      <section className="bg-amber-50 py-16 px-6 md:px-12 text-gray-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Find Us
          </h2>

          <p className="mb-4 leading-relaxed">
            Zinnia Gardens is beautifully located on the edge of Banstead Village in Surrey,
            just off the A2022 (Croydon Lane) between Epsom and Kingswood.
          </p>

          <p className="mb-4 leading-relaxed">
            We are easily accessible: 25 minutes from South London, 45 from Central London in
            good traffic; 20 minutes from Purley or 30 minutes from Croydon.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">From the M25 (Heathrow side):</h3>
          <p className="mb-4 leading-relaxed">
            Exit at Junction 10, take the first left onto the A3 towards London.
            Exit at A240 (Kingston/Epsom) and turn right at the roundabout, heading towards Epsom.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">From the M25 (Gatwick side):</h3>
          <p className="mb-4 leading-relaxed">
            Exit at Junction 8 and take the A217 towards Sutton.
            After several roundabouts, turn right onto the A2022.
            Zinnia Gardens will be on your left, just after the second roundabout, past Sunrise Senior Living and immediately after Fairholme Farm.
            (If you reach Evergreen Nursery on your right, you’ve gone too far.)
          </p>

          <p className="mt-4 italic text-gray-600">
            Look out for our distinctive white wall — a clear and helpful landmark.
          </p>

          {/* Contact Info Grid */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <FiMapPin className="text-[#c68c7c] text-3xl" />
              <p className="font-medium text-gray-900">Address</p>
              <p>
                Zinnia Gardens, 12 Croydon Lane,<br />
                Banstead, Surrey, SM7 3AN
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <FiPhone className="text-[#c68c7c] text-3xl" />
              <p className="font-medium text-gray-900">Telephone</p>
              <p>
                +44 (0)20 3978 6385<br />
                +44 (0)7469 210 376
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <FiMail className="text-[#c68c7c] text-3xl" />
              <p className="font-medium text-gray-900">Email</p>
              <a
                href="mailto:info@zinniagardens.com"
                className="hover:underline"
              >
                info@zinniagardens.com
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center text-gray-700">
            <FiClock className="text-[#c68c7c] text-3xl mb-2" />
            <p className="font-medium text-gray-900">Opening Hours</p>
            <p>
              Mon - Sat: 10:00 - 20:00<br />
              Sun: 10:00 - 16:00
            </p>
            <p className="mt-2 italic">
              Visitors: by appointment with the event manager
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
