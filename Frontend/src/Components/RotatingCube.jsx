import React, { useEffect, useRef, useState } from "react";
import "../Style/cube.css"; 

const RotatingCube = () => {
  const cubeSceneRef = useRef(null);
  const animationFrame = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
      const progress = Math.min(scrollY / maxScroll, 1); // 0 to 1

      const initialOffset = -50;
      const maxTranslateX = 100;
      const translateX = initialOffset + progress * maxTranslateX;

      if (cubeSceneRef.current) {
        cubeSceneRef.current.style.transform = `translateX(${translateX}%)`;
      }

      if (progress >= 0.9 && !showContent) {
        setShowContent(true);
      } else if (progress < 0.9 && showContent) {
        setShowContent(false);
      }
    };

    const onScroll = () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      animationFrame.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [showContent]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent px-10">

      {/* Background Heading */}
      <h1
        className={`absolute text-[10vw] font-extrabold text-black opacity-15 dark:text-white z-0 transition-all duration-700 ${
          showContent ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        Welcome To AkT
      </h1>

      {/* Left Side Content */}
      <div
        className={`w-1/2 max-w-lg z-10 transition-all duration-700 ease-out p-15 ${
          showContent
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10 pointer-events-none"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#6DBB87]">Our Vision</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          We craft immersive design experiences that move, rotate, and shift
          with elegance. When our cube moves, our creativity speaks. Explore how
          design transforms through dimensions.
        </p>
      </div>

      {/* Cube in Center, moves on scroll */}
      <div
        ref={cubeSceneRef}
        className="cube-scene transition-transform duration-300 ease-out"
      >
        <div className="cube">
          <div className="face front">
            <img src="/public/istockphoto-1414801672-612x612.jpg" alt="Front" />
          </div>
          <div className="face back">
            <img src="/public/photo-1505740420928-5e560c06d30e.jpeg" alt="Back" />
          </div>
          <div className="face right">
            <img src="/public/props-product-photography.webp" alt="Right" />
          </div>
          <div className="face left">
            <img src="/public/what makes a good product image.jpg" alt="Left" />
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        className={`absolute bottom-16 px-6 py-2 rounded-full bg-white text-black font-medium z-10 transition-all duration-500 ${
          showContent
            ? "opacity-0 translate-y-5 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        Our Projects
      </button>
    </div>
  );
};

export default RotatingCube;