import React from 'react';

// FeatureCard component for displaying each feature with image
const FeatureCard = ({ title, description, imageUrl }) => (
  <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src={imageUrl} alt={title} className="w-32 h-32 object-cover mb-4 rounded-full" />
    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

// Data for features
const features = [
  {
    title: "Innovative Learning",
    description: "Our platform provides innovative ways to learn new skills, keeping you ahead in your career.",
    imageUrl: "https://tse3.mm.bing.net/th?id=OIP.wI1KRkZnRVQj9Yg_jTqlhgHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry experts who bring real-world experience to the table.",
    imageUrl: "https://tse2.mm.bing.net/th?id=OIP.vh5vZZCKyOkCrZaeip8afAHaFH&pid=Api&P=0&h=180",
  },
  {
    title: "Flexible Schedule",
    description: "Our courses are designed to fit your busy schedule, allowing you to learn at your own pace.",
    imageUrl: "https://tse2.mm.bing.net/th?id=OIP.0FZn7wkT8HRieKwofeh3rQHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Comprehensive Resources",
    description: "Access a wide range of resources that complement your learning and help you succeed.",
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.grwvMzeFiv2WRnnFytrJ-wHaIM&pid=Api&P=0&h=180",
  },
  {
    title: "Community Support",
    description: "Join a community of learners and professionals who support each other’s growth.",
    imageUrl: "https://tse2.mm.bing.net/th?id=OIP.Hp3UFTLHctmK_KlIdVxNrwHaF7&pid=Api&P=0&h=180",
  },
  {
    title: "Affordable Pricing",
    description: "Get access to high-quality education without breaking the bank.",
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.LQEJATS7RP7HIZkQmgr2HgHaHa&pid=Api&P=0&h=180",
  },
];

function Schools(props) {
  // Destructuring props to access the name property
  // const { name = 'World' } = props;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-400 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Aim</h1>
                <p className="max-w-[600px] text-lg md:text-xl mt-4">
                  Our mission is to empower individuals with the skills of tomorrow through innovative and accessible learning solutions.
                </p>
              </div>
              <img 
                src="https://tse3.mm.bing.net/th?id=OIP.d3c0n3-8zKpF5w7CBsWYFAHaFj&pid=Api&P=0&h=180" 
                alt="Our Aim" 
                className="w-full h-auto lg:w-1/3 mt-6 lg:mt-0 rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:order-last">
              <img 
                src="https://tse3.mm.bing.net/th?id=OIP.rALAPqetZ23x6XUbaSll1wHaC0&pid=Api&P=0&h=180"
                alt="Cardboard blocks" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
              
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-end">The Solution</h2>
              <p className="text-end text-gray-500 dark:text-gray-400">
                Our invention is primarily a kit containing Cardboard blocks – A paper computer that costs a little over $3.
                <br />
                Mobile App for Teacher to scan the ‘programs’ built by students using the paper Computer.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-start">How It Works</h2>
                <p className="text-start text-gray-500 dark:text-gray-400">
                  Our courses are designed to be flexible and easy to follow, allowing you<br /> to learn at your own pace. With our platform, you can access a variety of resources,<br /> connect with expert instructors, and join a supportive community of learners.
                </p>
              </div>
              <img 
                src="https://tse3.mm.bing.net/th?id=OIP.t8eqM08YODNiCUQYPHrGmAHaFj&pid=Api&P=0&h=180" 
                alt="How It Works" 
                className="w-full h-auto lg:w-1/3 mt-6 lg:mt-0 rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
              <img 
                src="https://tse2.mm.bing.net/th?id=OIP.DILoFAzwk-SymWOJVQZcaQHaHa&pid=Api&P=0&h=180" 
                alt="Joy of Working with Our Products" 
                className="w-full h-auto lg:w-1/3 mb-6 lg:mb-0 rounded-lg shadow-lg" 
              />
              <div className="text-end">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Joy of Working with Our Products</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  When was the last time you saw a child get enthused while learning a Maths or a Science topic,<br /> for that matter any subject, any topic? Watch the video to see what we are referring to.<br /> Coding can generate curiosity and can motivate students to learn more.<br /> It also encourages them to think logically and solve problems on their own.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Salient Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  imageUrl={feature.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Schools;