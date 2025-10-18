"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Heart, Download, Eye, Star, ArrowRight } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export function FeaturedSection() {
  const { addToCart } = useCart()

  const featuredItems = [
    {
      id: 1,
      title: "Neon Cityscape",
      artist: "Alex Chen",
      category: "Digital Art",
      price: 150,
      originalPrice: 200,
      rating: 4.9,
      downloads: 2847,
      likes: 1205,
      views: 15420,
      featured: true,
      image: "/neon-cityscape-digital-art.png",
    },
    {
      id: 2,
      title: "Mountain Sunrise",
      artist: "Sarah Johnson",
      category: "Photography",
      price: 120,
      rating: 4.8,
      downloads: 1923,
      likes: 892,
      views: 12350,
      image: "/mountain-sunrise-photography.jpg",
    },
    {
      id: 3,
      title: "Abstract Waves",
      artist: "Marcus Rivera",
      category: "Abstract",
      price: 180,
      rating: 4.9,
      downloads: 3156,
      likes: 1456,
      views: 18920,
      image: "/abstract-waves-colorful-art.jpg",
    },
    {
      id: 4,
      title: "Forest Path",
      artist: "Emma Wilson",
      category: "Nature",
      price: 100,
      rating: 4.7,
      downloads: 1654,
      likes: 743,
      views: 9870,
      image: "/forest-path-nature-photography.jpg",
    },
  ]

  const handleAddToCart = (item: (typeof featuredItems)[0]) => {
    addToCart({
      id: item.id,
      title: item.title,
      author: item.artist,
      image: item.image,
      price: item.price,
      originalPrice: item.originalPrice,
      category: item.category,
      onSale: !!item.originalPrice,
    })
  }

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Star className="h-3 w-3 mr-1" />
            Featured Collection
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Handpicked by Our <span className="text-primary">Curators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most stunning and popular artworks from our talented community of artists
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {item.featured && <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>}
                  {item.originalPrice && (
                    <Badge variant="destructive" className="text-xs">
                      Sale
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3" />
                        <span>{item.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{item.likes.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">by {item.artist}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      {item.originalPrice && (
                        <CoinDisplay
                          amount={item.originalPrice}
                          size="sm"
                          className="line-through text-muted-foreground"
                        />
                      )}
                      <CoinDisplay amount={item.price} size="sm" />
                    </div>
                  </div>

                  <Button className="w-full group/btn" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group bg-transparent" asChild>
            <Link href="/gallery">
              View All Featured
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
