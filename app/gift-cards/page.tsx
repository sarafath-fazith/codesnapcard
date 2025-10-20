import { GiftCardPurchaseOptions } from "@/components/gift-cards/gift-card-purchase-options";
import { GiftCardRedeem } from "@/components/gift-cards/gift-card-redeem";

export default function GiftCardsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Gift Cards</h1>
        <p className="text-muted-foreground mt-2">
          The perfect gift for any developer or creator.
        </p>
      </header>

      <div className="space-y-12">
        <GiftCardPurchaseOptions />
        <GiftCardRedeem />
      </div>
    </div>
  );
}
