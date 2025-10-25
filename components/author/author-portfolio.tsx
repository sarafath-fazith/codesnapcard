"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Heart, Download, Eye, Filter, Grid3X3, List, Star, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface AuthorPortfolioProps {
  authorId: string
}

export function AuthorPortfolio({ authorId }: AuthorPortfolioProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock data - in real app, fetch based on authorId
  const artworks = [
    {
      id: 1,
      title: "Neon Dreams",
      category: "Digital Art",
      price: 120,
      originalPrice: 150,
      image: "/neon-dreams-artwork.jpg",
      likes: 1247,
      downloads: 892,
      views: 5634,
      rating: 4.8,
      tags: ["cyberpunk", "neon", "city"],
      featured: true,
      onSale: true,
    },
    {
      id: 2,
      title: "Urban Solitude",
      category: "Photography",
      price: 80,
      image: "/urban-solitude-photo.jpg",
      likes: 934,
      downloads: 567,
      views: 3421,
      rating: 4.7,
      tags: ["street", "urban", "portrait"],
      featured: false,
      onSale: false,
    },
    {
      id: 3,
      title: "Digital Horizon",
      category: "Digital Art",
      price: 200,
      image: "/digital-horizon-art.jpg",
      likes: 1856,
      downloads: 1234,
      views: 8765,
      rating: 4.9,
      tags: ["landscape", "digital", "futuristic"],
      featured: true,
      onSale: false,
    },
    {
      id: 4,
      title: "Midnight Tokyo",
      category: "Photography",
      price: 95,
      image: "/midnight-tokyo-photo.jpg",
      likes: 756,
      downloads: 445,
      views: 2987,
      rating: 4.6,
      tags: ["tokyo", "night", "street"],
      featured: false,
      onSale: false,
    },
    {
      id: 5,
      title: "Cyber Punk Girl",
      category: "Illustration",
      price: 160,
      image: "/cyber-punk-girl-illustration.jpg",
      likes: 2134,
      downloads: 1567,
      views: 9876,
      rating: 4.9,
      tags: ["character", "cyberpunk", "portrait"],
      featured: true,
      onSale: false,
    },
    {
      id: 6,
      title: "Abstract Flow",
      category: "3D Art",
      price: 180,
      image: "/abstract-flow-3d.jpg",
      likes: 1023,
      downloads: 678,
      views: 4532,
      rating: 4.7,
      tags: ["abstract", "3d", "flow"],
      featured: false,
      onSale: false,
    },
  ]

  const categories = ["all", "Digital Art", "Photography", "Illustration", "3D Art"]
  const filteredArtworks =
    selectedCategory === "all" ? artworks : artworks.filter((artwork) => artwork.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <p className="text-muted-foreground">{artworks.length} artworks available</p>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex space-x-1">
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory !== category ? "bg-transparent" : ""}
                >
                  {category === "all" ? "All" : category}
                </Button>
              ))}
            </div>
          </div>

          {/* View Mode */}
          <div className="flex items-center border rounded-md">
            <Button
              size="sm"
              variant={viewMode === "grid" ? "default" : "ghost"}
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant={viewMode === "list" ? "default" : "ghost"}
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      {/* Portfolio Grid */}
      <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {filteredArtworks.map((artwork) => (
          <Card key={artwork.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            {viewMode === "grid" ? (
              <>
                {/* Grid View */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex space-x-2">
                    {artwork.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                    {artwork.onSale && <Badge className="bg-accent text-accent-foreground">Sale</Badge>}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{artwork.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="h-3 w-3" />
                          <span>{artwork.downloads}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{artwork.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                        {artwork.title}
                      </h3>
                      <Badge variant="outline" className="text-xs mt-1">
                        {artwork.category}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {artwork.onSale && artwork.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            <CoinDisplay amount={artwork.originalPrice} size="sm" />
                          </span>
                        )}
                        <CoinDisplay amount={artwork.price} size="sm" />
                      </div>
                      <Button size="sm" className="group/btn">
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        Buy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              /* List View */
              (<CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg line-clamp-1">{artwork.title}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {artwork.category}
                          </Badge>
                          {artwork.featured && (
                            <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-3 w-3" />
                            <span>{artwork.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-3 w-3" />
                            <span>{artwork.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-current text-yellow-500" />
                            <span>{artwork.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          {artwork.onSale && artwork.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              <CoinDisplay amount={artwork.originalPrice} size="sm" />
                            </div>
                          )}
                          <CoinDisplay amount={artwork.price} size="sm" />
                        </div>
                        <Button size="sm">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>)
            )}
          </Card>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center pt-4">
        <Button variant="outline" size="lg" className="bg-transparent">
          Load More Artworks
        </Button>
      </div>
    </div>
  );
}
