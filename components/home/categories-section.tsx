import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Building2, Palette, Camera, Gamepad2, Sparkles, ArrowRight, TrendingUp } from "lucide-react"

export function CategoriesSection() {
  const categories = [
    {
      name: "Nature & Landscapes",
      icon: Mountain,
      count: 12500,
      trending: true,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      description: "Breathtaking natural scenery",
    },
    {
      name: "Urban & Architecture",
      icon: Building2,
      count: 8900,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      description: "Modern cityscapes and buildings",
    },
    {
      name: "Digital Art",
      icon: Palette,
      count: 15600,
      trending: true,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      description: "Creative digital masterpieces",
    },
    {
      name: "Photography",
      icon: Camera,
      count: 22100,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      description: "Professional photography",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      count: 6700,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      description: "Game-inspired artwork",
    },
    {
      name: "Abstract",
      icon: Sparkles,
      count: 9800,
      trending: true,
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      description: "Unique abstract designs",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you&apos;re looking for in our carefully organized collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${category.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    {category.trending && (
                      <Badge variant="secondary" className="text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {category.count.toLocaleString()} items
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Browse All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group bg-transparent">
            Browse All Categories
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
