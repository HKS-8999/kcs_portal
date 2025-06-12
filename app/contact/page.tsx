"use client"

import type React from "react"

import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {MdEmail} from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We&apos;ll get back to you within 24 hours.")
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Speak directly with our team",
      value: "+61 2 1234 5678",
      action: "Call Now",
      color: "from-primary to-primary",
      bgColor: "bg-blue-50",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a detailed message",
      value: "info@kcsaccounting.com.au",
      action: "Send Email",
      color: "from-primary to-primary",
      bgColor: "bg-blue-50",
    },
    {
      icon: MessageSquare,
      title: "Office",
      description: "Visit our Sydney office",
      value: "123 Business Street, Sydney, Australia",
      action: "Start Chat",
      color: "from-primary to-primary",
      bgColor: "bg-blue-50",
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Business Street", "Sydney, NSW 2000", "Australia"],
    },
    {
      icon: Phone,
      title: "Phone No.",
      details: ["+91 8980600104"],
    },
    {
      icon: MdEmail,
      title: "Email",
      details: ["connect@kcsglobe.com"],
    }
  ]

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container max-w-7xl mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in">
                Contact{" "}
                <span className="bg-secondary bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay max-w-3xl mx-auto">
                Whether you&apos;re looking to explore business opportunities or need more information about our services,
                we&apos;re here to help. Get in touch with us—we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <Card className="shadow-xl border-0 overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-200 to-orange-200"></div>
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                          <Send className="h-6 w-6 text-blue-600"/>
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-primary">Contact Us</CardTitle>
                          <p className="text-gray-600">Fill out the form and we&apos;ll get back to you within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1"/>
                          Complete Satisfaction
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          <Clock className="h-3 w-3 mr-1"/>
                          24h Response
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                              Full Name *
                            </Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                required
                                placeholder="Your full name"
                                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                              Email Address *
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                required
                                placeholder="your@email.com"
                                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                              Phone Number
                            </Label>
                            <Input
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                placeholder="+61 xxx xxx xxx"
                                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                              Company Name
                            </Label>
                            <Input
                                id="company"
                                value={formData.company}
                                onChange={(e) => handleChange("company", e.target.value)}
                                placeholder="Your company name"
                                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="service" className="text-sm font-semibold text-gray-700">
                            Service Interest
                          </Label>
                          <Select onValueChange={(value) => handleChange("service", value)}>
                            <SelectTrigger className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select a service"/>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                              <SelectItem value="financial-reporting">Financial Reporting</SelectItem>
                              <SelectItem value="taxation">Taxation</SelectItem>
                              <SelectItem value="smsf">SMSF</SelectItem>
                              <SelectItem value="all-services">All Services</SelectItem>
                              <SelectItem value="consultation">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                            Message *
                          </Label>
                          <Textarea
                              id="message"
                              value={formData.message}
                              onChange={(e) => handleChange("message", e.target.value)}
                              required
                              placeholder="Tell us about your requirements, current challenges, and how we can help..."
                              rows={5}
                              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-primary hover:opacity-90 text-white py-3"
                            disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Sending Message...
                              </>
                          ) : (
                              <>
                                Send Message
                                <Send className="h-4 w-4 ml-2"/>
                              </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  {/* Office Information */}
                  <Card className="shadow-xl border-0">

                    <CardContent className="space-y-6">
                      {officeInfo.map((info, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mt-1">
                              <info.icon className="h-5 w-5 text-orange-600"/>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                              {info.details.map((detail, detailIndex) => (
                                  <p key={detailIndex} className="text-gray-600 text-sm">
                                    {detail}
                                  </p>
                              ))}
                            </div>
                          </div>
                      ))}
                    </CardContent>
                  </Card>
                  {/* Social Media */}
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900">Follow Us</CardTitle>
                      <p className="text-gray-600">Stay connected for updates and insights</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors group"
                        >
                          <Linkedin className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform"/>
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors group"
                        >
                          <Instagram className="h-6 w-6 text-orange-600 group-hover:scale-110 transition-transform"/>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </div>
  )
}
