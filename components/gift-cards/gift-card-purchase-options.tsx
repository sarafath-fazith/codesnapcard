'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCart } from '@/contexts/cart-context'
import Image from 'next/image'

const giftCardOptions = [
  { id: 'gc-25', name: '_25 Gift Card', price: 25.0, image: '/gift-card-blue.jpg' },
  { id: 'gc-50', name: '_50 Gift Card', price: 50.0, image: '/gift-card-green.jpg' },
  { id: 'gc-100', name: '_100 Gift Card', price: 100.0, image: '/gift-card-gold.jpg' },
]

export function GiftCardPurchaseOptions() {
  const { dispatch } = useCart()

  const handleAddToCart = (item: any) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, type: 'GIFT_CARD' } })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Purchase a Gift Card</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {giftCardOptions.map((option) => (
            <Card key={option.id}>
              <div className="relative h-40 w-full">
                <Image
                  src={option.image}
                  alt={option.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{option.name.replace('_', '$')}</h3>
                <p className="text-muted-foreground">Digital Gift Card</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-xl">${option.price.toFixed(2)}</span>
                  <Button onClick={() => handleAddToCart(option)}>Add to Cart</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
