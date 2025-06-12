import Link from "next/link"
import { Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

const associations = [
  { name: "CPA Australia", image: "/Logo_of_CPA_Australia.png" },
  { name: "CA Australia", image: "/Logo_of_CA_Australia-removebg-preview.png" },
]

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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="text-xl font-bold">KCS</span>
              </Link>
              <p className="text-gray-200 mb-4">
                Professional accounting services for financial accounting firms. Delivering quality, reliability, and
                cost-effective solutions.
              </p>
              <div className="flex gap-4">
                <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5"/>
                </a>
                <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="h-5 w-5"/>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">In Association with:</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {associations.map((association, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Image
                          src={association.image}
                          alt={`${association.name} logo`}
                          width={2560}
                          height={1100}
                          className="object-contain w-20 h-20 mb-2"
                      />
                    </div>
                ))}
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
            <p className="text-gray-200">© 2024 KCS Accounting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}