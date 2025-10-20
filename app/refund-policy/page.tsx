"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  At CodeSnapGC, we sell only digital products, including images, art, and downloadable content. As these
                  are intangible and instantly accessible items, our refund policy is different from that of physical
                  goods.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">No Returns on Digital Products</h2>
                <p className="text-muted-foreground">
                  All sales of digital products are final. Once a digital product has been purchased and the download
                  link has been delivered, we cannot accept returns, cancellations, or issue refunds.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Exceptions</h2>
                <p className="text-muted-foreground mb-3">Refunds may be granted if:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You purchased a product but did not receive the download link.</li>
                  <li>The file is corrupted, damaged, or otherwise not functioning as described.</li>
                  <li>A duplicate purchase was made by mistake.</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  In these rare cases, please contact us at{" "}
                  <a href="mailto:admin@codesnapgc.com" className="text-primary hover:underline">
                    admin@codesnapgc.com
                  </a>{" "}
                  within 7 days of purchase with proof of payment and details of the issue. We will investigate and, if
                  approved, process your refund to your original method of payment.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Sale Items</h2>
                <p className="text-muted-foreground">Sale or discounted items are non-refundable.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Gifted Purchases</h2>
                <p className="text-muted-foreground">
                  If the product was purchased as a gift and you encounter a valid issue (as per the exceptions
                  above), we will provide store credit to the recipient once the case is verified.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Contact</h2>
                <p className="text-muted-foreground flex items-center">
                  If you have any questions regarding refunds, please contact us at:
                  <a href="mailto:admin@codesnapgc.com" className="ml-2 flex items-center text-primary hover:underline">
                    <Mail className="h-4 w-4 mr-1" />
                    admin@codesnapgc.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
