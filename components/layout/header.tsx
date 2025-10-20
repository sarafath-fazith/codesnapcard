'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Search, ShoppingCart, User, Coins } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { UserNav } from "@/components/layout/user-nav"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userCoins] = useState(1250) // Mock user coins
  const { state } = useCart()

  const navigation = [
    { name: "Products", href: "/products" },
    { name: "My Collection", href: "/my-collection" },
    { name: "Gift Cards", href: "/gift-cards" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <>
                <div className="relative h-10 w-10">
                  <Image
                    src="/logo.jpg"
                    alt="CodeSnapGC Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CodeSnapGC
                </span>
              </>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search assets, code, creators..."
                  className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border-0 focus:ring-2 focus:ring-secondary focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {/* Coins Display */}
              <Link href="/buy-coins" className="hidden sm:flex items-center space-x-1 bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/20 cursor-pointer hover:bg-secondary/20">
                <Coins className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">
                  {userCoins.toLocaleString()}
                </span>
              </Link>

              {/* Action Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative hover:bg-secondary/10"
                  asChild
                >
                  <Link href="/cart">
                    <>
                      <ShoppingCart className="h-4 w-4" />
                      {state.itemCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-secondary text-secondary-foreground">
                          {state.itemCount}
                        </Badge>
                      )}
                    </>
                  </Link>
                </Button>
              </div>

              {/* User Menu */}
              <UserNav />

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border-0 focus:ring-2 focus:ring-secondary focus:outline-none text-sm"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Coins & Profile */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <Link href="/buy-coins" className="flex items-center space-x-2">
                    <Coins className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">
                      {userCoins.toLocaleString()} Coins
                    </span>
                  </Link>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/cart">
                        <ShoppingCart className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                    >
                      <Link href="/auth">
                        <User className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
