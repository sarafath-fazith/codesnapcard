"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Heart, Download, Eye, Star, ShoppingCart, Maximize2, Info, Gift, BookOpen, Code, GraduationCap } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export function ProductsGrid() {
  const [likedItems, setLikedItems] = useState<number[]>([])
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      title: "CodeSnapGC Gift Card",
      type: "Gift Card",
      author: "CodeSnapGC",
      description: "A perfect gift for any creative soul. Redeemable for any product on CodeSnapGC.",
      image: "/placeholder.jpg",
      price: 500,
      rating: 5.0,
      downloads: 0,
      enrollments: 0,
      views: 10000,
      tags: ["gift", "voucher", "present"],
    },
    {
      id: 2,
      title: "Mastering Next.js eBook",
      type: "eBook",
      author: "Jane Developer",
      description: "A comprehensive guide to building modern web applications with Next.js.",
      image: "/cyberpunk-chronicles-cover.jpg",
      price: 1200,
      originalPrice: 1500,
      rating: 4.8,
      downloads: 870,
      enrollments: 0,
      views: 5000,
      tags: ["nextjs", "react", "frontend", "programming"],
    },
    {
      id: 3,
      title: "Advanced Python for Data Science Course",
      type: "Tech Course",
      author: "Dr. AI Guru",
      description: "Dive deep into data manipulation, machine learning, and AI with Python.",
      image: "/digital-horizon-art.jpg",
      price: 2500,
      rating: 4.9,
      downloads: 0,
      enrollments: 1200,
      views: 8000,
      tags: ["python", "data science", "machine learning", "ai"],
      featured: true,
    },
    {
      id: 4,
      title: "Beginner's Guide to Web Development",
      type: "Niche Guide",
      author: "Dev Newbie",
      description: "Your first steps into the exciting world of web development.",
      image: "/abstract-flow-3d.jpg",
      price: 400,
      rating: 4.5,
      downloads: 500,
      enrollments: 0,
      views: 3000,
      tags: ["webdev", "html", "css", "javascript"],
    },
    {
      id: 5,
      title: "JavaScript: The Definitive Guide (eBook)",
      type: "eBook",
      author: "Master Coder",
      description: "The comprehensive reference for JavaScript programmers.",
      image: "/author-cover-alex.jpg",
      price: 1800,
      rating: 4.9,
      downloads: 1500,
      enrollments: 0,
      views: 9000,
      tags: ["javascript", "programming", "reference"],
    },
    {
      id: 6,
      title: "React Fundamentals Course",
      type: "Tech Course",
      author: "React Enthusiast",
      description: "Learn the basics of React and build your first interactive components.",
      image: "/abstract-colorful-explosion.png",
      price: 1000,
      originalPrice: 1200,
      rating: 4.7,
      downloads: 0,
      enrollments: 900,
      views: 6000,
      tags: ["react", "frontend", "javascript", "components"],
    },
    {
      id: 7,
      title: "Linux Server Administration Manual",
      type: "Tech Manual",
      author: "System Admin",
      description: "A practical guide to setting up and managing Linux servers.",
      image: "/character-studies-cover.jpg",
      price: 800,
      rating: 4.6,
      downloads: 300,
      enrollments: 0,
      views: 2000,
      tags: ["linux", "server", "administration", "sysadmin"],
    },
    {
      id: 8,
      title: "Vue.js from Scratch Guide",
      type: "Niche Guide",
      author: "Vue Fanatic",
      description: "Learn Vue.js rapidly with this hands-on, project-based guide.",
      image: "/city-lights-night.png",
      price: 600,
      rating: 4.7,
      downloads: 400,
      enrollments: 0,
      views: 2500,
      tags: ["vuejs", "frontend", "javascript"],
    },
  ]

  const toggleLike = (id: number) => {
    setLikedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      title: product.title,
      author: product.author || "",
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice,
      category: product.type,
      onSale: !!product.originalPrice,
    })
  }

  const getProductIcon = (type: string) => {
    switch (type) {
      case "Gift Card":
        return <Gift className="h-3 w-3 mr-1" />
      case "eBook":
        return <BookOpen className="h-3 w-3 mr-1" />
      case "Tech Manual":
        return <Code className="h-3 w-3 mr-1" />
      case "Tech Course":
        return <GraduationCap className="h-3 w-3 mr-1" />
      case "Niche Guide":
        return <BookOpen className="h-3 w-3 mr-1" />
      default:
        return <Info className="h-3 w-3 mr-1" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Product Results</h2>
        <div className="text-sm text-muted-foreground">{products.length} of 12,847 products</div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Badges */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
                {product.featured && <Badge className="bg-secondary text-secondary-foreground text-xs">Featured</Badge>}
                {product.originalPrice && (
                  <Badge variant="destructive" className="text-xs">
                    Sale
                  </Badge>
                )}
                <Badge variant="outline" className="bg-background/90 text-xs">
                  {product.type}
                </Badge>
              </div>

              {/* Quick Actions */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-8 w-8 p-0 touch-manipulation"
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart className={`h-4 w-4 ${likedItems.includes(product.id) ? "fill-current text-red-500" : ""}`} />
                </Button>
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0 touch-manipulation">
                  <Maximize2 className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0 touch-manipulation">
                  <Info className="h-4 w-4" />
                </Button>
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {product.type === "Tech Course" ? (
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="h-3 w-3" />
                        <span className="hidden sm:inline">{product.enrollments?.toLocaleString()}</span>
                        <span className="sm:hidden">{((product.enrollments || 0) / 1000).toFixed(1)}k</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3" />
                        <span className="hidden sm:inline">{product.downloads?.toLocaleString()}</span>
                        <span className="sm:hidden">{((product.downloads || 0) / 1000).toFixed(1)}k</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span className="hidden sm:inline">{product.views?.toLocaleString()}</span>
                      <span className="sm:hidden">{((product.views || 0) / 1000).toFixed(1)}k</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <CardContent className="p-3 sm:p-4">
              <div className="space-y-2 sm:space-y-3">
                {/* Title and Author/Type */}
                <div>
                  <h3 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {product.author ? `by ${product.author}` : product.type}
                  </p>
                </div>

                {/* Category and Tags */}
                <div className="space-y-1.5 sm:space-y-2">
                  <Badge variant="outline" className="text-xs flex items-center w-fit">
                    {getProductIcon(product.type)}
                    {product.type}
                  </Badge>
                  <div className="flex flex-wrap gap-1">
                    {(product.tags || []).slice(0, 2).map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-xs px-1.5 sm:px-2 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-1 sm:pt-2">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    {product.originalPrice && (
                      <CoinDisplay
                        amount={product.originalPrice}
                        size="sm"
                        className="line-through text-muted-foreground text-xs"
                      />
                    )}
                    <CoinDisplay amount={product.price} size="sm" />
                  </div>
                  <Button
                    size="sm"
                    className="h-7 sm:h-8 text-xs touch-manipulation"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
