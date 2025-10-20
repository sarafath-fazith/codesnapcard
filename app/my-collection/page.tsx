'use client'

import { useState, useEffect } from "react"
import { CollectionsHeader } from "@/components/collections/collections-header"
import { CollectionsGrid } from "@/components/collections/collections-grid"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

// Mock user hook - in a real app, this would come from an auth provider
const useUser = () => {
  const [user] = useState(null) // Simulate a logged-out user
  return { user }
}

export default function MyCollectionPage() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user, router])

  if (!user) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-muted-foreground mb-6">
          Redirecting to login...
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <CollectionsHeader />
      <CollectionsGrid />
    </div>
  )
}
