
import { GiftCardPurchaseOptions } from "@/components/gift-cards/gift-card-purchase-options";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GiftCardSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Give the Gift of Creativity
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our gift cards are the perfect way to treat the developers and
              creators in your life. They can be used to purchase any of our
              digital assets, from UI kits to 3D models.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl">
          <GiftCardPurchaseOptions />
          <div className="mt-4 flex justify-center">
            <Link href="/gift-cards">
              <Button>Purchase a Gift Card</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
