"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "./login-form"
import { SignupForm } from "./signup-form"

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Welcome Back!</DialogTitle>
              <DialogDescription>Sign in to your CodeSnapGC account</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <LoginForm />
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Create Your Account</DialogTitle>
              <DialogDescription>Join CodeSnapGC and start your creative journey</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <SignupForm />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
