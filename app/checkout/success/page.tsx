import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CoinDisplay } from "@/components/ui/coin-display"
import { CheckCircle, Download, Share2, Star, ArrowRight, Home, Gift, BookOpen, Code, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';

export default function CheckoutSuccessPage() {
  // Mock purchase data
  const purchase = {
    id: "PXL-2024-001234",
    date: new Date().toLocaleDateString(),
    items: [
      {
        id: 1,
        title: "Mastering Next.js eBook",
        author: "Jane Developer",
        image: "/cyberpunk-chronicles-cover.jpg",
        price: 1200,
        downloadUrl: "/downloads/mastering-nextjs.pdf",
        category: "eBook",
      },
      {
        id: 2,
        title: "Advanced Python for Data Science Course",
        author: "Dr. AI Guru",
        image: "/digital-horizon-art.jpg",
        price: 2500,
        downloadUrl: "/downloads/python-data-science-course.zip",
        category: "Tech Course",
        itemCount: 45,
      },
      {
        id: 3,
        title: "CodeSnapGC Gift Card",
        author: "CodeSnapGC",
        image: "/placeholder.jpg",
        price: 500,
        downloadUrl: "/downloads/gift-card-code.txt",
        category: "Gift Card",
      },
    ],
    total: 4200,
    coinsUsed: 4200,
    remainingCoins: 530,
  }

  const getProductIcon = (type: string) => {
    switch (type) {
      case "Gift Card":
        return <Gift className="h-3 w-3 mr-1" />
      case "eBook":
        return <BookOpen className="h-3 w-3 mr-1" />
      case "Tech Manual":
        return <Code className="h-3 w-3 mr-1" />
      case "Tech Course":
        return <GraduationCap className="h-3 w-3 mr-1" />
      default:
        return <Download className="h-3 w-3 mr-1" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Purchase Successful!</h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your digital content is ready for download.
            </p>
          </div>

          {/* Purchase Details */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Order #{purchase.id}</h2>
                  <p className="text-sm text-muted-foreground">Purchased on {purchase.date}</p>
                </div>
                <Badge variant="default" className="bg-green-100 text-green-700">
                  Completed
                </Badge>
              </div>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {purchase.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">by {item.author}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs flex items-center">
                          {getProductIcon(item.category)}
                          {item.category}
                        </Badge>
                        {item.itemCount && item.category === "Tech Course" && (
                          <Badge variant="secondary" className="text-xs">
                            {item.itemCount} lessons
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <CoinDisplay amount={item.price} size="sm" />
                      <div className="mt-2">
                        <Button size="sm" className="group">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Summary */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Total Paid</span>
                  <CoinDisplay amount={purchase.total} size="lg" />
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Remaining Coin Balance</span>
                  <CoinDisplay amount={purchase.remainingCoins} size="sm" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Download All</h3>
                <p className="text-sm text-muted-foreground mb-4">Get all your purchased items in one ZIP file</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Download ZIP
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Share2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Share Purchase</h3>
                <p className="text-sm text-muted-foreground mb-4">Share your awesome finds with friends</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Share
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Rate & Review</h3>
                <p className="text-sm text-muted-foreground mb-4">Help other users by sharing your experience</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Write Review
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">What&apos;s Next?</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p>• Your downloads are available immediately and forever</p>
                <p>• Check your email for purchase receipt and download links</p>
                <p>• Follow the artists for updates on new releases</p>
                <p>• Join our community to discover more amazing content</p>
              </div>
              <div className="flex space-x-3">
                <Button asChild>
                  <Link href="/" legacyBehavior>
                    <Home className="h-4 w-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/products">Explore More Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
