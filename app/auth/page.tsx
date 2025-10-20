'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/components/auth/login-form"
import { SignupForm } from "@/components/auth/signup-form"

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-muted-foreground">Sign in to your CodeSnapGC account</p>
            </div>
            <div className="mt-4">
              <LoginForm />
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Create Your Account</h1>
              <p className="text-muted-foreground">Join CodeSnapGC and start your creative journey</p>
            </div>
            <div className="mt-4">
              <SignupForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
