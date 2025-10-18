import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Edit, MapPin, Calendar, Mail, Award, Crown } from "lucide-react"

export function UserProfile() {
  // Mock user data
  const user = {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    avatar: "/user-sarah-johnson.jpg",
    coverImage: "/user-cover-sarah.jpg",
    bio: "Digital art enthusiast and collector. Love discovering new artists and supporting creative communities.",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    coinBalance: 2450,
    membershipTier: "Premium",
    totalPurchases: 127,
    totalSpent: 45600,
    favoriteCategories: ["Digital Art", "Photography", "Illustrations"],
    badges: ["Early Adopter", "Art Collector", "Community Supporter"],
    verified: true,
  }

  return (
    <Card className="overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-48 bg-gradient-to-r from-primary/20 to-accent/20">
        <img
          src={user.coverImage || "/placeholder.svg?height=192&width=800&query=abstract art background"}
          alt="Profile cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Edit Button */}
        <div className="absolute top-4 right-4">
          <Button size="sm" variant="secondary" className="bg-background/90 backdrop-blur-sm">
            <Edit className="h-4 w-4 mr-1" />
            Edit Profile
          </Button>
        </div>
      </div>

      <CardContent className="relative -mt-16 pt-0">
        <div className="flex flex-col md:flex-row md:items-end md:space-x-6 space-y-4 md:space-y-0">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-2xl">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {user.verified && (
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                <Award className="h-4 w-4" />
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h1 className="text-3xl font-bold">{user.name}</h1>
                {user.membershipTier === "Premium" && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <Crown className="h-3 w-3 mr-1" />
                    {user.membershipTier}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">{user.email}</p>
            </div>

            {/* Bio */}
            <p className="text-foreground max-w-2xl leading-relaxed">{user.bio}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {user.joinDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>Verified Email</span>
              </div>
            </div>
          </div>

          {/* Coin Balance */}
          <div className="flex flex-col items-end space-y-2">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Coin Balance</div>
              <CoinDisplay amount={user.coinBalance} size="lg" />
            </div>
            <Button variant="outline" size="sm" className="bg-transparent">
              Add Coins
            </Button>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {user.badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Favorite Categories */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Favorite Categories</h3>
          <div className="flex flex-wrap gap-2">
            {user.favoriteCategories.map((category, index) => (
              <Badge key={index} variant="outline" className="bg-background">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
