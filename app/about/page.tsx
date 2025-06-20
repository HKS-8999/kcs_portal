import {Shield, DollarSign, Users, Award, Headset, Clock} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  const whyUsFeatures = [
    {
      icon: Shield,
      title: "Data Security",
    },
    {
      icon: DollarSign,
      title: "Cost Arbitrage",
    },
    {
      icon: Users,
      title: "Qualified Team",
    },
    {
      icon: Award,
      title: "Quality Control",
    },
    {
      icon: Clock,
      title: "Flexible Delivery",
    },
    {
      icon: Headset,
      title: "24/7 Support",
    },
  ]

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container max-w-7xl mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 animate-fade-in">
                Empowering Global Success Through {" "}
                <span className="bg-secondary bg-clip-text text-transparent">Smart Outsourcing
              </span>
              </h1>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">About <span
                    className='text-secondary'>Us</span></h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    KCS helps businesses of all sizes succeed in the global market. We offer a full range of outsourcing
                    services.
                  </p>
                  <p>
                    With our wide expertise and teamwork approach, we become a trusted partner to your business. We work
                    closely with you to understand your specific needs and create customized solutions that support
                    long-term growth and help your business succeed in a fast-changing global environment.
                  </p>
                  <p>
                    Our main goal is to promote the export of services from India to businesses around the world. We
                    focus
                    on showcasing India&apos;s strengths—such as its skilled talent, cost advantages, and strong reputation.
                    With these advantages, India is well-positioned to become a global leader in providing top-quality
                    offshore services to international companies.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                    src="/kcs_team_collab.jpg?height=500&width=600"
                    alt="KCS team collaboration"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-blue-100">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Why Choose <span
                  className='text-secondary'> Us?</span></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver back-office services allowing our clients to reduce their involvement in administrative
                functions, freeing them to meet clients and grow their firms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUsFeatures.map((feature, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow bg-blue-50">
                    <CardContent className="p-8 text-center">
                      <div
                          className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <feature.icon className="h-12 w-12 text-primary"/>
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h2>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-primary">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary">Our Mission</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                To be the most trusted partner for financial and accounting firms by delivering exceptional quality
                services,
                maintaining the highest standards of confidentiality, and providing cost-effective solutions that enable
                our clients to focus on growing their business and serving their customers better.
              </p>
            </div>
          </div>
        </section>
      </div>
  )
}
