'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface Product {
  id: number;
  name: string;
  creator: string;
  price: number;
  image: string;
  tags: string[];
  category: string;
  featured?: boolean;
  trending?: boolean;
}

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  removeProduct: (productId: number) => void;
  updateProduct: (productId: number, updatedProduct: Partial<Product>) => void;
  categories: string[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([
    {
        id: 1,
        name: "Cyberpunk Neon",
        creator: "Alex Chen",
        price: 150,
        image: "/cyberpunk-neon-digital-art.jpg",
        tags: ["cyberpunk", "neon", "digital art"],
        category: "Digital Art",
        trending: true,
      },
      {
        id: 2,
        name: "Forest Spirit",
        creator: "Mia Rodriguez",
        price: 120,
        image: "/forest-spirit-fantasy-art.jpg",
        tags: ["fantasy", "nature", "spirit"],
        category: "Fantasy Art",
      },
      {
        id: 3,
        name: "Abstract Geometry",
        creator: "Ben Carter",
        price: 200,
        image: "/abstract-geometry-minimalist-art.jpg",
        tags: ["abstract", "geometric", "minimalist"],
        category: "Abstract Art",
        featured: true,
      },
      {
        id: 4,
        name: "Galactic Explorer",
        creator: "Olivia White",
        price: 180,
        image: "/galactic-explorer-sci-fi-art.jpg",
        tags: ["sci-fi", "space", "explorer"],
        category: "Sci-Fi Art",
        trending: true,
      },
      {
        id: 5,
        name: "Urban Street Style",
        creator: "David Lee",
        price: 130,
        image: "/urban-street-style-photography.jpg",
        tags: ["urban", "street", "photography"],
        category: "Photography",
      },
      {
        id: 6,
        name: "Mythical Creature",
        creator: "Sophia Green",
        price: 160,
        image: "/mythical-creature-illustration.jpg",
        tags: ["mythical", "creature", "illustration"],
        category: "Illustration",
        featured: true,
      },
      {
        id: 7,
        name: "Vintage Camera",
        creator: "Tom Clark",
        price: 90,
        image: "/vintage-camera-photography.jpg",
        tags: ["vintage", "camera", "photography"],
        category: "Photography",
      },
      {
        id: 8,
        name: "Steampunk City",
        creator: "Grace Hall",
        price: 220,
        image: "/steampunk-city-digital-art.jpg",
        tags: ["steampunk", "city", "digital art"],
        category: "Digital Art",
      },
      {
        id: 9,
        name: "Watercolor World Map",
        creator: "Zoe Kim",
        price: 80,
        image: "/watercolor-world-map-illustration.jpg",
        tags: ["watercolor", "map", "illustration"],
        category: "Illustration",
      },
      {
        id: 10,
        name: "Pop Art Portrait",
        creator: "Chris Evans",
        price: 170,
        image: "/pop-art-portrait-digital-art.jpg",
        tags: ["pop art", "portrait", "digital art"],
        category: "Digital Art",
        trending: true,
      },
      {
        id: 11,
        name: "Enchanted Forest",
        creator: "Liam Miller",
        price: 140,
        image: "/enchanted-forest-fantasy-art.jpg",
        tags: ["enchanted", "forest", "fantasy"],
        category: "Fantasy Art",
        featured: true,
      },
      {
        id: 12,
        name: "Minimalist Landscape",
        creator: "Ava Wilson",
        price: 110,
        image: "/minimalist-landscape-abstract-art.jpg",
        tags: ["minimalist", "landscape", "abstract"],
        category: "Abstract Art",
      },
      {
        id: 13,
        name: "Robot Companion",
        creator: "Noah Taylor",
        price: 190,
        image: "/robot-companion-sci-fi-art.jpg",
        tags: ["robot", "companion", "sci-fi"],
        category: "Sci-Fi Art",
      },
      {
        id: 14,
        name: "City at Night",
        creator: "Emma Brown",
        price: 100,
        image: "/city-at-night-photography.jpg",
        tags: ["city", "night", "photography"],
        category: "Photography",
      },
      {
        id: 15,
        name: "Dragon's Lair",
        creator: "James Johnson",
        price: 250,
        image: "/dragons-lair-fantasy-art.jpg",
        tags: ["dragon", "lair", "fantasy"],
        category: "Fantasy Art",
      },
      {
        id: 16,
        name: "Cosmic Ocean",
        creator: "Isabella Garcia",
        price: 210,
        image: "/cosmic-ocean-abstract-art.jpg",
        tags: ["cosmic", "ocean", "abstract"],
        category: "Abstract Art",
        trending: true,
      }
  ])

  const categories = Array.from(new Set(products.map(p => p.category)));

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
    <ProductsContext.Provider value={{ products, addProduct, removeProduct, updateProduct, categories }}>
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
