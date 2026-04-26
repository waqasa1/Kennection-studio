"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/sections/Services";
import WorkGrid from "@/components/sections/WorkGrid";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <main className="min-h-screen bg-studio-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <Marquee />
          <Services />
          <WorkGrid />
          <WhoWeWorkWith />
          <Footer />
        </>
      )}
    </main>
  );
}
