"use client";
import Image from "next/image";
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
    { name: "Suppliers", href: "/suppliers" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacyandpolicy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#3A1E01] text-[#F4EFEA] shadow-md z-50">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-4 sm:px-2 py-4 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/zinnia-logo-black-horizontal.png"
            alt="Zinnia Gardens"
            width={160}
            height={60}
            className="invert drop-shadow-md w-[130px] sm:w-[160px] md:w-[180px] h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm xl:text-base transition-all duration-200 ${
                pathname === link.href
                  ? "bg-[#B98B4E] text-white"
                  : "hover:bg-[#B98B4E] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Book Button */}
        <div className="hidden lg:flex">
          <Link
            href="/book-viewing"
            className="bg-[#B98B4E] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#8A632D] transition shadow-sm hover:shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl p-2 rounded-md hover:bg-[#4A2A0C] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-[#F4EFEA] text-[#3A1E01] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block font-medium px-3 py-2 rounded-md transition ${
                pathname === link.href
                  ? "bg-[#3A1E01] text-white"
                  : "hover:bg-[#3A1E01] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book-viewing"
            onClick={() => setMenuOpen(false)}
            className="bg-[#B98B4E] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#3A1E01] transition text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
