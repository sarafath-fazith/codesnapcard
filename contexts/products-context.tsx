'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface Product {
  id: number;
  name: string;
  creator: string;
  price: number;
  image: string;
  tags: string[];
  category: string;
}

interface ProductsContextType {
  products: Product[]
  addProduct: (product: Omit<Product, 'id'>) => void
  removeProduct: (productId: number) => void
  updateProduct: (productId: number, updatedProduct: Partial<Product>) => void
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Cyberpunk Neon",
      creator: "Alex Chen",
      price: 1500,
      image: "/cyberpunk-neon-digital-art.jpg",
      tags: ["cyberpunk", "neon", "digital art"],
      category: "Digital Art",
    },
  ])

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now() }
    setProducts(prevProducts => [...prevProducts, newProduct])
  }

  const removeProduct = (productId: number) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId))
  }

  const updateProduct = (productId: number, updatedProduct: Partial<Product>) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      )
    )
  }

  return (
    <ProductsContext.Provider value={{ products, addProduct, removeProduct, updateProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }
  return context
}
