"use client";

// NOTE: This slideshow expects your preview screenshots to live under
// /public/previews/image1.png through /public/previews/image5.png.
// If image1.png–image5.png are currently in the project root, please
// move them into /public/previews/ so these paths resolve correctly.
// To change the visuals, update the slides array paths and labels below.

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Slide {
  id: number;
  label: string;
  file: string;
  urlLabel: string;
}

const slides: Slide[] = [
  { id: 1, label: "Food truck & Juice bar", file: "/previews/image1.png", urlLabel: "streetfuel.local" },
  { id: 2, label: "Barbershop Experience", file: "/previews/image2.png", urlLabel: "fadehouse.local" },
  { id: 3, label: "Indian Restaurant", file: "/previews/image3.png", urlLabel: "masalacourt.local" },
  { id: 4, label: "Jewellery Boutique", file: "/previews/image4.png", urlLabel: "swarna-atelier.local" },
  { id: 5, label: "Gym & Fitness Club", file: "/previews/image5.png", urlLabel: "ironpulse.local" },
];

const AUTO_PLAY_INTERVAL = 7000; // ms

export const WebsitePreviewSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser chrome */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-[10px] text-slate-400">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>
        <div className="max-w-[60%] truncate rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[10px] text-slate-400">
          {activeSlide.urlLabel}
        </div>
        <div className="text-xs text-slate-600">•••</div>
      </div>

      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.file}
              alt={activeSlide.label}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 60vw, 90vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next controls */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 text-sm text-slate-100 shadow-md transition hover:bg-slate-800/90"
          aria-label="Previous preview"
        >
          ◀
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 text-sm text-slate-100 shadow-md transition hover:bg-slate-800/90"
          aria-label="Next preview"
        >
          ▶
        </button>
      </div>
    </div>
  );
};
