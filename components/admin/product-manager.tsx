'use client'

import { useState, useMemo } from 'react'
import { useProducts, Product } from '@/contexts/products-context'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2, Edit, Save, Upload } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductManagerProps {
  selectedCategory?: string;
}

export function ProductManager({ selectedCategory }: ProductManagerProps) {
  const { products, addProduct, removeProduct, updateProduct, categories } = useProducts()
  const [newProduct, setNewProduct] = useState({
    name: '',
    creator: '',
    price: '',
    tags: '',
    category: '',
  })
  const [editingProduct, setEditingProduct] = useState<number | null>(null)
  const [editedProduct, setEditedProduct] = useState<Partial<Product> & { tags: string }>({ tags: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (value: string) => {
    setNewProduct(prev => ({...prev, category: value}));
  }

  const handleAddProduct = () => {
    const { name, creator, price, tags, category } = newProduct
    if (name && creator && price && tags && category) {
      addProduct({
        name,
        creator,
        price: Number(price),
        image: '/placeholder.svg', // Placeholder for uploaded image
        tags: tags.split(',').map(tag => tag.trim()),
        category,
      })
      setNewProduct({ name: '', creator: '', price: '', tags: '', category: '' })
    }
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product.id)
    setEditedProduct({ ...product, tags: product.tags.join(', ') })
  }

  const handleSave = (productId: number) => {
    const productToUpdate: Partial<Product> = { ...editedProduct };
    if (typeof productToUpdate.tags === 'string') {
      productToUpdate.tags = (productToUpdate.tags as string).split(',').map(tag => tag.trim());
    }
    if (productToUpdate.price && typeof productToUpdate.price === 'string') {
      productToUpdate.price = Number(productToUpdate.price);
    }
    delete (productToUpdate as any).id

    updateProduct(productId, productToUpdate);
    setEditingProduct(null);
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleEditSelectChange = (value: string) => {
    setEditedProduct(prev => ({...prev, category: value}));
  }

  const filteredProducts = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'all') {
      return products;
    }
    return products.filter(p => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="space-y-6 p-4 border rounded-lg">
        <h3 className="font-semibold text-lg">Add New Product</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
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
              <Label htmlFor="category">Category</Label>
                <Select name="category" onValueChange={handleSelectChange} value={newProduct.category}>
                  <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>
                    {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input id="tags" name="tags" value={newProduct.tags} onChange={handleInputChange} placeholder="Tag1, Tag2, Tag3" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Product Image</Label>
              <div className="flex w-full items-center space-x-2">
                <Input id="image" name="image" type="file" className="flex-grow" />
                <Button><Upload className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <Button onClick={handleAddProduct}>Add Product</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Existing Products</h3>
        <ScrollArea className="h-72 w-full rounded-md border">
          <div className="p-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="p-2 rounded-lg hover:bg-muted">
                {editingProduct === product.id ? (
                  <div className="space-y-2">
                    <Input name="name" value={editedProduct.name || ''} onChange={handleEditInputChange} />
                    <Input name="creator" value={editedProduct.creator || ''} onChange={handleEditInputChange} />
                    <Input name="price" type="number" value={editedProduct.price || ''} onChange={handleEditInputChange} />
                    <Input name="tags" value={editedProduct.tags} onChange={handleEditInputChange} placeholder="Tags (comma-separated)" />
                    <Select name="category" onValueChange={handleEditSelectChange} value={editedProduct.category || ''}>
                      <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                      <SelectContent>
                        {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
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
