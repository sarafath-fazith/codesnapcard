'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Clock, Heart, Download, Eye, Star, Gift, BookOpen } from "lucide-react"

export function TrendingSection() {
  const [activeTab, setActiveTab] = useState("today")

  const trendingData = {
    today: [
      {
        id: 1,
        title: "Mastering Next.js eBook",
        author: "Jane Developer",
        price: 1200,
        rank: 1,
        change: "+15%",
        downloads: 1247,
        likes: 892,
        views: 8934,
        image: "/cyberpunk-chronicles-cover.jpg",
        type: "eBook",
      },
      {
        id: 2,
        title: "CodeSnapGC Gift Card",
        author: "CodeSnapGC",
        price: 500,
        rank: 2,
        change: "+12%",
        downloads: 1156,
        likes: 743,
        views: 7821,
        image: "/placeholder.jpg",
        type: "Gift Card",
      },
      {
        id: 3,
        title: "Advanced Python for Data Science",
        author: "Dr. AI Guru",
        price: 2500,
        rank: 3,
        change: "+8%",
        downloads: 987,
        likes: 654,
        views: 6543,
        image: "/digital-horizon-art.jpg",
        type: "Tech Course",
      },
    ],
    week: [
      {
        id: 4,
        title: "JavaScript: The Definitive Guide",
        author: "Master Coder",
        price: 1800,
        rank: 1,
        change: "+25%",
        downloads: 2341,
        likes: 1456,
        views: 15678,
        image: "/author-cover-alex.jpg",
        type: "eBook",
      },
      {
        id: 5,
        title: "React Fundamentals Course",
        author: "React Enthusiast",
        price: 1000,
        rank: 2,
        change: "+18%",
        downloads: 1987,
        likes: 1234,
        views: 12456,
        image: "/abstract-colorful-explosion.png",
        type: "Tech Course",
      },
    ],
    month: [
      {
        id: 6,
        title: "Linux Server Administration Manual",
        author: "System Admin",
        price: 800,
        rank: 1,
        change: "+45%",
        downloads: 4567,
        likes: 2890,
        views: 28934,
        image: "/character-studies-cover.jpg",
        type: "Tech Manual",
      },
    ],
  }

  const getProductIcon = (type: string) => {
    switch (type) {
      case "Gift Card":
        return <Gift className="h-4 w-4 mr-2" />
      case "eBook":
        return <BookOpen className="h-4 w-4 mr-2" />
      default:
        return <TrendingUp className="h-4 w-4 mr-2" />
    }
  }

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="h-3 w-3 mr-1" />
            What's Hot
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-secondary">Trending</span> Right Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what's capturing everyone's attention and climbing the charts
          </p>
        </div>

        {/* Trending Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="today" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Today</span>
            </TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
          </TabsList>

          {Object.entries(trendingData).map(([period, items]) => (
            <TabsContent key={period} value={period}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Rank Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary text-primary-foreground font-bold">#{item.rank}</Badge>
                      </div>

                      {/* Change Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        >
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {item.change}
                        </Badge>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Download className="h-3 w-3" />
                              <span>{item.downloads.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-3 w-3" />
                              <span>{item.likes.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{item.views.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            {getProductIcon(item.type)}
                            {item.type}
                          </div>
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">by {item.author}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <CoinDisplay amount={item.price} size="md" />
                          <div className="flex items-center space-x-1 text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-sm font-medium">4.8</span>
                          </div>
                        </div>

                        <Button className="w-full">Purchase Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
