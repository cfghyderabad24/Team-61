import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

// Define type for each page in the pages array
type Page = {
  heading: string;
  content: string;
  next: string;
  bgColorClass: string;
};

const pages: Page[] = [
  {
    heading: 'Have you ever wondered how ProGame revolutionizes your gaming experience?',
    content: `Unlock Your Gaming Potential with ProGame!<br><br>
    Are you ready to level up your gaming experience? Look no further than ProGame! Whether you’re a seasoned gamer or just starting out, this platform has something for everyone. Dive into reliable guides, news, and leaks for popular games like Genshin Impact, Fortnite, and Roblox. Discover hidden strategies, explore character builds, and stay ahead of the curve. But that’s not all! ProGame isn’t just about pixels and pixels; it’s also about real-world performance. Need an energy boost during those intense gaming sessions? Try the functional drink ProGame, developed in collaboration with gamers. With vitamins B3, B6, and biotin, it’s your secret weapon for stamina. And if you want to sharpen your mental focus, vitamin B5 has your back. Plus, it’s taurine-free! So, whether you’re browsing guides or sipping on a refreshing ProGame, curiosity awaits.`,
    next: 'Explore: Ever wondered what makes coding for kids such an exciting and engaging way to learn?',
    bgColorClass: 'bg-gradient-to-r from-pink-200 via-teal-200 to-green-200'
  },
  {
    heading: 'Ever wondered what makes coding for kids such an exciting and engaging way to learn?',
    content: `Coding for kids offers an exciting and engaging way to learn by blending education with creativity and problem-solving. It introduces young learners to the fundamentals of programming through interactive and hands-on activities. These activities often involve visual programming languages or simple block-based coding environments that make it easy for children to understand and apply coding concepts.<br><br>
    The appeal of coding for kids lies in its ability to foster critical thinking skills, logical reasoning, and creativity from an early age. By engaging with coding, kids learn to break down complex problems into smaller, manageable tasks, develop persistence in solving challenges, and gain confidence in their abilities to create and innovate. Moreover, coding for kids encourages collaboration and communication, essential skills for the digital age.<br><br>
    Through coding, kids not only learn how to program computers but also acquire valuable skills that are increasingly relevant in today's technology-driven world. It empowers them to become creators rather than mere consumers of technology, preparing them for future academic and career opportunities.`,
    next: 'Explore: Ever considered the fascinating world of coding? Dive into the essentials with our "Learn Coding" guide and uncover how it can transform your digital skills!',
    bgColorClass: 'bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200'
  },
  {
    heading: 'Ever considered the fascinating world of coding? Dive into the essentials with our "Learn Coding" guide and uncover how it can transform your digital skills!',
    content: `Coding opens doors to a realm where creativity meets logic. Whether you're curious about building websites, creating mobile apps, or exploring artificial intelligence, learning to code equips you with the tools to turn ideas into reality. It's not just about mastering programming languages; it's about problem-solving, innovation, and shaping the future.<br><br>
    By delving into coding, you'll discover the power to automate tasks, analyze data, and build interactive experiences. It's a skill that transcends industries, from technology and finance to healthcare and beyond. Moreover, coding fosters a mindset of continuous learning and adaptability, essential in a rapidly evolving digital landscape.`,
    next: 'Explore: Curious about STEM Education?',
    bgColorClass: 'bg-gradient-to-r from-green-200 via-yellow-200 to-orange-200'
  },
  {
    heading: 'Curious about STEM Education?',
    content: `STEM education encompasses a dynamic approach to learning that integrates science, technology, engineering, and mathematics. It's more than just subjects; it's a pathway to understanding the interconnectedness of the world around us and preparing for future challenges.<br><br>
    STEM education fosters critical thinking, problem-solving, and collaboration skills essential in today's digital age. Through hands-on activities, students explore real-world applications, from designing robots to conducting scientific experiments and analyzing data. This interactive learning approach not only engages students but also nurtures a passion for discovery and innovation.<br><br>
    By embracing STEM education, students develop the skills needed to tackle global issues, drive technological advancements, and shape tomorrow's solutions. It empowers individuals to think creatively, adapt to change, and contribute meaningfully to society's progress.`,
    next: 'Explore: Delve into the world of Coding without Computers, an educational toy that transforms abstract coding concepts into tangible learning experiences!',
    bgColorClass: 'bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200'
  },
  {
    heading: 'Delve into the world of Coding without Computers, an educational toy that transforms abstract coding concepts into tangible learning experiences!',
    content: `Coding without Computers is an innovative educational toy designed to bridge the gap between abstract coding concepts and hands-on learning experiences. Unlike traditional coding methods that rely on computers, this toy empowers children to explore programming logic through physical components and interactive play.<br><br>
    Through Coding without Computers, children can grasp fundamental coding principles such as sequencing, loops, and conditional statements in a tactile and engaging manner. By arranging physical elements, like blocks or cards with commands, they can create algorithms and see immediate results, fostering a deeper understanding of computational thinking.<br><br>
    This approach not only sparks creativity but also enhances problem-solving skills as children experiment, iterate, and debug their designs. It encourages collaboration and communication as they work together to solve challenges and achieve goals.`,
    next: 'Explore: Ever wondered how logical thinking shapes our problem-solving abilities and decision-making skills?',
    bgColorClass: 'bg-gradient-to-r from-teal-200 via-blue-200 to-indigo-200'
  },
  {
    heading: 'Ever wondered how logical thinking shapes our problem-solving abilities and decision-making skills?',
    content: `Logical thinking is crucial for effective problem-solving and decision-making. It involves analyzing situations, identifying patterns, and drawing conclusions based on evidence and reasoning. By applying logical thinking, individuals can break down complex problems into manageable parts and develop strategies to find solutions.<br><br>
    In today's interconnected world, logical thinking is essential across various disciplines, from science and engineering to business and everyday life. It enables individuals to navigate uncertainty, evaluate options, and make informed decisions based on facts and data.<br><br>
    Developing strong logical thinking skills enhances critical thinking, creativity, and analytical reasoning, making it a valuable asset in academic, professional, and personal pursuits.`,
    next: 'Explore: Have you ever wondered how ProGame revolutionizes your gaming experience?',
    bgColorClass: 'bg-gradient-to-r from-purple-200 via-pink-200 to-red-200'
  },
];

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const nextPage = () => {
    setCurrentPage((currentPage + 1) % pages.length);
  };

  return (
    <div className={`page flex justify-center items-center h-screen ${pages[currentPage].bgColorClass}`}>
      <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-5 z-0"></div>
      <div className="content max-w-3xl bg-white p-8 rounded-lg shadow-lg text-left m-5 relative z-10">
        <h1 className="mt-0 text-4xl text-gray-800">Explore Learning</h1>
        <p className="text-gray-600">
          Unlock Your Potential with our curated learning experiences! Dive into various fields of knowledge and discover the wonders that await you.
        </p>
        <h2 className="mt-4 text-2xl text-gray-800">{pages[currentPage].heading}</h2>
        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: pages[currentPage].content }}></p>
      </div>
      <div className="dancing-window fixed bottom-5 right-5 bg-yellow-100 border border-yellow-300 p-4 rounded-lg shadow-lg w-64 max-w-full text-left animate-bounce">
        <h2 className="text-xl text-gray-800">Recommended for you</h2>
        <p className="text-gray-600">
          <button onClick={nextPage} className="text-blue-600 hover:underline">
            {pages[currentPage].next}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Blog;