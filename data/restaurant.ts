export type Locale = "fr" | "tr";

export const restaurant = {
  name: "Le Pacha 2",
  address: "154 Boulevard Henri Barbusse, 91210 Draveil",
  phone: {
    display: "+33 1 69 42 69 34",
    href: "+33169426934"
  },
  links: {
    uberEats: "https://www.ubereats.com/fr/store/le-pacha-2/mpdLkHqPQ42Z6RogjsnlsA",
    phone: "tel:+33169426934",
    whatsapp: "https://wa.me/33169426934"
  },
  hours: {
    compact: "11:00 - 22:00",
    shortFr: "Lun-dim : 11:00 - 22:00",
    shortTr: "Pzt-paz: 11:00 - 22:00"
  },
  rating: {
    value: "4.2",
    count: "300"
  },
  images: {
    hero: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1800&q=85",
    heroMobile: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=88",
    heroProduct: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=88",
    menuSpotlight: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=88",
    flameWall: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85",
    streetFood: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=85",
    finalCta: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1800&q=85"
  }
};

export const content = {
  fr: {
    nav: {
      reviews: "Avis",
      menu: "Menu",
      info: "Infos",
      call: "Appeler",
      order: "Commander",
      stickyOrder: "Uber",
      lang: "TR"
    },
    hero: {
      eyebrow: "Kebab halal a Draveil",
      title: ["Le", "Pacha"],
      tagline: "Grillades chaudes. Portions genereuses.",
      text: "Kebabs, assiettes, tacos et burgers halal. Sur place, a emporter ou en livraison.",
      primary: "Commander",
      secondary: "Appeler",
      productLabel: "Grille, sauce, croustillant",
      productTitle: "Pret quand la faim arrive.",
      ratingLabel: "Note Uber Eats",
      ratingText: "avis locaux",
      serviceLabel: "Sur place / livraison de 11h a 22h",
      deliveryLabel: "Livraison de 11h a 22h",
      addressShort: "154 Boulevard Henri Barbusse"
    },
    ticker: ["kebab Draveil", "restaurant halal Draveil", "tacos Draveil", "fast food Draveil", "grillades halal"],
    proof: {
      eyebrow: "Avis clients",
      title: "Simple, rapide, regulier.",
      ratingLabel: "avis"
    },
    reviews: [
      {
        title: "Rapide et bon",
        text: "Commande prete vite, repas chaud."
      },
      {
        title: "Bien servi",
        text: "Sandwichs charges, assiettes copieuses."
      },
      {
        title: "Toujours pratique",
        text: "Une bonne adresse pour manger halal a Draveil."
      }
    ],
    menu: {
      eyebrow: "A la carte",
      title: "Choisis ce qui te fait envie.",
      text: "Kebabs, assiettes grillees, tacos, burgers, frites et boissons.",
      spotlight: "Grille, sauce, frites. C'est direct.",
      categories: [
        {
          title: "Kebabs / Sandwichs",
          kicker: "Classique",
          description: "Viande grillee, pain chaud, sauce et frites.",
          image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
          alt: "Sandwich kebab avec viande grillee"
        },
        {
          title: "Assiettes grillees",
          kicker: "Copieux",
          description: "Poulet, merguez, mix grill, frites et accompagnements.",
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
          alt: "Assiette de viande grillee"
        },
        {
          title: "Tacos / Burgers",
          kicker: "Gourmand",
          description: "Des formats bien chauds pour une grosse faim.",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
          alt: "Tacos garnis servis chauds"
        },
        {
          title: "Sides / Boissons",
          kicker: "En plus",
          description: "Frites, wings, nuggets et boissons fraiches.",
          image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
          alt: "Frites croustillantes"
        }
      ]
    },
    benefits: {
      eyebrow: "Pourquoi venir",
      title: "Chaud, rapide, bien servi.",
      items: [
        {
          label: "Grill",
          title: "Viande grillee",
          text: "Des saveurs chaudes, simples et franches."
        },
        {
          label: "Service",
          title: "Commande rapide",
          text: "Appel, livraison ou passage sur place."
        },
        {
          label: "Portions",
          title: "Bien garni",
          text: "Sandwichs et assiettes faits pour caler."
        },
        {
          label: "Soir",
          title: "Parfait le soir",
          text: "Une adresse pratique apres le travail."
        }
      ]
    },
    info: {
      eyebrow: "Infos pratiques",
      title: "Le Pacha 2, a Draveil.",
      findUs: "Adresse",
      addressLine: "91210 Draveil, France",
      items: [
        {
          label: "Telephone",
          title: "+33 1 69 42 69 34",
          text: "Appelle pour commander ou verifier les horaires."
        },
        {
          label: "Service",
          title: "Sur place, a emporter, livraison",
          text: "Commande directe ou Uber Eats."
        },
        {
          label: "Horaires",
          title: "Lun-dim : 11:00 - 22:00",
          text: "Les horaires peuvent changer les jours feries."
        }
      ]
    },
    finalCta: {
      eyebrow: "A table",
      title: "Une faim ? Commande.",
      text: "Kebab, tacos, burgers et grillades halal a Draveil.",
      hoursLabel: "Horaires indicatifs"
    }
  },
  tr: {
    nav: {
      reviews: "Yorumlar",
      menu: "Menu",
      info: "Bilgi",
      call: "Ara",
      order: "Siparis",
      stickyOrder: "Uber",
      lang: "FR"
    },
    hero: {
      eyebrow: "Draveil'de helal kebap",
      title: ["Le", "Pacha", "2"],
      tagline: "Sicak izgara. Bol porsiyon.",
      text: "Helal kebap, tabaklar, tacos ve burgerler. Yerinde, paket veya teslimat.",
      primary: "Uber Eats'ten siparis",
      secondary: "Ara",
      productLabel: "Izgara, sos, citir",
      productTitle: "Acikinca hazir.",
      ratingLabel: "Uber Eats puani",
      ratingText: "yerel yorum",
      serviceLabel: "Yerinde / teslimat",
      deliveryLabel: "Teslimat 11:00 - 22:00",
      addressShort: "154 Boulevard Henri Barbusse"
    },
    ticker: ["Draveil kebap", "Draveil helal restoran", "Draveil tacos", "Draveil fast food", "helal izgara"],
    proof: {
      eyebrow: "Musteri yorumlari",
      title: "Basit, hizli, duzenli.",
      ratingLabel: "yorum"
    },
    reviews: [
      {
        title: "Hizli ve lezzetli",
        text: "Siparis hizli, yemek sicak."
      },
      {
        title: "Bol porsiyon",
        text: "Sandvicler dolu, tabaklar doyurucu."
      },
      {
        title: "Her zaman pratik",
        text: "Draveil'de helal yemek icin iyi adres."
      }
    ],
    menu: {
      eyebrow: "Menu",
      title: "Canin ne istiyor?",
      text: "Kebap, izgara tabak, tacos, burger, patates ve icecek.",
      spotlight: "Izgara, sos, patates. Direkt.",
      categories: [
        {
          title: "Kebap / Sandvic",
          kicker: "Klasik",
          description: "Izgara et, sicak ekmek, sos ve patates.",
          image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
          alt: "Izgara etli kebap sandvic"
        },
        {
          title: "Izgara tabaklar",
          kicker: "Doyurucu",
          description: "Tavuk, merguez, karisik izgara, patates ve yan urunler.",
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
          alt: "Izgara et tabagi"
        },
        {
          title: "Tacos / Burger",
          kicker: "Gurme",
          description: "Buyuk aclik icin sicak ve bol secenekler.",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
          alt: "Sicak tacos"
        },
        {
          title: "Yan urun / Icecek",
          kicker: "Ekstra",
          description: "Patates, wings, nuggets ve soguk icecekler.",
          image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
          alt: "Citir patates"
        }
      ]
    },
    benefits: {
      eyebrow: "Neden Le Pacha 2",
      title: "Sicak, hizli, bol.",
      items: [
        {
          label: "Izgara",
          title: "Izgara et",
          text: "Sicak, sade ve net lezzet."
        },
        {
          label: "Servis",
          title: "Hizli siparis",
          text: "Telefon, teslimat veya yerinde."
        },
        {
          label: "Porsiyon",
          title: "Bol servis",
          text: "Sandvic ve tabaklar doyurur."
        },
        {
          label: "Aksam",
          title: "Aksam icin iyi",
          text: "Isten sonra pratik bir adres."
        }
      ]
    },
    info: {
      eyebrow: "Pratik bilgiler",
      title: "Le Pacha 2, Draveil.",
      findUs: "Adres",
      addressLine: "91210 Draveil, Fransa",
      items: [
        {
          label: "Telefon",
          title: "+33 1 69 42 69 34",
          text: "Siparis vermek veya saatleri sormak icin ara."
        },
        {
          label: "Servis",
          title: "Yerinde, paket, teslimat",
          text: "Direkt siparis veya Uber Eats."
        },
        {
          label: "Saatler",
          title: "Pzt-paz: 11:00 - 22:00",
          text: "Tatil gunlerinde saatler degisebilir."
        }
      ]
    },
    finalCta: {
      eyebrow: "Yemek vakti",
      title: "Ac misin? Siparis ver.",
      text: "Draveil'de helal kebap, tacos, burger ve izgara.",
      hoursLabel: "Tahmini saatler"
    }
  }
} satisfies Record<Locale, unknown>;
