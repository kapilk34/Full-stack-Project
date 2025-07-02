import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, Star, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EcommerceBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState('green');
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30
  });

  const colorVariants = {
    green: {
      bg: 'from-green-500 to-green-700',
      text: 'text-green-600',
      light: 'bg-green-100',
      medium: 'bg-green-500',
      dark: 'bg-green-700'
    },
    blue: {
      bg: 'from-blue-500 to-blue-700',
      text: 'text-blue-600',
      light: 'bg-blue-100',
      medium: 'bg-blue-500',
      dark: 'bg-blue-700'
    },
    black: {
      bg: 'from-gray-700 to-gray-900',
      text: 'text-gray-800',
      light: 'bg-gray-200',
      medium: 'bg-gray-600',
      dark: 'bg-gray-800'
    }
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds < 0) {
          const newMinutes = prev.minutes - 1;
          if (newMinutes < 0) {
            const newHours = prev.hours - 1;
            if (newHours < 0) {
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
            return { hours: newHours, minutes: 59, seconds: 59 };
          }
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        return { ...prev, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Main Banner */}
      <div className="relative h-96 md:h-[32rem] flex items-center justify-between px-8 md:px-16">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating bubbles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-400 rounded-full opacity-20"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
          
          {/* Gradient overlay */}
          <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent ${colorVariants[currentColor].bg} opacity-20`}></div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-lg">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`${colorVariants[currentColor].text} font-light text-lg italic`}>Limited Edition</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-black text-gray-900 mb-2 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            NIKE AIR MAX
          </motion.h1>
          
          <motion.h2 
            className={`text-3xl md:text-4xl font-black ${colorVariants[currentColor].text} mb-6 leading-tight tracking-wider`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            PREMIUM 2024
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 mb-8 text-sm leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Revolutionary Flyknit construction with responsive cushioning for all-day comfort. The lightweight design features our most innovative materials yet.
          </motion.p>

          {/* Color Selector */}
          <motion.div 
            className="mb-6 flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              onClick={() => setCurrentColor('green')}
              className={`w-8 h-8 rounded-full border-2 ${currentColor === 'green' ? 'border-green-700' : 'border-transparent'}`}
            >
              <div className="w-full h-full rounded-full bg-green-600"></div>
            </button>
            <button 
              onClick={() => setCurrentColor('blue')}
              className={`w-8 h-8 rounded-full border-2 ${currentColor === 'blue' ? 'border-blue-700' : 'border-transparent'}`}
            >
              <div className="w-full h-full rounded-full bg-blue-600"></div>
            </button>
            <button 
              onClick={() => setCurrentColor('black')}
              className={`w-8 h-8 rounded-full border-2 ${currentColor === 'black' ? 'border-gray-700' : 'border-transparent'}`}
            >
              <div className="w-full h-full rounded-full bg-gray-900"></div>
            </button>
          </motion.div>

          {/* Price and Timer */}
          <motion.div 
            className="flex items-center gap-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-gray-600 text-lg line-through">$159.99</span>
              <span className={`text-2xl font-bold ${colorVariants[currentColor].text}`}>$129.99</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">20% OFF</span>
            </div>
            
            <div className="bg-white bg-opacity-80 p-2 rounded-lg shadow-sm">
              <div className="text-xs text-gray-600">Ends in:</div>
              <div className="flex gap-1 text-sm font-bold text-gray-800">
                <span>{timeLeft.hours.toString().padStart(2, '0')}</span>:
                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>:
                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.button 
            className={`${colorVariants[currentColor].dark} hover:${colorVariants[currentColor].medium} text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag className="w-5 h-5" />
            ADD TO CART
            {/* <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} /> */}
          </motion.button>

          {/* Features List */}
          <motion.div 
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center gap-1">
              <Check className="w-3 h-3 text-green-500" /> Lightweight
            </div>
            <div className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center gap-1">
              <Check className="w-3 h-3 text-green-500" /> Breathable
            </div>
            <div className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center gap-1">
              <Check className="w-3 h-3 text-green-500" /> Cushioned
            </div>
          </motion.div>
        </div>

        {/* Right Side - Product Image */}
        <div className="hidden md:flex flex-1 items-center justify-center relative">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Shoe Image */}
            <motion.img 
              src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwXM1RdO5ktUnNe7OwDR01SAsQj9qu83vEmHWM"
              alt="Nike Air Max Premium Edition" 
              className="w-full max-w-lg transform transition-all duration-500 hover:-translate-y-3 hover:rotate-3 drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.25))'
              }}
              whileHover={{ scale: 1.05 }}
            />
            
            {/* Floating price tag */}
            <motion.div 
              className="absolute top-8 right-8 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-green-600 font-bold">$129.99</span>
              <span className="text-xs line-through text-gray-500">$159.99</span>
            </motion.div>
            
            {/* Rating badge */}
            <motion.div 
              className="absolute bottom-12 left-8 bg-white px-3 py-2 rounded-full shadow-lg flex items-center gap-1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-yellow-400 text-sm flex">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xs font-bold text-gray-700">4.8/5</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trust Indicators */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-6 text-xs text-gray-600 bg-white bg-opacity-80 px-6 py-2 rounded-full shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-green-500" />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-green-500" />
          <span>30-Day Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          <span>Authentic Products</span>
        </div>
      </motion.div>
    </div>
  );
};

export default EcommerceBanner;