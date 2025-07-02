import React from 'react';

export default function TestimonialsGrid() {
  const testimonials = [
    {
      id: 1,
      name: "Jessica Miller",
      role: "Marketing Director",
      company: "Bright Digital Marketing",
      avatar: "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=",
      text: "I can't imagine a design that gets better than this. You've absolutely nailed the design, and the number of features just feels right. I've been using it daily for over a month now, and it has significantly improved my way of thinking about how I make decisions. It’s not just a tool — it’s become an essential part of my daily creative workflow.",
      type: "large",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "I really appreciate it!",
      rating: 5,
      type: "small",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "UX Designer", 
      company: "Tech Solutions Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "I was very impressed!",
      subtext: "Great testimonial reviews are hard to come across these days. I was pleasantly surprised to find their platform really gets the context right.",
      type: "medium",
      hasMultipleAvatars: true,
      additionalAvatars: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
      ],
      gradient: "from-green-400 to-emerald-400"
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Brand Manager",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      text: "Amazing design and top-quality work! It works exactly like described. I will definitely be ordering again.",
      type: "medium-right",
      gradient: "from-orange-400 to-red-400"
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      text: "The customization side is way better looking than any UI frameworks online.",
      subtext: "A solution to take time away from the easy things and put it into big things. Projects become much easier.",
      company: "Wilson Design Co.",
      type: "medium-quote",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "It can definitely automate lot operations of my business. Besides, UI aspect is quite intuitive. Anyone of any business can get the most of their business tools like this system.",
      type: "bottom-left",
      gradient: "from-teal-400 to-blue-400"
    },
    {
      id: 7,
      name: "Alex Rodriguez",
      role: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      text: "Perfect flexibility and perfect price for quality overall recommended price for value-for money app!",
      company: "DevStudio",
      type: "bottom-right",
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      id: 8,
      name: "Amanda Foster",
      role: "Business Analyst",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      text: "Streamlined operations and enhanced their overall productivity through design and UX. Delivered intuitive interfaces that improved user engagement and reduced friction across workflows.",
      type: "center-image",
      isMainImage: true,
      mainImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=240&fit=crop&crop=face",
      gradient: "from-rose-400 to-pink-400"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const QuoteIcon = () => (
    <svg className="w-8 h-8 text-gray-200 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            What Our Users Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who've transformed their workflow with our platform
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {testimonial.rating && <StarRating rating={testimonial.rating} />}
              
              {testimonial.type === 'large' && <QuoteIcon />}
              
              <div className="relative z-10">
                <p className={`text-gray-700 mb-4 leading-relaxed ${testimonial.type === 'large' ? 'text-base' : 'text-sm'}`}>
                  {testimonial.text}
                </p>
                
                {testimonial.subtext && (
                  <p className="text-gray-600 text-sm mb-4">{testimonial.subtext}</p>
                )}
                
                <div className="flex items-center space-x-3">
                  {testimonial.isMainImage ? (
                    <img 
                      src={testimonial.mainImageUrl} 
                      alt={testimonial.name}
                      className="w-16 h-20 rounded-2xl object-cover shadow-lg"
                    />
                  ) : (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-lg"
                    />
                  )}
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    {testimonial.company && (
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    )}
                  </div>
                  
                  {testimonial.hasMultipleAvatars && (
                    <div className="flex -space-x-2">
                      {testimonial.additionalAvatars.map((avatar, idx) => (
                        <img 
                          key={idx}
                          src={avatar} 
                          alt="Additional testimonial"
                          className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-6 auto-rows-fr">
          
          {/* Top Left - Large testimonial with quote */}
          <div className="col-span-3 row-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[0].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <QuoteIcon />
            <div className="relative z-10 mt-6">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {testimonials[0].text}
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonials[0].avatar} 
                  alt={testimonials[0].name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonials[0].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[0].role}</p>
                  <p className="text-sm text-gray-500 font-medium">{testimonials[0].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Center - Small testimonial with stars */}
          <div className="col-span-3 row-span-1.7 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[1].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonials[1].avatar} 
                  alt={testimonials[1].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[1].name}</h4>
                  <p className="text-xs text-gray-500">{testimonials[1].role}</p>
                </div>
              </div>
              <StarRating rating={testimonials[1].rating} />
              <p className="text-gray-700 font-semibold mb-2">{testimonials[1].text}</p>
              <p className="text-xs text-gray-500">Genuinely happy and satisfied with her work and products. Will continue working with her.</p>
            </div>
          </div>

          {/* Top Right - Medium testimonial */}
          <div className="col-span-3 row-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[3].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonials[3].avatar} 
                  alt={testimonials[3].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[3].name}</h4>
                  <p className="text-xs text-gray-500">{testimonials[3].role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonials[3].text}</p>
            </div>
          </div>

          {/* Center Right - Profile image */}
          <div className="col-span-3 row-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group flex flex-col items-center justify-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[7].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10 text-center">
              <img 
                src={testimonials[7].mainImageUrl} 
                alt={testimonials[7].name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-lg"
              />
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{testimonials[7].name}</h4>
              <p className="text-xs text-gray-500 mb-2">{testimonials[7].role}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{testimonials[7].text}</p>
            </div>
          </div>

          {/* Middle Left - Testimonial with multiple avatars */}
          <div className="col-span-4 row-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[2].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10">
              <h3 className="font-bold text-gray-900 text-xl mb-3">{testimonials[2].text}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{testimonials[2].subtext}</p>
              <div className="flex items-center space-x-2">
                <img 
                  src={testimonials[2].avatar} 
                  alt={testimonials[2].name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-lg"
                />
                {testimonials[2].additionalAvatars.map((avatar, idx) => (
                  <img 
                    key={idx}
                    src={avatar} 
                    alt="Additional testimonial"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-lg"
                  />
                ))}
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonials[2].name}</h4>
                  <p className="text-xs text-gray-500">{testimonials[2].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Center - Quote testimonial */}
          <div className="col-span-4 row-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[4].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonials[4].avatar} 
                  alt={testimonials[4].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[4].name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{testimonials[4].company}</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold text-base mb-3 leading-relaxed">{testimonials[4].text}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{testimonials[4].subtext}</p>
            </div>
          </div>

          {/* Bottom Left */}
          {/* <div className="col-span-4 row-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[5].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src={testimonials[5].avatar} 
                  alt={testimonials[5].name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonials[5].name}</h4>
                  <p className="text-xs text-gray-500">{testimonials[5].role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonials[5].text}</p>
            </div>
          </div> */}

          {/* Bottom Right */}
          {/* <div className="col-span-3 row-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[6].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src={testimonials[6].avatar} 
                  alt={testimonials[6].name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonials[6].name}</h4>
                  <p className="text-xs text-gray-500">{testimonials[6].role} - {testimonials[6].company}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonials[6].text}</p>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}