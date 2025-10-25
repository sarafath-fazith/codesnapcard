import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, ImageIcon, Users, Star, ArrowRight, Bookmark } from "lucide-react"
import Image from "next/image"

export function CollectionsGrid() {
  const collections = [
    {
      id: 4,
      title: "Minimalist Spaces",
      description: "Clean, simple designs with maximum impact",
      curator: "Clean Studio",
      curatorAvatar: "/curator-clean-studio.jpg",
      artworkCount: 16,
      price: 1440,
      rating: 4.7,
      subscribers: 743,
      likes: 1205,
      category: "Minimalist",
      coverImage: "/minimalist-spaces-cover.jpg",
      previewImages: ["/minimal-room.jpg", "/clean-architecture.jpg", "/simple-design.jpg"],
    },
    {
      id: 5,
      title: "Urban Exploration",
      description: "Street photography and city life",
      curator: "City Walker",
      curatorAvatar: "/curator-city-walker.jpg",
      artworkCount: 28,
      price: 2240,
      rating: 4.8,
      subscribers: 1456,
      likes: 2134,
      category: "Photography",
      coverImage: "/urban-exploration-cover.jpg",
      previewImages: ["/street-art.jpg", "/city-night.jpg", "/urban-portrait.jpg"],
    },
    {
      id: 6,
      title: "Vintage Aesthetics",
      description: "Retro designs and nostalgic vibes",
      curator: "Retro Collective",
      curatorAvatar: "/curator-retro.jpg",
      artworkCount: 22,
      price: 1760,
      rating: 4.6,
      subscribers: 892,
      likes: 1567,
      category: "Vintage",
      coverImage: "/vintage-aesthetics-cover.jpg",
      previewImages: ["/retro-poster.jpg", "/vintage-car.jpg", "/old-camera.jpg"],
    },
    {
      id: 7,
      title: "Space Odyssey",
      description: "Cosmic scenes and astronomical wonders",
      curator: "Stellar Views",
      curatorAvatar: "/curator-stellar.jpg",
      artworkCount: 20,
      price: 1800,
      rating: 4.9,
      subscribers: 1789,
      likes: 2456,
      category: "Digital Art",
      coverImage: "/space-odyssey-cover.png",
      previewImages: ["/galaxy-spiral.jpg", "/planet-surface.png", "/nebula-colors.jpg"],
    },
    {
      id: 8,
      title: "Botanical Beauty",
      description: "Flora and plant-focused photography",
      curator: "Green Lens",
      curatorAvatar: "/curator-green-lens.jpg",
      artworkCount: 26,
      price: 1950,
      rating: 4.7,
      subscribers: 1123,
      likes: 1789,
      category: "Nature",
      coverImage: "/botanical-beauty-cover.jpg",
      previewImages: ["/tropical-leaves.jpg", "/flower-macro.jpg", "/garden-path.jpg"],
    },
    {
      id: 9,
      title: "Gaming Worlds",
      description: "Video game inspired artwork and scenes",
      curator: "Pixel Masters",
      curatorAvatar: "/curator-pixel-masters.jpg",
      artworkCount: 15,
      price: 1350,
      rating: 4.8,
      subscribers: 2345,
      likes: 3456,
      category: "Gaming",
      coverImage: "/gaming-worlds-cover.png",
      previewImages: ["/fantasy-landscape.jpg", "/sci-fi-city.png", "/character-art.jpg"],
    },
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">All Collections</h2>
          <p className="text-muted-foreground">Discover more themed collections from our community</p>
        </div>
        <div className="text-sm text-muted-foreground">{collections.length} collections</div>
      </div>

      {/* Collections Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Card key={collection.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <Badge variant="outline" className="bg-background/90 text-xs">
                  {collection.category}
                </Badge>
              </div>

              {/* Like Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              {/* Preview Images */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-2">
                  {collection.previewImages.map((image, index) => (
                    <div key={index} className="w-10 h-10 rounded-md overflow-hidden border border-white/50">
                      <Image width={40} height={40} src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="text-white text-xs">+{collection.artworkCount - 3}</div>
                </div>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="space-y-3">
                {/* Collection Info */}
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{collection.description}</p>
                </div>

                {/* Curator */}
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={collection.curatorAvatar || "/placeholder.svg"} alt={collection.curator} />
                    <AvatarFallback className="text-xs">
                      {collection.curator
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">by {collection.curator}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <ImageIcon className="h-3 w-3" />
                      <span>{collection.artworkCount}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{collection.subscribers.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="font-medium">{collection.rating}</span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-2">
                  <CoinDisplay amount={collection.price} size="sm" />
                  <Button size="sm" variant="outline" className="group/btn bg-transparent">
                    <Bookmark className="h-3 w-3 mr-1" />
                    View
                    <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="group bg-transparent">
          Load More Collections
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}
