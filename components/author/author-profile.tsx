import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  Calendar,
  Globe,
  Instagram,
  Twitter,
  UserPlus,
  Star,
  Award,
} from "lucide-react"
import Image from "next/image"

interface AuthorProfileProps {
  authorId: string
}

export function AuthorProfile({ authorId }: AuthorProfileProps) {
  // Mock data - in real app, fetch based on authorId
  const author = {
    id: 1,
    name: "Alex Chen",
    username: "@alexchen_art",
    avatar: "/author-alex-chen.jpg",
    coverImage: "/author-cover-alex.jpg",
    bio: "Digital artist and photographer specializing in cyberpunk aesthetics and urban landscapes. Creating immersive visual experiences that blend reality with imagination.",
    location: "Tokyo, Japan",
    joinDate: "March 2022",
    website: "alexchen.art",
    social: {
      instagram: "alexchen_art",
      twitter: "alexchen_creates",
    },
    verified: true,
    featured: true,
    followers: 12500,
    following: 890,
    totalSales: 45600,
    rating: 4.9,
    badges: ["Top Seller", "Featured Artist", "Community Choice"],
    specialties: ["Digital Art", "Photography", "Cyberpunk", "Urban"],
    totalEarnings: 156780,
  }

  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20">
        <Image
          src={author.coverImage || "/placeholder.svg?height=320&width=1200&query=cyberpunk city skyline"}
          alt={`${author.name} cover`}
          width={1200}
          height={320}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button size="sm" variant="secondary" className="bg-background/90 backdrop-blur-sm">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
          <Button size="sm" variant="secondary" className="bg-background/90 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 mr-1" />
            Message
          </Button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="relative -mt-20 px-6">
        <div className="flex flex-col md:flex-row md:items-end md:space-x-6 space-y-4 md:space-y-0">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
              <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
              <AvatarFallback className="text-2xl">
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {author.verified && (
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                <Award className="h-4 w-4" />
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h1 className="text-3xl font-bold">{author.name}</h1>
                {author.verified && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Star className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
                {author.featured && (
                  <Badge variant="outline" className="bg-accent/10 text-accent">
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground text-lg">{author.username}</p>
            </div>

            {/* Bio */}
            <p className="text-foreground max-w-2xl leading-relaxed">{author.bio}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{author.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {author.joinDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <a href={`https://${author.website}`} className="hover:text-primary transition-colors">
                  {author.website}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <Button size="sm" variant="outline" className="bg-transparent">
                <Instagram className="h-4 w-4 mr-1" />
                {author.social.instagram}
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent">
                <Twitter className="h-4 w-4 mr-1" />
                {author.social.twitter}
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2 md:items-end">
            <Button size="lg" className="w-full md:w-auto">
              <UserPlus className="h-4 w-4 mr-2" />
              Follow
            </Button>
            <Button size="lg" variant="outline" className="w-full md:w-auto bg-transparent">
              <Heart className="h-4 w-4 mr-2" />
              Support
            </Button>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {author.badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Specialties */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Specializes in</h3>
          <div className="flex flex-wrap gap-2">
            {author.specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="bg-background">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
