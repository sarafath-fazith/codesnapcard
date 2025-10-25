'use client'

import { useState } from 'react'
import { useProducts } from '@/contexts/products-context'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2, Edit, Save } from 'lucide-react'

export function ProductManager() {
  const { products, addProduct, removeProduct, updateProduct } = useProducts()
  const [newProduct, setNewProduct] = useState({
    name: '',
    creator: '',
    price: '',
    image: '',
    tags: '',
    category: '',
  })
  const [editingProduct, setEditingProduct] = useState<number | null>(null)
  const [editedProduct, setEditedProduct] = useState<Partial<any>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleAddProduct = () => {
    const { name, creator, price, image, tags, category } = newProduct
    if (name && creator && price && image && tags && category) {
      addProduct({
        name,
        creator,
        price: Number(price),
        image,
        tags: tags.split(',').map(tag => tag.trim()),
        category,
      })
      setNewProduct({ name: '', creator: '', price: '', image: '', tags: '', category: '' })
    }
  }

  const handleEdit = (product: any) => {
    setEditingProduct(product.id)
    setEditedProduct(product)
  }

  const handleSave = (productId: number) => {
    updateProduct(productId, editedProduct)
    setEditingProduct(null)
  }

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedProduct(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4 p-4 border rounded-lg">
        <h3 className="font-semibold text-lg">Add New Product</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Product Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="creator">Creator</Label>
            <Input id="creator" name="creator" value={newProduct.creator} onChange={handleInputChange} placeholder="Creator Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price (in Coins)</Label>
            <Input id="price" name="price" type="number" value={newProduct.price} onChange={handleInputChange} placeholder="e.g., 1000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="/image-path.jpg" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input id="tags" name="tags" value={newProduct.tags} onChange={handleInputChange} placeholder="Tag1, Tag2, Tag3" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Product Category" />
          </div>
        </div>
        <Button onClick={handleAddProduct}>Add Product</Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Existing Products</h3>
        <ScrollArea className="h-72 w-full rounded-md border">
          <div className="p-4">
            {products.map(product => (
              <div key={product.id} className="p-2 rounded-lg hover:bg-muted">
                {editingProduct === product.id ? (
                  <div className="space-y-2">
                    <Input name="name" value={editedProduct.name} onChange={handleEditInputChange} />
                    <Input name="creator" value={editedProduct.creator} onChange={handleEditInputChange} />
                    <Input name="price" type="number" value={editedProduct.price} onChange={handleEditInputChange} />
                    <Button onClick={() => handleSave(product.id)}><Save className="h-4 w-4 mr-2" /> Save</Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.creator}</p>
                    </div>
                    <div>
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(product)}><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => removeProduct(product.id)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
