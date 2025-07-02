import React from 'react';

const TrustedPartnersSection = () => {
  // Sample company data with placeholder logos
  const companies = [
    { name: 'TechCorp', logo: '🚀', color: 'from-green-400 to-emerald-500' },
    { name: 'InnovateLab', logo: '⚡', color: 'from-green-400 to-teal-500' },
    { name: 'DataFlow', logo: '📊', color: 'from-green-400 to-lime-500' },
    { name: 'CloudTech', logo: '☁️', color: 'from-green-400 to-cyan-500' },
    { name: 'DevForce', logo: '💻', color: 'from-green-400 to-blue-500' },
    { name: 'NextGen', logo: '🌟', color: 'from-green-400 to-yellow-400' },
    { name: 'QuantumSoft', logo: '🔬', color: 'from-green-400 to-indigo-500' },
    { name: 'GlobalTech', logo: '🌍', color: 'from-green-400 to-sky-500' },
    { name: 'FutureLabs', logo: '🔮', color: 'from-green-400 to-purple-500' },
    { name: 'TechVision', logo: '👁️', color: 'from-green-400 to-violet-500' },
    { name: 'CodeCraft', logo: '⚙️', color: 'from-green-400 to-gray-500' },
    { name: 'InfinityTech', logo: '∞', color: 'from-green-400 to-pink-500' }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-400 rounded-full filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-green-400/20"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block relative">
            <span className="absolute -top-6 left-0 right-0 text-xs font-semibold text-green-500 tracking-widest">
              OUR NETWORK
            </span>
            <h2 className="text-5xl  md:text-6xl font-bold text-gray-900 mb-4 relative">
              Trusted Partners
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></span>
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-white rounded-full animate-ping-slow"></span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
            We collaborate with industry leaders to deliver exceptional results and drive innovation forward
          </p>
        </div>

        {/* Partners Grid with Animation */}
        <div className="relative overflow-hidden rounded-3xl bg-white backdrop-blur-sm border border-gray-200 p-6 md:p-8 shadow-lg shadow-green-100/50 hover:shadow-green-200/50 transition-shadow duration-300">
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/50 to-transparent z-20 pointer-events-none"></div>
          
          {/* Main Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-6 md:space-x-8">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="group flex-shrink-0 w-56 md:w-64 h-28 md:h-32 relative"
                >
                  <div className="w-full h-full bg-white rounded-xl md:rounded-2xl border border-gray-200 p-4 md:p-6 transition-all duration-500 hover:scale-105 hover:shadow-md hover:border-green-300 cursor-pointer">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl md:rounded-2xl`}></div>
                    
                    {/* Company Logo */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <div className="text-3xl md:text-4xl mb-1 md:mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        {company.logo}
                      </div>
                      <h3 className="text-gray-800 font-medium md:font-semibold text-sm md:text-lg group-hover:text-green-600 transition-colors duration-300">
                        {company.name}
                      </h3>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Reverse Animation */}
          <div className="relative overflow-hidden mt-6 md:mt-8">
            <div className="flex animate-scroll-right space-x-6 md:space-x-8">
              {[...duplicatedCompanies].reverse().map((company, index) => (
                <div
                  key={`reverse-${company.name}-${index}`}
                  className="group flex-shrink-0 w-56 md:w-64 h-28 md:h-32 relative"
                >
                  <div className="w-full h-full bg-white rounded-xl md:rounded-2xl border border-gray-200 p-4 md:p-6 transition-all duration-500 hover:scale-105 hover:shadow-md hover:border-green-300 cursor-pointer">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl md:rounded-2xl`}></div>
                    
                    {/* Company Logo */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <div className="text-3xl md:text-4xl mb-1 md:mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        {company.logo}
                      </div>
                      <h3 className="text-gray-800 font-medium md:font-semibold text-sm md:text-lg group-hover:text-green-600 transition-colors duration-300">
                        {company.name}
                      </h3>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {[
            { value: '50+', label: 'Trusted Partners', color: 'green' },
            { value: '10M+', label: 'Users Served', color: 'emerald' },
            { value: '99.9%', label: 'Uptime', color: 'teal' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl md:rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-400/5 to-${stat.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-500 mb-2 relative z-10`}>
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base relative z-10">{stat.label}</div>
              
              {/* Animated underline */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="relative px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-white overflow-hidden group">
            <span className="relative z-10">Become a Partner</span>
            {/* Button shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            Join our growing network of industry innovators
          </p>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
          
          @keyframes ping-slow {
            0% {
              transform: translateX(-50%) scale(1);
              opacity: 1;
            }
            70% {
              transform: translateX(-50%) scale(1.5);
              opacity: 0.7;
            }
            100% {
              transform: translateX(-50%) scale(1);
              opacity: 0;
            }
          }
          
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.05;
            }
            50% {
              opacity: 0.1;
            }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
            100% {
              transform: translateY(0) rotate(360deg);
            }
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TrustedPartnersSection;