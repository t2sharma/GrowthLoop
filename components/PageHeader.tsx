"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export const PageHeader = ({ eyebrow, title, subtitle, actions }: PageHeaderProps) => {
  return (
    <div className="border-b border-borderSubtle/60 bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="max-w-2xl text-sm sm:text-base text-body">{subtitle}</p>
            )}
          </div>
          {actions && <div className="flex-shrink-0">{actions}</div>}
        </motion.div>
      </div>
    </div>
  );
};
