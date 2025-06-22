import Link from "next/link"
import { Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image";


export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]

  return (
      <footer className="bg-[#091057] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                {/*<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">*/}
                {/*  <span className="text-white font-bold text-xl">K</span>*/}
                {/*</div>*/}
                <div className="w-40 h-20 bg-white flex items-center justify-center mr-3">
                  <Image
                      src="/KCS Logo SVG.svg"
                      width={120}
                      height={120}
                      alt="KCS Logo"
                      className={'text-white'}
                  >
                  </Image>
                </div>
              </Link>
              <p className="text-gray-200 mb-4">
                Professional accounting services for financial and accounting firms. Delivering quality, reliability, and
                cost-effective solutions.
              </p>
              <div className="flex gap-4">
                <a
                    href="https://www.linkedin.com/company/kabraconsultancyservices/"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-gray-900"/>
                </a>
                <a
                    href="https://www.instagram.com/kabraconsultancyservices"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Instagram className="h-5 w-5 text-gray-900"/>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-200 hover:text-secondary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Bookkeeping</li>
                <li>Financial Reporting</li>
                <li>Taxation</li>
                <li>SMSF</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-200 mt-0.5"/>
                  <div className="text-gray-200">
                    <p>201, Aditya Apartment</p>
                    <p>Navrang circle,</p>
                    <p>Ahmedabad, IN - 380014</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-200"/>
                  <span className="text-gray-200">+91 8980600104</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-200"/>
                  <span className="text-gray-200">connect@kcsglobe.com</span>
                </div>
              </div>
            </div>

            {/* Associations */}

          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-200">© Kabra Consultancy Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}