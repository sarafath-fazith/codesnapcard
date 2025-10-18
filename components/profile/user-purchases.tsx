"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Input } from "@/components/ui/input"
import { Download, Search, Filter, Calendar, Star, Eye } from "lucide-react"

export function UserPurchases() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  // Mock purchase history
  const purchases = [
    {
      id: "PXL-2024-001234",
      date: "2024-01-15",
      items: [
        {
          title: "Neon Dreams",
          author: "Alex Chen",
          image: "/neon-dreams-artwork.jpg",
          category: "Digital Art",
          price: 120,
        },
      ],
      total: 120,
      status: "completed",
    },
    {
      id: "PXL-2024-001235",
      date: "2024-01-12",
      items: [
        {
          title: "Cyberpunk Chronicles Collection",
          author: "Alex Chen",
          image: "/cyberpunk-chronicles-cover.jpg",
          category: "Collection",
          price: 1800,
        },
      ],
      total: 1800,
      status: "completed",
    },
    {
      id: "PXL-2024-001236",
      date: "2024-01-08",
      items: [
        {
          title: "Urban Solitude",
          author: "Alex Chen",
          image: "/urban-solitude-photo.jpg",
          category: "Photography",
          price: 80,
        },
        {
          title: "Digital Horizon",
          author: "Alex Chen",
          image: "/digital-horizon-art.jpg",
          category: "Digital Art",
          price: 200,
        },
      ],
      total: 280,
      status: "completed",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Purchase History</span>
          <Badge variant="outline">{purchases.length} orders</Badge>
        </CardTitle>

        {/* Search and Filter */}
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search purchases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {purchases.map((purchase) => (
          <Card key={purchase.id} className="border border-border/50">
            <CardContent className="p-4">
              {/* Purchase Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-medium">Order #{purchase.id}</div>
                  <div className="text-sm text-muted-foreground flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(purchase.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="text-right">
                  <CoinDisplay amount={purchase.total} size="sm" />
                  <Badge variant="default" className="bg-green-100 text-green-700 ml-2">
                    {purchase.status}
                  </Badge>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {purchase.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium line-clamp-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">by {item.author}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {item.category}
                      </Badge>
                    </div>

                    <div className="text-right">
                      <CoinDisplay amount={item.price} size="sm" />
                      <div className="flex space-x-1 mt-2">
                        <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                          <Star className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Load More */}
        <div className="text-center pt-4">
          <Button variant="outline" className="bg-transparent">
            Load More Purchases
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
