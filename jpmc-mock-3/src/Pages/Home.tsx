import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/assets/home/img1.jpg";
import img2 from "@/assets/home/img2.jpg";
import img3 from "@/assets/home/img3.jpg";
import img4 from "@/assets/home/img4.jpg";
import img5 from "@/assets/home/img5.jpg";
import img6 from "@/assets/home/img6.jpg";
import img7 from "@/assets/home/img7.jpg";
import img8 from "@/assets/home/img8.jpg";
import Slider from "react-slick";


const testimonials = [
  {
    name: "Oommen Joseph, Fellow, Teach For India",
    text: "Your creation is innovative. May God bless this team 🙏",
  },
  {
    name: "SREEDHAR DONGA",
    text: "This is the best coding app, I have never seen anything like this. It improves children’s coding and logical thinking skills.",
  },
  {
    name: "Annapurna Jodi (Teacher, KGBV, Telangana)",
    text: "It is very nice and easy to learn coding without a computer. ProGame is very simple and easy to learn.",
  },
  {
    name: "Oommen Joseph, Fellow, Teach For India",
    text: "Your creation is innovative. May God bless this team 🙏",
  },
  {
    name: "SREEDHAR DONGA",
    text: "This is the best coding app, I have never seen anything like this. It improves children’s coding and logical thinking skills.",
  },
  {
    name: "Annapurna Jodi (Teacher, KGBV, Telangana)",
    text: "It is very nice and easy to learn coding without a computer. ProGame is very simple and easy to learn.",
  },
  {
    name: "Oommen Joseph, Fellow, Teach For India",
    text: "Your creation is innovative. May God bless this team 🙏",
  },
  {
    name: "SREEDHAR DONGA",
    text: "This is the best coding app, I have never seen anything like this. It improves children’s coding and logical thinking skills.",
  },
  {
    name: "Annapurna Jodi (Teacher, KGBV, Telangana)",
    text: "It is very nice and easy to learn coding without a computer. ProGame is very simple and easy to learn.",
  }
];

const productCards = [
  {
    title: "Coding WITHOUT Computers",
    description:"lorem",
    imageUrl: img1
  },
  {
    title: "Coding With Computers",
    description:"lorem",
    imageUrl: img2,
  },
  {
    title: "Coding Toy",
    description:"lorem",
    imageUrl: img3,
  },
  {
    title: "Coding for the Visually Challenged",
    description:"lorem",
    imageUrl: img4,
  },
  {
    title: "Hybrid Model",
    description:"lorem",
    imageUrl:img5,
  },
  {
    title: "Artificial Intelligence",
    
    description:"lorem",
    imageUrl:img6,
  },
  {
    title: "Life Skills 360 APP",
    
    description:"lorem",
    imageUrl: img7,
  },
  {
    title: "Life Skills 360 Print",
    
    description:"lorem",
    imageUrl: img8,
  }
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <p className="text-lg italic mb-4 text-gray-800 dark:text-gray-200 text-center">"{testimonial.text}"</p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{testimonial.name}</h3>
            
          </div>
        </div>
      ))}
    </Slider>
  );
};

const ProductCard = ({ title, imageUrl }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-55 object-cover mb-4 rounded-lg" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <button className="bg-orange-500 text-white rounded px-4 py-2 mt-4 hover:bg-orange-600">Buy Now</button>
  </div>
);
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-orange-400">
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Elevate Your Skills with NextSkills360
              </h1>
              <p className="max-w-[600px] text-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Empower yourself with the skills of tomorrow. Our platform offers comprehensive courses and resources to
                help you stay ahead in your career.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sample-video-id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCards.map((product, index) => (
                <ProductCard 
                  key={index}
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl mb-12">What people are saying about ProGame</h2>
            <TestimonialsCarousel />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Experience the App!</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-6">
                Kickstart Coding with ProGame.
              </p>
              <div className="relative w-full max-w-md mx-auto mb-6 d-flex justify-content-center">
                <img src="https://www.nextskills360.in/wp-content/uploads/elementor/thumbs/ProGame_AppScreens-owm55klafulvyhmsu947puc54bz1c1xwl2m031sofg.jpeg" title="ProGame_AppScreens" alt="ProGame_AppScreens" className='max-auto'></img> 
                <a href="https://play.google.com/store/apps/details?id=com.progame.app" target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 mb-4 mr-4 justify-center">

                </a>
                <img src="https://www.nextskills360.in/wp-content/uploads/2022/03/Play-store-Get-In.png" alt="Get it on Google Play" className="h-auto center mx-auto" />
              </div>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                App Available on Android Phones Only!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

