import { Coins } from "lucide-react"
import { cn } from "@/lib/utils"

interface CoinDisplayProps {
  amount: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function CoinDisplay({ amount, size = "md", className }: CoinDisplayProps) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
  }

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <div className={cn("flex items-center space-x-1 text-secondary font-semibold", sizeClasses[size], className)}>
      <Coins className={cn("text-secondary", iconSizes[size])} />
      <span>{amount.toLocaleString()}</span>
    </div>
  )
}
