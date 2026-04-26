"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/kennectionLogo_white.png";

export default function Footer() {
  const handleInstagramClick = (e) => {
    e.preventDefault();
    const username = "kennection_studio";
    const webUrl = `https://www.instagram.com/${username}/`;
    const appUrl = `instagram://user?username=${username}`;

    if (typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = appUrl;
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = webUrl;
        }
      }, 1000);
    } else {
      window.open(webUrl, '_blank');
    }
  };

  return (
    <footer id="book" className="bg-studio-black pt-48 pb-12 text-warm-white">
      <div className="max-container flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <span className="font-dm text-[11px] uppercase tracking-[0.3em] text-skin-warm mb-6 block">
            Ready to Shoot?
          </span>
          <h2 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light mb-12">
            Let's Build Something <span className="italic">Iconic.</span>
          </h2>
          <a
            href="mailto:studio@kennection.pk"
            className="font-eb italic text-2xl md:text-3xl text-skin-warm hover:text-warm-white transition-colors underline underline-offset-8"
          >
            studio@kennection.pk
          </a>
        </motion.div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="relative h-8 w-48 opacity-60">
            <Image
              src={logo}
              alt="Kennection"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>

          <div className="flex items-center gap-12">
            <span className="font-dm text-[10px] uppercase tracking-widest text-dust">
              © 2025 Kennection
            </span>
            <Link
              href="https://www.instagram.com/kennection_studio/"
              onClick={handleInstagramClick}
              className="font-dm text-[10px] uppercase tracking-widest text-dust hover:text-skin-warm transition-colors cursor-pointer"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
