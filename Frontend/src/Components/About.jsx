import React from 'react';
import { ChevronDown, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KreatistaAbout() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const teamMembers = [
    { 
      name: "Erica Stewart", 
      role: "Creative Director", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b93c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Fashion is the armor to survive reality"
    },
    { 
      name: "Melissa Shafer", 
      role: "Lead Designer", 
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Details make perfection"
    },
    { 
      name: "Claudia Stephens", 
      role: "Textile Specialist", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Sustainable fashion is the future"
    },
    { 
      name: "Hector Furman", 
      role: "Brand Strategist", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Style is a way to say who you are"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-pink-50 py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Fashion</span> Stories
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Where creativity meets craftsmanship to redefine your personal style narrative.
              </p>
              <button className="flex items-center space-x-2 bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 group">
                <span>Explore Our Journey</span>
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="relative"
            >
              <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27443692/2024/12/6/2148e1e4-af7f-45e9-a6c2-501c743209471733477391151-Azira-Checked-Cotton-Empire-Puff-Sleeve-Layered-Fit--Flare-M-1.jpg" className='h-full rounded-lg'></img>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-200 rounded-full -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-8 text-white shadow-xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white bg-opacity-10 rounded-full"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fashion Designer" 
                  className="w-full h-96 object-cover rounded-lg mb-6 shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-white text-gray-900 p-6 rounded-lg relative z-10 hover:shadow-md transition-shadow duration-300">
                  <p className="text-lg font-medium mb-2">"Life is too short to wear boring clothes"</p>
                  <p className="text-sm text-gray-600 mb-4">
                    We believe in creating pieces that tell your unique story.
                  </p>
                  <p className="text-sm font-semibold">ERICA STEWART, CREATIVE DIRECTOR</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-500 mb-4 tracking-widest">OUR PHILOSOPHY</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                We don't follow trends, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">we create them</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                At Kreatista, we blend avant-garde design with timeless elegance to craft pieces that transcend seasons. Our approach combines innovative techniques with sustainable practices to redefine modern fashion.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bespoke Design Process</h3>
                    <p className="text-gray-600">
                      Each collection begins with your story. Our designers work closely with clients to create truly personalized pieces that reflect individual personalities and lifestyles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Innovation</h3>
                    <p className="text-gray-600">
                      We pioneer eco-conscious fashion without compromising on style. From organic fabrics to zero-waste patterns, sustainability is woven into every thread.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl">
                EXPLORE OUR COLLECTIONS
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "1.4K+", label: "Designs Created", color: "from-purple-600 to-pink-500" },
              { value: "720+", label: "Satisfied Clients", color: "from-blue-600 to-cyan-500" },
              { value: "899+", label: "Five-Star Reviews", color: "from-green-600 to-teal-500" },
              { value: "15+", label: "Years of Excellence", color: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative"
        >
          <p className="text-sm mb-4 tracking-widest opacity-80">YOUR STYLE JOURNEY</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">elevate</span> your personal style?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            Our design consultants are ready to guide you through creating a wardrobe that perfectly captures your essence. Schedule a consultation and begin your style transformation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
              BOOK CONSULTATION
            </button>
            <button className="bg-white bg-opacity-10 text-white px-8 py-3 rounded-lg hover:bg-opacity-20 transition-colors duration-300 backdrop-blur-sm border border-white border-opacity-20">
              VIEW LOOKBOOK
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-gray-500 mb-4 tracking-widest">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tailored experiences for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">every style</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive fashion solutions designed to meet your unique needs and lifestyle.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Personal Styling", 
                description: "One-on-one consultations to curate a wardrobe that reflects your personality and fits your lifestyle perfectly.", 
                color: "purple",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                )
              },
              { 
                title: "Custom Couture", 
                description: "Handcrafted garments made exclusively for you with meticulous attention to detail and perfect fit.", 
                color: "pink",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                )
              },
              { 
                title: "Special Occasions", 
                description: "Breathtaking ensembles for weddings, galas, and important events that ensure all eyes are on you.", 
                color: "orange",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-${service.color}-100 to-white`}
              >
                <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-${service.color}-600 to-${service.color}-400 shadow-md`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <button className={`mt-6 text-sm font-medium text-${service.color}-600 hover:text-${service.color}-800 transition-colors duration-300 flex items-center justify-center mx-auto`}>
                  Learn more
                  <ChevronDown className="h-4 w-4 ml-1 transform group-hover:translate-y-1 transition-transform duration-300" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-gray-500 mb-4 tracking-widest">CREATIVE MINDS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">visionaries</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of passionate designers and stylists bring diverse perspectives to create magic.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left">
                    <p className="text-white text-sm italic">"{member.quote}"</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-600 cursor-pointer transition-colors duration-300" />
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-700 cursor-pointer transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">Trusted by visionary brands worldwide:</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Collaborating with industry leaders to push the boundaries of fashion.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
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
                <div className={`bg-gradient-to-r ${client.bg} text-white p-6 rounded-lg h-24 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <span className="font-bold text-xl tracking-wider">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-12 shadow-inner"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to begin your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">style transformation</span>?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the Kreatista family and experience fashion that's designed exclusively for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg">
                GET STARTED
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow border border-gray-200">
                CONTACT US
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}