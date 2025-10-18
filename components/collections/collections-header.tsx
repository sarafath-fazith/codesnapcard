import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Bookmark } from "lucide-react"

export function CollectionsHeader() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 border-b">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            <Bookmark className="h-3 w-3 mr-1" />
            Curated Collections
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Discover <span className="text-primary">Themed</span> Collections
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore carefully curated collections of artwork organized by theme, style, and mood. Find the perfect
            pieces that work together beautifully.
          </p>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search collections by theme, mood, or style..."
              className="pl-12 pr-4 h-14 text-base rounded-xl border-2"
            />
          </div>

          {/* Quick Stats */}
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Collections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">5,000+</div>
              <div className="text-muted-foreground">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Themes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
