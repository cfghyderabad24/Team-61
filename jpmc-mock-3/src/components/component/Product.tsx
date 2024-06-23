import { useState } from "react";
import { Button } from "@/components/ui/button";
import image from "@/assets/image.jpg";
import image1 from "@/assets/image1.jpg";

export function Product() {
  const [showModal, setShowModal] = useState(false);
  const handleLearnMoreClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="w-full min-h-screen  bg-gray-50 my-24">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center">
          <div className="relative inline-block px-4 py-2 mb-4 text-white bg-blue-800">
            <span className="relative z-10">Discover the Joy of Coding</span>
            <div className="absolute inset-0 bg-blue-800 transform -skew-x-6" />
          </div>
          <p className="mb-10 text-lg font-semibold">
            ProGame is a self-paced learning kit that makes coding fun and
            accessible for students of all ages.
          </p>
          <Button onClick={handleLearnMoreClick} className="mb-8">
            Explore ProGame
          </Button>
        </div>
        {showModal && (
          <div>
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">
                Discover the Power of ProGame
              </h2>
              <p>
                ProGame is a self-paced learning kit that makes coding fun and
                accessible for students of all ages. By learning to code without
                the need for computers, students can take a break from staring
                at screens while still developing valuable programming skills.
              </p>
              <p>
                Suitable for students in Grade 5 and up, ProGame is the perfect
                introduction to coding. Students can earn points on national and
                global leaderboards, and they can also participate in exciting
                coding Olympiads throughout the year to win amazing prizes.
              </p>
              <div className="flex justify-end">
                <Button onClick={handleCloseModal}>Close</Button>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 gap-8">
          <ul className="space-y-4">
            <li className="flex items-start space-x-2">
              <span>○</span>
              <p>
                Learn to code without staring at a computer screen, giving your
                eyes a much-needed break.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span>○</span>
              <p>
                Suitable for students of Grade 5 and up, ProGame makes coding
                accessible to everyone.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span>○</span>
              <p>
                Compete on national and global leaderboards, earning points and
                exciting prizes along the way.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span>○</span>
              <p>
                The perfect introduction to coding, without overwhelming
                students with complex concepts.
              </p>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex items-start space-x-2">
              <span>○</span>
              <p>
                Participate in coding Olympiads throughout the year and win
                amazing prizes!
              </p>
            </li>
          </ul>
        </div>
        <div>
          <img src="src/assets/image1.jpg" className="my-24"></img>
        </div>
        <div>
          <img src="src/assets/image.jpg" className="my-24"></img>
        </div>
      </div>
    </div>
  );
}
