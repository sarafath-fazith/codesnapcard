"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Input } from "@/components/ui/input"

export default function BuyCoinsPage() {
  const [userCoins] = useState(1250) // Mock user coins
  const [customAmount, setCustomAmount] = useState("")

  const coinPackages = [
    { name: "Starter Pack", coins: 500, price: 500, popular: false },
    { name: "Value Bundle", coins: 1200, price: 1200, popular: true },
    { name: "Creator's Chest", coins: 3000, price: 3000, popular: false },
    { name: "Artisan's Trove", coins: 8000, price: 8000, popular: false },
  ]

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    setCustomAmount(value)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Buy Coins</h1>
            <p className="text-muted-foreground">
              Purchase coins to buy exclusive assets from our talented creators. 1 coin = 1 INR.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Your Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <CoinDisplay amount={userCoins} size="lg" />
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
                  <div className="pt-4">
                    <p className="font-semibold mb-2">Or enter a custom amount</p>
                    <div className="flex space-x-2">
                      <Input
                        type="text"
                        placeholder="Number of coins"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                      <Button>Buy</Button>
                    </div>
                    {customAmount && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Price: ₹{customAmount}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}