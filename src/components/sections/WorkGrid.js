"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkGrid() {
  const projects = [
    {
      brand: "L’Éclat",
      type: "Fashion Editorial",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000",
    },
    {
      brand: "Nomad",
      type: "Brand Film",
      image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2000",
    },
    {
      brand: "Aura Beauty",
      type: "Product Shoot",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000",
    },
    {
      brand: "Vogue PK",
      type: "Cover Story",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000",
    },
  ];

  return (
    <section id="work" className="bg-studio-black py-32 md:py-48">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-20"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-warm-white">
            Featured <span className="italic">Work</span>
          </h2>
          <span className="font-dm text-[10px] uppercase tracking-widest text-dust">
            04 selected cases
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-studio-black z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
              
              <Image
                src={project.image}
                alt={project.brand}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              />

              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-dm text-[10px] uppercase tracking-widest text-skin-warm mb-2">
                  {project.type}
                </p>
                <h3 className="font-cormorant text-3xl text-warm-white">
                  {project.brand}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <button className="flex items-center gap-4 group cursor-pointer">
            <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-dust group-hover:text-warm-white transition-colors">
              See All Work
            </span>
            <span className="text-dust group-hover:text-warm-white group-hover:translate-x-2 transition-all">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
