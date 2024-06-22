import { Link } from "react-router-dom"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About Our Company
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    We are a team of passionate individuals dedicated to creating innovative solutions that make a
                    positive impact on the world. Our mission is to empower our clients and communities through
                    cutting-edge technology and unwavering commitment to excellence.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="About Us"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team is composed of talented individuals with diverse backgrounds and expertise, all united by a
                shared passion for innovation and excellence.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-12">
              <div className="flex flex-col items-center space-y-2">
                <img src="/placeholder.svg" width="120" height="120" alt="John Doe" className="rounded-full" />
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-400">CEO</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  John is the visionary behind our company, leading the team with his strategic insights and unwavering
                  commitment to excellence.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img src="/placeholder.svg" width="120" height="120" alt="Jane Smith" className="rounded-full" />
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-400">CTO</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jane is our technology visionary, driving innovation and ensuring our solutions are at the forefront
                  of the industry.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img src="/placeholder.svg" width="120" height="120" alt="Bob Johnson" className="rounded-full" />
                <h3 className="text-lg font-bold">Bob Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400">COO</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Bob is the operational mastermind behind our company, ensuring smooth execution and efficient delivery
                  of our services.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img src="/placeholder.svg" width="120" height="120" alt="Sarah Lee" className="rounded-full" />
                <h3 className="text-lg font-bold">Sarah Lee</h3>
                <p className="text-gray-500 dark:text-gray-400">CMO</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sarah is our marketing visionary, driving our brand strategy and ensuring our solutions reach the
                  right audience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img src="/placeholder.svg" width="120" height="120" alt="Tom Wilson" className="rounded-full" />
                <h3 className="text-lg font-bold">Tom Wilson</h3>
                <p className="text-gray-500 dark:text-gray-400">CFO</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tom is our financial steward, ensuring the long-term sustainability and growth of our company.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our History and Achievements</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Since our inception, we have been driven by a relentless pursuit of innovation and a commitment to
                making a positive impact on the world. Here are some of our key milestones and achievements:
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2015</div>
                <h3 className="text-lg font-bold">Founding</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our company was founded with a mission to revolutionize the way businesses approach technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2018</div>
                <h3 className="text-lg font-bold">First Major Client</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We landed our first major client, a leading global brand, and successfully delivered a transformative
                  solution.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2021</div>
                <h3 className="text-lg font-bold">Industry Recognition</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our innovative approach and commitment to excellence were recognized with several industry awards and
                  accolades.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2022</div>
                <h3 className="text-lg font-bold">Global Expansion</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We expanded our operations globally, opening new offices and serving clients in multiple countries.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2023</div>
                <h3 className="text-lg font-bold">Sustainability Initiatives</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We launched several sustainability initiatives, including a commitment to carbon neutrality and
                  supporting local communities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2024</div>
                <h3 className="text-lg font-bold">Continued Growth</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We continue to grow and expand our reach, delivering innovative solutions to an ever-increasing client
                  base.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Whether you're interested in our services, have a question, or just want to learn more, we'd love to
                hear from you. Don't hesitate to reach out!
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}