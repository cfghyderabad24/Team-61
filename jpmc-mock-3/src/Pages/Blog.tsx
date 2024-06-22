import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center" >
          {/* <MountainIcon className="h-6 w-6" /> */}
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Tech
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            News
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Latest Tech and News
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Stay up-to-date with the latest articles and insights from our team of experts.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  
                >
                  View All Blogs
                </a>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Latest Articles
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Blog Posts</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Browse through our collection of tech and news articles written by our team of experts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <a href="#" className="absolute inset-0 z-10" >
                  <span className="sr-only">View Blog Post</span>
                </a>
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 1"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>Tech</div>
                    <div className="h-1 w-1 bg-gray-500 rounded-full dark:bg-gray-400" />
                    <div>June 16, 2024</div>
                  </div>
                  <h3 className="font-bold text-xl group-hover:underline">The Future of Web Development</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    Explore the latest trends and technologies shaping the future of web development.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Avatar className="w-6 h-6 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>John Doe</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <a href="#" className="absolute inset-0 z-10" >
                  <span className="sr-only">View Blog Post</span>
                </a>
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 2"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>News</div>
                    <div className="h-1 w-1 bg-gray-500 rounded-full dark:bg-gray-400" />
                    <div>June 14, 2024</div>
                  </div>
                  <h3 className="font-bold text-xl group-hover:underline">The Impact of AI on Journalism</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    Discover how artificial intelligence is transforming the news industry and the way we consume
                    information.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Avatar className="w-6 h-6 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>Jane Smith</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <a href="#" className="absolute inset-0 z-10" >
                  <span className="sr-only">View Blog Post</span>
                </a>
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 3"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>Tech</div>
                    <div className="h-1 w-1 bg-gray-500 rounded-full dark:bg-gray-400" />
                    <div>June 10, 2024</div>
                  </div>
                  <h3 className="font-bold text-xl group-hover:underline">The Rise of Low-Code Development</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    Explore the benefits and challenges of low-code development platforms and their impact on the
                    software industry.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Avatar className="w-6 h-6 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>BJ</AvatarFallback>
                    </Avatar>
                    <div>Bob Johnson</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <a href="#" className="absolute inset-0 z-10" >
                  <span className="sr-only">View Blog Post</span>
                </a>
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 4"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>News</div>
                    <div className="h-1 w-1 bg-gray-500 rounded-full dark:bg-gray-400" />
                    <div>June 5, 2024</div>
                  </div>
                  <h3 className="font-bold text-xl group-hover:underline">The Future of Remote Work</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    Explore the latest trends and challenges in the world of remote work and how it's shaping the future
                    of the workforce.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Avatar className="w-6 h-6 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div>Sarah Lee</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <a href="#" className="absolute inset-0 z-10" >
                  <span className="sr-only">View Blog Post</span>
                </a>
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 5"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>Tech</div>
                    <div className="h-1 w-1 bg-gray-500 rounded-full dark:bg-gray-400" />
                    <div>June 1, 2024</div>
                  </div>
                  <h3 className="font-bold text-xl group-hover:underline">The Future of Artificial Intelligence</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    Explore the latest advancements in artificial intelligence and its potential impact on various
                    industries.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Avatar className="w-6 h-6 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>TW</AvatarFallback>
                    </Avatar>
                    <div>Tom Wilson</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <a href="#" className="absolute inset-0 z-10" >
                  <span className="sr-only">View Blog Post</span>
                </a>
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 6"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>News</div>
                    <div className="h-1 w-1 bg-gray-500 rounded-full dark:bg-gray-400" />
                    <div>May 28, 2024</div>
                  </div>
                  <h3 className="font-bold text-xl group-hover:underline">The Impact of Social Media on Society</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    Explore the positive and negative impacts of social media on our personal and professional lives.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Avatar className="w-6 h-6 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>EC</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
