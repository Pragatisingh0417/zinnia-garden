"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Marquee", href: "/marquee" },
  { name: "Catering", href: "/catering" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Suppliers", href: "/suppliers" },
  { name: "FAQ", href: "/faq" },
  { name: "Privacy Policy", href: "/privacyandpolicy" },
];

export default function Footer() {
  const midIndex = Math.ceil(links.length / 2);
  const firstColumn = links.slice(0, midIndex);
  const secondColumn = links.slice(midIndex);

  const clientImages = [
    "/gallery/Surrey-wedding-photographer_0160.jpg",
    "/gallery/Surrey-wedding-photographer_0172.jpg",
    "/images/zinnia-image-1.jpg",
    "/gallery/Surrey-wedding-photographer_0160.jpg",
  ];

  return (
    <footer className=" relative bg-[#3A1E01] text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,150,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[1400px]  mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div>
          <div className="flex items-center space-x-3 mb-5">
            <Image
              src="/zinnia-logo-black-horizontal.png"
              alt="Zinnia Gardens"
              width={160}
              height={60}
              className="invert drop-shadow-lg"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Nestled in the heart of Surrey, Zinnia Gardens is a privately owned estate — a secluded and exclusive location that has delighted guests for over a decade. We open our gates to a select number of private events each year, ensuring every moment receives our utmost care.
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
From intimate weddings and milestone celebrations to elegant corporate events, every occasion here becomes timeless. Our team and partners take pride in creating experiences that blend natural beauty with refined elegance.          </p>
        </div>

        {/* Quick Links (2 columns) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#c68c7c] after:mt-2">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-8">
            <ul className="space-y-2">
              {firstColumn.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#c68c7c] transition-colors duration-300 relative group"
                  >
                    <span>{link.name}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[#c68c7c] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2">
              {secondColumn.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#c68c7c] transition-colors duration-300 relative group"
                  >
                    <span>{link.name}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[#c68c7c] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
      <div>
  <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#c68c7c] after:mt-2">
    Contact Us
  </h3>

  <ul className="space-y-4 text-sm text-gray-300">
    <li className="flex items-start gap-3">
      <FaMapMarkerAlt className="text-[#c68c7c] mt-1 flex-shrink-0" />
      <span>
        Zinnia Gardens, 12 Croydon Lane,
        <br />
        Banstead, Surrey, SM7 3AN
      </span>
    </li>

    <li className="flex items-center gap-3">
      <FaPhoneAlt className="text-[#c68c7c] flex-shrink-0" />
      <span>+44 (0)20 3978 6385</span>
    </li>

    <li className="flex items-center gap-3">
      <FaPhoneAlt className="text-[#c68c7c] flex-shrink-0" />
      <span>+44 (0)7469 210 376</span>
    </li>

    <li className="flex items-center gap-3">
      <FaEnvelope className="text-[#c68c7c] flex-shrink-0" />
      <a
        href="mailto:info@zinniagardens.com"
        className="hover:text-[#c68c7c] transition-colors duration-300"
      >
        info@zinniagardens.com
      </a>
    </li>

    <li className="flex items-start gap-3">
      <FiClock className="text-[#c68c7c] mt-1 flex-shrink-0" />
      <div>
        <p className="font-medium text-white">Opening Hours</p>
        <p>
          Mon - Sat: 10:00 - 20:00
          <br />
          Sun: 10:00 - 16:00
        </p>
        <p className="mt-2 italic text-gray-400">
          Visitors: by appointment with the event manager
        </p>
      </div>
    </li>
  </ul>
</div>


        {/* Follow Us + Client Images */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#c68c7c] after:mt-2">
            Follow Us
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Follow us for glimpses of our most beautiful weddings and events.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
            {[{ icon: <FaInstagram />, href: "https://instagram.com" },
            { icon: <FaFacebookF />, href: "https://facebook.com" }].map(
              (social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-800 hover:bg-[#c68c7c] text-white rounded-full shadow-md transition-transform duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              )
            )}
          </div>

          {/* Client Images */}
          <div className="grid grid-cols-2 gap-3">
            {clientImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Client ${i + 1}`}
                  width={100}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="relative border-t border-neutral-800 mt-16 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#c68c7c] font-medium">Zinnia Gardens</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
