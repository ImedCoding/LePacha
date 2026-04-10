"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileBar } from "@/components/sticky-mobile-bar";
import { content, type Locale, restaurant } from "@/data/restaurant";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
  photoFile: string;
};

export type MenuSection = {
  id: string;
  title: string;
  shortTitle: string;
  kicker: string;
  description: string;
  photoFile: string;
  items: MenuItem[];
};

export type MenuItemWithPhoto = MenuItem & {
  photoSrc: string | null;
};

export type MenuSectionWithPhoto = Omit<MenuSection, "items"> & {
  photoSrc: string | null;
  items: MenuItemWithPhoto[];
};

type MenuTranslationItem = Partial<
  Pick<MenuItem, "name" | "description" | "tags">
>;

type MenuTranslationSection = Partial<
  Pick<MenuSection, "title" | "shortTitle" | "kicker" | "description">
> & {
  items?: Record<string, MenuTranslationItem>;
};

export type MenuTranslations = {
  tr?: {
    sections: Record<string, MenuTranslationSection>;
  };
};

export type MenuData = {
  source: {
    url: string;
  };
  sections: MenuSection[];
  translations?: MenuTranslations;
};

type MenuPageClientProps = {
  sections: MenuSectionWithPhoto[];
  sourceUrl: string;
  translations?: MenuTranslations;
};

