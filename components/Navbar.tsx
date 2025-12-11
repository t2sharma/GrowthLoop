"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-borderSubtle/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-heading"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-lg">
            GL
          </span>
          <span className="text-base sm:text-lg">GrowthLoop</span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-sm text-body md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 transition-colors hover:text-heading ${
                  isActive ? "text-heading" : "text-body"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+16692547777" className="hidden md:inline-flex">
            <Button size="sm">Get a Free Consultation</Button>
          </a>
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderSubtle/60 bg-background text-heading shadow-sm outline-none ring-primary/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-0.5">
              <span
                className={`block h-[2px] w-4 rounded-full bg-current transition-transform ${
                  isOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-4 rounded-full bg-current transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-4 rounded-full bg-current transition-transform ${
                  isOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {/* Mobile navigation drawer */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="md:hidden border-t border-borderSubtle/60 bg-background/95 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-1 text-sm text-body">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors ${
                      isActive
                        ? "bg-primary/10 text-heading"
                        : "hover:bg-borderSubtle/40 hover:text-heading"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <div className="mt-2 pt-1">
                <a
                  href="tel:+16692547777"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full" size="md">
                    Get a Free Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
};
