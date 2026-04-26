"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../app/assets/kennectionLogo.png";

export default function LoadingScreen({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 0-0.4s: Empty Paper background (Initial)
    const timers = [
      setTimeout(() => setStep(1), 400),  // 0.4s: Show Logo
      setTimeout(() => setStep(2), 1800), // 1.8s: Sweep Line
      setTimeout(() => setStep(3), 2200), // 2.2s: Show Tagline
      setTimeout(() => {
        onComplete();
      }, 3200), // 2.8s sequence + some buffer for final pause/transition
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-studio-black overflow-hidden">
      {/* Top Curtain */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-studio-black z-10"
      />
      
      {/* Bottom Curtain */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-studio-black z-10"
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Logo Reveal */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <Image
                src={logo}
                alt="Kennection Logo"
                width={600}
                height={180}
                style={{ width: 'auto', height: 'auto' }}
                className="invert brightness-0"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Line Sweep */}
        <div className="w-64 h-[1px] bg-dust/20 relative overflow-hidden">
          {step >= 2 && (
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-skin-warm"
            />
          )}
        </div>

        {/* Tagline Reveal */}
        <div className="mt-4 h-6 overflow-hidden">
          <AnimatePresence>
            {step >= 3 && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="hidden md:block font-eb italic text-sm tracking-widest text-dust"
              >
                Visual Studio · Pakistan
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
