import { TrendingUpIcon } from "lucide-react"
import { CountUp } from "@/components/count-up"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SectionCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-6">
            <Card className="@container/card bg-blue-50 text-primary transition-transform duration-200">
                <CardHeader className="relative">
                    <CardDescription className="text-black">Happy Clients</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        <CountUp end={500} duration={2}/>+
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="flex gap-1 rounded-lg text-sm text-secondary">
                            <TrendingUpIcon className="size-3 text-secondary" />
                            +25%
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Growing client base across Australia.
                    </div>
                </CardFooter>
            </Card>
            <Card className="@container/card bg-blue-50 text-primary transition-transform duration-200">
                <CardHeader className="relative">
                    <CardDescription className="text-black">Projects Completed</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        <CountUp end={2500} duration={2}/>+
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="flex gap-1 rounded-lg text-xs text-secondary">
                            <TrendingUpIcon className="size-3 text-secondary" />
                            +40%
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Successfully delivered on time.
                    </div>
                </CardFooter>
            </Card>
            <Card className="@container/card bg-blue-50 text-primary transition-transform duration-200">
                <CardHeader className="relative">
                    <CardDescription className="text-black">Years Experience</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        <CountUp end={15} duration={2} />
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="flex gap-1 rounded-lg text-xs text-secondary">
                            Expert
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Proven industry expertise.
                    </div>
                </CardFooter>
            </Card>
            <Card className="@container/card bg-blue-50 text-primary transition-transform duration-200">
                <CardHeader className="relative">
                    <CardDescription className="text-black">Cost Savings</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        <CountUp end={60} duration={2}/>
                        %
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="flex gap-1 rounded-lg text-xs text-secondary">
                            Avg
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Average client cost reduction.
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}