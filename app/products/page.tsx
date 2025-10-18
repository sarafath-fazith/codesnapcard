import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductsHeader } from "@/components/products/products-header"
import { ProductsFilters } from "@/components/products/products-filters"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductsPagination } from "@/components/products/products-pagination"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductsHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80">
              <ProductsFilters />
            </aside>
            <div className="flex-1">
              <ProductsGrid />
              <ProductsPagination />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
