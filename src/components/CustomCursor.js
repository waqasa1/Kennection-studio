"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { damping: 20, stiffness: 250 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 250 });

  const ringX = useSpring(0, { damping: 30, stiffness: 150 });
  const ringY = useSpring(0, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="custom-cursor hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      <motion.div
        className="custom-cursor-ring hidden lg:block"
        animate={{
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
          borderColor: isHovering ? "#c4906a" : "rgba(255, 255, 255, 0.5)",
          backgroundColor: isHovering ? "rgba(196, 144, 106, 0.1)" : "rgba(196, 144, 106, 0)",
        }}
        style={{
          x: ringX,
          y: ringY,
        }}
      />
    </>
  );
}
