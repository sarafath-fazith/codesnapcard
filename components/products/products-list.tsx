'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Star } from "lucide-react"
import Image from "next/image"
import { Product } from "@/contexts/products-context";

interface ProductsListProps {
  products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
      {products.map(product => (
        <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={`/api/watermark?imageUrl=${encodeURIComponent(product.image || "/placeholder.svg")}`}
              alt={product.name}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  {product.category}
                </div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">by {product.creator}</p>
              </div>
              <div className="flex items-center justify-between">
                <CoinDisplay amount={product.price} size="md" />
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
              </div>
              <Button className="w-full">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
