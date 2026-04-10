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
    servesCuisine: ["Turkish", "Halal", "Fast food"],
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
      <SiteHeader locale={locale} nextLocale={nextLocale} onLocaleChange={setLocale} t={t.nav} />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Hero t={t.hero} ticker={t.ticker} />
        <ProofStrip t={t.proof} reviews={t.reviews} />
        <MenuHighlights t={t.menu} />
        <WhyChooseUs t={t.benefits} />
        <PracticalInfo t={t.info} nav={t.nav} />
        <FinalCta t={t.finalCta} nav={t.nav} locale={locale} />
      </main>
      <StickyMobileBar t={t.nav} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}

function Hero({ t, ticker }: { t: (typeof content.fr)["hero"]; ticker: string[] }) {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-charcoal pt-20">
      <Image
        src={restaurant.images.hero}
        alt="Viande grillee pour kebab et sandwich"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover opacity-[0.48] saturate-150 lg:block"
      />
      <Image
        src={restaurant.images.heroMobile}
        alt="Grillades chaudes avec frites"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[48%_36%] opacity-[0.72] saturate-150 lg:hidden"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.68)_0%,rgba(13,13,13,0.76)_43%,rgba(13,13,13,0.96)_100%)] lg:bg-[linear-gradient(115deg,rgba(13,13,13,0.98)_0%,rgba(13,13,13,0.86)_42%,rgba(13,13,13,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(255,106,0,0.22),transparent_18rem),radial-gradient(circle_at_18%_16%,rgba(166,27,27,0.22),transparent_16rem)] lg:bg-[radial-gradient(circle_at_76%_42%,rgba(255,106,0,0.56),transparent_25rem),radial-gradient(circle_at_12%_12%,rgba(166,27,27,0.35),transparent_20rem)]" />
      <div className="absolute inset-0 fire-noise opacity-20 lg:opacity-35" />
      <div className="hidden lg:block">
        <div className="heat-haze" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl gap-10 px-5 pb-10 pt-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="relative">
          <p className="mb-6 inline-flex border border-ember bg-charcoal px-4 py-2 text-xs font-black uppercase text-ember shadow-ember">
            {t.eyebrow}
          </p>
          <p className="brand-outline absolute -left-2 top-11 hidden text-[7rem] font-black uppercase leading-none text-transparent opacity-45 sm:block lg:text-[10rem]">
            Pacha
          </p>
          <h1 className="relative max-w-3xl text-6xl font-black uppercase leading-[0.82] text-ash text-shadow-fire sm:text-7xl lg:text-[8.5rem]">
            {t.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-[18rem] border-l-4 border-ember pl-5 text-2xl font-black leading-tight text-ash sm:max-w-xl sm:text-3xl">
            {t.tagline}
          </p>
          <p className="mt-5 max-w-[20rem] text-base leading-7 text-ash/76 sm:max-w-xl sm:text-lg">
            {t.text}
          </p>

          <div className="mt-6 grid gap-1 border-l-4 border-ember bg-charcoal/74 p-4 shadow-card backdrop-blur lg:hidden">
            <p className="text-xs font-black uppercase text-ember">{t.deliveryLabel}</p>
            <p className="text-base font-black leading-tight text-ash">{t.addressShort}</p>
            <p className="text-sm font-bold text-ash/70">91210 Draveil</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={restaurant.links.uberEats} variant="primary" className="min-h-16 px-7">
              {t.primary}
            </ButtonLink>
            <ButtonLink href={restaurant.links.phone} variant="secondary" className="min-h-16 px-7">
              {t.secondary}
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden min-h-[42rem] lg:block">
          <div className="absolute -right-8 top-0 hidden h-36 w-36 border border-ember/45 lg:block" />
          <div className="food-stage absolute inset-x-0 top-0 h-[20rem] overflow-hidden border border-ember/55 bg-coal shadow-[0_32px_90px_rgba(255,106,0,0.24)] sm:top-4 sm:h-[34rem] lg:inset-y-8 lg:left-4 lg:right-0 lg:h-auto">
            <Image
              src={restaurant.images.heroProduct}
              alt="Burger halal sous une lumiere chaude"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[58%_45%] saturate-150 transition duration-500 hover:scale-105 sm:object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.04),rgba(13,13,13,0.24)_50%,rgba(13,13,13,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="inline-flex bg-ember px-4 py-2 text-sm font-black uppercase text-charcoal shadow-ember">
                {t.productLabel}
              </p>
              <p className="mt-4 max-w-md text-3xl font-black leading-none text-ash sm:text-4xl">
                {t.productTitle}
              </p>
            </div>
          </div>

          <div className="brand-stamp absolute left-0 top-0 z-10 border border-white/14 bg-charcoal/92 p-5 shadow-card backdrop-blur sm:left-6">
            <p className="text-5xl font-black leading-none text-ember">{restaurant.rating.value}</p>
            <p className="mt-1 text-xs font-black uppercase text-ash/70">{t.ratingLabel}</p>
            <p className="mt-3 text-sm font-bold text-ash">{restaurant.rating.count}+ {t.ratingText}</p>
          </div>

          <div className="absolute -bottom-10 right-3 z-10 max-w-[17rem] border border-ember/50 bg-flame px-5 py-4 shadow-ember">
            <p className="text-xs font-black uppercase text-ash/72">{t.serviceLabel}</p>
            <p className="mt-1 text-lg font-black leading-tight text-ash">154 Boulevard Henri Barbusse</p>
          </div>
        </div>
      </div>

      <BrandTicker words={ticker} />
    </section>
  );
}

