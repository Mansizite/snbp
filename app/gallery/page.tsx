"use client";

import { useState } from "react";
import Image from "next/image";

// Define categories with cover images
const categories = [
  { name: "independence-day", cover: "/images/independence-day/1.jpg" },
  { name: "republic-day", cover: "/images/republic-day/1.jpg" },
  { name: "annual-day", cover: "/images/annual-day/1.jpg" },
  { name: "environment-day", cover: "/images/environment-day/1.jpg" },
  { name: "science-exhibition", cover: "/images/science-exhibition/1.jpg" },
  { name: "marathi-day", cover: "/images/marathi-day/1.jpg" },
  { name: "dandiya-celebration", cover: "/images/dandiya-celebration/1.jpg" },
  { name: "rakhi-celebration", cover: "/images/rakhi-celebration/1.jpg" },

  { name: "smart-classrooms", cover: "/images/smart-classrooms/1.jpg" },
];

// Define images for each category
const categoryImages: Record<string, string[]> = {
  "independence-day": Array.from({ length: 10 }, (_, i) => `/images/independence-day/${i + 1}.jpg`),
  "republic-day": Array.from({ length: 10 }, (_, i) => `/images/republic-day/${i + 1}.jpg`),
  "annual-day": Array.from({ length: 10 }, (_, i) => `/images/annual-day/${i + 1}.jpg`),
  "marathi-day": Array.from({ length: 4 }, (_, i) => `/images/marathi-day/${i + 1}.jpg`),
  "science-exhibition": Array.from({ length: 10 }, (_, i) => `/images/science-exhibition/${i + 1}.jpg`),
  "children-day": Array.from({ length: 10 }, (_, i) => `/images/children-day/${i + 1}.jpg`),
  "dandiya-celebration": Array.from({ length: 9 }, (_, i) => `/images/dandiya-celebration/${i + 1}.jpg`),
  "constitutional-day": Array.from({ length: 10 }, (_, i) => `/images/constitutional-day/${i + 1}.jpg`),
  "environment-day": Array.from({ length: 6 }, (_, i) => `/images/environment-day/${i + 1}.jpg`),
  "smart-classrooms": Array.from({ length: 8 }, (_, i) => `/images/smart-classrooms/${i + 1}.jpg`),
  "rakhi-celebration": Array.from({ length: 5}, (_, i) => `/images/rakhi-celebration/${i + 1}.jpg`),
};

export default function GalleryHome() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 animate-fadeIn">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-12 animate-fadeIn delay-100">
          Gallery
        </h1>

        {/* Show categories if none is selected */}
        {!selectedCategory ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn delay-200">
            {categories.map((category) => (
              <div
                key={category.name}
                className="cursor-pointer relative h-60 w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedCategory(category.name)}
              >
                <Image
                  src={category.cover}
                  alt={`${category.name} cover`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3 text-xl font-semibold capitalize">
                  {category.name.replace("-", " ")}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Show images for the selected category
          <div>
            <button
              className="mb-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setSelectedCategory(null)}
            >
              ⬅ Back to Categories
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn delay-300">
              {categoryImages[selectedCategory]?.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-48 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={img}
                    alt={`${selectedCategory} ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
