import React from 'react';
import { ChevronDown, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KreatistaAbout() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const teamMembers = [
    { 
      name: "Erica Stewart", 
      role: "Creative Director", 
      image: "https://i.pinimg.com/736x/1c/32/87/1c328761cabc0700ea58ef00a35845d3.jpg",
      quote: "Fashion is the armor to survive reality",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    { 
      name: "Melissa Shafer", 
      role: "Lead Designer", 
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Details make perfection",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    { 
      name: "Claudia Stephens", 
      role: "Textile Specialist", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Sustainable fashion is the future",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    { 
      name: "Hector Furman", 
      role: "Brand Strategist", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Style is a way to say who you are",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-pink-50 py-16 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 md:w-64 md:h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">Fashion</span> Stories
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-lg">
                Where creativity meets craftsmanship to redefine your personal style narrative.
              </p>
              <button className="flex items-center space-x-2 bg-green-400 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 group transform hover:-translate-y-1 active:translate-y-0">
                <span>Explore Our Journey</span>
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl aspect-square w-full max-w-md mx-auto">
                <img 
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwrWGz7Fg6JxupWUeMtP2CRFH4Lcwn5TfGvsz9" 
                  alt="Fashion design"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-yellow-200 rounded-full -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 md:p-8 text-white shadow-xl overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white bg-opacity-10 rounded-full"></div>
                
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-6">
                  <img 
                    src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw4nzNExOBX0faVIbuKU7Ps5zpcOgxlwGjnmJ9" 
                    alt="Fashion Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white text-gray-900 p-4 md:p-6 rounded-lg relative z-10 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-base md:text-lg font-medium mb-2">"Life is too short to wear boring clothes"</p>
                  <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                    We believe in creating pieces that tell your unique story.
                  </p>
                  <p className="text-xs md:text-sm font-semibold">ERICA STEWART, CREATIVE DIRECTOR</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 tracking-widest">OUR PHILOSOPHY</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                We don't follow trends, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">we create them</span>
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                At Kreatista, we blend avant-garde design with timeless elegance to craft pieces that transcend seasons. Our approach combines innovative techniques with sustainable practices to redefine modern fashion.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Bespoke Design Process</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Each collection begins with your story. Our designers work closely with clients to create truly personalized pieces that reflect individual personalities and lifestyles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-pink-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Sustainable Innovation</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      We pioneer eco-conscious fashion without compromising on style. From organic fabrics to zero-waste patterns, sustainability is woven into every thread.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 md:mt-8 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0">
                EXPLORE OUR COLLECTIONS
              </button>
            </motion.div>
          </div>
        </div>
      </section>

                {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 tracking-widest">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Powering your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">eCommerce success</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive tools and support for your online store to thrive in a competitive market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Store Management",
                description: "Manage products, inventory, and orders efficiently with our intuitive admin dashboard.",
                color: "green",
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4" />
                  </svg>
                )
              },
              {
                title: "Secure Payments",
                description: "Offer multiple payment gateways with advanced fraud protection and smooth checkout experience.",
                color: "green",
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.5 0 2.833.667 3.778 1.778M12 8c-1.5 0-2.833.667-3.778 1.778M12 8v4m0 0v4m0-4h4m-4 0H8" />
                  </svg>
                )
              },
              {
                title: "Customer Support",
                description: "24/7 chat and ticketing system to assist customers and boost retention.",
                color: "green",
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`text-center p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-${service.color}-50 to-white transform hover:-translate-y-2`}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-r from-${service.color}-600 to-${service.color}-400 shadow-md`}>
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {service.description}
                </p>
                <button className={`mt-4 md:mt-6 text-xs md:text-sm font-medium text-${service.color}-600 hover:text-${service.color}-800 transition-colors duration-300 flex items-center justify-center mx-auto group`}>
                  Learn more
                  <ChevronDown className="h-3 w-3 md:h-4 md:w-4 ml-1 transform group-hover:translate-y-1 transition-transform duration-300" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 tracking-widest">CREATIVE MINDS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">visionaries</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Our team of passionate designers and stylists bring diverse perspectives to create magic.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center group"
              >
                <div className="relative mb-4 md:mb-6 overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                  <div className="aspect-square w-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left">
                    <p className="text-white text-xs md:text-sm italic">"{member.quote}"</p>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{member.role}</p>
                <div className="flex justify-center space-x-2 md:space-x-3">
                  <a href={member.social.facebook} className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  <a href={member.social.instagram} className="text-gray-400 hover:text-pink-600 transition-colors duration-300">
                    <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
                    <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 md:mb-2">Trusted by visionary brands worldwide:</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Collaborating with industry leaders to push the boundaries of fashion.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center"
          >
            {[
              { name: "Vogue", bg: "from-red-600 to-pink-500" },
              { name: "Elle", bg: "from-purple-600 to-indigo-500" },
              { name: "Harper's", bg: "from-blue-600 to-cyan-500" },
              { name: "GQ", bg: "from-green-600 to-teal-500" }
            ].map((client, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className={`bg-gradient-to-r ${client.bg} text-white p-4 md:p-6 rounded-lg h-16 md:h-24 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <span className="font-bold text-sm md:text-xl tracking-wider">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-inner"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Ready to begin your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">style transformation</span>?
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join the Kreatista family and experience fashion that's designed exclusively for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <button className="bg-gray-900 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:-translate-y-1 active:translate-y-0">
                GET STARTED
              </button>
              <button className="bg-white text-gray-900 px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow border border-gray-200 transform hover:-translate-y-1 active:translate-y-0">
                CONTACT US
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}