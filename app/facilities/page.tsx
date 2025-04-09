import React from "react";

const facilities = [
  {
    title: "SCHOOL LIBRARY",
    description:
      "The school has a well-resourced library with periodicals, journals, magazines, fiction, and reference books.",
    image: "school-library.jpg",
  },
  {
    title: "SPORTS",
    description:
      "Excellent sports facilities include indoor and outdoor games, with expert trainers.",
    image: "sports.jpg",
  },
  {
    title: "COMPUTER LAB",
    description:
      "The computer lab is equipped with multimedia computers and internet access.",
    image: "computer-lab.jpg",
  },
  {
    title: "TRANSPORT",
    description:
      "The school provides bus transport services from all corners of the city.",
    image: "transport.jpg",
  },
  {
    title: "MATH LAB",
    description:
      "The mathematics lab provides students with interactive tools to explore mathematical concepts.",
    image: "math-lab.jpg",
  },
  {
    title: "SCIENCE LAB",
    description:
      "The science lab allows students to conduct experiments and understand scientific theories.",
    image: "science-lab.jpg",
  },
];

const Facilities = () => {
  return (
    <div className="container mx-auto p-6 animate-pageFadeIn transition-opacity duration-1000">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary animate-fadeIn delay-100 transition-opacity duration-1000">
        Facilities
      </h1>
      <p className="text-center text-lg mb-8 text-primary animate-fadeIn delay-200 transition-opacity duration-1000">
        At SNBP's School, classrooms are equipped with DigiClass solutions, providing e-learning content based on the
        Cognitive Learning Approach.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-primary animate-fadeIn delay-300 transition-opacity duration-1000">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden bg-white animate-fadeIn delay-400 transition-all duration-1000"
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-48 object-cover transition-all duration-500 hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{facility.title}</h2>
              <p className="text-gray-600 mt-2">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
