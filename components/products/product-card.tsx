'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'
import { useUser } from '@/contexts/user-context'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: {
    id: string
    name: string
    creator: string
    price: number
    image: string
    tags: string[]
    category: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { coins, deductCoins } = useUser()
  const { dispatch } = useCart()

  const canClaim = coins >= product.price

  const handleClaim = () => {
    if (canClaim) {
      deductCoins(product.price)
      // Here you might also add the product to a 'claimed' or 'owned' list
      console.log(`Product ${product.name} claimed!`)
    }
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, type: 'PRODUCT' } })
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
            {product.category}
          </Badge>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground">By {product.creator}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="font-bold text-xl">{product.price.toLocaleString()} Coins</p>
          {canClaim ? (
            <Button onClick={handleClaim} variant="secondary">
              Claim Now
            </Button>
          ) : (
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          )}
        </div>
      </div>
    </Card>
  )
}
