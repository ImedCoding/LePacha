import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

const variants = {
  primary:
    "border-ember bg-ember text-charcoal shadow-ember hover:bg-[#ff8126] hover:border-[#ff8126]",
  secondary:
    "border-white/18 bg-ash/8 text-ash hover:border-ember/70 hover:bg-ember/12",
  quiet:
    "border-white/12 bg-coal/80 text-ash hover:border-ember/60 hover:text-ember"
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`brand-button inline-flex min-h-14 items-center justify-center border px-5 py-3 text-base font-black uppercase transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2 focus:ring-offset-charcoal ${variants[variant]} ${className}`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
