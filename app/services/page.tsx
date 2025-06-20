"use client"

import {Calculator, FileText, Receipt, PiggyBank, CheckCircle} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {

  const services = [
    {
      id: 0,
      icon: Calculator,
      title: "Bookkeeping",
      description: "Comprehensive bookkeeping services to keep your financial records accurate and up-to-date",
      color: "from-primary to-primary",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      items: [
        {
          title: "Bank Reconciliation",
          description: "Ensure your bank statements match your accounting records perfectly",
        },
        {
          title: "Managing account payables",
          description: "Efficient management of your outstanding bills and vendor payments",
        },
        {
          title: "Managing account receivables",
          description: "Track and manage customer payments and outstanding invoices",
        },
        {
          title: "Payroll Processing",
          description: "Complete payroll management including calculations and compliance",
        },
        {
          title: "Preparing fixed assets schedule",
          description: "Maintain detailed records of your company's fixed assets and depreciation",
        },
        {
          title: "Generating periodical management reports",
          description: "Generate periodic reports to help you make informed business decisions",
        },
      ],
    },
    {
      id: 1,
      icon: FileText,
      title: "Financial Reporting",
      description: "Professional financial reporting services to meet compliance requirements and business needs",
      color: "from-primary to-primary",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      items: [
        {
          title: "Division 7a Implications",
          description: "Navigate complex Division 7a requirements and ensure compliance",
        },
        {
          title: "FBT Implications",
          description: "Manage Fringe Benefits Tax obligations and reporting requirements",
        },
        {
          title: "Payroll Tax Reconciliation",
          description: "Accurate reconciliation of payroll tax across different jurisdictions",
        },
        {
          title: "GST Reconciliation",
          description: "Ensure GST calculations and reporting are accurate and compliant",
        },
        {
          title: "Recording of hire purchase/chattel mortgage in annual reports",
          description: "Proper recording of hire purchase and chattel mortgage in annual reports",
        },
        {
          title: "Inter-entity transaction reconciliation",
          description: "Reconcile transactions between related entities and subsidiaries",
        },
        {
          title: "Franking credit",
          description: "Optimize franking credit utilization and reporting",
        },
      ],
    },
    {
      id: 2,
      icon: Receipt,
      title: "Taxation",
      description: "Complete taxation services covering all entity types and compliance requirements",
      color: "from-primary to-primary",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      items: [
        {
          title: "Preparation of tax returns – Individual, Trust, Partnership, Company and Self-\n" +
              "Managed Super Funds",
          description: "Personal tax return preparation with maximum deductions and compliance",
        },
        {
          title: "Processing of Monthly and Quarterly Business Activity Statement",
          description: "Complex trust taxation including discretionary and unit trusts",
        },
        {
          title: "Preparation of FBT Returns",
          description: "Partnership taxation and distribution statements for all partners",
        },
        {
          title: "Fuel Tax Credits and other taxes",
          description: "Corporate tax compliance including small business concessions",
        }
      ],
    },
    {
      id: 3,
      icon: PiggyBank,
      title: "SMSF",
      description: "Specialized Self-Managed Super Fund services for compliance and optimization",
      color: "from-primary to-primary",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      items: [
        {
          title: "SMSF Administration",
          description: "Complete administration services for your self-managed super fund",
        },
        {
          title: "SMSF Continuous Processing round the year",
          description: "Year-round SMSF processing to ensure ongoing compliance",
        },
        {
          title: "SMSF Pension and Contributions compliance",
          description: "Ensure all pension payments and contributions meet regulatory requirements",
        },
        {
          title: "SMSF Compliance Accounting and tax returns",
          description: "Maintain accurate accounting records and prepare annual returns",
        },
        {
          title: "SMSF Working Papers (We are flexible to follow your process)",
          description: "Flexible working paper preparation following your preferred processes",
        },
        {
          title: "SMSF Audit",
          description: "Independent audit services to meet APRA requirements",
        },
      ],
    },
  ]


  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in">
                Our{" "}
                <span className="text-secondary">
                Services
              </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay">
                KCS empowers businesses of all sizes to thrive in the dynamic global marketplace by offering a
                comprehensive suite of professional accounting services.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Services Section */}
        {/*<section className="py-20 bg-blue-50">*/}
        {/*  <div className="container mx-auto px-4">*/}
        {/*    /!* Service Navigation Tabs *!/*/}
        {/*    <div className="flex flex-wrap justify-center gap-4 mb-16">*/}
        {/*      {services.map((service, index) => (*/}
        {/*          <button*/}
        {/*              key={service.id}*/}
        {/*              onClick={() => setActiveService(index)}*/}
        {/*              className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 ${*/}
        {/*                  activeService === index*/}
        {/*                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`*/}
        {/*                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:scale-105"*/}
        {/*              }`}*/}
        {/*          >*/}
        {/*            <div className="flex items-center gap-3">*/}
        {/*              <div*/}
        {/*                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${*/}
        {/*                      activeService === index ? "bg-white/20" : service.bgColor*/}
        {/*                  }`}*/}
        {/*              >*/}
        {/*                <service.icon className={`h-5 w-5 ${activeService === index ? "text-white" : service.iconColor}`} />*/}
        {/*              </div>*/}
        {/*              <span className="font-semibold">{service.title}</span>*/}
        {/*            </div>*/}
        {/*            {activeService === index && (*/}
        {/*                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>*/}
        {/*            )}*/}
        {/*          </button>*/}
        {/*      ))}*/}
        {/*    </div>*/}

        {/*    /!* Active Service Content *!/*/}
        {/*    <div className="max-w-6xl mx-auto">*/}
        {/*      <div key={activeService} className="animate-fade-in-up">*/}
        {/*        /!* Service Header *!/*/}
        {/*        <div className="text-center mb-12">*/}
        {/*          <div*/}
        {/*              className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${ActiveServiceBgColor} mb-6`}*/}
        {/*          >*/}
        {/*            <ActiveServiceIcon className={`h-10 w-10 ${ActiveServiceIconColor}`} />*/}
        {/*          </div>*/}
        {/*          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{ActiveServiceTitle}</h2>*/}
        {/*          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{ActiveServiceDescription}</p>*/}
        {/*        </div>*/}

        {/*        /!* Service Items Grid *!/*/}
        {/*        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
        {/*          {services[activeService].items.map((item, index) => (*/}
        {/*              <Card*/}
        {/*                  key={index}*/}
        {/*                  className="group h-full hover:shadow-xl bg-gray-50 transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden"*/}
        {/*                  style={{*/}
        {/*                    animationDelay: `${index * 100}ms`,*/}
        {/*                  }}*/}
        {/*              >*/}
        {/*                <div className={`h-1 bg-gradient-to-r ${ActiveServiceColor}`}></div>*/}
        {/*                <CardHeader className="pb-4">*/}
        {/*                  <div className="flex items-start justify-between">*/}
        {/*                    <CardTitle className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">*/}
        {/*                      {item.title}*/}
        {/*                    </CardTitle>*/}
        {/*                  </div>*/}
        {/*                </CardHeader>*/}
        {/*                <CardContent className="pt-0">*/}
        {/*                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>*/}
        {/*                </CardContent>*/}
        {/*              </Card>*/}
        {/*          ))}*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}


        {/* Services Section */}
        <section className="mb-20 bg-white mt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-16">
              {services.map((service) => (
                  <Card
                      key={service.id}
                      className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >

                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Left Side - Title and Description */}
                        <div className={`${service.bgColor} p-12 flex flex-col justify-center`}>
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center`}>
                              <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                            </div>
                            <div>
                              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{service.title}</h2>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Bullet Points */}
                        <div className="p-12 bg-white">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-8">What&apos;s Included:</h3>
                          <div className="grid grid-cols-1 gap-4">
                            {service.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                  </div>
                                  <span className="text-xl text-gray-700 leading-relaxed">{item.title}</span>
                                </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </div>
  )
}
