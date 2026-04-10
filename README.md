# Le Pacha 2

Landing page premium et mobile-first pour Le Pacha 2, restaurant fast-food halal / kebab a Draveil.

Le site met en avant les commandes Uber Eats, l'appel rapide, les informations pratiques et une direction visuelle sombre inspiree du grill, du feu et du street-food de nuit.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- `next/image` pour les images optimisees
- Pas de backend

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est disponible par defaut sur :

```bash
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Lance le serveur de developpement.

```bash
npm run build
```

Genere une version de production et verifie TypeScript.

```bash
npm run start
```

Lance la version de production apres un build.

## Structure

```text
app/
  layout.tsx       Metadata, favicon, SEO global
  page.tsx         Sections principales de la landing page
  menu/page.tsx    Page menu complet
  globals.css      Styles globaux, effets visuels, animations
components/
  button-link.tsx
  site-header.tsx
  sticky-mobile-bar.tsx
data/
  restaurant.ts    Donnees restaurant + textes FR/TR
  menu.json        Menu complet + noms des fichiers photo
public/
  logo.png         Logo utilise dans la navbar et en favicon
  menu/            Photos locales des plats
```

## Modifier le contenu

La plupart des textes, liens, horaires, images et traductions se trouvent dans :

```text
data/restaurant.ts
```

Le site est en francais par defaut et propose une traduction turque via le bouton de langue dans la navbar.

Principaux champs a modifier :

- `restaurant.address`
- `restaurant.phone`
- `restaurant.links.uberEats`
- `restaurant.hours`
- `restaurant.images`
- `content.fr`
- `content.tr`

## Modifier le menu

Le menu complet de la page `/menu` se trouve dans :

```text
data/menu.json
```

Chaque section contient :

- `title`, `shortTitle`, `description`
- `items`
- `price`
- `photoFile`
- `translations.tr` pour les textes turcs du menu complet

Pour ajouter ou modifier un plat, editer uniquement `data/menu.json`.
Les prix actuels sont des prix indicatifs releves depuis Uber Eats le
10 avril 2026.

## Images

Les images de nourriture utilisent actuellement des URLs Unsplash configurees dans `next.config.mjs`.

Pour remplacer une image, modifier l'URL correspondante dans `data/restaurant.ts`.

Le logo local est :

```text
public/logo.png
```

Il est utilise dans la navbar et declare comme favicon dans `app/layout.tsx`.

Les photos du menu doivent etre ajoutees dans :

```text
public/menu/
```

Utiliser les noms indiques dans `data/menu.json`, par exemple :

```text
public/menu/menu-sandwich-grec.jpg
public/menu/menu-assiette-mixte.jpg
public/menu/tacos.jpg
```

Si une photo n'existe pas encore, la page garde un visuel sombre de
remplacement sans casser l'affichage. Apres ajout de photos, relancer le
serveur de dev ou refaire un build pour regenerer la page.

## Design

Direction visuelle :

- fond sombre
- ambiance grill / feu / nuit
- orange fort pour les CTA
- contraste eleve
- mobile-first
- barre sticky mobile pour appeler ou commander

Le contenu doit rester court, local et direct. Eviter les textes qui parlent comme une agence ou une landing page generique.

## Verification

Avant livraison :

```bash
npm run build
npm audit --audit-level=critical
```

Les deux commandes doivent passer sans erreur critique.
