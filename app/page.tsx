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

import ServicesOverview from "@/components/services-overview";

export default function HomePage() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Quality Work",
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
    { name: "Xero", logo: "/xero.jpeg" },
    { name: "Quickbooks", logo: "/quickbooks.jpeg" },
    { name: "MYOB", logo: "/myob.jpeg" },
    { name: "Sage", logo: "sage.jpeg" },
    { name: "Class", logo: "/class.jpeg" },
    { name: "BGL", logo: "/bgl.jpeg" },
    { name: "SimpleFund 360", logo: "/simpleFund360.jpeg" },
    { name: "SMSF Audit", logo: "/onlinesmf.jpeg" },
  ]

  const associated = [
    { name: "CPA Australia", logo: "/Logo_of_CPA_Australia.png" },
    { name: "CA", logo: "/Logo_of_CA_Australia-removebg-preview.png" }
  ]

  const certificates = [
    { name: "ISO Certified 9001", logo: "/ISO_9001.jpeg" },
    { name: "ISO Certified 27001", logo: "/ISO_27001.jpeg" }
  ]

  return (
      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
                  <span className="block text-secondary mb-2">Reliable Offshore Accounting.</span>
                  <span className="block text-primary">Trusted by Financial and Accounting Firms. </span>
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Tailored, cost-effective support in Bookkeeping, SMSF, Reporting & Taxation by qualified
                  professionals.
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
                    src="/Map SVG.svg"
                    alt="Professional accounting team at KCS"
                    width={650}
                    height={400}
                    priority
                />
              </div>

            </div>
          </div>
        </section>

        <ServicesOverview></ServicesOverview>


        {/*<section className="py-20 bg-white">*/}
        {/*  <div className="text-center mb-16">*/}
        {/*    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Performance</h2>*/}
        {/*    <p className="text-xl text-gray-600">Numbers that speak for our excellence and reliability</p>*/}
        {/*  </div>*/}
        {/*  <div className="container max-w-7xl  mx-auto px-4">*/}
        {/*    <SectionCards/>*/}
        {/*  </div>*/}
        {/*</section>*/}

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
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <benefit.icon className="h-5 w-5 text-blue-600"/>
                        </div>
                        <h4 className="font-bold text-lg text-primary">{benefit.title}</h4>
                      </div>
                      <p className="text-sm text-blue-900">{benefit.description}</p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Testimonials Section */}

        {/* Compatible Software Section */}

        {/* Compatible Software & Certificates Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Compatible Software */}
            <div className="mb-30">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Our Team is <span className="text-secondary">Compatible</span> with
                </h2>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {compatibleSoftware.map((software, index) => (
                      <div
                          key={index}
                          className="flex items-center justify-center"
                      >
                        <Image
                            src={software.logo || "/placeholder.svg"}
                            alt={`${software.name} logo`}
                            width={140}
                            height={80}
                            className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div>
              <div className="text-center mb-12 mt-20">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Certificates of <span className="text-secondary">Registration</span>
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center items-center gap-10">
                  {certificates.map((certificate, index) => (
                      <div
                          key={index}
                          className="flex flex-col items-center mt-4"
                      >
                        <div className="mb-8">
                          <Image
                              src={certificate.logo || "/placeholder.svg"}
                              alt={`${certificate.name} logo`}
                              width={180}
                              height={180}
                              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Testimonials</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                      <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Associated Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">We are <span
                  className="text-secondary">Associated</span> with</h2>
            </div>
            <div className="flex justify-center gap-12">
              {associated.map((association, index) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    <Image src={association.logo} alt={`${association} logo`} width={180}
                           height={180}/>
                    {/*<span className="font-semibold text-gray-900 text-lg">{association}</span>*/}
                  </div>
              ))}
            </div>

          </div>
        </section>

        {/* Compatible Software Section */}
        {/* CTA Section */}
        {/*<section className="py-20 bg-blue-900">*/}
        {/*  <div className="container mx-auto px-4 text-center">*/}
        {/*    <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Ready to Transform Your Business?</h2>*/}
        {/*    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">*/}
        {/*      Join hundreds of satisfied clients who trust KCS for their accounting needs.*/}
        {/*    </p>*/}
        {/*    <Button asChild size="lg" variant="secondary">*/}
        {/*      <Link href="/contact">Contact Us Today</Link>*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </div>
  )
}
