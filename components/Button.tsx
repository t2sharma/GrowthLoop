"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary via-primary/90 to-secondary text-white shadow-md shadow-primary/40 hover:brightness-110",
        secondary:
          "border border-secondary/60 bg-transparent text-secondary hover:bg-secondary/10",
        ghost:
          "bg-transparent text-body hover:bg-borderSubtle/40 hover:text-heading",
      },
      size: {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-5 py-2.5",
        lg: "text-base px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ComponentProps<typeof motion.button>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({
  variant,
  size,
  children,
  className,
  asChild, // reserved for future use; not forwarded to DOM
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </motion.button>
  );
};
