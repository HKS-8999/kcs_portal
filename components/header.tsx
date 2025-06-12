"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]

  return (
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-center mr-3">
                <Image
                    src="/KCS.svg"
                    alt="KCS Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900">KCS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                  <Link
                      key={item.name}
                      href={item.href}
                      className={`font-medium transition-colors ${
                          pathname === item.href
                              ? "text-secondary"
                              : "text-gray-600 hover:text-secondary"
                      }`}
                  >
                    {item.name}
                  </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="md:hidden py-4 border-t">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          className={`font-medium transition-colors ${
                              pathname === item.href
                                  ? "text-secondary"
                                  : "text-gray-600 hover:text-secondary"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                  ))}
                  <Button asChild className="mt-4">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}