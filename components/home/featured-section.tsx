"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Star, Download, Code } from "lucide-react"

// Mock data for featured assets
const featuredAssets = [
  {
    id: 1,
    title: "Abstract Colorful Explosion",
    category: "Digital Art",
    imageUrl: "/abstract-colorful-explosion.png",
    author: "Alex Chen",
    authorAvatar: "/author-alex-chen.jpg",
    price: 150,
    rating: 4.9,
    downloads: 2300,
  },
  {
    id: 2,
    title: "Forest Nature Photography",
    category: "Photography",
    imageUrl: "/forest-nature-photography.png",
    author: "Sarah Jenkins",
    authorAvatar: "/photographer-profile-sarah.jpg",
    price: 120,
    rating: 4.8,
    downloads: 1800,
  },
  {
    id: 3,
    title: "React Auth Component",
    category: "Code Snippet",
    imageUrl: "/neon-cityscape-digital-art.png", // Placeholder for code
    author: "Marcus Reid",
    authorAvatar: "/artist-profile-marcus.jpg",
    price: 250,
    rating: 5.0,
    downloads: 4500,
  },
]

export function FeaturedSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 w-fit bg-secondary/20 text-secondary border-secondary/30"
            >
              <Sparkles className="h-3 w-3 mr-1" />
              Featured Assets
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Discover Our Top Picks</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">Explore a curated selection of our best-selling and most-loved assets from top creators.</p>
          </div>
          <Button asChild variant="outline" className="border-secondary/30 hover:bg-secondary/10 mt-4 md:mt-0">
            <Link href="/gallery">
              <div className="flex items-center">
                <span>View All</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredAssets.map((asset) => (
            <div
              key={asset.id}
              className="group relative bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Link href={`/products/${asset.id}`} className="absolute inset-0 z-10" legacyBehavior>
                <span className="sr-only">View {asset.title}</span>
              </Link>

              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={asset.imageUrl}
                  alt={asset.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {asset.category === "Code Snippet" && (
                  <div className="absolute inset-0 bg-gray-800/60 flex items-center justify-center">
                    <Code className="h-16 w-16 text-white/70" />
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                  {asset.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                  {asset.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center space-x-2 mt-2">
                  <Image
                    src={asset.authorAvatar}
                    alt={asset.author}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-sm text-muted-foreground">{asset.author}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{asset.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{(asset.downloads / 1000).toFixed(1)}k</span>
                  </div>
                </div>
              </div>

              {/* Price Overlay */}
              <div className="absolute bottom-4 right-4 z-20">
                <Button size="sm" className="shadow-lg">
                  Claim Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
