"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Section = ({ children, className = "", ...rest }: SectionProps) => {
  return (
    <section
      className={`px-6 py-12 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};
