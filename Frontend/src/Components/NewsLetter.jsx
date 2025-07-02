import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, Shield, Users, Award, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technology for blazing fast results.",
      color: "from-yellow-400 to-orange-500",
      delay: "delay-0",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-600/10"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime guarantee for your peace of mind.",
      color: "from-blue-400 to-purple-500",
      delay: "delay-100",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-purple-600/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Seasoned professionals with decades of combined experience in the industry.",
      color: "from-green-400 to-teal-500",
      delay: "delay-200",
      bgColor: "bg-gradient-to-br from-green-500/10 to-teal-600/10"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Recognized excellence with multiple industry awards and certifications.",
      color: "from-purple-400 to-pink-500",
      delay: "delay-300",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-600/10"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of delivering measurable success for over 1000+ clients.",
      color: "from-pink-400 to-red-500",
      delay: "delay-400",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-red-600/10"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to ensure you're never left hanging.",
      color: "from-indigo-400 to-blue-500",
      delay: "delay-500",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-blue-600/10"
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: `${Math.random() * 12 + 3}px`,
              height: `${Math.random() * 12 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs with Subtle Movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-purple-600 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-orb-move"></div>
        <div className="absolute -bottom-40 -left-40 w-[35rem] h-[35rem] bg-blue-600 rounded-full mix-blend-overlay filter blur-[150px] opacity-10 animate-orb-move animation-delay-4000"></div>
        <div className="absolute top-1/3 left-1/4 w-[25rem] h-[25rem] bg-pink-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-10 animate-orb-move animation-delay-7000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTIxLjI2NyAyMS4yNjdMMjAgMjIuNTM0bC0xLjI2Ny0xLjI2N0wxNy40NjYgMjBsMS4yNjctMS4yNjdMMjAgMTcuNDY2bDEuMjY3IDEuMjY3TDIyLjUzNCAyMGwtMS4yNjcgMS4yNjd6TTIwIDM1LjQ2Nkw5LjI2NyAyNC43MzNMMjQuNzMzIDkuMjY3TDM1LjQ2NiAyMEwyMCAzNS40NjZ6TTYuNjY3IDYuNjY3TDYuNjY3IDE3LjQ2NkwxNy40NjYgNi42NjdINi42Njd6TTIyLjUzNCA2LjY2N0w2LjY2NyAyMi41MzRWNi42NjdIMjIuNTM0ek0zMy4zMzMgMTcuNDY2TDE3LjQ2NiAzMy4zMzNIMzMuMzMzVjE3LjQ2NnpNMTcuNDY2IDYuNjY3TDMzLjMzMyAyMi41MzRWNi42NjdIMTcuNDY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-24 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border border-purple-500/40 mb-8 shadow-lg backdrop-blur-sm">
            <span className="text-sm font-medium tracking-wider text-purple-200 uppercase">Why we stand out</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent mb-8">
            <span className="relative inline-block">
              <span className="relative z-10">Why Choose</span>
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-purple-500" viewBox="0 0 300 20">
                <path
                  d="M0 12 Q 75 22, 150 12 T 300 12"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="relative ml-2 whitespace-nowrap">
              <span className="relative z-10 font-extrabold">Us?</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-600/70 to-pink-600/70 blur-md opacity-80"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            We don't just deliver solutions — we craft experiences that transform your business and exceed your wildest expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${feature.delay}`}
            >
              {/* Card */}
              <div className={`relative h-full ${feature.bgColor} backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden`}>
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700`} style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    padding: "1.5px"
                  }}></div>
                </div>

                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
                  <div className="absolute -inset-2 rounded-2xl border-2 border-white/5 group-hover:border-white/10 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed tracking-wide group-hover:text-gray-100 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Elements */}
                <div className={`absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-700`}></div>
                <div className={`absolute -bottom-3 -left-3 w-5 h-5 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-700 animation-delay-300`}></div>
                
                {/* Corner Accents */}
                <div className={`absolute top-0 right-0 w-3 h-3 bg-gradient-to-br ${feature.color} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-br ${feature.color} rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-24 transform transition-all duration-1000 delay-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden">
            <span className="relative z-10 flex items-center">
              Get Started Today
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
            <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-gray-400 mt-8 flex items-center justify-center tracking-wide">
            <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-300">Trusted by over 10,000 satisfied customers worldwide</span>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
        @keyframes orb-move {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, 20px);
          }
          50% {
            transform: translate(0, 40px);
          }
          75% {
            transform: translate(-20px, 20px);
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-7000 {
          animation-delay: 7s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;