function BrandTicker({ words }: { words: string[] }) {
  return (
    <div className="relative z-20 border-y border-ember/55 bg-ember text-charcoal">
      <div className="brand-marquee flex min-h-14 items-center gap-8 whitespace-nowrap text-sm font-black uppercase">
        {[...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="inline-flex items-center gap-8">
            {word}
            <span className="h-2 w-10 bg-charcoal" />
          </span>
        ))}
      </div>
    </div>
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
    <section id="reviews" className="relative bg-charcoal px-5 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(255,106,0,0.18),transparent_22rem)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase text-ember">{t.eyebrow}</p>
          <h2 className="mt-3 max-w-xl text-4xl font-black uppercase leading-none text-ash sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="proof-ticket border-y border-white/14 py-5">
          <div className="grid gap-5 md:grid-cols-[12rem_1fr] md:items-center">
            <div className="border-l-8 border-ember pl-5">
              <p className="text-7xl font-black leading-none text-ash">{restaurant.rating.value}</p>
              <p className="mt-2 text-sm font-black uppercase text-ember">{restaurant.rating.count}+ {t.ratingLabel}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.title} className="border-t border-white/12 pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                  <p className="text-lg font-black text-ash">{review.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ash/70">{review.text}</p>
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
    <section id="menu" className="relative bg-[#101010] px-5 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 fire-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase text-ember">{t.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none text-ash sm:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-ash/72">
              {t.text}
            </p>
            <div className="menu-spotlight relative mt-8 h-[28rem] overflow-hidden border border-ember/45 bg-coal shadow-ember">
              <Image
                src={restaurant.images.menuSpotlight}
                alt="Grillades avec frites et sauce"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover saturate-150"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.0),rgba(13,13,13,0.78))]" />
              <p className="absolute bottom-5 left-5 right-5 text-3xl font-black uppercase leading-none text-ash">
                {t.spotlight}
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/12 border-y border-white/12">
            {t.categories.map((category, index) => (
              <article key={category.title} className="menu-blade group grid gap-5 py-5 sm:grid-cols-[8rem_1fr] sm:items-center lg:grid-cols-[10rem_1fr]">
                <div className="relative h-40 overflow-hidden bg-coal sm:h-32">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 1024px) 160px, (min-width: 640px) 128px, 100vw"
                    className="object-cover saturate-150 transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                </div>
                <div className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:items-start">
                  <p className="text-5xl font-black leading-none text-transparent brand-outline">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="text-xs font-black uppercase text-ember">{category.kicker}</p>
                    <h3 className="mt-2 text-3xl font-black uppercase leading-none text-ash transition group-hover:text-ember">
                      {category.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-ash/70">{category.description}</p>
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
    <section id="why" className="relative overflow-hidden bg-charcoal px-5 py-20 sm:px-6 lg:px-8">
      <Image
        src={restaurant.images.flameWall}
        alt="Flammes de grill"
        fill
        sizes="100vw"
        className="object-cover opacity-28 saturate-150"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.98),rgba(13,13,13,0.78),rgba(13,13,13,0.94))]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-black uppercase text-ember">{t.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none text-ash sm:text-5xl">
              {t.title}
            </h2>
          </div>
          <div className="benefit-lanes">
            {t.items.map((benefit, index) => (
              <article key={benefit.title} className="group grid gap-4 border-t border-white/14 py-6 sm:grid-cols-[4rem_1fr]">
                <p className="text-3xl font-black text-ember">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-xs font-black uppercase text-ash/50">{benefit.label}</p>
                  <h3 className="mt-2 text-2xl font-black uppercase text-ash transition group-hover:text-ember">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-ash/70">{benefit.text}</p>
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
    <section id="info" className="relative bg-[#111] px-5 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,106,0,0.18),transparent_23rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="street-panel relative min-h-[32rem] overflow-hidden border border-ember/45 bg-charcoal p-6 shadow-ember sm:p-8">
            <Image
              src={restaurant.images.streetFood}
              alt="Comptoir de restaurant avec lumiere chaude"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover opacity-[0.42] saturate-150"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.95),rgba(13,13,13,0.78),rgba(13,13,13,0.42))]" />
            <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-between">
              <div>
                <p className="text-xs font-black uppercase text-ember">{t.eyebrow}</p>
                <h2 className="mt-3 max-w-2xl text-4xl font-black uppercase leading-none text-ash sm:text-5xl">
                  {t.title}
                </h2>
              </div>
              <div className="mt-10 max-w-2xl border-l-8 border-ember bg-charcoal/78 p-5 backdrop-blur">
                <p className="text-sm font-black uppercase text-ember">{t.findUs}</p>
                <p className="mt-3 text-3xl font-black leading-tight text-ash">154 Boulevard Henri Barbusse</p>
                <p className="mt-2 text-lg font-bold text-ash/72">{t.addressLine}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 border-y border-white/14 py-6">
            {t.items.map((item) => (
              <div key={item.title} className="grid gap-3 border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                <p className="text-xs font-black uppercase text-ember">{item.label}</p>
                <h3 className="text-2xl font-black uppercase leading-tight text-ash">{item.title}</h3>
                <p className="text-sm leading-6 text-ash/70">{item.text}</p>
              </div>
            ))}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ButtonLink href={restaurant.links.uberEats} variant="primary" className="min-h-16">
                {nav.order}
              </ButtonLink>
              <ButtonLink href={restaurant.links.phone} variant="secondary" className="min-h-16">
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
        alt="Burger et frites"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.58] saturate-150"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.98),rgba(13,13,13,0.58),rgba(13,13,13,0.92))]" />
      <div className="absolute inset-x-0 top-0 h-2 bg-ember shadow-ember" />
      <div className="relative mx-auto flex min-h-[25rem] max-w-7xl items-center">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase text-ember">{t.eyebrow}</p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-none text-ash text-shadow-fire sm:text-6xl lg:text-[7rem]">
            {t.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-7 text-ash/78">
            {t.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={restaurant.links.uberEats} variant="primary" className="min-h-16 px-7">
              {nav.order}
            </ButtonLink>
            <ButtonLink href={restaurant.links.phone} variant="secondary" className="min-h-16 px-7">
              {nav.call}
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm font-black uppercase text-ash/62">
            {t.hoursLabel}: {locale === "fr" ? restaurant.hours.shortFr : restaurant.hours.shortTr}
          </p>
        </div>
      </div>
    </section>
  );
}
