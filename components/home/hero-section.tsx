"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CoinDisplay } from "@/components/ui/coin-display"
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Code2, FileImage, Layers } from "lucide-react"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="w-fit mx-auto lg:mx-0 bg-secondary/20 text-secondary border-secondary/30"
              >
                <Sparkles className="h-3 w-3 mr-1" />
                Premium Digital Assets
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                Premium{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Digital Assets
                </span>{" "}
                <br className="hidden sm:block" />&{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Code Resources
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Discover high-quality digital assets, code snippets, and development resources from talented creators
                worldwide. Build your perfect collection with our innovative coin system.
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  25K+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Digital Assets</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  1.8K+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Creators</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Developers</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/gallery" passHref>
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 w-full sm:w-auto"
                >
                  Explore Assets
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent border-secondary/30 hover:bg-secondary/10 w-full sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-4 p-3 sm:p-4 bg-secondary/10 rounded-xl border border-secondary/20 mx-auto lg:mx-0 max-w-sm lg:max-w-none">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <CoinDisplay amount={0} size="sm" className="text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-secondary">Start with 100 free coins</p>
                <p className="text-xs text-muted-foreground">No credit card required</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in order-first lg:order-last">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-secondary/20 max-w-md mx-auto lg:max-w-none">
              {/* Mock Asset Preview */}
              <div className="absolute inset-3 sm:inset-4 grid grid-cols-2 gap-1.5 sm:gap-2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-center justify-center border border-primary/20">
                  <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-lg flex items-center justify-center border border-secondary/20">
                  <FileImage className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <div className="bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg flex items-center justify-center border border-muted/20">
                  <Layers className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center border border-secondary/20">
                  <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-background/90 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-secondary/20">
                <CoinDisplay amount={250} size="sm" />
              </div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-background/90 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-secondary/20 flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 text-secondary" />
                <span className="text-xs font-medium text-secondary">Trending</span>
              </div>
            </div>

            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-card border border-secondary/20 rounded-lg p-2 sm:p-3 shadow-lg animate-pulse">
              <div className="flex items-center space-x-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                <span className="text-xs sm:text-sm font-medium">Live: 1,247</span>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-card border border-secondary/20 rounded-lg p-2 sm:p-3 shadow-lg">
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-secondary">4.9★</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
