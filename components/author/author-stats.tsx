import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, ImageIcon, TrendingUp, Star, Award, Download, Eye } from "lucide-react"

interface AuthorStatsProps {
  authorId: string
}

export function AuthorStats({ authorId }: AuthorStatsProps) {
  // Mock data - in real app, fetch based on authorId
  const stats = {
    followers: 12500,
    following: 890,
    totalArtworks: 156,
    totalSales: 45600,
    totalEarnings: 156780,
    rating: 4.9,
    totalReviews: 1247,
    totalDownloads: 89340,
    totalViews: 234560,
    monthlyGrowth: 12.5,
    topCategories: [
      { name: "Digital Art", count: 67, percentage: 43 },
      { name: "Photography", count: 45, percentage: 29 },
      { name: "Illustrations", count: 32, percentage: 21 },
      { name: "3D Art", count: 12, percentage: 7 },
    ],
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* Followers */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div className="text-2xl font-bold">{stats.followers.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Followers</div>
        </CardContent>
      </Card>

      {/* Following */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Heart className="h-5 w-5 text-accent" />
          </div>
          <div className="text-2xl font-bold">{stats.following.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Following</div>
        </CardContent>
      </Card>

      {/* Artworks */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <ImageIcon className="h-5 w-5 text-blue-500" />
          </div>
          <div className="text-2xl font-bold">{stats.totalArtworks}</div>
          <div className="text-xs text-muted-foreground">Artworks</div>
        </CardContent>
      </Card>

      {/* Rating */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
          </div>
          <div className="text-2xl font-bold">{stats.rating}</div>
          <div className="text-xs text-muted-foreground">{stats.totalReviews} reviews</div>
        </CardContent>
      </Card>

      {/* Total Sales */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold">{stats.totalSales.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Sales</div>
        </CardContent>
      </Card>

      {/* Earnings */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div className="text-lg font-bold">
            <CoinDisplay amount={stats.totalEarnings} size="sm" />
          </div>
          <div className="text-xs text-muted-foreground">Earned</div>
        </CardContent>
      </Card>

      {/* Additional Stats Row */}
      <Card className="hover:shadow-md transition-shadow md:col-span-2">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Performance</h3>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <TrendingUp className="h-3 w-3 mr-1" />+{stats.monthlyGrowth}%
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Download className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="font-medium">{stats.totalDownloads.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Downloads</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="font-medium">{stats.totalViews.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Views</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Categories */}
      <Card className="hover:shadow-md transition-shadow md:col-span-2 lg:col-span-4">
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">Top Categories</h3>
          <div className="space-y-3">
            {stats.topCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-medium">{category.name}</div>
                  <Badge variant="outline" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground w-8 text-right">{category.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
