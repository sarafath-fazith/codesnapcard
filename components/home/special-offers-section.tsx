'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { ShoppingCart, Heart, TrendingUp } from 'lucide-react'

const specialOffers = [
  {
    id: 1,
    title: '50% Off Mastering Next.js eBook',
    description: 'Get our best-selling eBook on Next.js for half the price! A comprehensive guide for all skill levels.',
    image: '/cyberpunk-chronicles-cover.jpg',
    price: 600,
    originalPrice: 1200,
    tags: ['eBook', 'Next.js', 'React'],
  },
  {
    id: 2,
    title: 'CodeSnapGC Gift Card ($100 Value)',
    description: 'The perfect gift for any developer. Get a $100 gift card for just $80.',
    image: '/placeholder.jpg',
    price: 800,
    originalPrice: 1000,
    tags: ['Gift Card', 'Voucher'],
  },
]

export function SpecialOffersSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-primary" />
            Special Offers
          </h2>
          <Button variant="outline">View All Offers</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialOffers.map((offer) => (
            <Card key={offer.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src={offer.image} alt={offer.title} className="rounded-lg object-cover h-full w-full" />
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{offer.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{offer.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {offer.tags.map(tag => (
                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CoinDisplay amount={offer.price} />
                        <CoinDisplay amount={offer.originalPrice} className="line-through text-muted-foreground" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Heart className="h-5 w-5" />
                        </Button>
                        <Button>
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
