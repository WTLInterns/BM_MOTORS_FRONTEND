"use client";

import { motion } from "framer-motion";
import { Sparkles, Car, Shield, Wrench, Star, CheckCircle, Award, Heart } from "lucide-react";
import Image from "next/image";

export default function DetailingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Floating car illustration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div 
                className="inline-block bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/10"
                variants={itemVariants}
              >
                Premium Detailing
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                variants={itemVariants}
              >
                Car Detailing & Spa
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Restore your car's showroom shine with our premium detailing packages. Deep cleaning, polishing, and protection for interior and exterior.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-5"
                variants={itemVariants}
              >
                <motion.a 
                  href="tel:+919637925555" 
                  className="relative group bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-9 rounded-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-red-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                     Book Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>
                
                <motion.a 
                  href="#packages" 
                  className="relative group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-xl transition-all hover:border-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Packages
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" 
                alt="Luxurious foam wash with sponge on glossy black car bonnet" 
                fill 
                className="object-cover object-center" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Detailing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete car care solutions</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              icon: <Car className="w-8 h-8 text-blue-600" />, 
              title: "Interior Detailing", 
              items: ["Steam vacuum cleaning", "Leather/fabric conditioning", "Dashboard & panel cleaning", "Carpet shampooing", "Odor elimination", "Sanitization treatment"] 
            },
            { 
              icon: <Sparkles className="w-8 h-8 text-blue-600" />, 
              title: "Exterior Detailing", 
              items: ["Foam wash & rinse", "Clay bar treatment", "Machine polishing", "Waxing & sealing", "Tire & trim dressing", "Glass treatment"] 
            },
            { 
              icon: <Shield className="w-8 h-8 text-blue-600" />, 
              title: "Premium Protection", 
              items: ["Ceramic coating", "Paint protection film", "Graphene coating", "Headlight restoration", "Chrome polishing", "Long-term warranty"] 
            }
          ].map((service, i) => (
            <motion.div 
              key={i} 
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              
              <ul className="space-y-3 text-gray-700">
                {service.items.map((item, j) => (
                  <motion.li 
                    key={j} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Packages */}
        <motion.div
          id="packages"
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Detailing Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-xl mb-3 text-gray-900">Basic Spa</h3>
              <p className="text-gray-600 mb-6">Essential cleaning package</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Exterior foam wash</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Interior vacuuming</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Dashboard cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Tire dressing</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 border-2 border-black shadow-xl hover:shadow-2xl transition-all relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -top-3 left-6 bg-black text-white px-4 py-1 rounded-full text-sm font-bold">POPULAR</div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 mt-3">Premium Spa</h3>
              <p className="text-gray-600 mb-6">Complete detailing experience</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>All Basic items</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Machine polishing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Leather conditioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Carpet shampooing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Waxing & sealing</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-xl mb-3 text-gray-900">Ceramic Coating</h3>
              <p className="text-gray-600 mb-6">Ultimate protection</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>All Premium items</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Paint correction</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>9H Ceramic coating</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>3-5 year warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Hydrophobic finish</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Benefits of Regular Detailing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Sparkles className="w-5 h-5 text-blue-500" />, text: "Maintains Resale Value" },
              { icon: <Shield className="w-5 h-5 text-blue-500" />, text: "Paint Protection" },
              { icon: <Wrench className="w-5 h-5 text-blue-500" />, text: "Healthier Cabin" },
              { icon: <Car className="w-5 h-5 text-blue-500" />, text: "Pride of Ownership" }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mt-0.5">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{benefit.text}</h4>
                  <p className="text-gray-600">{[
                    "Well-maintained appearance increases resale price",
                    "Prevents oxidation, fading, and environmental damage",
                    "Eliminates allergens, bacteria, and bad odors",
                    "Enjoy driving a spotless, showroom-fresh car"
                  ][i]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glowing elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-5 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Restore Your Car's Showroom Shine
            </motion.h3>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Premium detailing services with warranty coverage
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                href="tel:+919637925555" 
                className="relative group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-9 rounded-xl transition-all shadow-xl hover:shadow-red-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                   Call: +91 9637925555
                </span>
              </motion.a>
              
              <motion.a 
                href="mailto:bmmotors55@gmail.com" 
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-xl transition-all hover:border-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✉️ Email Us
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex flex-wrap justify-center items-center gap-8 text-blue-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>1000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-green-400 fill-current" />
                <span>5-Star Rated Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-400" />
                <span>Warranty on All Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}