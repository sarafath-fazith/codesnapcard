import { ProductCard } from '@/components/products/product-card'

const mockProducts = [
  {
    id: 'prod-001',
    name: 'Futuristic UI Kit',
    creator: 'SynthWave',
    price: 800,
    image: '/placeholder.svg',
    tags: ['UI/UX', 'Sci-Fi', 'HUD'],
    category: 'UI Kits',
  },
  {
    id: 'prod-002',
    name: 'Pixel Art Sprite Pack',
    creator: 'RetroGames',
    price: 350,
    image: '/placeholder.svg',
    tags: ['Pixel Art', 'Sprites', 'Gaming'],
    category: 'Assets',
  },
  {
    id: 'prod-003',
    name: 'React Auth Component',
    creator: 'CodeCrafters',
    price: 1200,
    image: '/placeholder.svg',
    tags: ['React', 'Auth', 'Snippet'],
    category: 'Code',
  },
  {
    id: 'prod-004',
    name: 'Vaporwave Music Loop',
    creator: 'AudioVibes',
    price: 150,
    image: '/placeholder.svg',
    tags: ['Music', 'Vaporwave', 'Loop'],
    category: 'Audio',
  },
  // Add more mock products as needed
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
