'use client'

import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ProductManager } from './product-manager'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AdminDashboard() {
  const [selectedPage, setSelectedPage] = useState('home')
  const [selectedHomeSection, setSelectedHomeSection] = useState('trending')
  const [selectedProductCategory, setSelectedProductCategory] = useState('all')

  const homeSections = [
    { value: 'trending', label: 'Trending Section' },
    { value: 'featuredCollections', label: 'Featured Collections' },
    { value: 'topCreators', label: 'Top Creators' }
  ]
  const productCategories = [{ value: 'all', label: 'All Categories' }, { value: 'Digital Art', label: 'Digital Art' }, { value: 'eBook', label: 'eBook' }]

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        <Card>
          <CardHeader><CardTitle>Content Selection</CardTitle></CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="page-select">Page</Label>
              <Select value={selectedPage} onValueChange={setSelectedPage}>
                <SelectTrigger id="page-select"><SelectValue placeholder="Select page" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="home">Home Page</SelectItem>
                  <SelectItem value="product">Product Page</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="section-select">{selectedPage === 'home' ? 'Section' : 'Category'}</Label>
              {selectedPage === 'home' ? (
                <Select value={selectedHomeSection} onValueChange={setSelectedHomeSection}>
                  <SelectTrigger id="section-select"><SelectValue placeholder="Select section" /></SelectTrigger>
                  <SelectContent>
                    {homeSections.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              ) : (
                <Select value={selectedProductCategory} onValueChange={setSelectedProductCategory}>
                  <SelectTrigger id="section-select"><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>
                    {productCategories.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              )}
            </div>
          </CardContent>
        </Card>

        {(selectedPage === 'home' || selectedPage === 'product') && (
          <Card>
            <CardHeader>
              <CardTitle>
                Product Management ({selectedPage === 'home' 
                  ? homeSections.find(s => s.value === selectedHomeSection)?.label 
                  : productCategories.find(c => c.value === selectedProductCategory)?.label})
              </CardTitle>
            </CardHeader>
            <CardContent><ProductManager /></CardContent>
          </Card>
        )}
      </div>
    </DndProvider>
  )
}
