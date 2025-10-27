'use client'

import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useProducts } from "@/contexts/products-context";

interface ProductsFiltersProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  maxPrice: number;
  categoryCounts: Record<string, number>;
}

export function ProductsFilters({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  maxPrice,
  categoryCounts
}: ProductsFiltersProps) {
  const { categories } = useProducts();

  const handleCategoryChange = (category: string) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Accordion type="multiple" defaultValue={["category", "price"]}>
          <AccordionItem value="category">
            <AccordionTrigger className="text-lg font-semibold">Category</AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-3">
                {categories.map(category => (
                  <div key={category} className="flex items-center space-x-3">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <label htmlFor={category} className="text-sm font-medium leading-none cursor-pointer">
                      {category} ({categoryCounts[category] || 0})
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-lg font-semibold">Price</AccordionTrigger>
            <AccordionContent className="pt-6">
              <Slider
                min={0}
                max={maxPrice}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-3">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
