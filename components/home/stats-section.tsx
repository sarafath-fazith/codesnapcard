import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, ImageIcon, DollarSign, Award, Globe } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: ImageIcon,
      value: "50,000+",
      label: "Artworks Available",
      description: "High-quality wallpapers and photos",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Active Artists",
      description: "Talented creators worldwide",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: DollarSign,
      value: "$2.5M+",
      label: "Artist Earnings",
      description: "Paid to our community",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      icon: TrendingUp,
      value: "100K+",
      label: "Happy Users",
      description: "Growing community",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: Award,
      value: "4.9★",
      label: "Average Rating",
      description: "User satisfaction",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries",
      description: "Global reach",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="h-3 w-3 mr-1" />
            Platform Stats
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Growing <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a thriving community of artists and art lovers from around the world
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-2xl ${stat.bgColor} mb-4`}>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-bold group-hover:text-primary transition-colors">{stat.value}</div>
                    <div className="font-semibold text-lg">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start your journey today and discover amazing artwork while supporting talented artists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Start Exploring
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
              Become an Artist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
