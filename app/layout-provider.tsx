'use client'

import type React from "react"
import { useState, useEffect } from "react"
import { Suspense } from "react"
import { usePathname } from "next/navigation"
import { CartProvider } from "@/contexts/cart-context"
import { UserProvider } from "@/contexts/user-context"
import Provider from "./provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Loader } from "@/components/ui/loader"

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(false)
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith("/admin")

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setShowLoader(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [isLoading])

  useEffect(() => {
    const handleLoad = () => setIsLoading(false)

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <Provider>
      <UserProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            {showLoader ? (
              <div className="flex-grow flex items-center justify-center">
                <Loader size="lg" />
              </div>
            ) : (
              <>
                {!isAdminPage && <Header />}
                <main className="flex-grow">
                  <Suspense
                    fallback={
                      <div className="flex-grow flex items-center justify-center">
                        <Loader size="lg" />
                      </div>
                    }
                  >
                    {children}
                  </Suspense>
                </main>
                {!isAdminPage && <Footer />}
              </>
            )}
          </div>
        </CartProvider>
      </UserProvider>
    </Provider>
  )
}
