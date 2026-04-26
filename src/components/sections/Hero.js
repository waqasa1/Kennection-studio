"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../app/assets/kendoll_hero_image.webp";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-studio-black overflow-hidden flex items-center">
      <div className="max-container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        
        {/* Text Content */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-[1px] bg-skin-warm" />
            <span className="font-dm text-[10px] uppercase tracking-[0.2em] text-dust">
              Production Studio · Pakistan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
            className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-warm-white leading-[1.1] mb-8"
          >
            Your Brand.<br />
            <span className="italic">Our Frame.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-eb italic text-lg md:text-xl text-dust max-w-md mb-12"
          >
            Cinematic campaigns for brands and content creators. Commercial photography and creative direction.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-skin-warm">
              Book a Shoot
            </span>
            <span className="text-skin-warm transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </motion.button>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          className="relative h-[60vh] lg:h-[80vh] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-studio-black via-transparent to-transparent z-10" />
          <Image
            src={heroImage}
            alt="Cinematic Portrait"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-deep-shadow -z-0 opacity-50" />
    </section>
  );
}
