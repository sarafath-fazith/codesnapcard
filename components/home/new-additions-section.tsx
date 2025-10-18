'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CoinDisplay } from "@/components/ui/coin-display"
import { ShoppingCart, Heart, Zap } from 'lucide-react'

const newAdditions = [
  {
    id: 1,
    title: 'The Art of Prompt Engineering',
    description: 'Unlock the full potential of large language models with this comprehensive guide to prompt engineering.',
    image: '/abstract-flow-3d.jpg',
    price: 950,
    tags: ['eBook', 'AI', 'LLMs'],
  },
  {
    id: 2,
    title: 'Web3 & Blockchain Fundamentals',
    description: 'An essential introduction to the decentralized web, blockchain technology, and their applications.',
    image: '/city-lights-night.png',
    price: 1150,
    tags: ['eBook', 'Web3', 'Blockchain'],
  },
]

export function NewAdditionsSection() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <Zap className="h-6 w-6 mr-2 text-primary" />
            New Additions
          </h2>
          <Button variant="outline">Explore New Content</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newAdditions.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src={item.image} alt={item.title} className="rounded-lg object-cover h-full w-full" />
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <CoinDisplay amount={item.price} />
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
