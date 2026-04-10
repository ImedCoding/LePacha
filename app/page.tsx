"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileBar } from "@/components/sticky-mobile-bar";
import { content, type Locale, restaurant } from "@/data/restaurant";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("fr");
  const t = content[locale];
  const nextLocale: Locale = locale === "fr" ? "tr" : "fr";
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    servesCuisine: ["Turkish", "Halal", "Fast food", "Pizza"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "154 Boulevard Henri Barbusse",
      postalCode: "91210",
      addressLocality: "Draveil",
      addressCountry: "FR"
    },
    telephone: restaurant.phone.display,
    priceRange: "EUR",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: restaurant.rating.value,
      reviewCount: restaurant.rating.count
    },
    url: restaurant.links.uberEats
  };

  return (
    <>
      <SiteHeader
        activePage="home"
        locale={locale}
        nextLocale={nextLocale}
        onLocaleChange={setLocale}
        t={t.nav}
      />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Hero t={t.hero} ticker={t.ticker} />
        <ProofStrip t={t.proof} reviews={t.reviews} />
        <MenuHighlights t={t.menu} />
        <WhyChooseUs t={t.benefits} />
        <PracticalInfo t={t.info} nav={t.nav} />
        <FinalCta t={t.finalCta} nav={t.nav} locale={locale} />
      </main>
      <StickyMobileBar activePage="home" t={t.nav} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd)
        }}
      />
    </>
  );
}

