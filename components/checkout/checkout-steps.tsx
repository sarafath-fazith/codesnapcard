import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, CreditCard, Download } from "lucide-react"

export function CheckoutSteps() {
  const steps = [
    { id: 1, name: "Cart", icon: ShoppingCart, status: "completed" },
    { id: 2, name: "Payment", icon: CreditCard, status: "current" },
    { id: 3, name: "Download", icon: Download, status: "upcoming" },
  ]

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex items-center space-x-3">
              <div
                className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
                ${
                  step.status === "completed"
                    ? "bg-primary border-primary text-primary-foreground"
                    : step.status === "current"
                      ? "border-primary text-primary bg-primary/10"
                      : "border-muted-foreground/30 text-muted-foreground"
                }
              `}
              >
                {step.status === "completed" ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-sm font-medium ${
                    step.status === "current"
                      ? "text-primary"
                      : step.status === "completed"
                        ? "text-foreground"
                        : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
                <Badge
                  variant={
                    step.status === "completed" ? "default" : step.status === "current" ? "secondary" : "outline"
                  }
                  className="text-xs w-fit"
                >
                  {step.status === "completed" ? "Complete" : step.status === "current" ? "Active" : "Pending"}
                </Badge>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-0.5 mx-4 ${step.status === "completed" ? "bg-primary" : "bg-muted-foreground/30"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
