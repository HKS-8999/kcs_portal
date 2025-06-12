import {
  Star,
  BarChart3,
  Clock,
  Lock,
  Workflow,
  DollarSign,
  GraduationCap,
  Scale,
  BrainCircuit,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { SiXero, SiQuickbooks, SiMyob, SiGoogleclassroom } from "react-icons/si"
import { FaHandHoldingUsd } from "react-icons/fa"
import { MdOutlineClass } from "react-icons/md"
import { BsFillFileEarmarkCheckFill } from "react-icons/bs"
import { AiOutlineAudit } from "react-icons/ai"


import SectionCards  from '@/components/section-card'

export default function HomePage() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Exceptional Quality Work",
      description: "Consistently high-quality deliverables that meet or exceed industry standards",
    },
    {
      icon: Clock,
      title: "Timely Turnaround",
      description: "Regular reporting and adherence to agreed timelines for all projects",
    },
    {
      icon: Lock,
      title: "Strict Confidentiality",
      description: "Robust security protocols to protect your sensitive financial information",
    },
    {
      icon: Workflow,
      title: "Smarter Workflow",
      description: "Optimized processes that improve efficiency and productivity",
    },
    {
      icon: DollarSign,
      title: "Reduced Costs",
      description: "Lower staffing costs and office overheads for significant savings",
    },
    {
      icon: GraduationCap,
      title: "Zero Training Costs",
      description: "Fully trained professionals ready to work on your projects immediately",
    },
    {
      icon: Scale,
      title: "Scalable Support",
      description: "Flexible resources that grow with your business needs",
    },
    {
      icon: BrainCircuit,
      title: "Strategic Focus",
      description: "More time to focus on the strategic aspects of your business",
    },
  ]
  const testimonials = [
    {
      name: "Andrew",
      content:
        "KCS team is professionals extending unable to match timelines of Australian Government; turnaround time is unbelievably less than expected time. Professional, enthusiastic people to work with.",
    },
    {
      name: "Harry",
      content:
        "If I know of any client that needs a bookkeeper, I'll recommend KCS highly. Accuracy, efficiency and friendliness, you guys have them all.",
    },
    {
      name: "Charles",
      content: "We have used KCS services for 2 years now and we are happy with their professional and prompt service",
    },
  ]

  const compatibleSoftware = [
    { name: "Xero", icon: SiXero },
    { name: "Quickbooks", icon: SiQuickbooks },
    { name: "MYOB", icon: SiMyob },
    { name: "Handi", icon: FaHandHoldingUsd },
    { name: "Class", icon: MdOutlineClass },
    { name: "BGL", icon: BsFillFileEarmarkCheckFill },
    { name: "SimpleFund 360", icon: SiGoogleclassroom },
    { name: "SMSF Audit", icon: AiOutlineAudit },
  ]



  return (
      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-gray-900">
                  <span className="text-secondary">Reliable Offshore Accounting.</span>
                  <span className="text-gray-700">Trusted by Financial Accounting Firms. </span>
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  KCS delivers expert Bookkeeping, SMSF, Financial Reporting, and Taxation services—tailored, flexible,
                  and cost-effective. Backed by qualified accountants and overseen by experienced CAs and CPAs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-blue-800 text-white font-semibold shadow">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg"
                          className="border-primary text-primary hover:bg-blue-50">
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                    src="/bookkeeping_hero.svg?height=400&width=500"
                    alt="Professional accounting team at KCS"
                    width={500}
                    height={400}
                    className="rounded-lg subtle-bounce"
                    priority
                />
              </div>

            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Performance</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our excellence and reliability</p>
          </div>
          <div className="container max-w-7xl  mx-auto px-4">
            <SectionCards/>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 bg-gray-100">
          <div className="container max-w-7xl mx-auto px-4 space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Benefits of <span
                  className="text-secondary">Outsourcing</span></h3>
              <p className="text-xl text-gray-600">Discover why businesses choose KCS for their accounting needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                  <Card
                      key={index}
                      className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-orange-50 hover:-translate-y-1 h-full"
                  >
                    <div className="h-1.5 bg-gradient-to-r from-orange-300 to-orange-400"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <benefit.icon className="h-4 w-4 text-blue-600"/>
                        </div>
                        <h4 className="font-bold text-md text-primary">{benefit.title}</h4>
                      </div>
                      <p className="text-sm text-blue-900">{benefit.description}</p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">What Our <span
                  className="text-secondary">Clients</span> Say</h2>
              <p className="text-xl text-gray-600">Real feedback from satisfied clients</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="h-full bg-blue-50">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                      <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compatible Software Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Our Team is <span className="text-secondary">Compatible</span> with
              </h2>
              <p className="text-xl text-gray-600">We work seamlessly with all major accounting software</p>
            </div>

            <div className="relative max-w-7xl mx-auto">
              {/* Gradient overlays for smooth fade effect */}
              <div
                  className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
              <div
                  className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling container */}
              <div className="overflow-hidden py-8">
                <div className="flex animate-scroll-horizontal">
                  {/* First set of software items */}
                  {compatibleSoftware.map((software, index) => (
                      <div
                          key={`first-${index}`}
                          className="flex-shrink-0 mx-4 w-64 p-6 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg shadow-sm flex items-center justify-center">
                            <software.icon className="w-8 h-8 text-primary"/>
                          </div>
                          <span className="font-medium text-gray-900 text-lg">{software.name}</span>
                        </div>
                      </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {compatibleSoftware.map((software, index) => (
                      <div
                          key={`second-${index}`}
                          className="flex-shrink-0 mx-4 w-64 p-6 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg shadow-sm flex items-center justify-center">
                            <software.icon className="w-8 h-8 text-primary"/>
                          </div>
                          <span className="font-medium text-gray-900 text-lg">{software.name}</span>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust KCS for their accounting needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </div>
  )
}
