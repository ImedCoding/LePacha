import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import menuJson from "@/data/menu.json";
import { content } from "@/data/restaurant";
import {
  MenuPageClient,
  type MenuData,
  type MenuSectionWithPhoto
} from "./menu-page-client";

const menuData = menuJson as MenuData;
const menuPageText = content.fr.menuPage;

export const metadata: Metadata = {
  title: menuPageText.seo.title,
  description: menuPageText.seo.description,
  keywords: menuPageText.seo.keywords
};

export default function MenuPage() {
  const sections: MenuSectionWithPhoto[] = menuData.sections.map((section) => ({
    ...section,
    photoSrc: getMenuPhotoSrc(section.photoFile),
    items: section.items.map((item) => ({
      ...item,
      photoSrc: getMenuPhotoSrc(item.photoFile)
    }))
  }));

  return (
    <MenuPageClient
      sections={sections}
      sourceUrl={menuData.source.url}
      translations={menuData.translations}
    />
  );
}

function getMenuPhotoSrc(photoFile: string) {
  const fullPath = join(process.cwd(), "public", "menu", photoFile);
  return existsSync(fullPath) ? `/menu/${photoFile}` : null;
}
