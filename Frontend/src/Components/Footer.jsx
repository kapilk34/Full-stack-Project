import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Privacy" },
    { name: "Terms", },
    { name: "Contact" },
    { name: "Careers"},
    { name: "Blog" },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: "https://facebook.com", color: "hover:text-blue-400" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "https://twitter.com", color: "hover:text-blue-300" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "https://instagram.com", color: "hover:text-pink-400" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://linkedin.com", color: "hover:text-blue-500" },
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com", color: "hover:text-gray-300" },
    { icon: <FiMail className="w-5 h-5" />, href: "mailto:contact@glassnav.com", color: "hover:text-red-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="backdrop-blur-lg bg-gray-200 text-black py-12 shadow-inner border-t border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold  font-4xl flex-row bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              <img src="./Logo.png" className="h-14"></img>
            </h3>
            <p className="text-gray-900 text-sm">
              Creating beautiful, accessible navigation experiences for modern web applications.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.slice(0, 4).map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`${social.color} transition-colors duration-300`}
                  aria-label={social.href.replace('https://', '')}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links columns */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-gray-900">Product</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-700 hover:text-black transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-700 hover:text-black transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
              <li>
                <motion.a
                  href="#docs"
                  whileHover={{ x: 5 }}
                  className="text-gray-700 hover:text-black transition-colors duration-300 text-sm"
                >
                  Documentation
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-gray-900">Subscribe</h4>
            <p className="text-gray-700 text-sm">
              Get the latest updates and news.
            </p>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-black border border-gray-700 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 px-4 py-2 rounded-r-lg text-sm font-medium"
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom copyright */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-700 text-sm">
            © {currentYear} GlassNav. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a 
              href="#privacy" 
              whileHover={{ y: -2 }}
              className="text-gray-700 hover:text-black text-sm transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#terms" 
              whileHover={{ y: -2 }}
              className="text-gray-700 hover:text-black text-sm transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#cookies" 
              whileHover={{ y: -2 }}
              className="text-gray-700 hover:text-black text-sm transition-colors"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;