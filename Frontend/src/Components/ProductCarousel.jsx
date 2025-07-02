// src/components/ProductCarousel.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from 'prop-types';

const sampleShoes = [
  {
    id: "shoe-1",
    title: "VOMERO 18",
    img: "https://cdn.fleetfeet.com/a:1.5-f:cover-w:1440/assets/NIKE-Vomero-18-7.jpg?s=79b453c5",
    price: "$129.99",
    rating: 4.5,
    colors: ["#000000", "#2D3748", "#718096"]
  },
  {
    id: "shoe-2",
    title: "V2K",
    img: "https://lebrouges.in/cdn/shop/files/66fe2601c48da.jpg?v=1727942833",
    price: "$149.99",
    rating: 4.2,
    colors: ["#1A365D", "#4A5568", "#E2E8F0"]
  },
  {
    id: "shoe-3",
    title: "PEGASUS 41",
    img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F04%2F14%2Fnike-pegasus-41-reactx-foam-release-info-001.jpg?q=75&w=800&cbr=1&fit=max",
    price: "$119.99",
    rating: 4.7,
    colors: ["#2C5282", "#4FD1C5", "#F6AD55"]
  },
  {
    id: "shoe-4",
    title: "AIR ZOOM",
    img: "https://m.media-amazon.com/images/I/71XWLlNEfaL._AC_SX675_.jpg",
    price: "$159.99",
    rating: 4.3,
    colors: ["#9F7AEA", "#ED8936", "#4299E1"]
  },
  {
    id: "shoe-5",
    title: "BLAZER MID",
    img: "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/c3c25724-7974-4c44-90fa-c227ae3336fa/image.jpg",
    price: "$89.99",
    rating: 4.0,
    colors: ["#E53E3E", "#F56565", "#FC8181"]
  },
  {
    id: "shoe-6",
    title: "DUNK LOW",
    img: "https://cdn.runrepeat.com/storage/gallery/product_content/25696/nike-dunk-low-review-21438139-main.jpg",
    price: "$109.99",
    rating: 4.8,
    colors: ["#38B2AC", "#319795", "#285E61"]
  },
];

const ProductCarousel = ({ 
  products = sampleShoes, 
  title = "Featured Products",
  autoScroll = false,
  autoScrollInterval = 5000,
  showDots = false,
  showRating = true
}) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollRef = useRef(null);

  const checkScrollArrows = useCallback(() => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
      const cardWidth = scrollRef.current.querySelector('.product-card')?.offsetWidth || 300;
      setCurrentIndex(Math.round(scrollLeft / (cardWidth + 24)));
    }
  }, []);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(checkScrollArrows);
  }, [checkScrollArrows]);

  useEffect(() => {
    if (!autoScroll || isHovered || products.length <= 1) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (scrollRef.current) {
          const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
          const cardWidth = scrollRef.current.querySelector('.product-card')?.offsetWidth || 300;
          const maxScroll = scrollWidth - clientWidth;
          
          if (scrollLeft >= maxScroll - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
          }
        }
      }, autoScrollInterval);
    };

    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [autoScroll, autoScrollInterval, isHovered, products.length]);

  useEffect(() => {
    checkScrollArrows();
    window.addEventListener("resize", checkScrollArrows);
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) currentScrollRef.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkScrollArrows);
      if (currentScrollRef) currentScrollRef.removeEventListener("scroll", handleScroll);
    };
  }, [products, checkScrollArrows, handleScroll]);

  const scrollToIndex = useCallback((index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.product-card')?.offsetWidth || 300;
      scrollRef.current.scrollTo({ left: index * (cardWidth + 24), behavior: 'smooth' });
    }
  }, []);

  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      const productCard = scrollRef.current.querySelector(".product-card");
      const scrollAmount = productCard ? productCard.offsetWidth + 24 : 300;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  }, []);

  const renderRatingStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span 
        key={i} 
        className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"}
      >
        {i < rating - 0.5 ? "★" : i < rating ? "½" : "★"}
      </span>
    ));
  };

  return (
    <div 
      className="w-full px-4 py-12 bg-gray-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className={`p-2 rounded-full transition-all ${showLeftArrow ? 'bg-white shadow-md text-gray-700 hover:bg-gray-100' : 'text-gray-300 cursor-default'}`}
              disabled={!showLeftArrow}
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`p-2 rounded-full transition-all ${showRightArrow ? 'bg-white shadow-md text-gray-700 hover:bg-gray-100' : 'text-gray-300 cursor-default'}`}
              disabled={!showRightArrow}
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth py-4"
          role="region"
          aria-label={`${title} carousel`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card flex-none w-72 bg-white rounded-xl shadow-sm flex flex-col hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-8">
                  <button 
                    className="w-full bg-white text-gray-900 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-400"
                    aria-label={`Add ${product.title} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-middle text-gray-900">{product.title}</h3>
                  <span className="text-lg font-middle text-gray-900">{product.price}</span>
                </div>
                {showRating && product.rating && (
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {renderRatingStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500">{product.rating.toFixed(1)}</span>
                  </div>
                )}
                {/* {product.colors && (
                  <div className="mt-auto flex space-x-2">
                    {product.colors.map((color, i) => (
                      <span 
                        key={i} 
                        className="w-4 h-4 rounded-full border border-gray-200" 
                        style={{ backgroundColor: color }}
                        aria-label={`Color option ${i + 1}`}
                      />
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductCarousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.string,
      rating: PropTypes.number,
      colors: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  title: PropTypes.string,
  autoScroll: PropTypes.bool,
  autoScrollInterval: PropTypes.number,
  showDots: PropTypes.bool,
  showRating: PropTypes.bool
};

export default ProductCarousel;