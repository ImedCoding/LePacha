import { restaurant } from "@/data/restaurant";
import { ButtonLink } from "./button-link";

type StickyMobileBarProps = {
  activePage?: "home" | "menu";
  t: {
    call: string;
    home: string;
    menu: string;
    order: string;
    stickyOrder?: string;
  };
};

export function StickyMobileBar({ activePage = "home", t }: StickyMobileBarProps) {
  const middleAction =
    activePage === "menu"
      ? { href: "/", label: t.home }
      : { href: "/menu", label: t.menu };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d4c49a]/15 bg-[linear-gradient(180deg,rgba(9,9,9,0.96),rgba(11,13,10,0.96))] px-4 py-3 shadow-[0_-16px_44px_rgba(0,0,0,0.45)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <ButtonLink href={restaurant.links.phone} variant="secondary" className="min-w-0 min-h-[3.25rem] !px-2 text-[0.7rem]">
          {t.call}
        </ButtonLink>
        <ButtonLink href={middleAction.href} variant="quiet" className="min-w-0 min-h-[3.25rem] !px-2 text-[0.7rem]">
          {middleAction.label}
        </ButtonLink>
        <ButtonLink href={restaurant.links.uberEats} variant="primary" className="min-w-0 min-h-[3.25rem] !px-2 text-[0.7rem]">
          {t.stickyOrder ?? t.order}
        </ButtonLink>
      </div>
    </div>
  );
}
