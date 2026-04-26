"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Campaign Photography",
      desc: ["Fashion. Beauty.", "Lifestyle. Product.", "Commercial editorial."],
    },
    {
      id: "02",
      title: "Video & Brand Ads",
      desc: ["Cinematic brand ads.", "Reels. Hero films.", "Content creator shoots."],
    },
    {
      id: "03",
      title: "Studio & Lighting",
      desc: ["Aputure. Astera.", "Full lighting setups.", "Available for hire."],
    },
  ];

  return (
    <section id="services" className="bg-paper py-32 md:py-48 text-studio-black">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <span className="font-dm text-[11px] uppercase tracking-widest text-dust mb-4">
                {service.id}
              </span>
              <h3 className="font-cormorant text-3xl font-light mb-8">
                {service.title}
              </h3>
              <div className="w-full h-[1px] bg-dust/30 mb-8" />
              <ul className="space-y-1">
                {service.desc.map((line, i) => (
                  <li key={i} className="font-eb italic text-lg text-studio-black/70">
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 text-center"
        >
          <p className="font-cormorant italic text-2xl text-studio-black/60">
            "One studio. Every brand."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
