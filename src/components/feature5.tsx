import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { BoldIcon, RocketIcon, ShieldIcon, UsersIcon } from "lucide-react"

export default function Feature5() {
  return (
    <main key="1" className="flex flex-col">
                    BELOW ARE TWO COMPONENTS THAT COULD HELP FOR THE STATIC PAGES PER SERVICE
      <section className="bg-gray-100 py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Powerful Service</h1>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
              Discover how our service can transform your business and unlock new opportunities.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Feature Highlights</h2>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
              Explore the key features that make our service stand out.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <RocketIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-2xl font-bold">Blazing Fast</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our service delivers lightning-fast performance, ensuring your applications run at their best.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <ShieldIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-2xl font-bold">Secure by Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Robust security measures protect your data and applications from potential threats.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <BoldIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-2xl font-bold">Scalable Infrastructure</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our scalable infrastructure ensures your service can handle increasing demands with ease.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <UsersIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-2xl font-bold">10,000+</h3>
                <p className="text-gray-500 dark:text-gray-400">Happy Customers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <RocketIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-2xl font-bold">99.9%</h3>
                <p className="text-gray-500 dark:text-gray-400">Uptime Guarantee</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <BoldIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-2xl font-bold">2x</h3>
                <p className="text-gray-500 dark:text-gray-400">Faster Performance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <ShieldIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-2xl font-bold">Military-Grade</h3>
                <p className="text-gray-500 dark:text-gray-400">Security</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
              Hear from our satisfied customers and learn how our service has transformed their businesses.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage alt="Avatar" src="/avatar-1.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-gray-500 dark:text-gray-400">CEO, Acme Inc.</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">
                  "Our business has seen a significant boost in productivity and efficiency since we started using this
                  service. Highly recommended!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage alt="Avatar" src="/avatar-2.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Jane Smith</h4>
                    <p className="text-gray-500 dark:text-gray-400">CTO, Globex Corporation</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">
                  "This service has been a game-changer for our business. The features and support are top-notch."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage alt="Avatar" src="/avatar-3.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Bob Johnson</h4>
                    <p className="text-gray-500 dark:text-gray-400">Head of IT, Stark Industries</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">
                  "I was hesitant at first, but this service has exceeded all my expectations. Highly recommended for
                  any business."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

