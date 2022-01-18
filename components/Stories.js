import React from "react";
import Mystory from "./Mystory";
import Story from "./Story";
const usersstories = [
  {
    name: "Celia",
    src: "/celia.jpg",
  },
  {
    name: "Rehab",
    src: "/rehab.jpg",
  },
  {
    name: "Mahfoz",
    src: "/vater.jpg",
  },
  {
    name: "Ahmed Mahfoz",
    src: "/bruder.jpg",
  },
  {
    name: "Hedaya",
    src: "/myphoto.jpeg",
  },
  {
    name: "Mahmoud",
    src: "/bruder.jpg",
  },
  {
    name: "Teya",
    src: "/myphoto.jpeg",
  },
];
const Stories = () => {
  return (
    <div className="flex items-center overflow-x-scroll scrollbar-hide mt-3 p-2">
      <Mystory />
      <div className="flex items-center">
        {usersstories.map((user) => (
          <Story key={user.name} src={user.src} name={user.name} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
