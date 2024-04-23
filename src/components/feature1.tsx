import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllServices } from "@/lib/utils"
import { Services } from "@/lib/constants";

export default function Feature1() {
    const services = getAllServices().filter((p) => p.title);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
            BELOW ARE THREE COMPONENTS THAT COULD HELP FOR A SERVICE PAGE
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Wave Services</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                        We advise, implement, and operate in many different ways. How can we serve you? You can replace these cards with something cooler...
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((service) => (
                            <Card key={service.title}>
                                <CardHeader>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {service.description}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link">Learn More</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <img
                        alt="Monotype Services"
                        className="w-full h-auto rounded-lg object-cover"
                        height={600}
                        src="/assets/feature1.jpg"
                        style={{
                            aspectRatio: "600/1100",
                            objectFit: "cover",
                        }}
                        width={600}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900/50 to-transparent rounded-lg" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Elevate Your Brand</h2>
                        <p className="text-lg md:text-xl">Unlock the power of custom typography.</p>
                        <Button variant="default">Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

