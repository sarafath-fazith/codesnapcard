'use client'

import { useState, createContext, useContext, ReactNode } from 'react'

// In a real app, you'd fetch this from your backend
const MOCK_USER = {
  coins: 1250,
}

interface UserContextType {
  coins: number
  deductCoins: (amount: number) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState(MOCK_USER.coins)

  const deductCoins = (amount: number) => {
    setCoins((prev) => Math.max(0, prev - amount))
  }

  return (
    <UserContext.Provider value={{ coins, deductCoins }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
