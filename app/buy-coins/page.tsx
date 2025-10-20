"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"

export default function BuyCoinsPage() {
  const [userCoins] = useState(1250) // Mock user coins

  const coinPackages = [
    { name: "Starter Pack", coins: 500, price: 399, popular: false },
    { name: "Value Bundle", coins: 1200, price: 799, popular: true },
    { name: "Creator's Chest", coins: 3000, price: 1599, popular: false },
    { name: "Artisan's Trove", coins: 8000, price: 3999, popular: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Buy Coins</h1>
            <p className="text-muted-foreground">
              Purchase coins to buy exclusive assets from our talented creators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Your Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <CoinDisplay amount={userCoins} size="lg" />
                    <Button>Add Funds</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Coin Packages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {coinPackages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`p-4 rounded-lg border cursor-pointer hover:border-primary transition-all ${
                        pkg.popular ? "border-primary bg-primary/5" : "bg-background/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{pkg.name}</p>
                          <CoinDisplay amount={pkg.coins} size="sm" />
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">₹{pkg.price}</p>
                          {pkg.popular && (
                            <p className="text-xs text-primary font-medium">Most Popular</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}