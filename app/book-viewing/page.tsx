"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InlineWidget } from "react-calendly";

export default function BookViewing() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-16 text-center">
      <AnimatePresence mode="wait">
        {!confirmed ? (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl bg-white shadow-xl rounded-2xl p-10 border border-pink-100"
          >
            <h1 className="text-3xl font-semibold mb-4 text-[#3A1E01]">
              Book a Venue Viewing
            </h1>
            <p className="text-gray-600 mb-8">
              Our wedding venue packages start from{" "}
              <span className="font-medium text-[#3A1E01]">₹X lakhs</span>.  
              Please confirm that this fits within your budget before booking a viewing.
            </p>

            <div className="flex justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setConfirmed(true)}
                className="bg-[#3A1E01] text-white px-6 py-3 rounded-xl shadow-md hover:[#c68c7c] transition-all"
              >
                Yes, Continue
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  alert(
                    "Thank you for your interest! Feel free to explore our gallery and packages."
                  )
                }
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-300 transition-all"
              >
                No, Maybe Later
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="calendly"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 border border-pink-100"
          >
            <h2 className="text-2xl font-semibold text-[#c68c7c] mb-4 mt-10">
              Schedule Your Viewing
            </h2>
            <InlineWidget url="https://calendly.com/yourusername/viewing" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
