"use client";

import { motion } from "framer-motion";

export default function WhoWeWorkWith() {
  return (
    <section className="bg-paper py-32 md:py-48 text-studio-black">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-cormorant italic text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              "From emerging labels to established brands — if the shot matters, this is where it gets made."
            </h2>
          </motion.div>

          {/* Right Column: List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-8 lg:pt-4"
          >
            {[
              "Fashion & Apparel Brands",
              "Beauty & Lifestyle Labels",
              "Content Creators & Influencers",
              "Ad Agencies & Production Houses",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="w-12 h-[1px] bg-dust group-hover:w-20 group-hover:bg-skin-warm transition-all duration-500" />
                <span className="font-cormorant text-2xl md:text-3xl text-studio-black/80">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Equipment Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-40 border-t border-dust/30 pt-12"
        >
          <div className="flex flex-wrap justify-between gap-8 md:gap-12">
            {["Aputure", "Astera", "Sony", "Canon", "DJI"].map((brand) => (
              <span
                key={brand}
                className="font-dm text-[11px] uppercase tracking-[0.3em] text-dust"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