export function MenuPageClient({
  sections,
  sourceUrl,
  translations
}: MenuPageClientProps) {
  const [locale, setLocale] = useState<Locale>("fr");
  const nextLocale: Locale = locale === "fr" ? "tr" : "fr";
  const t = content[locale];
  const localizedSections = useMemo(
    () => localizeSections(sections, translations, locale),
    [sections, translations, locale]
  );
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: t.menuPage.jsonLdName,
    url: sourceUrl,
    hasMenuSection: localizedSections.map((section) => ({
      "@type": "MenuSection",
      name: section.title,
      description: section.description,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace(/[^\d,.-]/g, "").replace(",", "."),
          priceCurrency: "EUR"
        }
      }))
    }))
  };

  return (
    <>
      <SiteHeader
        activePage="menu"
        locale={locale}
        nextLocale={nextLocale}
        onLocaleChange={setLocale}
        t={t.nav}
      />
      <main className="max-w-full overflow-x-hidden bg-charcoal pb-28 md:pb-0">
        <MenuHero t={t.menuPage.hero} nav={t.nav} sections={localizedSections} />
        <CategoryRail
          ariaLabel={t.menuPage.categoriesAria}
          sections={localizedSections}
        />
        <section className="relative max-w-full overflow-x-hidden px-5 py-12 sm:px-6 lg:px-8">
          <div className="absolute inset-0 fire-noise opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(255,106,0,0.18),transparent_28rem),radial-gradient(circle_at_0%_45%,rgba(166,27,27,0.24),transparent_26rem)]" />
          <div className="relative mx-auto w-full max-w-7xl min-w-0">
            <div className="mb-9 grid gap-4 border-y border-white/12 py-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-black uppercase text-ember">
                  {t.menuPage.intro.eyebrow}
                </p>
                <h2 className="mt-2 text-4xl font-black uppercase leading-none text-ash sm:text-5xl">
                  {t.menuPage.intro.title}
                </h2>
              </div>
              <p className="max-w-md text-sm font-bold leading-6 text-ash/68">
                {t.menuPage.intro.note}
              </p>
            </div>

            <div className="grid gap-12">
              {localizedSections.map((section, index) => (
                <MenuSectionBlock
                  key={section.id}
                  section={section}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        <MenuFinalCta t={t.menuPage.finalCta} nav={t.nav} />
      </main>
      <StickyMobileBar activePage="menu" t={t.nav} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
    </>
  );
}

function localizeSections(
  sections: MenuSectionWithPhoto[],
  translations: MenuTranslations | undefined,
  locale: Locale
) {
  if (locale === "fr") {
    return sections;
  }

  const translatedSections = translations?.tr?.sections ?? {};

  return sections.map((section) => {
    const sectionTranslation = translatedSections[section.id];

    return {
      ...section,
      title: sectionTranslation?.title ?? section.title,
      shortTitle: sectionTranslation?.shortTitle ?? section.shortTitle,
      kicker: sectionTranslation?.kicker ?? section.kicker,
      description: sectionTranslation?.description ?? section.description,
      items: section.items.map((item) => {
        const itemTranslation = sectionTranslation?.items?.[item.id];

        return {
          ...item,
          name: itemTranslation?.name ?? item.name,
          description: itemTranslation?.description ?? item.description,
          tags: itemTranslation?.tags ?? item.tags
        };
      })
    };
  });
}

function MenuHero({
  t,
  nav,
  sections
}: {
  t: (typeof content.fr)["menuPage"]["hero"];
  nav: (typeof content.fr)["nav"];
  sections: MenuSectionWithPhoto[];
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-20 lg:min-h-[88svh]">
      <Image
        src={restaurant.images.menuSpotlight}
        alt="Grillades et frites Le Pacha 2"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[54%_42%] opacity-55 saturate-150"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.58)_0%,rgba(13,13,13,0.82)_48%,#0D0D0D_100%)] lg:bg-[linear-gradient(105deg,#0D0D0D_0%,rgba(13,13,13,0.92)_38%,rgba(13,13,13,0.36)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(255,106,0,0.48),transparent_25rem),radial-gradient(circle_at_10%_18%,rgba(166,27,27,0.32),transparent_20rem)]" />
      <div className="absolute inset-0 fire-noise opacity-25" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl min-w-0 gap-10 px-5 pb-10 pt-10 sm:px-6 lg:min-h-[calc(88svh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-flex border border-ember bg-charcoal/82 px-4 py-2 text-xs font-black uppercase text-ember shadow-ember">
            {t.eyebrow}
          </p>
          <h1 className="mt-7 max-w-4xl text-6xl font-black uppercase leading-[0.82] text-ash text-shadow-fire sm:text-7xl lg:text-[8rem]">
            {t.title}
            <span className="block break-words text-transparent brand-outline">
              {t.outline}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl border-l-4 border-ember pl-5 text-2xl font-black leading-tight text-ash sm:text-3xl">
            {t.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-ash/72">
            {t.text}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex">
            <ButtonLink
              href={restaurant.links.uberEats}
              variant="primary"
              className="min-h-14 px-4 text-sm sm:min-h-16 sm:px-7 sm:text-base"
            >
              {nav.order}
            </ButtonLink>
            <ButtonLink
              href={restaurant.links.phone}
              variant="secondary"
              className="min-h-14 px-4 text-sm sm:min-h-16 sm:px-7 sm:text-base"
            >
              {nav.call}
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden min-h-[38rem] lg:block">
          <div className="absolute right-0 top-8 w-[31rem] border border-ember/45 bg-charcoal/82 p-6 shadow-ember backdrop-blur menu-board-cut">
            <p className="text-xs font-black uppercase text-ember">
              {t.boardEyebrow}
            </p>
            <p className="mt-3 max-w-md text-lg font-black leading-tight text-ash">
              {t.boardText}
            </p>
            <div className="mt-7 grid gap-3">
              {sections.slice(0, 5).map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group grid grid-cols-[2.75rem_1fr_auto] items-center gap-3 border-t border-white/12 pt-3"
                >
                  <span className="text-2xl font-black text-ember">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-black uppercase text-ash transition group-hover:text-ember">
                    {section.shortTitle}
                  </span>
                  <span className="text-xs font-black uppercase text-ash/45">
                    {section.items.length}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="border border-white/12 bg-coal/82 p-4">
      <p className="text-4xl font-black leading-none text-ash">{number}</p>
      <p className="mt-2 text-xs font-black uppercase text-ember">{label}</p>
    </div>
  );
}

function CategoryRail({
  ariaLabel,
  sections
}: {
  ariaLabel: string;
  sections: MenuSectionWithPhoto[];
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className="sticky top-[4.5rem] z-30 max-w-full overflow-x-hidden border-y border-ember/25 bg-charcoal/92 px-5 py-3 backdrop-blur sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto overscroll-x-contain">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="brand-button shrink-0 border border-white/12 bg-coal/80 px-4 py-3 text-xs font-black uppercase text-ash/76 transition hover:border-ember hover:bg-ember hover:text-charcoal"
          >
            {section.shortTitle}
          </a>
        ))}
      </div>
    </nav>
  );
}

function MenuSectionBlock({
  section,
  index
}: {
  section: MenuSectionWithPhoto;
  index: number;
}) {
  const isCompact = section.items.length <= 2;
  const layoutClass = isCompact
    ? "md:grid-cols-[0.5fr_1.5fr]"
    : "lg:grid-cols-[0.7fr_1.3fr]";
  const photoClass = isCompact ? "h-32 sm:h-40" : "h-56 sm:h-72";
  const titleClass = isCompact
    ? "mt-3 text-3xl font-black uppercase leading-none text-ash sm:text-4xl"
    : "mt-3 text-4xl font-black uppercase leading-none text-ash sm:text-5xl";
  const itemsClass = isCompact
    ? "grid gap-3 sm:grid-cols-2"
    : "grid gap-3 md:grid-cols-2";

  return (
    <section id={section.id} className="max-w-full scroll-mt-36 overflow-hidden">
      <div className={`grid w-full min-w-0 gap-6 ${layoutClass} lg:items-start`}>
        <div className={`min-w-0 ${isCompact ? "" : "lg:sticky lg:top-36"}`}>
          <div className="relative overflow-hidden border border-ember/35 bg-coal shadow-card menu-board-cut">
            <MenuPhoto
              photoSrc={section.photoSrc}
              alt={section.title}
              className={photoClass}
              label={section.kicker}
              priority={index === 0}
            />
            <div className="border-t border-white/12 p-5 sm:p-6">
              <p className="text-sm font-black uppercase text-ember">
                {String(index + 1).padStart(2, "0")} - {section.kicker}
              </p>
              <h2 className={`${titleClass} break-words`}>{section.title}</h2>
              <p className="mt-4 text-sm font-bold leading-6 text-ash/68">
                {section.description}
              </p>
            </div>
          </div>
        </div>

        <div className={`${itemsClass} min-w-0`}>
          {section.items.map((item) => (
            <MenuItemRow key={item.id} item={item} sectionTitle={section.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItemRow({
  item,
  sectionTitle
}: {
  item: MenuItemWithPhoto;
  sectionTitle: string;
}) {
  return (
    <article className="group relative min-w-0 max-w-full overflow-hidden border border-white/10 bg-[#141414]/92 shadow-[0_18px_42px_rgba(0,0,0,0.26)] transition duration-200 hover:-translate-y-0.5 hover:border-ember/55 hover:bg-[#191919]">
      <div className="absolute inset-y-0 left-0 w-1 bg-ember opacity-70 transition group-hover:w-2" />
      <div className="grid min-h-[11rem] grid-cols-[5.75rem_minmax(0,1fr)] sm:grid-cols-[7rem_minmax(0,1fr)]">
        <MenuPhoto
          photoSrc={item.photoSrc}
          alt={`${item.name} - ${sectionTitle}`}
          className="h-full min-h-[11rem]"
          label="Photo"
        />
        <div className="flex min-w-0 flex-col justify-between p-4">
          <div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <h3 className="min-w-0 break-words text-xl font-black uppercase leading-none text-ash transition group-hover:text-ember">
                {item.name}
              </h3>
              <p className="whitespace-nowrap bg-ember px-2.5 py-2 text-sm font-black text-charcoal shadow-ember sm:px-3">
                {item.price}
              </p>
            </div>
            <p className="mt-3 text-sm font-bold leading-6 text-ash/66">
              {item.description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 bg-charcoal/70 px-2.5 py-1 text-[0.68rem] font-black uppercase text-ash/54"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function MenuPhoto({
  photoSrc,
  alt,
  className,
  label,
  priority = false
}: {
  photoSrc: string | null;
  alt: string;
  className: string;
  label: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-coal ${className}`}>
      {photoSrc ? (
        <Image
          src={photoSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 42vw"
          className="object-cover saturate-150 transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(255,106,0,0.35),transparent_7rem),linear-gradient(135deg,#1A1A1A,#0D0D0D_55%,#2b0f08)]">
          <div className="absolute inset-0 fire-noise opacity-30" />
          <div className="absolute left-3 top-3 border border-ember/55 bg-charcoal/72 px-2 py-1 text-[0.62rem] font-black uppercase text-ember">
            {label}
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-2xl font-black uppercase leading-none text-transparent brand-outline">
              LP2
            </p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(13,13,13,0.25))]" />
    </div>
  );
}

function MenuFinalCta({
  t,
  nav
}: {
  t: (typeof content.fr)["menuPage"]["finalCta"];
  nav: (typeof content.fr)["nav"];
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal px-5 py-20 sm:px-6 lg:px-8">
      <Image
        src={restaurant.images.finalCta}
        alt="Burger et frites Le Pacha 2"
        fill
        sizes="100vw"
        className="object-cover opacity-45 saturate-150"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0D0D0D,rgba(13,13,13,0.72),#0D0D0D)]" />
      <div className="absolute inset-x-0 top-0 h-2 bg-ember shadow-ember" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase text-ember">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-none text-ash text-shadow-fire sm:text-6xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-ash/70">
            {t.text}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[22rem] lg:grid-cols-1">
          <ButtonLink href={restaurant.links.uberEats} className="min-h-16">
            {nav.order}
          </ButtonLink>
          <ButtonLink
            href={restaurant.links.phone}
            variant="secondary"
            className="min-h-16"
          >
            {nav.call}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
