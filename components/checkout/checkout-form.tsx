"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Wallet, Gift, AlertCircle, Lock, Shield } from "lucide-react"

export function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<"coins" | "purchase" | "gift">("coins")
  const [giftCode, setGiftCode] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const userCoins = 2450 // Mock user coin balance
  const totalCost = 1920 // Mock total cost

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    // Redirect to success page or show success message
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Payment Method</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Coin Balance */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Your Coin Balance</span>
              <CoinDisplay amount={userCoins} size="sm" />
            </div>
            <div className="text-xs text-muted-foreground">
              {userCoins >= totalCost ? (
                <span className="text-green-600 flex items-center">
                  <Shield className="h-3 w-3 mr-1" />
                  Sufficient balance for this purchase
                </span>
              ) : (
                <span className="text-red-600 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Insufficient balance. Need {totalCost - userCoins} more coins.
                </span>
              )}
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-3">
            {/* Use Coins */}
            <div
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                paymentMethod === "coins" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onClick={() => setPaymentMethod("coins")}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="coins"
                  checked={paymentMethod === "coins"}
                  onChange={() => setPaymentMethod("coins")}
                  className="text-primary"
                />
                <Wallet className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="font-medium">Use PixelMart Coins</div>
                  <div className="text-sm text-muted-foreground">Pay with your coin balance</div>
                </div>
                <Badge variant={userCoins >= totalCost ? "default" : "destructive"}>
                  {userCoins >= totalCost ? "Available" : "Insufficient"}
                </Badge>
              </div>
            </div>

            {/* Purchase More Coins */}
            <div
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                paymentMethod === "purchase" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onClick={() => setPaymentMethod("purchase")}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="purchase"
                  checked={paymentMethod === "purchase"}
                  onChange={() => setPaymentMethod("purchase")}
                  className="text-primary"
                />
                <CreditCard className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="font-medium">Purchase Coins</div>
                  <div className="text-sm text-muted-foreground">Buy coins with credit card or PayPal</div>
                </div>
                <Badge variant="outline">$0.10 per coin</Badge>
              </div>
            </div>

            {/* Gift Code */}
            <div
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                paymentMethod === "gift" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onClick={() => setPaymentMethod("gift")}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="gift"
                  checked={paymentMethod === "gift"}
                  onChange={() => setPaymentMethod("gift")}
                  className="text-primary"
                />
                <Gift className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="font-medium">Gift Code</div>
                  <div className="text-sm text-muted-foreground">Redeem a gift code or voucher</div>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Code Input */}
          {paymentMethod === "gift" && (
            <div className="space-y-2">
              <Label htmlFor="giftCode">Gift Code</Label>
              <div className="flex space-x-2">
                <Input
                  id="giftCode"
                  placeholder="Enter your gift code"
                  value={giftCode}
                  onChange={(e) => setGiftCode(e.target.value)}
                  className="flex-1"
                />
                <Button type="button" variant="outline">
                  Apply
                </Button>
              </div>
            </div>
          )}

          {/* Purchase Coins Form */}
          {paymentMethod === "purchase" && (
            <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium">Purchase Additional Coins</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coinsAmount">Coins to Purchase</Label>
                  <Input id="coinsAmount" type="number" placeholder="2000" min={totalCost - userCoins} />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Billing Information */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" placeholder="123 Main St, City, Country" />
          </div>
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                Subscribe to our newsletter for updates and exclusive offers
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          disabled={isProcessing || (paymentMethod === "coins" && userCoins < totalCost)}
          className="min-w-[200px]"
        >
          {isProcessing ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4" />
              <span>Complete Purchase</span>
            </div>
          )}
        </Button>
      </div>
    </form>
  )
}
