import { HeroSection } from "@/components/home/hero-section"
import { FeaturedSection } from "@/components/home/featured-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { TrendingSection } from "@/components/home/trending-section"
import { StatsSection } from "@/components/home/stats-section"
import { GiftCardSection } from "@/components/home/gift-card-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturedSection />
        <CategoriesSection />
        <TrendingSection />
        <GiftCardSection />
        <StatsSection />
      </main>
    </div>
  )
}
