"use client";

export default function Marquee() {
  const items = [
    "BRAND CAMPAIGNS",
    "FASHION EDITORIALS",
    "CONTENT CREATOR PRODUCTIONS",
    "APUTURE LIGHTING",
    "ASTERA TUBES",
    "COMMERCIAL PHOTOGRAPHY",
    "CINEMATIC DIRECTION",
  ];

  return (
    <div className="bg-deep-shadow py-6 border-y border-white/5 overflow-hidden">
      <div className="animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {items.map((item, index) => (
              <span
                key={index}
                className="font-dm text-[10px] uppercase tracking-[0.3em] text-dust/60 mx-12 flex items-center"
              >
                {item}
                <span className="ml-24 w-1 h-1 bg-skin-warm/40 rounded-full" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