function Hero({
  t,
  ticker
}: {
  t: (typeof content.fr)["hero"];
  ticker: string[];
}) {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-charcoal pt-20"
    >
      <Image
        src={restaurant.images.hero}
        alt="Viande grillee Le Pacha"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover opacity-[0.46] saturate-125 lg:block"
      />
      <Image
        src={restaurant.images.heroMobile}
        alt="Grillades chaudes Le Pacha"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[48%_36%] opacity-[0.62] saturate-125 lg:hidden"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,9,0.68)_0%,rgba(9,9,9,0.8)_43%,rgba(9,9,9,0.96)_100%)] lg:bg-[linear-gradient(115deg,rgba(9,9,9,0.98)_0%,rgba(9,9,9,0.86)_42%,rgba(9,9,9,0.26)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_44%,rgba(212,196,154,0.18),transparent_18rem),radial-gradient(circle_at_18%_16%,rgba(81,102,63,0.26),transparent_18rem),radial-gradient(circle_at_90%_100%,rgba(74,46,34,0.2),transparent_16rem)] lg:bg-[radial-gradient(circle_at_76%_42%,rgba(212,196,154,0.22),transparent_24rem),radial-gradient(circle_at_12%_12%,rgba(81,102,63,0.34),transparent_22rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_center,rgba(81,102,63,0.24),transparent_68%)] lg:hidden" />
      <div className="absolute inset-0 fire-noise opacity-12 lg:opacity-22" />
      <div className="hidden lg:block">
        <div className="heat-haze" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl gap-10 px-5 pb-10 pt-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="relative">
          <div className="mb-6 inline-flex border border-[#d4c49a]/55 bg-charcoal px-4 py-2 text-xs font-black uppercase text-[#d4c49a] shadow-ember">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 lg:hidden">
                <span className="text-xs font-black leading-none text-[#d4c49a]">
                  {restaurant.rating.value}
                </span>
                <GoldStar className="h-5 w-5" />
              </div>
              {t.eyebrow}
            </div>
          </div>
          <p className="script-type text-3xl leading-none text-[#d4c49a] sm:text-4xl">
            {t.productLabel}
          </p>
          <p className="brand-outline absolute -left-2 top-14 hidden display-type text-[7rem] font-bold uppercase leading-none text-transparent opacity-45 sm:block lg:text-[10rem]">
            Pacha
          </p>
          <h1 className="relative display-type max-w-3xl text-6xl font-bold uppercase leading-[0.82] text-ash text-shadow-fire sm:text-7xl lg:text-[8.1rem]">
            {t.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-[19rem] border-l-4 border-[#d4c49a] pl-5 text-2xl font-black leading-tight text-ash sm:max-w-xl sm:text-3xl">
            {t.tagline}
          </p>
          <p className="mt-5 max-w-[22rem] text-base leading-7 text-ash/76 sm:max-w-xl sm:text-lg">
            {t.text}
          </p>

          <div className="mt-6 grid gap-3 lg:hidden">
            <div className="grid gap-1 border-l-4 border-[#d4c49a] bg-charcoal/74 p-4 shadow-card backdrop-blur">
              <p className="text-xs font-black uppercase text-[#d4c49a]">
                {t.deliveryLabel}
              </p>
              <p className="text-base font-black leading-tight text-ash">
                {t.addressShort}
              </p>
              <p className="text-sm font-bold text-ash/70">91210 Draveil</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
            <ButtonLink
              href={restaurant.links.uberEats}
              variant="primary"
              className="min-h-14 px-3 text-sm"
            >
              {t.primary}
            </ButtonLink>
            <ButtonLink
              href="/menu"
              variant="secondary"
              className="min-h-14 px-3 text-sm"
            >
              {t.menuCta}
            </ButtonLink>
            <ButtonLink
              href={restaurant.links.phone}
              variant="quiet"
              className="col-span-2 min-h-14 px-3 text-sm"
            >
              {t.secondary}
            </ButtonLink>
          </div>

          <div className="mt-6 hidden flex-col gap-3 sm:flex-row lg:flex">
            <ButtonLink
              href={restaurant.links.uberEats}
              variant="primary"
              className="min-h-16 px-7"
            >
              {t.primary}
            </ButtonLink>
            <ButtonLink
              href="/menu"
              variant="secondary"
              className="min-h-16 px-7"
            >
              {t.menuCta}
            </ButtonLink>
            <ButtonLink
              href={restaurant.links.phone}
              variant="secondary"
              className="min-h-16 px-7"
            >
              {t.secondary}
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden min-h-[42rem] lg:block">
          <div className="absolute -right-8 top-0 hidden h-36 w-36 border border-[#d4c49a]/28 lg:block" />
          <div className="food-stage absolute inset-x-0 top-0 h-[20rem] overflow-hidden border border-[#d4c49a]/35 bg-coal shadow-[0_32px_90px_rgba(81,102,63,0.16)] sm:top-4 sm:h-[34rem] lg:inset-y-8 lg:left-4 lg:right-0 lg:h-auto">
            <Image
              src={restaurant.images.heroProduct}
              alt="Assiette de grillades Le Pacha"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[58%_45%] saturate-125 transition duration-500 hover:scale-105 sm:object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,9,0.04),rgba(9,9,9,0.24)_50%,rgba(9,9,9,0.76))]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="inline-flex bg-[#d4c49a] px-4 py-2 text-sm font-black uppercase text-charcoal shadow-ember">
                {t.productLabel}
              </p>
              <p className="mt-4 display-type max-w-md text-3xl font-bold leading-none text-ash sm:text-4xl">
                {t.productTitle}
              </p>
            </div>
          </div>

          <div className="brand-stamp absolute left-0 top-0 z-10 border border-white/14 bg-charcoal/92 p-5 shadow-card backdrop-blur sm:left-6">
            <p className="flex items-center gap-2 text-5xl font-black leading-none text-ash">
              {restaurant.rating.value}
              <GoldStar className="h-8 w-8" />
            </p>
            <p className="mt-1 text-xs font-black uppercase text-ash">
              {t.ratingLabel}
            </p>
            <p className="mt-3 text-sm font-bold text-ash">
              {restaurant.rating.count}+ {t.ratingText}
            </p>
          </div>

          <div className="absolute -bottom-10 right-3 z-10 max-w-[17rem] border border-[#d4c49a]/35 bg-wine px-5 py-4 shadow-ember">
            <p className="text-xs font-black uppercase text-ash/72">
              {t.serviceLabel}
            </p>
            <p className="mt-1 text-lg font-black leading-tight text-ash">
              154 Boulevard Henri Barbusse
            </p>
          </div>
        </div>
      </div>

      <BrandTicker words={ticker} />
    </section>
  );
}

function BrandTicker({ words }: { words: string[] }) {
  return (
    <div className="relative z-20 border-y border-[#d4c49a]/35 bg-flame text-ash">
      <div className="brand-marquee flex min-h-14 items-center gap-8 whitespace-nowrap text-sm font-black uppercase">
        {[...words, ...words, ...words].map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-flex items-center gap-8"
          >
            {word}
            <span className="h-2 w-10 bg-[#d4c49a]" />
          </span>
        ))}
      </div>
    </div>
  );
}

