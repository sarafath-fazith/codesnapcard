import type React from "react"
import type { Metadata } from "next"
import { Nunito, Space_Grotesk } from "next/font/google"
import { Suspense } from "react"
import { CartProvider } from "@/contexts/cart-context"
import { UserProvider } from "@/contexts/user-context"
import Provider from "./provider"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CodeSnapGC - Premium Digital Assets & Code Resources",
  description:
    "Discover and purchase stunning digital assets, code snippets, and development resources from talented creators worldwide using our coin system.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${nunito.variable} ${spaceGrotesk.variable} antialiased`}>
        <Provider>
          <UserProvider>
            <CartProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <Suspense fallback={null}>{children}</Suspense>
                </main>
                <Footer />
              </div>
            </CartProvider>
          </UserProvider>
        </Provider>
      </body>
    </html>
  )
}
