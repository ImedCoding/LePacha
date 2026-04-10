import Image from "next/image";
import Link from "next/link";
import { type Locale, restaurant } from "@/data/restaurant";
import { ButtonLink } from "./button-link";

type SiteHeaderProps = {
  activePage?: "home" | "menu";
  locale: Locale;
  nextLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  t: {
    home: string;
    reviews: string;
    menu: string;
    info: string;
    call: string;
    order: string;
    lang: string;
  };
};

export function SiteHeader({
  activePage = "home",
  nextLocale,
  onLocaleChange,
  t
}: SiteHeaderProps) {
  const navItems = [
    { key: "home", href: "/", label: t.home },
    { key: "menu", href: "/menu", label: t.menu }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ember/25 bg-charcoal/88 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 font-black uppercase text-ash">
          <span className="relative grid h-12 w-12 place-items-center overflow-hidden border border-ember bg-charcoal shadow-ember transition group-hover:border-[#ff8126]">
            <Image src="/logo.png" alt="Le Pacha 2" fill sizes="48px" className="object-contain p-1" priority />
          </span>
          <span className="hidden sm:inline">{restaurant.name}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = activePage === item.key;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-xs font-black uppercase transition hover:text-ember ${
                  isActive ? "text-ember" : "text-ash/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href={restaurant.links.phone} variant="quiet" className="min-h-11 px-4 py-2 text-sm">
            {t.call}
          </ButtonLink>
          <ButtonLink href={restaurant.links.uberEats} className="min-h-11 px-4 py-2 text-sm">
            {t.order}
          </ButtonLink>
          <button
            type="button"
            onClick={() => onLocaleChange(nextLocale)}
            className="brand-button inline-flex min-h-11 items-center gap-2 border border-ember px-4 py-2 text-sm font-black uppercase text-ember transition hover:bg-ember hover:text-charcoal"
            aria-label="Changer de langue"
          >
            <FlagIcon locale={nextLocale} />
            {t.lang}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => onLocaleChange(nextLocale)}
            className="inline-flex items-center gap-2 border border-ember px-3 py-2 text-xs font-black uppercase text-ember"
            aria-label="Changer de langue"
          >
            <FlagIcon locale={nextLocale} />
            {t.lang}
          </button>
          <Link href="/#info" className="border border-ember px-3 py-2 text-xs font-black uppercase text-ember">
            11-22
          </Link>
        </div>
      </div>
    </header>
  );
}

function FlagIcon({ locale }: { locale: Locale }) {
  if (locale === "tr") {
    return (
      <svg className="h-4 w-6 shrink-0 overflow-hidden border border-white/20" viewBox="0 0 30 20" aria-hidden="true">
        <rect width="30" height="20" fill="#E30A17" />
        <circle cx="12" cy="10" r="5.3" fill="#fff" />
        <circle cx="14" cy="10" r="4.2" fill="#E30A17" />
        <path d="M20.5 6.6l.8 2.2h2.3l-1.9 1.4.8 2.2-2-1.4-1.9 1.4.7-2.2-1.8-1.4h2.3z" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg className="h-4 w-6 shrink-0 overflow-hidden border border-white/20" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="10" height="20" x="0" fill="#0055A4" />
      <rect width="10" height="20" x="10" fill="#fff" />
      <rect width="10" height="20" x="20" fill="#EF4135" />
    </svg>
  );
}
