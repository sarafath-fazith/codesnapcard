import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { ShoppingBag, Heart, Download, TrendingUp, Star, Calendar, Award, Users } from "lucide-react"

export function UserStats() {
  // Mock user stats
  const stats = {
    totalPurchases: 127,
    totalSpent: 45600,
    totalDownloads: 234,
    favoriteArtists: 45,
    averageRating: 4.8,
    memberSince: "Jan 2023",
    achievements: 12,
    referrals: 8,
    monthlySpending: [
      { month: "Jan", amount: 1200 },
      { month: "Feb", amount: 1800 },
      { month: "Mar", amount: 2100 },
      { month: "Apr", amount: 1600 },
      { month: "May", amount: 2400 },
      { month: "Jun", amount: 1900 },
    ],
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {/* Total Purchases */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
          </div>
          <div className="text-2xl font-bold">{stats.totalPurchases}</div>
          <div className="text-xs text-muted-foreground">Purchases</div>
        </CardContent>
      </Card>

      {/* Total Spent */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-lg font-bold">
            <CoinDisplay amount={stats.totalSpent} size="sm" />
          </div>
          <div className="text-xs text-muted-foreground">Total Spent</div>
        </CardContent>
      </Card>

      {/* Downloads */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Download className="h-5 w-5 text-blue-500" />
          </div>
          <div className="text-2xl font-bold">{stats.totalDownloads}</div>
          <div className="text-xs text-muted-foreground">Downloads</div>
        </CardContent>
      </Card>

      {/* Favorite Artists */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Heart className="h-5 w-5 text-red-500" />
          </div>
          <div className="text-2xl font-bold">{stats.favoriteArtists}</div>
          <div className="text-xs text-muted-foreground">Following</div>
        </CardContent>
      </Card>

      {/* Average Rating */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
          </div>
          <div className="text-2xl font-bold">{stats.averageRating}</div>
          <div className="text-xs text-muted-foreground">Avg Rating</div>
        </CardContent>
      </Card>

      {/* Member Since */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="h-5 w-5 text-purple-500" />
          </div>
          <div className="text-lg font-bold">{stats.memberSince}</div>
          <div className="text-xs text-muted-foreground">Member Since</div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Award className="h-5 w-5 text-orange-500" />
          </div>
          <div className="text-2xl font-bold">{stats.achievements}</div>
          <div className="text-xs text-muted-foreground">Achievements</div>
        </CardContent>
      </Card>

      {/* Referrals */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="text-2xl font-bold">{stats.referrals}</div>
          <div className="text-xs text-muted-foreground">Referrals</div>
        </CardContent>
      </Card>
    </div>
  )
}
