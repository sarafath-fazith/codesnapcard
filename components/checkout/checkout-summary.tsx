'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Tag, Gift } from "lucide-react"

interface GiftCard {
  name: string | null;
  price: number | null;
}

interface CheckoutSummaryProps {
  giftCard?: GiftCard;
}

export function CheckoutSummary({ giftCard }: CheckoutSummaryProps) {
  const tax = 0;
  const total = giftCard?.price || 0;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Order Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {giftCard && giftCard.name && giftCard.price ? (
            <div className="flex space-x-3">
              <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <Gift className="w-full h-full object-cover p-2" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-1">{giftCard.name} Gift Card</h4>
                <p className="text-sm text-muted-foreground">Price: ₹{giftCard.price.toLocaleString()}</p>
              </div>
            </div>
          ) : (
            <p>No item in cart</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter promo code"
                className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm">
              <Tag className="h-4 w-4 mr-1" />
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>{tax === 0 ? "Free" : `₹${tax}`}</span>
          </div>

          <Separator />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-2">
            <Gift className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <div className="font-medium text-primary mb-1">Secure Purchase</div>
              <div className="text-muted-foreground">
                Your payment is protected by 256-bit SSL encryption.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
