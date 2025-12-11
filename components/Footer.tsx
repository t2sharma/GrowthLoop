import Link from "next/link";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="border-t border-borderSubtle/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-body sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-2">
          <div>
            <p className="font-semibold text-heading">GrowthLoop</p>
            <p className="text-xs text-body/80">
              Helping Local Businesses Grow, On Repeat.
            </p>
          </div>
          <p className="flex items-center gap-2 text-xs text-body/80">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-[10px] text-primary">
              ☎
            </span>
            <span>Call us:</span>
            <a
              href="tel:+16692547777"
              className="font-medium underline underline-offset-4 hover:text-heading"
            >
              +1 669-254-7777
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services" className="hover:text-heading">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-heading">
            Portfolio
          </Link>
          <Link href="/pricing" className="hover:text-heading">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-heading">
            Contact
          </Link>
        </div>
        <div className="flex flex-col items-start gap-2 text-xs text-body/80 sm:items-end">
          <div className="flex gap-3">
            <Link href="#" className="hover:text-heading">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-heading">
              Instagram
            </Link>
          </div>
          <p>© {year} GrowthLoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
