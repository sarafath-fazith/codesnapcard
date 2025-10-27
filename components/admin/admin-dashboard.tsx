'use client'

import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ProductManager } from './product-manager'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2 } from "lucide-react"
import { useProducts } from '@/contexts/products-context'

export function AdminDashboard() {
  const { categories } = useProducts();
  const [selectedPage, setSelectedPage] = useState('home')
  const [homeSections, setHomeSections] = useState([
    { value: 'trending', label: 'Trending Section' },
    { value: 'featuredCollections', label: 'Featured Collections' },
    { value: 'topCreators', label: 'Top Creators' }
  ])
  const [productCategories, setProductCategories] = useState([
    { value: 'all', label: 'All Categories' },
    ...categories.map(c => ({ value: c, label: c }))
  ])

  const [selectedHomeSection, setSelectedHomeSection] = useState('trending')
  const [selectedProductCategory, setSelectedProductCategory] = useState('all')
  const [newItemName, setNewItemName] = useState('')

  const handleAddItem = () => {
    const trimmedName = newItemName.trim()
    if (!trimmedName) return

    if (selectedPage === 'home') {
      const newValue = trimmedName.replace(/\s+/g, '-').toLowerCase()
      if (homeSections.some(s => s.value === newValue || s.label === trimmedName)) return
      setHomeSections([...homeSections, { value: newValue, label: trimmedName }])
    } else {
      if (productCategories.some(c => c.value === trimmedName)) return
      setProductCategories([...productCategories, { value: trimmedName, label: trimmedName }])
    }
    setNewItemName('')
  }

  const handleRemoveItem = (itemValue: string) => {
    if (selectedPage === 'home') {
      setHomeSections(homeSections.filter(s => s.value !== itemValue))
      if (selectedHomeSection === itemValue) {
        setSelectedHomeSection(homeSections[0]?.value || '')
      }
    } else {
      setProductCategories(productCategories.filter(c => c.value !== itemValue))
      if (selectedProductCategory === itemValue) {
        setSelectedProductCategory('all')
      }
    }
  }

  const currentList = selectedPage === 'home' ? homeSections : productCategories
  const currentSelection = selectedPage === 'home' ? selectedHomeSection : selectedProductCategory
  const emptyValue = selectedPage === 'home' ? homeSections[0]?.value : 'all'

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        <Card>
          <CardHeader><CardTitle>Content Management</CardTitle></CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
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
                <Select 
                  value={currentSelection || emptyValue}
                  onValueChange={selectedPage === 'home' ? setSelectedHomeSection : setSelectedProductCategory}
                >
                  <SelectTrigger id="section-select"><SelectValue placeholder={selectedPage === 'home' ? "Select section" : "Select category"} /></SelectTrigger>
                  <SelectContent>
                    {currentList.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Create New {selectedPage === 'home' ? 'Section' : 'Category'}</Label>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter name..." 
                    value={newItemName} 
                    onChange={e => setNewItemName(e.target.value)} 
                  />
                  <Button onClick={handleAddItem}>Create</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Manage Existing</Label>
                <div className="max-h-48 overflow-y-auto pr-2 space-y-2">
                  {currentList.filter(item => item.value !== 'all').map(item => (
                    <div key={item.value} className="flex items-center justify-between p-2 border rounded-md">
                      <span>{item.label}</span>
                      <Button variant="ghost" size="sm" onClick={() => handleRemoveItem(item.value)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {(selectedPage === 'home' || selectedPage === 'product') && (
          <Card>
            <CardHeader>
              <CardTitle>
                Product Management ({currentList.find(i => i.value === currentSelection)?.label})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProductManager 
                selectedCategory={selectedPage === 'product' ? selectedProductCategory : undefined}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </DndProvider>
  )
}
