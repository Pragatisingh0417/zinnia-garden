"use client";

import React from "react";
import {
  FaCamera,
  FaLeaf,
  FaChild,
  FaMusic,
  FaCar,
  FaTaxi,
  FaGift,
} from "react-icons/fa"; // ✅ replaced FaBalloon with FaGift
import { GiHarp } from "react-icons/gi";
import Image from "next/image";

type Supplier = {
  name: string;
  website?: string;
  contact?: string;
};

type SupplierGroup = {
  category: string;
  icon: React.ReactNode;
  list: Supplier[];
};

export default function SuppliersPage() {
  const suppliers: SupplierGroup[] = [
    {
      category: "Photography",
      icon: <FaCamera className="text-amber-600 text-3xl" />,
      list: [
        { name: "Sarah Legge", website: "https://www.sarahleggephotography.co.uk" },
        { name: "Ian Clarke", website: "https://www.iainclarkephotography.co.uk" },
        { name: "Sam Dorrington", website: "https://www.everlastingmoments.co.uk" },
        { name: "Chris Sharp", website: "https://www.sharp-pictures.com" },
        { name: "Adam Jefferson", website: "https://www.ajphotographic.co.uk" },
      ],
    },
    {
      category: "Florists",
      icon: <FaLeaf className="text-amber-600 text-3xl" />,
      list: [{ name: "Ashdown Events", website: "https://www.ashdownevents.co.uk" }],
    },
    {
      category: "Soft Play for Children",
      icon: <FaChild className="text-amber-600 text-3xl" />,
      list: [{ name: "Krazy Kidz", website: "https://www.kksoftplay.co.uk" }],
    },
    {
      category: "Harpist",
      icon: <GiHarp className="text-amber-600 text-3xl" />,
      list: [
        {
          name: "Lynda Hayes",
          website: "https://www.surreyharpist.co.uk",
          contact: "07776 232 709",
        },
      ],
    },
    {
      category: "Musicians",
      icon: <FaMusic className="text-amber-600 text-3xl" />,
      list: [{ name: "Spotlight Entertainment", contact: "020 8641 4522" }],
    },
    {
      category: "Car Hire",
      icon: <FaCar className="text-amber-600 text-3xl" />,
      list: [{ name: "Classic Car Hire", website: "https://www.classic-hire.co.uk" }],
    },
    {
      category: "Balloons",
      icon: <FaGift className="text-amber-600 text-3xl" />, // ✅ replaced FaBalloon with FaGift
      list: [
        { name: "Alison", website: "https://www.balloonacy.co.uk", contact: "07914 087901" },
        { name: "Ashdown Events", website: "https://www.ashdownevents.co.uk" },
      ],
    },
    {
      category: "Indian Mandaps",
      icon: <FaLeaf className="text-amber-600 text-3xl" />,
      list: [{ name: "Exclusive Events", website: "https://www.exclusiveevents.com" }],
    },
    {
      category: "Taxi Company",
      icon: <FaTaxi className="text-amber-600 text-3xl" />,
      list: [
        {
          name: "Platinum Drive Ltd",
          website: "https://www.platinumdriveltd.com",
          contact: "01737 379 379",
        },
      ],
    },
  ];

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <Image
          src="/suppliers/supplier-image-2.jpg" 
          alt="Zinnia Gardens Suppliers"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Recommended Suppliers
          </h1>
          <p className="max-w-2xl text-lg">
            Our trusted network of professional suppliers ensures your event runs smoothly and beautifully.
          </p>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {suppliers.map((group, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-4">
              {group.icon}
              <h2 className="text-xl font-semibold text-gray-900">{group.category}</h2>
            </div>

            <ul className="space-y-2">
              {group.list.map((supplier, i) => (
                <li key={i}>
                  <p className="font-medium text-gray-800">{supplier.name}</p>
                  {supplier.website && (
                    <a
                      href={supplier.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 text-sm underline"
                    >
                      {supplier.website.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                  {supplier.contact && (
                    <p className="text-sm text-gray-600 mt-1">📞 {supplier.contact}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-amber-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Want to Partner With Us?</h2>
        <p className="text-gray-700 mb-6">
          If you're a supplier who shares our commitment to excellence, we’d love to hear from you.
        </p>
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
