"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Marquee", href: "/marquee" },
    { name: "Catering", href: "/catering" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Suppliers", href: "/suppliers" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacyandpolicy" },
  ];

  return (
    <nav className="bg-white text-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <img
            src="/zinnia-logo-black-horizontal.png"
            alt="Zinnia Gardens Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                pathname === link.href
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Book Button */}
        <div className="hidden md:flex">
          <Link
            href="/book-viewing"
            className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-[#c68c7c] transition shadow-sm hover:shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold px-3 py-2 rounded-md transition ${
                  pathname === link.href
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-black hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book-viewing"
              className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
