"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileBar } from "@/components/sticky-mobile-bar";
import { content, type Locale, restaurant } from "@/data/restaurant";

export type MenuItemPrice = {
  label: string;
  value: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price?: string;
  prices?: MenuItemPrice[];
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
  const totalItems = localizedSections.reduce(
    (count, section) => count + section.items.length,
    0
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
          price: getStructuredPrice(item),
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
        <MenuHero
          t={t.menuPage.hero}
          nav={t.nav}
          sections={localizedSections}
          sectionCount={localizedSections.length}
          totalItems={totalItems}
        />
        <CategoryRail
          ariaLabel={t.menuPage.categoriesAria}
          sections={localizedSections}
        />
        <section className="relative max-w-full overflow-x-hidden bg-[linear-gradient(180deg,#090909_0%,#0f130d_18%,#0a0b09_100%)] px-5 py-12 sm:px-6 lg:px-8">
          <div className="absolute inset-0 fire-noise opacity-12" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_10%,rgba(188,171,117,0.16),transparent_26rem),radial-gradient(circle_at_0%_45%,rgba(74,46,34,0.26),transparent_28rem),radial-gradient(circle_at_18%_100%,rgba(82,108,63,0.18),transparent_24rem)]" />
          <div className="relative mx-auto min-w-0 max-w-7xl">
            <div className="mb-9 grid gap-4 border-y border-[#d4c49a]/20 py-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="script-type text-2xl leading-none text-[#d4c49a]">
                  {t.menuPage.intro.eyebrow}
                </p>
                <h2 className="display-type mt-2 text-4xl font-bold uppercase leading-none text-ash sm:text-5xl">
                  {t.menuPage.intro.title}
                </h2>
              </div>
              <p className="max-w-md text-sm font-semibold leading-6 text-ash/68">
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

function getStructuredPrice(item: MenuItemWithPhoto) {
  const rawPrice = item.price ?? item.prices?.[0]?.value ?? "";
  return rawPrice.replace(/[^\d,.-]/g, "").replace(",", ".");
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
  sections,
  sectionCount,
  totalItems
}: {
  t: (typeof content.fr)["menuPage"]["hero"];
  nav: (typeof content.fr)["nav"];
  sections: MenuSectionWithPhoto[];
  sectionCount: number;
  totalItems: number;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-20 lg:min-h-[88svh]">
      <Image
        src={restaurant.images.hero}
        alt="Grillades Le Pacha"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_42%] opacity-48 saturate-125"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,9,0.6)_0%,rgba(9,9,9,0.84)_48%,#090909_100%)] lg:bg-[linear-gradient(108deg,#090909_0%,rgba(9,9,9,0.94)_40%,rgba(9,9,9,0.32)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(212,196,154,0.18),transparent_22rem),radial-gradient(circle_at_24%_18%,rgba(82,108,63,0.28),transparent_24rem),radial-gradient(circle_at_82%_100%,rgba(74,46,34,0.25),transparent_18rem)]" />
      <div className="absolute inset-0 fire-noise opacity-10" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl min-w-0 gap-10 px-5 pb-10 pt-10 sm:px-6 lg:min-h-[calc(88svh-5rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-flex border border-[#d4c49a]/55 bg-[#11130f]/82 px-4 py-2 text-xs font-black uppercase text-[#d4c49a] shadow-ember">
            {t.eyebrow}
          </p>
          <p className="script-type mt-7 text-3xl leading-none text-[#d4c49a] sm:text-4xl">
            {t.kicker}
          </p>
          <h1 className="display-type mt-2 max-w-4xl text-6xl font-bold uppercase leading-[0.84] text-ash sm:text-7xl lg:text-[7.25rem]">
            {t.title}
            <span className="brand-outline block break-words text-transparent">
              {t.outline}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl border-l-4 border-[#d4c49a] pl-5 text-2xl font-black leading-tight text-ash sm:text-3xl">
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

        <div className="relative hidden min-h-[42rem] lg:block">
          <div className="absolute inset-y-8 right-0 w-[31rem] overflow-hidden border border-[#d4c49a]/35 bg-[linear-gradient(180deg,rgba(20,23,17,0.92),rgba(13,15,12,0.96))] shadow-card menu-board-cut">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(82,108,63,0.2),transparent_18rem),radial-gradient(circle_at_88%_74%,rgba(212,196,154,0.1),transparent_16rem)]" />
            <div className="relative p-6">
              <p className="script-type text-3xl leading-none text-[#d4c49a]">
                {t.boardEyebrow}
              </p>
              <p className="mt-3 max-w-md text-lg font-black leading-tight text-ash">
                {t.boardText}
              </p>
              <div className="mt-7 grid gap-3">
                {sections.slice(0, 6).map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group grid grid-cols-[2.75rem_1fr_auto] items-center gap-3 border-t border-white/12 pt-3"
                  >
                    <span className="display-type text-3xl font-bold leading-none text-[#d4c49a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-black uppercase text-ash transition group-hover:text-[#d4c49a]">
                      {section.shortTitle}
                    </span>
                    <span className="rounded-sm border border-white/10 bg-white/5 px-2 py-1 text-xs font-black uppercase text-ash/60">
                      {section.items.length}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t border-[#d4c49a]/18 bg-[#4a2e22]/82 px-6 py-5">
              <p className="text-xs font-black uppercase text-[#f1e7cf]/72">
                {t.addressKicker}
              </p>
              <p className="mt-2 display-type text-3xl font-bold uppercase leading-none text-ash">
                {t.addressTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="border border-[#d4c49a]/25 bg-[linear-gradient(180deg,rgba(24,29,20,0.88),rgba(12,13,11,0.92))] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.22)]">
      <p className="display-type text-4xl font-bold leading-none text-ash">
        {number}
      </p>
      <p className="mt-2 text-xs font-black uppercase text-[#d4c49a]">
        {label}
      </p>
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
      className="sticky top-[4.5rem] z-30 max-w-full overflow-x-hidden border-y border-[#d4c49a]/15 bg-[#0e100d]/92 px-5 py-3 backdrop-blur sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto overscroll-x-contain">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="brand-button shrink-0 border border-[#d4c49a]/18 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-xs font-black uppercase text-ash/78 transition hover:border-[#d4c49a] hover:bg-[#4d6540] hover:text-ash"
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
    ? "md:grid-cols-[0.56fr_1.44fr]"
    : "lg:grid-cols-[0.72fr_1.28fr]";
  const photoClass = isCompact ? "h-32 sm:h-40" : "h-56 sm:h-72";
  const titleClass = isCompact
    ? "mt-3 display-type text-3xl font-bold uppercase leading-none text-ash sm:text-4xl"
    : "mt-3 display-type text-4xl font-bold uppercase leading-none text-ash sm:text-5xl";
  const itemsClass = isCompact
    ? "grid gap-3 sm:grid-cols-2"
    : "grid gap-3 md:grid-cols-2";

  return (
    <section id={section.id} className="max-w-full scroll-mt-36 overflow-hidden">
      <div className={`grid w-full min-w-0 gap-6 ${layoutClass} lg:items-start`}>
        <div className={`min-w-0 ${isCompact ? "" : "lg:sticky lg:top-36"}`}>
          <div className="relative overflow-hidden border border-[#d4c49a]/28 bg-[linear-gradient(180deg,rgba(18,22,17,0.96),rgba(11,12,10,0.96))] shadow-card menu-board-cut">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(82,108,63,0.18),transparent_18rem),radial-gradient(circle_at_84%_80%,rgba(74,46,34,0.18),transparent_18rem)]" />
            <MenuPhoto
              photoSrc={section.photoSrc}
              alt={section.title}
              className={photoClass}
              label={section.kicker}
              priority={index === 0}
            />
            <div className="relative border-t border-white/12 p-5 sm:p-6">
              <p className="text-sm font-black uppercase text-[#d4c49a]">
                {String(index + 1).padStart(2, "0")} - {section.kicker}
              </p>
              <h2 className={`${titleClass} break-words`}>{section.title}</h2>
              <p className="mt-4 text-sm font-semibold leading-6 text-ash/68">
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
    <article className="group relative min-w-0 max-w-full overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(23,27,20,0.96),rgba(15,16,13,0.98))] shadow-[0_18px_42px_rgba(0,0,0,0.26)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d4c49a]/45 hover:bg-[linear-gradient(180deg,rgba(30,34,25,0.98),rgba(17,18,15,0.98))]">
      <div className="absolute inset-y-0 left-0 w-1 bg-[#d4c49a] opacity-60 transition group-hover:w-2" />
      <div className="grid min-h-[11rem] grid-cols-[5.75rem_minmax(0,1fr)] sm:grid-cols-[7rem_minmax(0,1fr)]">
        <MenuPhoto
          photoSrc={item.photoSrc}
          alt={`${item.name} - ${sectionTitle}`}
          className="h-full min-h-[11rem]"
          label="Menu"
        />
        <div className="flex min-w-0 flex-col justify-between p-4">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="min-w-0 break-words text-xl font-black uppercase leading-none text-ash transition group-hover:text-[#d4c49a]">
                {item.name}
              </h3>
              <PriceCluster item={item} />
            </div>
            <p className="mt-3 text-sm font-semibold leading-6 text-ash/66">
              {item.description}
            </p>
          </div>
          {item.tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 bg-black/22 px-2.5 py-1 text-[0.68rem] font-black uppercase text-ash/54"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function PriceCluster({ item }: { item: MenuItemWithPhoto }) {
  if (item.prices?.length) {
    return (
      <div className="flex flex-wrap gap-2 sm:justify-end">
        {item.prices.map((price) => (
          <div
            key={`${item.id}-${price.label}`}
            className="min-w-[4.6rem] border border-[#1c1c1c]/10 bg-[#f3ead5] px-2.5 py-1.5 text-charcoal shadow-[0_10px_18px_rgba(0,0,0,0.14)]"
          >
            <p className="text-[0.6rem] font-black uppercase leading-none text-charcoal/72">
              {price.label}
            </p>
            <p className="mt-1 text-sm font-black leading-none">{price.value}</p>
          </div>
        ))}
      </div>
    );
  }

  if (!item.price) {
    return null;
  }

  return (
    <p className="whitespace-nowrap border border-[#1c1c1c]/10 bg-[#f3ead5] px-3 py-2 text-sm font-black text-charcoal shadow-[0_10px_18px_rgba(0,0,0,0.14)]">
      {item.price}
    </p>
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
          className="object-cover saturate-125 transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(212,196,154,0.18),transparent_7rem),linear-gradient(135deg,#1a2016,#0b0c0a_55%,#3f2c21)]">
          <div className="absolute inset-0 fire-noise opacity-16" />
          <div className="absolute left-3 top-3 border border-[#d4c49a]/45 bg-black/26 px-2 py-1 text-[0.62rem] font-black uppercase text-[#d4c49a]">
            {label}
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="display-type text-3xl font-bold uppercase leading-none text-transparent brand-outline">
              LP
            </p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(13,13,13,0.28))]" />
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
        alt="Specialites Le Pacha"
        fill
        sizes="100vw"
        className="object-cover opacity-36 saturate-125"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#090909,rgba(9,9,9,0.72),#090909)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#d4c49a]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#d4c49a]/30" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="script-type text-3xl leading-none text-[#d4c49a]">
            {t.eyebrow}
          </p>
          <h2 className="display-type mt-4 max-w-4xl text-5xl font-bold uppercase leading-none text-ash sm:text-6xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-ash/70">
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
