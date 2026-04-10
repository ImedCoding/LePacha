export type Locale = "fr" | "tr";

export const restaurant = {
  name: "Le Pacha",
  address: "154 Boulevard Henri Barbusse, 91210 Draveil",
  phone: {
    display: "+33 1 69 42 69 34",
    href: "+33169426934"
  },
  links: {
    uberEats:
      "https://www.ubereats.com/fr/store/le-pacha-2/mpdLkHqPQ42Z6RogjsnlsA",
    phone: "tel:+33169426934",
    whatsapp: "https://wa.me/33169426934"
  },
  hours: {
    compact: "11:00 - 22:00",
    shortFr: "Lun-sam : 11:00 - 22:00",
    shortTr: "Pzt-cmt: 11:00 - 22:00"
  },
  rating: {
    value: "4.2",
    count: "300"
  },
  images: {
    hero: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1800&q=85",
    heroMobile: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=88",
    heroProduct: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=88",
    menuSpotlight: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1400&q=88",
    flameWall: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1800&q=85",
    streetFood: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=85",
    finalCta: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1800&q=85"
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
      eyebrow: "Restaurant turc a Draveil",
      title: ["Le", "Pacha"],
      tagline: "Grillades, kebabs, pizzas. Service rapide.",
      text: "Assiettes turques, sandwichs, burgers, pizzas et desserts. Sur place, a emporter ou en livraison.",
      primary: "Commander",
      secondary: "Appeler",
      menuCta: "Voir la carte",
      menuShortCta: "Voir la carte",
      quickMenuLabel: "Voir la carte",
      quickMenuItems: ["Assiettes", "Sandwichs", "Pizzas", "Desserts"],
      productLabel: "Specialites turques",
      productTitle: "Le grill, le four, le bon rythme.",
      ratingLabel: "Note Uber Eats",
      ratingText: "avis locaux",
      serviceLabel: "Lun-sam, 11h a 22h",
      deliveryLabel: "Lun-sam, 11h a 22h",
      addressShort: "154 Boulevard Henri Barbusse"
    },
    ticker: [
      "restaurant turc Draveil",
      "kebab Draveil",
      "pizza Draveil",
      "restaurant halal Draveil",
      "fast food Draveil"
    ],
    proof: {
      eyebrow: "Avis clients",
      title: "Une adresse connue a Draveil.",
      ratingLabel: "avis"
    },
    reviews: [
      {
        title: "Toujours regulier",
        text: "Service rapide et assiettes bien servies."
      },
      {
        title: "Bon et copieux",
        text: "Kebab, pizza ou burger, on repart cale."
      },
      {
        title: "Disponible toute la journée",
        text: "Une adresse simple a retenir pour manger sur Draveil."
      }
    ],
    menu: {
      eyebrow: "La carte",
      title: "Du grill au four.",
      text: "Entrees turques, assiettes, sandwichs, burgers, pizzas, desserts et boissons.",
      fullCta: "Voir le menu officiel",
      spotlight: "Viandes, pains chauds, pizzas, desserts.",
      categories: [
        {
          title: "Assiettes turques",
          kicker: "Specialites",
          description: "Kebab, koftes, adana, merguez, steak et grillades mixtes.",
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
          alt: "Assiette de grillades"
        },
        {
          title: "Sandwichs",
          kicker: "Rapide",
          description: "Kebab, chicken, adana, cordon bleu et brochettes servis avec frites.",
          image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
          alt: "Sandwich kebab chaud"
        },
        {
          title: "Burgers et tacos",
          kicker: "Gourmand",
          description: "Cheeseburger, maxi burger, chicken burger, wings, nuggets et tacos.",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
          alt: "Burger servi chaud"
        },
        {
          title: "Pizzas",
          kicker: "Au four",
          description: "Base tomate ou creme fraiche, du junior au mega.",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
          alt: "Pizza chaude au four"
        }
      ]
    },
    menuPage: {
      seo: {
        title: "Menu officiel Le Pacha | Grillades, pizzas et kebabs a Draveil",
        description:
          "Carte officielle relevee sur place chez Le Pacha a Draveil : entrees turques, assiettes, sandwichs, burgers, tacos, pizzas, desserts et boissons.",
        keywords: [
          "menu Le Pacha",
          "pizza Draveil",
          "kebab Draveil menu",
          "restaurant turc Draveil",
          "restaurant halal Draveil menu"
        ]
      },
      header: {
        home: "Accueil",
        menu: "Menu",
        info: "Infos"
      },
      hero: {
        eyebrow: "Carte officielle - Draveil",
        kicker: "Specialites turques",
        title: "Menu",
        outline: "officiel",
        tagline: "Nos specialites turques.",
        text: "Entrees turques, assiettes, sandwichs, burgers, pizzas, desserts et boissons. Les prix suivent le menu affiche au restaurant.",
        boardEyebrow: "Le Pacha",
        boardText: "Du grill, du four et des portions bien servies. Toute la carte est ici, avec les vraies formules et les vraies tailles.",
        addressKicker: "154 Boulevard Henri Barbusse",
        addressTitle: "Ouvert lun-sam, 11h-22h",
        stats: [
          { number: "14", label: "familles" },
          { number: "86", label: "plats" },
          { number: "11-22", label: "horaires" }
        ]
      },
      intro: {
        eyebrow: "Carte relevee sur place",
        title: "Du comptoir au four, tout est la.",
        note:
          "Tarifs releves sur le menu papier du restaurant le 10 avril 2026. Certains plats ont plusieurs tailles ou formules."
      },
      finalCta: {
        eyebrow: "Une commande a faire ?",
        title: "Choisis, appelle, ou passe par Uber Eats.",
        text:
          "Restaurant Le Pacha a Draveil : kebab, pizza, assiette turque, burgers et fast food sur le boulevard Henri Barbusse."
      },
      jsonLdName: "Menu officiel Le Pacha",
      categoriesAria: "Categories du menu"
    },
    benefits: {
      eyebrow: "Pourquoi venir",
      title: "Turc, genereux, rapide.",
      items: [
        {
          label: "Cuisine",
          title: "Specialites turques",
          text: "Entrees, assiettes et sandwichs dans un esprit simple et bien servi."
        },
        {
          label: "Cuisson",
          title: "Grill et four",
          text: "Viandes chaudes, pains garnis et pizzas cuites dans le rythme du service."
        },
        {
          label: "Service",
          title: "Rapide a commander",
          text: "Sur place, par telephone ou en livraison."
        },
        {
          label: "Horaires",
          title: "Du dejeuner au soir",
          text: "Ouvert du lundi au samedi de 11h a 22h."
        }
      ]
    },
    info: {
      eyebrow: "Infos pratiques",
      title: "Restaurant Le Pacha, a Draveil.",
      findUs: "Adresse",
      addressLine: "91210 Draveil, France",
      items: [
        {
          label: "Telephone",
          title: "+33 1 69 42 69 34",
          text: "Appelle pour commander ou verifier l'ouverture."
        },
        {
          label: "Service",
          title: "Sur place, a emporter, livraison",
          text: "Carte complete au restaurant, commande rapide par Uber Eats ou par telephone."
        },
        {
          label: "Horaires",
          title: "Lun-sam : 11:00 - 22:00",
          text: "Horaires releves sur le menu du restaurant."
        }
      ]
    },
    finalCta: {
      eyebrow: "A table",
      title: "Une faim ? Passe au restaurant ou commande.",
      text: "Kebab, pizzas, burgers et specialites turques a Draveil.",
      hoursLabel: "Horaires"
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
      stickyOrder: "Siparis",
      lang: "FR"
    },
    hero: {
      eyebrow: "Draveil'de Turk restorani",
      title: ["Le", "Pacha"],
      tagline: "Izgara, kebap, pizza. Hizli servis.",
      text: "Turk tabaklari, sandvicler, burgerler, pizzalar ve tatlilar. Yerinde, paket veya teslimat.",
      primary: "Siparis",
      secondary: "Ara",
      menuCta: "Menuyu gor",
      menuShortCta: "Menuyu gor",
      quickMenuLabel: "Menu",
      quickMenuItems: ["Tabaklar", "Sandvicler", "Pizzalar", "Tatlilar"],
      productLabel: "Turk spesiyalleri",
      productTitle: "Izgara, firin, iyi servis.",
      ratingLabel: "Uber Eats puani",
      ratingText: "yerel yorum",
      serviceLabel: "Pzt-cmt, 11:00 - 22:00",
      deliveryLabel: "Pzt-cmt, 11:00 - 22:00",
      addressShort: "154 Boulevard Henri Barbusse"
    },
    ticker: [
      "Draveil Turk restorani",
      "Draveil kebap",
      "Draveil pizza",
      "Draveil helal restoran",
      "Draveil fast food"
    ],
    proof: {
      eyebrow: "Musteri yorumlari",
      title: "Draveil'de bilinen bir adres.",
      ratingLabel: "yorum"
    },
    reviews: [
      {
        title: "Her zaman duzenli",
        text: "Hizli servis ve doyurucu tabaklar."
      },
      {
        title: "Lezzetli ve bol",
        text: "Kebap, pizza ya da burger, tok cikilir."
      },
      {
        title: "Aksam icin pratik",
        text: "Draveil'de yemek icin kolay bir adres."
      }
    ],
    menu: {
      eyebrow: "Menu",
      title: "Izgaradan firina.",
      text: "Turk mezeleri, tabaklar, sandvicler, burgerler, pizzalar, tatlilar ve icecekler.",
      fullCta: "Resmi menuyu gor",
      spotlight: "Etler, sicak ekmekler, pizzalar, tatlilar.",
      categories: [
        {
          title: "Turk tabaklari",
          kicker: "Spesiyal",
          description: "Kebap, kofte, adana, merguez, steak ve karisik izgara.",
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
          alt: "Izgara tabak"
        },
        {
          title: "Sandvicler",
          kicker: "Hizli",
          description: "Kebap, chicken, adana, cordon bleu ve sisler patatesle servis edilir.",
          image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
          alt: "Sicak kebap sandvic"
        },
        {
          title: "Burger ve tacos",
          kicker: "Doyurucu",
          description: "Cheeseburger, maxi burger, chicken burger, wings, nuggets ve tacos.",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
          alt: "Sicak burger"
        },
        {
          title: "Pizzalar",
          kicker: "Firindan",
          description: "Domates soslu veya krema bazli, junior'dan mega'ya.",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
          alt: "Firindan cikan pizza"
        }
      ]
    },
    menuPage: {
      seo: {
        title: "Le Pacha resmi menu | Draveil izgara, pizza ve kebap",
        description:
          "Le Pacha Draveil resmi menu: Turk mezeleri, tabaklar, sandvicler, burgerler, tacos, pizzalar, tatlilar ve icecekler.",
        keywords: [
          "Le Pacha menu",
          "Draveil pizza",
          "Draveil kebap menu",
          "Draveil Turk restoran",
          "Draveil helal restoran menu"
        ]
      },
      header: {
        home: "Ana sayfa",
        menu: "Menu",
        info: "Bilgi"
      },
      hero: {
        eyebrow: "Resmi menu - Draveil",
        kicker: "Turk spesiyalleri",
        title: "Menu",
        outline: "resmi",
        tagline: "Restoranin menusu, yerinde okunup yazildi.",
        text: "Turk mezeleri, tabaklar, sandvicler, burgerler, pizzalar, tatlilar ve icecekler. Fiyatlar restorandaki basili menuye gore girildi.",
        boardEyebrow: "Le Pacha",
        boardText: "Izgara, firin ve iyi porsiyonlar. Tum menu burada, gercek boyutlari ve gercek formulleriyle.",
        addressKicker: "154 Boulevard Henri Barbusse",
        addressTitle: "Pzt-cmt, 11:00 - 22:00",
        stats: [
          { number: "14", label: "kategori" },
          { number: "86", label: "urun" },
          { number: "11-22", label: "saat" }
        ]
      },
      intro: {
        eyebrow: "Yerinde yazilan menu",
        title: "Tezgahtan firina, hepsi burada.",
        note:
          "Fiyatlar 10 Nisan 2026'da restoranin basili menusunden alindi. Bazilarinda boy veya formule secenekleri vardir."
      },
      finalCta: {
        eyebrow: "Siparis verecek misin?",
        title: "Sec, ara ya da Uber Eats'ten siparis ver.",
        text:
          "Draveil'deki Le Pacha: kebap, pizza, Turk tabagi, burger ve boulevard Henri Barbusse uzerinde fast food."
      },
      jsonLdName: "Le Pacha resmi menu",
      categoriesAria: "Menu kategorileri"
    },
    benefits: {
      eyebrow: "Neden gelinir",
      title: "Turk, bol, hizli.",
      items: [
        {
          label: "Mutfak",
          title: "Turk spesiyalleri",
          text: "Mezeler, tabaklar ve sandvicler sade ama doyurucu bir cizgide."
        },
        {
          label: "Pisme",
          title: "Izgara ve firin",
          text: "Sicak etler, dolu ekmekler ve servisin temposunda pizzalar."
        },
        {
          label: "Servis",
          title: "Siparis kolay",
          text: "Yerinde, telefonla ya da teslimatla."
        },
        {
          label: "Saat",
          title: "Ogleden aksama",
          text: "Pazartesiden cumartesiye 11:00 - 22:00 acik."
        }
      ]
    },
    info: {
      eyebrow: "Pratik bilgiler",
      title: "Restaurant Le Pacha, Draveil.",
      findUs: "Adres",
      addressLine: "91210 Draveil, Fransa",
      items: [
        {
          label: "Telefon",
          title: "+33 1 69 42 69 34",
          text: "Siparis vermek veya acilis saatini sormak icin ara."
        },
        {
          label: "Servis",
          title: "Yerinde, paket, teslimat",
          text: "Restoranda tum menu, Uber Eats veya telefonla hizli siparis."
        },
        {
          label: "Saatler",
          title: "Pzt-cmt: 11:00 - 22:00",
          text: "Saatler restoran menusunden alinmistir."
        }
      ]
    },
    finalCta: {
      eyebrow: "Yemek vakti",
      title: "Aciktin mi? Restorana gel ya da siparis ver.",
      text: "Draveil'de kebap, pizza, burger ve Turk spesiyalleri.",
      hoursLabel: "Saatler"
    }
  }
} satisfies Record<Locale, unknown>;
