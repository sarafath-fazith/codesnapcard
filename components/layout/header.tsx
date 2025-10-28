'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Search, ShoppingCart, User, Coins } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { UserNav } from "@/components/layout/user-nav"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [userCoins] = useState(1250) // Mock user coins
  const { state } = useCart()
  const router = useRouter()
  const pathname = usePathname() // Get the current path

  useEffect(() => {
    // Re-check auth status on every navigation change
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('userEmail')
      setUserEmail(email)
    }
  }, [pathname]) // Re-run the effect when the path changes

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userEmail')
    }
    setUserEmail(null)
    setIsMenuOpen(false)
    router.push('/auth')
  }

  const navigation = [
    { name: "Products", href: "/products" },
    { name: "My Collection", href: "/my-collection" },
    { name: "Gift Cards", href: "/gift-cards" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.jpg"
                alt="CodeSnapGC Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CodeSnapGC
            </span>
          </Link>

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

          <div className="flex-1 max-w-md mx-8" />

          <div className="flex items-center space-x-4">
            <Link href="/buy-coins" className="hidden sm:flex items-center space-x-1 bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/20 cursor-pointer hover:bg-secondary/20">
              <Coins className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">
                {userCoins.toLocaleString()}
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="relative hover:bg-secondary/10" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  {state.itemCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-secondary text-secondary-foreground">
                      {state.itemCount}
                    </Badge>
                  )}
                </Link>
              </Button>

              {userEmail ? (
                <UserNav email={userEmail} onLogout={handleLogout} />
              ) : (
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/auth">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
              )}
            </div>

            <div className="flex items-center md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
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

              <div className="flex items-center justify-between pt-4 border-t">
                <Link href="/buy-coins" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <Coins className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">
                    {userCoins.toLocaleString()} Coins
                  </span>
                </Link>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                      <ShoppingCart className="h-5 w-5" />
                    </Link>
                  </Button>

                  {userEmail ? (
                    <UserNav email={userEmail} onLogout={handleLogout} />
                  ) : (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/auth" onClick={() => setIsMenuOpen(false)}>
                        <User className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
