
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
// import img1 from "@/assets/"
export function Lifeskills() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Welcome</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Lack of quality skills that are required for a child to grow into a global citizen capable of managing
                  self and contributing to the society, motivated us to develop a comprehensive package that can be
                  readily adapted by schools and colleges. When implemented as part of the curriculum, it can help
                  develop students into confident and responsible citizens of the Country and the World.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Welcome"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-first lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Lack of quality skills that are required for a child to grow into a global citizen capable of managing
                  self and contributing to the society, motivated us to develop a comprehensive package that can be
                  readily adapted by schools and colleges. When implemented as part of the curriculum, it can help
                  develop students into confident and responsible citizens of the Country and the World.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Life Skills 360 Books</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive package of life skills books for schools and colleges.
              </p>
            </div>
            <Carousel className="w-full max-w-6xl">
              <CarouselContent>
                {Array.from({ length: 18 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <img
                      src=""
                      width={448}
                      height={252}
                      alt={`Image ${index + 1}`}
                      className="aspect-video object-cover rounded-md"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  )
}
