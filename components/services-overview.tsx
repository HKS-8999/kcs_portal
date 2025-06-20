import {Calculator, FileText, Receipt, PiggyBank, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/count-up"
import Link from "next/link"

export default function ServicesOverview() {
    // The `services` array is now simplified, without description or href.
    const services = [
        {
            icon: Calculator,
            title: "Bookkeeping",
        },
        {
            icon: FileText,
            title: "Financial Reporting",
        },
        {
            icon: Receipt,
            title: "Taxation",
        },
        {
            icon: PiggyBank,
            title: "Self managed Super Fund Audit",
        },
    ]

    const stats = [
        {
            icon: CheckCircle,
            number: 2500,
            suffix: "+",
            label: "Complete Projects",
        },
        {
            icon: Clock,
            number: 5,
            suffix: "",
            label: "Years of Experience",
        }
    ]

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden">
                    {/* Left Panel - Yellow Section */}
                    <div className="bg-primary text-white lg:w-1/3 p-10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-bold mb-10 leading-tight">
                                Our <span className="text-secondary">Performance</span>
                            </h2>

                            <div className="space-y-8 mb-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                                            <stat.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-3xl text-secondary font-bold tabular-nums">
                                                <CountUp end={stat.number} duration={2} />
                                                {stat.suffix}
                                            </p>
                                            <p className="font-medium">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            {/* Empty button to maintain layout spacing */}
                            <Button
                                asChild
                                size="lg"
                                className="w-full bg-white text-yellow-500 hover:bg-gray-100 font-bold invisible"
                            >
                                <Link href="#"></Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Panel - Services Grid */}
                    <div className="lg:w-2/3 p-8 lg:p-10 bg-white ">
                        <h2 className="text-4xl font-bold leading-tight ml-10">
                            Our <span className="text-secondary">Services</span>
                        </h2>

                        <div className="p-10 grid grid-cols-1 md:grid-cols-2 justify-center">
                            {services.map((service, index) => (
                                <div key={index} className="flex flex-col justify-center">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                        <service.icon className="h-10 w-10 text-primary"/>
                                    </div>
                                    <h4 className="font-bold text-2xl text-gray-800 mb-10">
                                        {service.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}