"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto px-4 p-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                  src="/KCS Logo SVG.svg"
                  width={120}
                  height={120}
                  alt="KCS Logo"
                  className={'text-white'}
              >
              </Image>
            </Link>

            {/* Desktop Navigation - Moved to the right */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                  <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
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
                          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                  ))}
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}
