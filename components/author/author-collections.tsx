import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { ImageIcon, Users, Star, ArrowRight, Heart, Bookmark } from "lucide-react"
import Image from "next/image"

interface AuthorCollectionsProps {
  authorId: string
}

export function AuthorCollections({ authorId }: AuthorCollectionsProps) {
  // Mock data - in real app, fetch based on authorId
  const collections = [
    {
      id: 1,
      title: "Cyberpunk Chronicles",
      description: "A journey through neon-lit futures and digital dreams",
      artworkCount: 24,
      price: 1920,
      rating: 4.9,
      subscribers: 1456,
      likes: 2134,
      category: "Digital Art",
      coverImage: "/cyberpunk-chronicles-cover.jpg",
      previewImages: ["/cyberpunk-1.jpg", "/cyberpunk-2.jpg", "/cyberpunk-3.jpg"],
      featured: true,
    },
    {
      id: 2,
      title: "Tokyo Nights",
      description: "Street photography capturing the soul of Tokyo after dark",
      artworkCount: 18,
      price: 1440,
      rating: 4.8,
      subscribers: 892,
      likes: 1567,
      category: "Photography",
      coverImage: "/tokyo-nights-cover.jpg",
      previewImages: ["/tokyo-night-1.jpg", "/tokyo-night-2.jpg", "/tokyo-night-3.jpg"],
      featured: false,
    },
    {
      id: 3,
      title: "Character Studies",
      description: "Digital portraits exploring human emotion and expression",
      artworkCount: 15,
      price: 1200,
      rating: 4.7,
      subscribers: 634,
      likes: 1023,
      category: "Illustration",
      coverImage: "/character-studies-cover.jpg",
      previewImages: ["/character-1.jpg", "/character-2.jpg", "/character-3.jpg"],
      featured: false,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Collections</h2>
          <p className="text-muted-foreground">Curated artwork collections by this artist</p>
        </div>
        <Badge variant="outline" className="bg-background">
          {collections.length} collections
        </Badge>
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
              <div className="absolute top-3 left-3 flex space-x-2">
                <Badge variant="outline" className="bg-background/90 text-xs">
                  {collection.category}
                </Badge>
                {collection.featured && <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>}
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
                      <Image width={100} height={100} src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
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
        )) રોબोट્સ દ્વારા લખાયેલ નથી}
      </div>

      {/* View All Collections */}
      <div className="text-center pt-4">
        <Button variant="outline" size="lg" className="bg-transparent">
          View All Collections
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
