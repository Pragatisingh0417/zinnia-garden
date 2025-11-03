"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "HOW MANY GUESTS CAN BE ACCOMMODATED?",
      answer:
        "We can accommodate up to 500 seated guests. Occasionally, depending on availability, we can allow for up to 500 guests.",
    },
    {
      question: "WHAT TIME DOES EACH EVENT END?",
      answer:
        "Dance music can continue until 12 midnight (for all but 3 events per annum). Drinks and ambient music must end by 11:55 PM.",
    },
    {
      question: "MAY WE USE OUR OWN CATERER?",
      answer:
        "Yes, you may use your own caterer provided they follow health and safety regulations, sign our Terms & Conditions, and have a good track record at other venues.",
    },
    {
      question: "ARE YOU LICENCED FOR CIVIL CEREMONIES?",
      answer:
        "Unfortunately, we are not licensed for civil ceremonies. However, you may hold a ‘Celebrant’ function here after completing a nominal ceremony at the Registry Office.",
    },
    {
      question: "IS IT POSSIBLE TO HAVE AN INDIAN FIRE CEREMONY?",
      answer:
        "Yes, an Indian Fire Ceremony can be held, subject to prior approval and compliance with health and safety checks.",
    },
    {
      question: "WHAT CAR CAPACITY IS THERE?",
      answer:
        "We have parking capacity for up to 100 cars — sufficient for approximately 250 guests if two people arrive per car. For larger numbers, we recommend arranging coach transport.",
    },
  ];

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <Image
          src="/images/image-9.jpg" // 👉 Replace with your banner image (e.g. venue garden shot)
          alt="FAQ Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl text-lg">
            We’ve listed answers to the most common questions from our clients.  
            Can’t find what you’re looking for? Feel free to{" "}
            <a href="/contact" className="underline text-amber-400 hover:text-amber-300">
              contact us
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 md:px-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-5 cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-semibold">
                Q: {faq.question}
              </h2>
              {openIndex === index ? (
                <FiChevronUp className="text-amber-600 text-2xl" />
              ) : (
                <FiChevronDown className="text-gray-500 text-2xl" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 leading-relaxed">
                <strong>A:</strong> {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Image Showcase Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-16 pb-20">
        <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/image-8.jpg" // e.g. marquee setup or garden view
            alt="Marquee Event"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/image-8.jpg" // e.g. catering setup
            alt="Catering Setup"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/image-8.jpg" // e.g. evening garden lighting
            alt="Evening Ambience"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
    </main>
  );
}
