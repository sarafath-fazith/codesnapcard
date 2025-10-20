'use client'

import { useSearchParams } from 'next/navigation'
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { CheckoutSummary } from "@/components/checkout/checkout-summary"
import { CheckoutSteps } from "@/components/checkout/checkout-steps"

export default function GiftCardCheckoutPage() {
  const searchParams = useSearchParams()
  const card = searchParams.get('card')
  const price = searchParams.get('price')

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Gift Card Checkout</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Complete your purchase for {card}</p>
          </div>

          {/* Steps */}
          <CheckoutSteps />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 sm:mt-8">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <CheckoutForm />
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <CheckoutSummary giftCard={{ name: card, price: Number(price) }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
