'use client'

import { useProducts } from "@/contexts/products-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { TrendingUp, Star } from "lucide-react"
import Image from "next/image"

export function TrendingSection() {
  const { products } = useProducts()
  const trendingProducts = products.filter(product => product.trending)

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="h-3 w-3 mr-1" />
            What&apos;s Hot
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-secondary">Trending</span> Right Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what&apos;s capturing everyone&apos;s attention and climbing the charts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
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
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>

                  <Button className="w-full">Claim Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
