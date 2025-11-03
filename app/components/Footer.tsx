"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

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
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/footer-texture.png')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Image
            src="/zinnia-logo-black-horizontal.png"
            alt="Zinnia Gardens"
            width={150}
            height={60}
            className="invert mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-100">
            Zinnia Gardens is a privately owned estate venue nestled in the heart of Surrey — 
            offering timeless elegance and a secluded setting for unforgettable celebrations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-amber-500 mt-1" />
              <span>
                Zinnia Gardens, Surrey, United Kingdom
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-amber-500" />
              <span>+44 1234 567890</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-amber-500" />
              <a
                href="mailto:info@zinniagardens.com"
                className="hover:text-amber-500"
              >
                info@zinniagardens.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Follow Us
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Stay connected for our latest weddings and event updates.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-amber-500 rounded-full transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-amber-500 rounded-full transition"
            >
              <FaFacebookF className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zinnia Gardens. All rights reserved.
      </div>
    </footer>
  );
}