function GoldStar({ className }: { className: string }) {
  return (
    <svg
      className={`${className} shrink-0 drop-shadow-[0_0_12px_rgba(255,193,7,0.55)]`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 1.8l2.9 6 6.6 1-4.8 4.6 1.1 6.6-5.8-3.1L6.2 20l1.1-6.6-4.8-4.6 6.6-1z"
        fill="#FFC107"
      />
      <path
        d="M12 4.8l2 4.1.2.5.5.1 4.5.7-3.2 3.1-.4.4.1.5.8 4.5-4-2.1-.5-.3-.5.3-4 2.1.8-4.5.1-.5-.4-.4-3.2-3.1 4.5-.7.5-.1.2-.5z"
        fill="#FFD95A"
      />
    </svg>
  );
}

function ProofStrip({
  t,
  reviews
}: {
  t: (typeof content.fr)["proof"];
  reviews: (typeof content.fr)["reviews"];
}) {
  return (
    <section
      id="reviews"
      className="relative bg-charcoal px-5 py-16 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(81,102,63,0.18),transparent_22rem)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="script-type text-3xl leading-none text-[#d4c49a]">
            {t.eyebrow}
          </p>
          <h2 className="display-type mt-3 max-w-xl text-4xl font-bold uppercase leading-none text-ash sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="proof-ticket border-y border-white/14 py-5">
          <div className="grid gap-5 md:grid-cols-[12rem_1fr] md:items-center">
            <div className="border-l-8 border-[#d4c49a] pl-5">
              <p className="flex items-center gap-3 text-7xl font-black leading-none text-ash">
                {restaurant.rating.value}
                <GoldStar className="h-10 w-10" />
              </p>
              <p className="mt-2 text-sm font-black uppercase text-[#d4c49a]">
                {restaurant.rating.count}+ {t.ratingLabel}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.title}
                  className="border-t border-white/12 pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0"
                >
                  <p className="text-lg font-black text-ash">{review.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ash/70">
                    {review.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuHighlights({ t }: { t: (typeof content.fr)["menu"] }) {
  return (
    <section
      id="menu"
      className="relative bg-[linear-gradient(180deg,#0c0d0b_0%,#131812_22%,#090909_100%)] px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 fire-noise opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(212,196,154,0.12),transparent_24rem),radial-gradient(circle_at_0%_60%,rgba(81,102,63,0.16),transparent_24rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="script-type text-3xl leading-none text-[#d4c49a]">
              {t.eyebrow}
            </p>
            <h2 className="display-type mt-3 text-4xl font-bold uppercase leading-none text-ash sm:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-ash/72">
              {t.text}
            </p>
            <ButtonLink
              href="/menu"
              variant="primary"
              className="mt-7 min-h-14 px-6 text-sm"
            >
              {t.fullCta}
            </ButtonLink>
            <div className="menu-spotlight relative mt-8 h-[28rem] overflow-hidden border border-[#d4c49a]/35 bg-coal shadow-ember">
              <Image
                src={restaurant.images.menuSpotlight}
                alt="Sandwich Le Pacha"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover saturate-125"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,9,0.04),rgba(9,9,9,0.82))]" />
              <p className="absolute bottom-5 left-5 right-5 display-type text-3xl font-bold uppercase leading-none text-ash">
                {t.spotlight}
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/12 border-y border-white/12">
            {t.categories.map((category, index) => (
              <article
                key={category.title}
                className="menu-blade group grid gap-5 py-5 sm:grid-cols-[8rem_1fr] sm:items-center lg:grid-cols-[10rem_1fr]"
              >
                <div className="relative h-40 overflow-hidden bg-coal sm:h-32">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 1024px) 160px, (min-width: 640px) 128px, 100vw"
                    className="object-cover saturate-125 transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
                </div>
                <div className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:items-start">
                  <p className="display-type text-5xl font-bold leading-none text-transparent brand-outline">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="text-xs font-black uppercase text-[#d4c49a]">
                      {category.kicker}
                    </p>
                    <h3 className="display-type mt-2 text-3xl font-bold uppercase leading-none text-ash transition group-hover:text-[#d4c49a]">
                      {category.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-ash/70">
                      {category.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({ t }: { t: (typeof content.fr)["benefits"] }) {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-charcoal px-5 py-20 sm:px-6 lg:px-8"
    >
      <Image
        src={restaurant.images.flameWall}
        alt="Pizza chaude"
        fill
        sizes="100vw"
        className="object-cover opacity-18 saturate-125"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,9,0.98),rgba(9,9,9,0.78),rgba(9,9,9,0.94))]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="script-type text-3xl leading-none text-[#d4c49a]">
              {t.eyebrow}
            </p>
            <h2 className="display-type mt-3 text-4xl font-bold uppercase leading-none text-ash sm:text-5xl">
              {t.title}
            </h2>
          </div>
          <div className="benefit-lanes">
            {t.items.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group grid gap-4 border-t border-white/14 py-6 sm:grid-cols-[4rem_1fr]"
              >
                <p className="display-type text-4xl font-bold leading-none text-[#d4c49a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="text-xs font-black uppercase text-ash/50">
                    {benefit.label}
                  </p>
                  <h3 className="display-type mt-2 text-2xl font-bold uppercase text-ash transition group-hover:text-[#d4c49a]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-ash/70">
                    {benefit.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticalInfo({
  t,
  nav
}: {
  t: (typeof content.fr)["info"];
  nav: (typeof content.fr)["nav"];
}) {
  return (
    <section
      id="info"
      className="relative bg-[linear-gradient(180deg,#0a0b09_0%,#131611_100%)] px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(81,102,63,0.18),transparent_23rem),radial-gradient(circle_at_88%_80%,rgba(74,46,34,0.24),transparent_24rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="street-panel relative min-h-[32rem] overflow-hidden border border-[#d4c49a]/35 bg-charcoal p-6 shadow-ember sm:p-8">
            <Image
              src={restaurant.images.streetFood}
              alt="Salle du restaurant"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover opacity-[0.36] saturate-125"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,9,0.95),rgba(9,9,9,0.8),rgba(9,9,9,0.46))]" />
            <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-between">
              <div>
                <p className="script-type text-3xl leading-none text-[#d4c49a]">
                  {t.eyebrow}
                </p>
                <h2 className="display-type mt-3 max-w-2xl text-4xl font-bold uppercase leading-none text-ash sm:text-5xl">
                  {t.title}
                </h2>
              </div>
              <div className="mt-10 max-w-2xl border-l-8 border-[#d4c49a] bg-charcoal/78 p-5 backdrop-blur">
                <p className="text-sm font-black uppercase text-[#d4c49a]">
                  {t.findUs}
                </p>
                <p className="mt-3 display-type text-3xl font-bold leading-tight text-ash">
                  154 Boulevard Henri Barbusse
                </p>
                <p className="mt-2 text-lg font-bold text-ash/72">
                  {t.addressLine}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 border-y border-white/14 py-6">
            {t.items.map((item) => (
              <div
                key={item.title}
                className="grid gap-3 border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
              >
                <p className="text-xs font-black uppercase text-[#d4c49a]">
                  {item.label}
                </p>
                <h3 className="display-type text-2xl font-bold uppercase leading-tight text-ash">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-ash/70">{item.text}</p>
              </div>
            ))}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ButtonLink
                href={restaurant.links.uberEats}
                variant="primary"
                className="min-h-16"
              >
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
        </div>
      </div>
    </section>
  );
}

function FinalCta({
  t,
  nav,
  locale
}: {
  t: (typeof content.fr)["finalCta"];
  nav: (typeof content.fr)["nav"];
  locale: Locale;
}) {
  return (
    <section className="relative min-h-[35rem] overflow-hidden bg-charcoal px-5 py-20 sm:px-6 lg:px-8">
      <Image
        src={restaurant.images.finalCta}
        alt="Frites Le Pacha"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.42] saturate-125"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,9,0.98),rgba(9,9,9,0.58),rgba(9,9,9,0.92))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#d4c49a]" />
      <div className="relative mx-auto flex min-h-[25rem] max-w-7xl items-center">
        <div className="max-w-4xl">
          <p className="script-type text-3xl leading-none text-[#d4c49a]">
            {t.eyebrow}
          </p>
          <h2 className="display-type mt-4 text-5xl font-bold uppercase leading-none text-ash text-shadow-fire sm:text-6xl lg:text-[6.25rem]">
            {t.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-7 text-ash/78">
            {t.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={restaurant.links.uberEats}
              variant="primary"
              className="min-h-16 px-7"
            >
              {nav.order}
            </ButtonLink>
            <ButtonLink
              href={restaurant.links.phone}
              variant="secondary"
              className="min-h-16 px-7"
            >
              {nav.call}
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm font-black uppercase text-ash/62">
            {t.hoursLabel}:{" "}
            {locale === "fr"
              ? restaurant.hours.shortFr
              : restaurant.hours.shortTr}
          </p>
        </div>
      </div>
    </section>
  );
}
