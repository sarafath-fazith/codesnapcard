import { CollectionsHeader } from "@/components/collections/collections-header"
import { CollectionsGrid } from "@/components/collections/collections-grid"
import { FeaturedCollections } from "@/components/collections/featured-collections"

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <CollectionsHeader />
        <FeaturedCollections />
        <div className="container mx-auto px-4 py-8">
          <CollectionsGrid />
        </div>
      </main>
    </div>
  )
}
