"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/kennectionLogo_white.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-studio-black/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
        }`}
    >
      <div className="max-container flex items-center justify-between">
        <Link href="/" className="relative h-7 w-24 md:h-16 md:w-80 transition-opacity hover:opacity-80">
          <Image
            src={logo}
            alt="Kennection"
            fill
            sizes="(max-width: 768px) 96px, 320px"
            className="object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4 md:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative font-dm text-[10px] uppercase tracking-[0.2em] text-warm-white/80 hover:text-warm-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-skin-warm transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="#book"
            className="font-dm text-[10px] uppercase tracking-[0.2em] px-6 py-2 border border-skin-warm/30 text-skin-warm hover:bg-skin-warm hover:text-studio-black transition-all duration-300"
          >
            Book
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
