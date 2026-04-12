"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {ArrowRight} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Resources", href: "#resources" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight shrink-0">
          <Image src="image/google.svg" alt="Logo" width={125} height={45} className="object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 block
                    ${isActive
                      ? "text-[#E91E63]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-px left-4 right-4 h-0.5 bg-[#E91E63] rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/schedule"
          className="hidden md:flex items-center gap-2 bg-[#E91E63] hover:bg-[#C2185B] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 shrink-0"
        >
          Schedule A Meeting
          <ArrowRight />
        </Link>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden flex flex-col justify-center gap-1.25 p-2 rounded-md bg-transparent border-none cursor-pointer"
        >
          <span
            className="block w-5.5 h-0.5 bg-gray-800 rounded-sm transition-transform duration-300"
            style={{ transform: isOpen ? "translateY(7px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5.5 h-0.5 bg-gray-800 rounded-sm transition-opacity duration-300"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="block w-5.5 h-0.5 bg-gray-800 rounded-sm transition-transform duration-300"
            style={{ transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col border-t border-gray-200 px-4 pb-5 pt-3 gap-1 bg-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-[15px] font-medium px-4 py-3 rounded-lg transition-colors duration-150 block
                  ${isActive
                    ? "text-[#E91E63] bg-pink-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/schedule"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-[#E91E63] hover:bg-[#C2185B] text-white text-[15px] font-semibold px-5 py-3.5 rounded-lg transition-colors duration-200 w-full"
          >
            Schedule A Meeting
            <ArrowRight />
          </Link>
        </div>
      )}
    </nav>
  );
}