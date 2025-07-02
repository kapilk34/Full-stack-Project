// src/components/ProductCarousel.jsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shoes = [
  {
    title: "VOMERO 18",
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/e4fbfe64-95d7-408b-a417-070e1db609be/image.jpg",
  },
  {
    title: "V2K",
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/12242a05-e3a5-45d1-85d5-f88cd48a6d42/image.jpg",
  },
  {
    title: "PEGASUS 41",
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/bc78c2c8-2907-4cf8-b20d-fb78f6beab5f/image.jpg",
  },
  {
    title: "PEGASUS 41",
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/bc78c2c8-2907-4cf8-b20d-fb78f6beab5f/image.jpg",
  },
];

export default function ProductCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Shop by Icons</h2>
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-10"
        >
          {shoes.map((shoe, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-lg shadow-md flex flex-col items-center p-4"
            >
              <img src={shoe.img} alt={shoe.title} className="w-full h-48 object-contain" />
              <h3 className="text-lg font-bold mt-4">{shoe.title}</h3>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}