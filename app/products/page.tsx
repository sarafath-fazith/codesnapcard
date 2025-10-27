'use client'

import { useState, useMemo, useEffect } from "react";
import { useProducts } from "@/contexts/products-context";
import { ProductsHeader } from "@/components/products/products-header";
import { ProductsFilters } from "@/components/products/products-filters";
import { ProductsList } from "@/components/products/products-list";
import { ProductsPagination } from "@/components/products/products-pagination";

export default function ProductsPage() {
  const { products } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price), 500), [products]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach(product => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  useEffect(() => {
    setPriceRange([0, maxPrice]);
  }, [maxPrice]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [products, selectedCategories, priceRange]);

  const totalResults = filteredProducts.length;

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <ProductsHeader 
          totalResults={totalResults}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
        />
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            <aside className="lg:w-80">
              <ProductsFilters
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                maxPrice={maxPrice}
                categoryCounts={categoryCounts}
              />
            </aside>
            <div className="flex-1 flex flex-col">
              <ProductsList products={paginatedProducts} />
              <ProductsPagination 
                totalResults={totalResults}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
