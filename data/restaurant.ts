export type Locale = "fr" | "tr";

export const restaurant = {
  name: "Le Pacha",
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
      home: "Accueil",
      reviews: "Avis",
      menu: "Menu",
      info: "Infos",
      call: "Appeler",
      order: "Commander",
      stickyOrder: "Commander",
      lang: "TR"
    },
    hero: {
      eyebrow: "Kebab halal a Draveil",
      title: ["Le", "Pacha"],
      tagline: "Grillades chaudes. Portions genereuses.",
      text: "Kebabs, assiettes, tacos et burgers halal. Sur place, a emporter ou en livraison.",
      primary: "Commander",
      secondary: "Appeler",
      menuCta: "Voir le menu",
      menuShortCta: "Voir le menu",
      quickMenuLabel: "Voir le menu",
      quickMenuItems: ["Kebab", "Assiettes", "Tacos", "Burgers"],
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
      fullCta: "Voir tout le menu",
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
    menuPage: {
      seo: {
        title: "Menu complet Le Pacha | Kebab, tacos et halal a Draveil",
        description:
          "Menu complet de Le Pacha a Draveil : kebabs, sandwichs, assiettes, tacos, burgers, tex-mex, desserts et boissons.",
        keywords: [
          "menu Le Pacha",
          "kebab Draveil menu",
          "halal restaurant Draveil menu",
          "tacos Draveil",
          "fast food Draveil"
        ]
      },
      header: {
        home: "Accueil",
        menu: "Menu",
        info: "Infos"
      },
      hero: {
        eyebrow: "Menu Le Pacha - Draveil",
        title: "Menu",
        outline: "complet",
        tagline: "Choisis ton menu. On s'occupe du reste.",
        text: "Sandwich grec, assiette mixte, tacos 2 viandes, wings ou burger : prends ce qui cale, chaud et halal a Draveil.",
        boardEyebrow: "Les classiques sont prets.",
        boardText: "Du pain chaud, de la viande grillee, des frites et des sauces. Simple, rapide, bien servi.",
        addressKicker: "Sur place, a emporter, livraison",
        addressTitle: "kebab halal Draveil",
        stats: [
          { number: "8", label: "familles" },
          { number: "40", label: "articles" },
          { number: "11-22", label: "horaires" }
        ]
      },
      intro: {
        eyebrow: "Menu complet",
        title: "Repere ton envie. Commande sans hesiter.",
        note:
          "Prix indicatifs Uber Eats. Sur place, demande l'offre du moment."
      },
      finalCta: {
        eyebrow: "Une envie precise ?",
        title: "La faim monte ? Passe commande.",
        text:
          "Le Pacha, kebab Draveil, restaurant halal Draveil, tacos Draveil et fast food Draveil au 154 Boulevard Henri Barbusse."
      },
      jsonLdName: "Menu Le Pacha",
      categoriesAria: "Categories du menu"
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
          label: "Disponibilite",
          title: "Ouvert jusqu'au soir",
          text: "Une adresse pratique apres le travail."
        }
      ]
    },
    info: {
      eyebrow: "Infos pratiques",
      title: "Le Pacha, a Draveil.",
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
      home: "Ana sayfa",
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
      menuCta: "Menuyu gor",
      menuShortCta: "Menu",
      quickMenuLabel: "Hizli menu",
      quickMenuItems: ["Kebap", "Tabak", "Tacos", "Burger"],
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
      fullCta: "Tum menuyu gor",
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
    menuPage: {
      seo: {
        title: "Le Pacha tam menu | Draveil helal kebap ve tacos",
        description:
          "Le Pacha Draveil tam menu: kebap, sandvic, tabak, tacos, burger, tex-mex, tatli ve icecek.",
        keywords: [
          "Le Pacha menu",
          "Draveil kebap menu",
          "Draveil helal restoran menu",
          "Draveil tacos",
          "Draveil fast food"
        ]
      },
      header: {
        home: "Ana sayfa",
        menu: "Menu",
        info: "Bilgi"
      },
      hero: {
        eyebrow: "Le Pacha menu - Draveil",
        title: "Menu",
        outline: "tam",
        tagline: "Menunu sec. Gerisini biz hallederiz.",
        text: "Grec sandvic, karisik tabak, 2 etli tacos, wings veya burger: sicak, bol ve helal.",
        boardEyebrow: "Klasikler hazir.",
        boardText: "Sicak ekmek, izgara et, patates ve soslar. Basit, hizli, bol.",
        addressKicker: "Yerinde, paket, teslimat",
        addressTitle: "Draveil helal kebap",
        stats: [
          { number: "8", label: "kategori" },
          { number: "40", label: "urun" },
          { number: "11-22", label: "saat" }
        ]
      },
      intro: {
        eyebrow: "Tam menu",
        title: "Canin ne istiyorsa sec. Hemen siparis ver.",
        note:
          "Uber Eats fiyatlari bilgilendirme amaclidir. Gunluk teklif icin restorana sor."
      },
      finalCta: {
        eyebrow: "Ne yiyecegini biliyor musun?",
        title: "Aciktiysan siparis ver.",
        text:
          "Le Pacha, Draveil helal kebap, tacos ve fast food adresi: 154 Boulevard Henri Barbusse."
      },
      jsonLdName: "Le Pacha Menu",
      categoriesAria: "Menu kategorileri"
    },
    benefits: {
      eyebrow: "Neden Le Pacha",
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
      title: "Le Pacha, Draveil.",
      findUs: "Adress",
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
