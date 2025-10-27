import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Refund Policy", href: "/refund-policy" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ]

  return (
    <footer className="bg-muted/30 border-t border-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <>
                <div className="relative h-8 w-8">
                  <Image src="/logo.jpg" alt="CodeSnapGC Logo" fill className="object-contain" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CodeSnapGC
                </span>
              </>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Discover and purchase premium digital assets, code snippets, and development resources from talented
              creators worldwide. Support developers with our innovative coin system.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-secondary">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1 h-9 border-secondary/20 focus:ring-secondary" />
                <Button size="sm" className="px-4 bg-secondary hover:bg-secondary/90">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-2"></div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4 text-secondary">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <p>&copy; 2025 CodeSnapGC. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-secondary" />
                <span>Global Remote</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 text-secondary" />
                <span>support@codesnapgc.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-secondary/10">
              <Instagram className="h-4 w-4 text-secondary" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-secondary/10">
              <Twitter className="h-4 w-4 text-secondary" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-secondary/10">
              <Facebook className="h-4 w-4 text-secondary" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-secondary/10">
              <Youtube className="h-4 w-4 text-secondary" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
