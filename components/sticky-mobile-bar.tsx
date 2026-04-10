import { restaurant } from "@/data/restaurant";
import { ButtonLink } from "./button-link";

type StickyMobileBarProps = {
  t: {
    call: string;
    order: string;
    stickyOrder?: string;
  };
};

export function StickyMobileBar({ t }: StickyMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-charcoal/95 px-4 py-3 shadow-[0_-16px_44px_rgba(0,0,0,0.45)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <ButtonLink href={restaurant.links.phone} variant="secondary" className="min-h-[3.25rem] px-2 text-xs">
          {t.call}
        </ButtonLink>
        <ButtonLink href={restaurant.links.uberEats} variant="primary" className="min-h-[3.25rem] px-2 text-xs">
          {t.stickyOrder ?? t.order}
        </ButtonLink>
      </div>
    </div>
  );
}
