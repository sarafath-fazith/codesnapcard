"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2, Plus, Minus, Tag, Gift } from "lucide-react"

export function CheckoutSummary() {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      title: "Neon Dreams",
      author: "Alex Chen",
      image: "/neon-dreams-artwork.jpg",
      price: 120,
      originalPrice: 150,
      quantity: 1,
      onSale: true,
      category: "Digital Art",
    },
    {
      id: 2,
      title: "Cyberpunk Chronicles Collection",
      author: "Alex Chen",
      image: "/cyberpunk-chronicles-cover.jpg",
      price: 1800,
      quantity: 1,
      onSale: false,
      category: "Collection",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = cartItems.reduce((sum, item) => {
    if (item.onSale && item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity
    }
    return sum
  }, 0)
  const tax = 0 // No tax on digital goods
  const total = subtotal

  const updateQuantity = (id: number, change: number) => {
    // Handle quantity update
    console.log(`Update item ${id} quantity by ${change}`)
  }

  const removeItem = (id: number) => {
    // Handle item removal
    console.log(`Remove item ${id}`)
  }

  return (
    <div className="space-y-6">
      {/* Cart Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Order Summary</span>
            <Badge variant="outline">{cartItems.length} items</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="space-y-3">
              <div className="flex space-x-3">
                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                  {item.onSale && (
                    <div className="absolute top-1 left-1">
                      <Badge className="bg-accent text-accent-foreground text-xs px-1 py-0">Sale</Badge>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">by {item.author}</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    {item.category}
                  </Badge>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      {item.onSale && item.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          <CoinDisplay amount={item.originalPrice} size="xs" />
                        </span>
                      )}
                      <CoinDisplay amount={item.price} size="sm" />
                    </div>

                    <div className="flex items-center space-x-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 w-6 p-0 bg-transparent"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 w-6 p-0 bg-transparent"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-600 bg-transparent"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {item.id !== cartItems[cartItems.length - 1].id && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Promo Code */}
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

      {/* Price Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <CoinDisplay amount={subtotal} size="sm" />
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount</span>
              <span>
                -<CoinDisplay amount={discount} size="sm" />
              </span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>{tax === 0 ? "Free" : <CoinDisplay amount={tax} size="sm" />}</span>
          </div>

          <Separator />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <CoinDisplay amount={total} size="lg" />
          </div>

          {discount > 0 && (
            <div className="text-xs text-green-600 text-center">
              You saved <CoinDisplay amount={discount} size="xs" /> on this order!
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Notice */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-2">
            <Gift className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <div className="font-medium text-primary mb-1">Secure Purchase</div>
              <div className="text-muted-foreground">
                Your payment is protected by 256-bit SSL encryption. All digital downloads are available immediately
                after purchase.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
