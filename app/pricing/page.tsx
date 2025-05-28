import { Check, Star, Users, Briefcase, Clock, Shield, Zap, TrendingUp, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PricingPage() {
  const pricingModels = [
    {
      id: "fte",
      name: "FTE Model",
      subtitle: "Dedicated Resource",
      description: "A dedicated professional working exclusively for your business as an extension of your team",
      icon: Users,
      color: "from-primary to-primary",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-primary",
      popular: true,
      features: [
        "Transparent, fixed monthly pricing",
        "Dedicated professionals working exclusively on your projects",
        "Backup resources available for added reliability",
        "Clearly defined timelines and fast turnaround",
        "Reduced risk with a committed and skilled team",
        "Cost-effective and easy to compare with in-house hiring",
      ],
      benefits: [
        { icon: Clock, title: "Predictable Costs", description: "Fixed monthly fee for easy budgeting" },
        { icon: Users, title: "Dedicated Team", description: "Exclusive access to skilled professionals" },
        { icon: Shield, title: "Low Risk", description: "Consistent quality with backup support" },
      ],
    },
    {
      id: "job",
      name: "Job-to-Job Model",
      subtitle: "Project-Based",
      description: "Flexible engagement where you pay individually for each project with our entire team support",
      icon: Briefcase,
      color: "from-secondary to-secondary",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-600",
      popular: false,
      features: [
        "Pay only for the work you assign – no fixed monthly fees",
        "Clear visibility of costs and profit margins per project",
        "Accurate tracking and reporting for each job",
        "Fast turnaround with defined timelines",
        "Flexible resourcing to meet variable workloads",
        "Reduced financial risk during low-activity periods",
      ],
      benefits: [
        { icon: Zap, title: "Pay Per Use", description: "Only pay for what you actually need" },
        { icon: TrendingUp, title: "Scalable", description: "Adjust resources based on demand" },
        { icon: Briefcase, title: "Project Focus", description: "Entire team dedicated to each project" },
      ],
    },
  ]

  const comparisonData = [
    {
      feature: "Engagement Type",
      fte: "Ongoing, monthly engagement with dedicated resource",
      job: "Flexible, project-by-project engagement",
    },
    {
      feature: "Billing Structure",
      fte: "Fixed monthly fee per resource",
      job: "Variable pricing based on individual job",
    },
    {
      feature: "Ideal For",
      fte: "Steady workflow and predictable volumes",
      job: "Fluctuating workload or seasonal demands",
    },
    {
      feature: "Responsibility",
      fte: "Single dedicated resource working exclusively for the client",
      job: "Entire team responsible for project execution",
    },
    {
      feature: "Availability",
      fte: "Continuous availability of assigned staff",
      job: "Resource allocated per project; backups available",
    },
    {
      feature: "Turnaround Time",
      fte: "Fast, with resource always on hand",
      job: "Fast, supported by team and contingency planning",
    },
    {
      feature: "Cost Control",
      fte: "Predictable monthly costs",
      job: "Pay only for what you use; no cost during slack periods",
    },
    {
      feature: "Resource Flexibility",
      fte: "Fixed team structure",
      job: "Dynamic team allocation based on job requirements",
    },
    {
      feature: "Data Tracking",
      fte: "Ongoing monitoring of performance",
      job: "Detailed job-specific tracking and cost visibility",
    },
    {
      feature: "Risk Management",
      fte: "Low, due to resource commitment and consistency",
      job: "Low, with team support and flexible resourcing",
    },
  ]

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container max-w-7xl mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in">
                Choose Your{" "}
                <span className="bg-secondary bg-clip-text text-transparent">
                Pricing Model
              </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay max-w-3xl mx-auto">
                At KCS, we are committed to delivering high-quality services at competitive prices. Our pricing is
                tailored to the nature of each client contract, ensuring flexibility and value.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Models Side by Side */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Pricing Models</h2>
                <p className="text-xl text-gray-600">
                  We specialize in providing efficient outsourcing solutions that are both effective and affordable
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-20">
                {pricingModels.map((model, index) => (
                    <div key={model.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                      {/* Model Header */}
                      <div className={`${model.bgColor} rounded-t-2xl p-8 border-t border-l border-r ${model.borderColor}`}>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center`}>
                              <model.icon className={`h-8 w-8 ${model.textColor}`} />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{model.name}</h3>
                              <p className="text-lg text-gray-600">{model.subtitle}</p>
                            </div>
                          </div>
                          {model.popular && (
                              <Badge className={`bg-gradient-to-r ${model.color} text-white border-0`}>
                                <Star className="h-3 w-3 mr-1" />
                                Popular
                              </Badge>
                          )}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{model.description}</p>
                      </div>

                      {/* Model Content */}
                      <Card className={`rounded-t-none border-t-0 ${model.borderColor} shadow-xl`}>
                        <CardContent className="p-8">
                          {/* Benefits */}
                          <div className="mb-8">
                            <h4 className="font-semibold text-gray-900 mb-6">Key Benefits</h4>
                            <div className="space-y-4">
                              {model.benefits.map((benefit, benefitIndex) => (
                                  <div key={benefitIndex} className="flex items-start gap-4">
                                    <div
                                        className={`w-10 h-10 rounded-full ${model.bgColor} flex items-center justify-center`}
                                    >
                                      <benefit.icon className={`h-5 w-5 ${model.textColor}`} />
                                    </div>
                                    <div>
                                      <h5 className="font-semibold text-gray-900 mb-1">{benefit.title}</h5>
                                      <p className="text-sm text-gray-600">{benefit.description}</p>
                                    </div>
                                  </div>
                              ))}
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-8">
                            <h4 className="font-semibold text-gray-900 mb-6">What&apos;s Included</h4>
                            <ul className="space-y-3">
                              {model.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                      <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                                  </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA Button */}
                          <Button asChild className={`w-full bg-gradient-to-r ${model.color} hover:opacity-90 text-white`}>
                            <Link href="/contact">
                              Get {model.name} Quote
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Detailed Comparison</h2>
                <p className="text-xl text-gray-600">
                  Compare our two pricing models to find the perfect fit for your business needs
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-orange-50">
                      <th className="px-6 py-6 text-left font-bold text-gray-900 text-lg">Feature</th>
                      <th className="px-6 py-6 text-left font-bold text-primary text-lg">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          FTE Model
                        </div>
                      </th>
                      <th className="px-6 py-6 text-left font-bold text-secondary text-lg">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5" />
                          Job-to-Job Model
                        </div>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    {comparisonData.map((row, index) => (
                        <tr
                            key={index}
                            className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-orange-50/50 transition-colors ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                            }`}
                        >
                          <td className="px-6 py-5 font-semibold text-gray-900">{row.feature}</td>
                          <td className="px-6 py-5 text-gray-600">{row.fte}</td>
                          <td className="px-6 py-5 text-gray-600">{row.job}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                <p className="text-xl text-gray-600">Simple steps to get started with your chosen pricing model</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description: "We discuss your needs and recommend the best pricing model for your business",
                    icon: "💬",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "bg-blue-50",
                  },
                  {
                    step: "02",
                    title: "Proposal",
                    description: "Receive a detailed proposal with transparent pricing and service scope",
                    icon: "📋",
                    color: "from-orange-500 to-orange-600",
                    bgColor: "bg-orange-50",
                  },
                  {
                    step: "03",
                    title: "Get Started",
                    description: "Begin working with our team and see immediate results in your operations",
                    icon: "🚀",
                    color: "from-blue-500 to-orange-600",
                    bgColor: "bg-gradient-to-r from-blue-50 to-orange-50",
                  },
                ].map((item, index) => (
                    <Card
                        key={index}
                        className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
                    >
                      <div
                          className={`w-16 h-16 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-6`}
                      >
                        <div className="text-2xl">{item.icon}</div>
                      </div>
                      <div
                          className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                      >
                        STEP {item.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </section>


      </div>
  )
}
