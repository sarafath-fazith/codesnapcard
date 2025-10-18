"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CreditCard, Wallet, Plus, Edit, Trash2, Shield, Star, Gift, Banknote, Smartphone } from "lucide-react"

interface PaymentMethod {
  id: string
  type: "card" | "paypal" | "bank"
  name: string
  details: string
  isDefault: boolean
  lastUsed?: string
  icon: React.ReactNode
}

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "card",
      name: "Visa ending in 4242",
      details: "Expires 12/25",
      isDefault: true,
      lastUsed: "2 days ago",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      id: "2",
      type: "paypal",
      name: "PayPal Account",
      details: "john@example.com",
      isDefault: false,
      lastUsed: "1 week ago",
      icon: <Wallet className="h-5 w-5" />,
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [coinBalance] = useState(2450)

  const setAsDefault = (id: string) => {
    setPaymentMethods((methods) =>
      methods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
  }

  const removeMethod = (id: string) => {
    setPaymentMethods((methods) => methods.filter((method) => method.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Payment Methods</h1>
            <p className="text-muted-foreground">Manage your payment methods and coin balance</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Methods */}
            <div className="lg:col-span-2 space-y-6">
              {/* Coin Balance */}
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wallet className="h-5 w-5 text-primary" />
                    <span>CodeSnapGC Coin Balance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CoinDisplay amount={coinBalance} size="xl" />
                      <p className="text-sm text-muted-foreground mt-1">Available for purchases</p>
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Buy More Coins
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-background/50 rounded-lg">
                      <div className="text-sm font-medium">This Month</div>
                      <CoinDisplay amount={450} size="sm" className="text-muted-foreground" />
                    </div>
                    <div className="p-3 bg-background/50 rounded-lg">
                      <div className="text-sm font-medium">Total Earned</div>
                      <CoinDisplay amount={1200} size="sm" className="text-muted-foreground" />
                    </div>
                    <div className="p-3 bg-background/50 rounded-lg">
                      <div className="text-sm font-medium">Total Spent</div>
                      <CoinDisplay amount={3800} size="sm" className="text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Saved Payment Methods */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Saved Payment Methods</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setShowAddForm(!showAddForm)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Method
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-muted rounded-lg">{method.icon}</div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{method.name}</span>
                            {method.isDefault && (
                              <Badge variant="default" className="text-xs">
                                Default
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{method.details}</p>
                          {method.lastUsed && (
                            <p className="text-xs text-muted-foreground">Last used {method.lastUsed}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {!method.isDefault && (
                          <Button variant="ghost" size="sm" onClick={() => setAsDefault(method.id)}>
                            Set Default
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMethod(method.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  {/* Add Payment Method Form */}
                  {showAddForm && (
                    <Card className="bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-lg">Add New Payment Method</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <Button variant="outline" className="h-20 flex-col bg-transparent">
                            <CreditCard className="h-6 w-6 mb-2" />
                            <span className="text-sm">Credit Card</span>
                          </Button>
                          <Button variant="outline" className="h-20 flex-col bg-transparent">
                            <Smartphone className="h-6 w-6 mb-2" />
                            <span className="text-sm">PayPal</span>
                          </Button>
                          <Button variant="outline" className="h-20 flex-col bg-transparent">
                            <Banknote className="h-6 w-6 mb-2" />
                            <span className="text-sm">Bank Transfer</span>
                          </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Cardholder Name</Label>
                            <Input id="cardName" placeholder="John Doe" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setShowAddForm(false)}>
                            Cancel
                          </Button>
                          <Button>Add Payment Method</Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Gift className="h-4 w-4 mr-2" />
                    Redeem Gift Card
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Star className="h-4 w-4 mr-2" />
                    Earn Free Coins
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Shield className="h-4 w-4 mr-2" />
                    Security Settings
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-medium mb-2">Secure Payments</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      All payments are protected with 256-bit SSL encryption and fraud protection.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      PCI DSS Compliant
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
