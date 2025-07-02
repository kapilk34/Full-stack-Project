import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Star, Grid, List, ChevronLeft, ChevronRight } from 'lucide-react';

const FashionStore = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('position');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Men\'s Slim Fit Denim Jeans',
      price: 59.99,
      originalPrice: 79.99,
      rating: 4,
      image: 'https://img.freepik.com/free-photo/handsome-fashionable-indian-man-black-jeans-jacket-posed-outdoor_627829-1793.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      isNew: true,
      category: 'men-fashion',
      brand: 'Levi\'s'
    },
    {
      id: 2,
      name: 'Women\'s Floral Summer Dress',
      price: 45.00,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/young-calm-tattooed-woman-summer-tropical-print-short-dress-rocky-beach-with-green-bush-purple-pink-flowers_343596-763.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      isSale: true,
      category: 'women-fashion',
      brand: 'Zara'
    },
    {
      id: 3,
      name: 'Premium Skincare Set',
      price: 89.99,
      originalPrice: 120.00,
      rating: 4,
      image: 'https://img.freepik.com/premium-photo/collection-perfume-bottles-with-pink-flowers-center_569684-2388.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'beauty',
      brand: 'The Ordinary'
    },
    {
      id: 4,
      name: 'Wireless Bluetooth Headphones',
      price: 129.99,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/headphones-laptop-home_23-2149551432.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'electronics',
      brand: 'Sony'
    },
    {
      id: 5,
      name: 'Running Shoes',
      price: 99.99,
      originalPrice: 130.00,
      rating: 4,
      image: 'https://img.freepik.com/premium-photo/pair-blue-running-shoes-isolated-white-background_960079-251.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'shoes',
      brand: 'Nike'
    },
    {
      id: 6,
      name: 'Yoga Mat',
      price: 29.99,
      rating: 4,
      image: 'https://img.freepik.com/free-photo/close-up-female-hands-unrolling-yoga-matress_1163-5427.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'sports',
      brand: 'Adidas'
    },
    {
      id: 7,
      name: 'Kids Backpack',
      price: 34.99,
      originalPrice: 45.00,
      rating: 5,
      image: 'https://img.freepik.com/premium-photo/boy-from-elementary-school-with-backpack-street_99433-794.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'kids',
      brand: 'Disney'
    },
    {
      id: 8,
      name: 'Men\'s Leather Wallet',
      price: 49.99,
      rating: 4,
      image: 'https://img.freepik.com/premium-photo/high-angle-view-laptop-table_1048944-14636581.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'accessories',
      brand: 'Fossil'
    },
    {
      id: 9,
      name: 'Women\'s Handbag',
      price: 79.99,
      originalPrice: 99.99,
      rating: 5,
      image: 'https://img.freepik.com/premium-photo/woman-hand-phone-bag-pocket-gray-background_218381-1299.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      isNew: true,
      category: 'accessories',
      brand: 'Michael Kors'
    },
    {
      id: 10,
      name: 'Smart Watch',
      price: 199.99,
      rating: 4,
      image: 'https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'electronics',
      brand: 'Samsung'
    },
    {
      id: 11,
      name: 'Men\'s Formal Shirt',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4,
      image: 'https://img.freepik.com/free-photo/handsome-serious-man-dressed-shirt-posing_171337-10513.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'men-fashion',
      brand: 'H&M'
    },
    {
      id: 12,
      name: 'Women\'s High Heels',
      price: 69.99,
      rating: 5,
      image: 'https://img.freepik.com/premium-photo/long-slim-female-legs-shoestore_105609-2974.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'shoes',
      brand: 'Steve Madden'
    },
        {
      id: 13,
      name: 'Gold Plated Necklace',
      price: 89.99,
      originalPrice: 120.00,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/luxury-shine-diamonds-digital-art_23-2151695049.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      isNew: true,
      category: 'jewelry',
      brand: 'Pandora'
    },
    {
      id: 14,
      name: 'Silver Diamond Ring',
      price: 199.99,
      originalPrice: 250.00,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/luxury-shine-diamonds-digital-art_23-2151695027.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'jewelry',
      brand: 'Swarovski',
    },
    {
      id: 15,
      name: 'Formal Shirt',
      price: 59.99,
      rating: 4,
      image: 'https://img.freepik.com/premium-photo/woman-with-her-arms-crossed-tie-that-says-she-is-wearing-shirt_1270925-377.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'woman',
      brand: 'hm'
    },
    {
      id: 16,
      name: 'Crop Top',
      price: 39.99,
      rating: 4,
      image: 'https://img.freepik.com/free-photo/young-teenage-girl-recording-reels-herself-outdoors-social-media_23-2149749821.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'women',
      brand: 'zara'
    },
    {
      id: 17,
      name: 'Watch',
      price: 129.99,
      originalPrice: 159.99,
      rating: 4,
      image: 'https://img.freepik.com/free-photo/businessman-checking-time_1357-97.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'home',
      brand: 'Samsang'
    },
    {
      id: 18,
      name: 'Sports Shoes',
      price: 24.99,
      rating: 5,
      image: 'https://img.freepik.com/premium-photo/sport-shoes-white-background-with-clipping-path_219766-5203.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'home',
      brand: 'adidas'
    },
    {
      id: 19,
      name: 'Table Lamp',
      price: 79.99,
      originalPrice: 99.99,
      rating: 5,
      image: 'https://img.freepik.com/premium-photo/lamp-clock-dark-room-with-light-shadow-concept_41466-170.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'electronics',
      brand: 'Crate & Barrel'
    },
    {
      id: 20,
      name: 'Football',
      price: 249.99,
      rating: 4,
      image: 'https://img.freepik.com/premium-photo/powerful-kick-soccer-ball-with-flame-fire_207634-5874.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'sports',
      brand: 'West Elm'
    },
    {
      id: 21,
      name: 'Velvet Sofa',
      price: 599.99,
      originalPrice: 699.99,
      rating: 5,
      image: 'https://img.freepik.com/premium-photo/plush-green-sofa-with-contemporary-design-coz_1169880-210214.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'home',
      brand: 'Ashley'
    },
    {
      id: 22,
      name: 'Stainless Steel Watch',
      price: 179.99,
      rating: 4,
      image: 'https://img.freepik.com/premium-photo/gorgeous-luxury-wrist-watch-background_1262174-662.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'accessories',
      brand: 'Fossil'
    },
    {
      id: 23,
      name: 'Rose Gold Bangle',
      price: 69.99,
      originalPrice: 89.99,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/gold-rings_1157-82.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_hybrid&w=740',
      category: 'jewelry',
      brand: 'Kate Spade'
    },
    {
      id: 24,
      name: 'Area Rug',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4,
      image: 'https://img.freepik.com/premium-photo/large-area-rug-with-red-rug-it-red-rug-floor_1123160-12404.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_hybrid&w=740',
      category: 'home',
      brand: 'Ruggable'
    },
    {
      id: 25,
      name: 'Toys',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4,
      image: 'https://img.freepik.com/premium-photo/teddy-bear-with-bow-tie-sits-dirt-road_701999-18156.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740',
      category: 'kids',
      brand: 'Nike'
    }
  ];

  const bestSellers = [
    {
      id: 1,
      name: 'Men\'s Casual T-Shirt',
      price: 24.99,
      originalPrice: 34.99,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/attractive-man-heading-work_23-2147932472.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740'
    },
    {
      id: 2,
      name: 'Women\'s Sunglasses',
      price: 29.99,
      rating: 4,
      image: 'https://img.freepik.com/free-photo/portrait-young-woman-town_1303-21669.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_hybrid&w=740'
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      price: 79.99,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072231.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_hybrid&w=740'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 39.99,
      originalPrice: 34.99,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/hand-using-smartwatch-close-up_23-2148994197.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740'
    },
    {
      id: 5,
      name: 'Women\'s Summer Dress',
      price: 59.99,
      rating: 4,
      image: 'https://img.freepik.com/free-photo/romantic-portrait-woman-long-blue-dress-beach-by-sea-windy-day_343596-896.jpg?ga=GA1.1.1007691285.1739430082&semt=ais_items_boosted&w=740'
    },
  ];

  const categories = [
    'men-fashion',
    'women-fashion',
    'beauty',
    'electronics',
    'shoes',
    'sports',
    'kids',
    'accessories',
    'home',
    'jewelry'
  ];

  const brands = [
    'Nike',
    'Adidas',
    'Zara',
    'H&M',
    'Levi\'s',
    'Sony',
    'Samsung',
    'The Ordinary',
    'Michael Kors',
    'Fossil'
  ];

  // const colors = [
  //   { name: 'Red', class: 'bg-red-500' },
  //   { name: 'Blue', class: 'bg-blue-500' },
  //   { name: 'Green', class: 'bg-green-500' },
  //   { name: 'Yellow', class: 'bg-yellow-500' },
  //   { name: 'Black', class: 'bg-black' },
  //   { name: 'White', class: 'bg-white border border-gray-300' },
  //   { name: 'Pink', class: 'bg-pink-500' },
  //   { name: 'Purple', class: 'bg-purple-500' },
  //   { name: 'Brown', class: 'bg-amber-800' },
  //   { name: 'Gray', class: 'bg-gray-500' },
  //   { name: 'Gold', class: 'bg-amber-400' },
  //   { name: 'Silver', class: 'bg-gray-300' },
  //   { name: 'Rose Gold', class: 'bg-rose-300' }
  // ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  // const handleColorSelect = (color) => {
  //   setSelectedColor(prev => prev === color ? '' : color);
  // };

  // const handlePriceRangeChange = (e, index) => {
  //   const value = parseInt(e.target.value);
  //   const newRange = [...priceRange];
  //   newRange[index] = value;
  //   setPriceRange(newRange);
  // };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleWishlistToggle = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    // if (selectedColor && product.color !== selectedColor) {
    //   return false;
    // }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      case 'rating': return b.rating - a.rating;
      case 'newest': return b.id - a.id;
      default: return a.id - b.id;
    }
  });

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg mr-4">
                <span className="font-bold text-xl">FASHION HUB</span>
              </div>
            </div>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-lg">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="flex flex-col items-center text-gray-700 hover:text-green-600">
                <User className="w-6 h-6" />
                <span className="text-xs mt-1">Account</span>
              </button>
              <button className="flex flex-col items-center text-gray-700 hover:text-green-600 relative">
                <Heart className="w-6 h-6" />
                <span className="text-xs mt-1">Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="flex flex-col items-center text-gray-700 hover:text-green-600 relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="text-xs mt-1">Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label htmlFor={`category-${category}`} className="text-sm capitalize">
                      {category.replace('-', ' ')}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-bold text-lg mb-4">Price Range</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(e, 0)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(e, 1)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Brands */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-bold text-lg mb-4">Brands</h3>
              <div className="space-y-2">
                {brands.map((brand, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`brand-${brand}`}
                      className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                    <label htmlFor={`brand-${brand}`} className="text-sm">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors */}
            {/* <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-bold text-lg mb-4">Colors</h3>
              <div className="grid grid-cols-5 gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${color.class} ${selectedColor === color.name ? 'ring-2 ring-blue-500' : ''}`}
                    title={color.name}
                    onClick={() => handleColorSelect(color.name)}
                  />
                ))}
              </div>
            </div> */}

            {/* Best Sellers */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4">Best Sellers</h3>
              <div className="space-y-4">
                {bestSellers.map((product) => (
                  <div key={product.id} className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{product.name}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex">{renderStars(product.rating)}</div>
                      </div>
                      <div className="mt-1">
                        <span className="text-blue-600 font-bold text-sm">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through ml-2 text-xs">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h1 className="text-xl font-bold">Shop Products</h1>
                  <p className="text-sm text-gray-500">{filteredProducts.length} products found</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="position">Featured</option>
                      <option value="price">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="name">Name: A-Z</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">View:</span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Display */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setPriceRange([0, 500]);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden group">
                    <div className="relative">
                      <div className="aspect-square bg-gray-100 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-2 right-2 flex flex-col space-y-2">
                        <button 
                          className={`p-2 rounded-full shadow-md transition-colors ${wishlist.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                          onClick={() => handleWishlistToggle(product.id)}
                        >
                          <Heart className="w-4 h-4" fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                      {(product.isNew || product.isSale) && (
                        <div className="absolute top-2 left-2 flex space-x-2">
                          {product.isNew && (
                            <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full">NEW</span>
                          )}
                          {product.isSale && (
                            <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full">SALE</span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <span className="text-sm text-gray-500 capitalize">{product.brand}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">{renderStars(product.rating)}</div>
                        <span className="text-xs text-gray-500">({product.rating}.0)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through ml-2 text-sm">${product.originalPrice}</span>
                          )}
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 text-sm rounded-md hover:bg-green-700 transition-colors"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row group">
                    <div className="w-full md:w-1/4">
                      <div className="aspect-square bg-gray-100 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-1">{product.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            className={`p-2 rounded-full transition-colors ${wishlist.includes(product.id) ? 'bg-red-100 text-red-500' : 'text-gray-500 hover:bg-gray-100'}`}
                            onClick={() => handleWishlistToggle(product.id)}
                          >
                            <Heart className="w-5 h-5" fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="flex mr-2">{renderStars(product.rating)}</div>
                        <span className="text-sm text-gray-500">({product.rating}.0)</span>
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through ml-2 text-sm">${product.originalPrice}</span>
                          )}
                        </div>
                        <button 
                          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionStore;