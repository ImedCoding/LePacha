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
    "border-flame bg-flame text-ash shadow-ember hover:bg-[#647d4b] hover:border-[#647d4b]",
  secondary:
    "border-[#d4c49a]/35 bg-transparent text-ash hover:border-ember hover:bg-white/5",
  quiet:
    "border-[#d4c49a]/18 bg-coal/80 text-ash hover:border-ember/70 hover:text-ember"
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
