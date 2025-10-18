import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, ImageIcon, Award, ArrowRight } from "lucide-react"

export function ArtistsSection() {
  const featuredArtists = [
    {
      id: 1,
      name: "Alex Chen",
      username: "@alexchen_art",
      avatar: "/artist-profile-alex.jpg",
      specialty: "Digital Art",
      rating: 4.9,
      followers: 12500,
      artworks: 156,
      verified: true,
      featured: true,
      totalSales: 45600,
      recentWork: "/digital-art-neon.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      username: "@sarahj_photo",
      avatar: "/photographer-profile-sarah.jpg",
      specialty: "Photography",
      rating: 4.8,
      followers: 8900,
      artworks: 203,
      verified: true,
      totalSales: 32100,
      recentWork: "/nature-photography-collection.png",
    },
    {
      id: 3,
      name: "Marcus Rivera",
      username: "@marcus_abstract",
      avatar: "/artist-profile-marcus.jpg",
      specialty: "Abstract",
      rating: 4.9,
      followers: 15600,
      artworks: 89,
      verified: true,
      featured: true,
      totalSales: 52300,
      recentWork: "/abstract-colorful-explosion.png",
    },
    {
      id: 4,
      name: "Emma Wilson",
      username: "@emma_nature",
      avatar: "/photographer-profile-emma.jpg",
      specialty: "Nature",
      rating: 4.7,
      followers: 6700,
      artworks: 134,
      verified: false,
      totalSales: 18900,
      recentWork: "/forest-nature-photography.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Award className="h-3 w-3 mr-1" />
            Featured Artists
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Meet Our <span className="text-primary">Talented</span> Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing artists from around the world and support their creative journey
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredArtists.map((artist) => (
            <Card key={artist.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Recent Work Background */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={artist.recentWork || "/placeholder.svg"}
                  alt={`Recent work by ${artist.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {artist.featured && (
                    <Badge className="bg-secondary text-secondary-foreground text-xs">Featured</Badge>
                  )}
                  {artist.verified && (
                    <Badge variant="outline" className="bg-background/90 text-xs">
                      <Award className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6 relative">
                {/* Avatar */}
                <div className="absolute -top-8 left-6">
                  <Avatar className="h-16 w-16 border-4 border-background">
                    <AvatarImage src={artist.avatar || "/placeholder.svg"} alt={artist.name} />
                    <AvatarFallback>
                      {artist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="pt-10 space-y-4">
                  {/* Artist Info */}
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground">{artist.username}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {artist.specialty}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-sm font-semibold">{artist.artworks}</div>
                      <div className="text-xs text-muted-foreground flex items-center justify-center">
                        <ImageIcon className="h-3 w-3 mr-1" />
                        Works
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{(artist.followers / 1000).toFixed(1)}K</div>
                      <div className="text-xs text-muted-foreground flex items-center justify-center">
                        <Users className="h-3 w-3 mr-1" />
                        Followers
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold flex items-center justify-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                        {artist.rating}
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Sales Info */}
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold text-primary">
                      ${artist.totalSales.toLocaleString()} earned
                    </div>
                    <div className="text-xs text-muted-foreground">Total sales</div>
                  </div>

                  {/* Follow Button */}
                  <Button variant="outline" className="w-full group/btn bg-transparent">
                    Follow Artist
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Artists Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group bg-transparent">
            Discover All Artists
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
