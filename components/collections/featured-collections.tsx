import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Star, ImageIcon, ArrowRight, Crown } from "lucide-react"
import Image from "next/image"

export function FeaturedCollections() {
  const featuredCollections = [
    {
      id: 1,
      title: "Cyberpunk Dreams",
      description: "Futuristic neon-lit cityscapes and digital art",
      curator: "Digital Futures",
      artworkCount: 24,
      totalPrice: 3600,
      discountedPrice: 2880,
      rating: 4.9,
      subscribers: 1247,
      featured: true,
      coverImage: "/cyberpunk-collection-cover.jpg",
      previewImages: [
        "/cyberpunk-neon-city.jpg",
        "/digital-future-art.png",
        "/neon-street-scene.jpg",
        "/cyber-portrait.png",
      ],
    },
    {
      id: 2,
      title: "Nature's Serenity",
      description: "Peaceful landscapes and natural beauty",
      curator: "Earth Lens",
      artworkCount: 32,
      totalPrice: 2400,
      discountedPrice: 1920,
      rating: 4.8,
      subscribers: 2156,
      coverImage: "/nature-serenity-cover.jpg",
      previewImages: [
        "/mountain-lake-dawn.jpg",
        "/forest-sunlight.jpg",
        "/ocean-waves-calm.jpg",
        "/wildflower-meadow.jpg",
      ],
    },
    {
      id: 3,
      title: "Abstract Expressions",
      description: "Bold colors and fluid artistic movements",
      curator: "Modern Art Co",
      artworkCount: 18,
      totalPrice: 2700,
      discountedPrice: 2160,
      rating: 4.9,
      subscribers: 892,
      featured: true,
      coverImage: "/abstract-expressions-cover.png",
      previewImages: [
        "/fluid-colors-abstract.jpg",
        "/geometric-patterns.png",
        "/paint-splash-art.jpg",
        "/color-explosion.png",
      ],
    },
  ]

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Crown className="h-3 w-3 mr-1" />
            Editor&apos;s Choice
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-secondary">Collections</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked collections that showcase the best artwork in specific themes and styles
          </p>
        </div>

        {/* Featured Collections Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredCollections.map((collection) => (
            <Card key={collection.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Cover Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Featured Badge */}
                {collection.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      <Crown className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Preview Images */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-3">
                    {collection.previewImages.slice(0, 4).map((image, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50 opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <Image width={100} height={100} src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="text-white text-sm font-medium">+{collection.artworkCount - 4} more</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{collection.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Collection Info */}
                  <div>
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{collection.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">by {collection.curator}</span>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <ImageIcon className="h-3 w-3" />
                        <span>{collection.artworkCount} items</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <CoinDisplay
                          amount={collection.totalPrice}
                          size="sm"
                          className="line-through text-muted-foreground"
                        />
                        <Badge variant="destructive" className="text-xs">
                          20% OFF
                        </Badge>
                      </div>
                      <CoinDisplay amount={collection.discountedPrice} size="md" />
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{collection.subscribers.toLocaleString()} subscribers</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full group/btn">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group bg-transparent">
            Browse All Collections
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
