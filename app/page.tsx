import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedSection } from "@/components/home/featured-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { TrendingSection } from "@/components/home/trending-section"
import { ArtistsSection } from "@/components/home/artists-section"
import { StatsSection } from "@/components/home/stats-section"
import { SpecialOffersSection } from "@/components/home/special-offers-section"
import { NewAdditionsSection } from "@/components/home/new-additions-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <CategoriesSection />
        <SpecialOffersSection />
        <TrendingSection />
        <NewAdditionsSection />
        <ArtistsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
