'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function GiftCardRedeem() {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  const handleRedeem = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd call an API to validate and redeem the code
    if (code.trim() === '') {
      setMessage('Please enter a gift card code.')
      return
    }
    console.log(`Redeeming code: ${code}`)
    setMessage(`Successfully redeemed gift card with code: ${code}. The balance has been added to your account.`)
    setCode('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Redeem a Gift Card</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRedeem} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your gift card code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button type="submit">Redeem</Button>
        </form>
        {message && <p className="mt-4 text-sm text-muted-foreground">{message}</p>}
      </CardContent>
    </Card>
  )
}
