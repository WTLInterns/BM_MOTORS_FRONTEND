"use client";

import { motion } from "framer-motion";
import { Battery, CheckCircle, Zap, Wrench, AlertTriangle, Lightbulb, Calendar } from "lucide-react";
import Image from "next/image";

export default function BatteriesPage() {
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
                <Battery className="inline w-5 h-5 mr-2" />
                Premium Batteries
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                variants={itemVariants}
              >
                Car Battery Services
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Reliable battery replacement and maintenance with genuine brands. Free battery health check and doorstep installation available.
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
                  href="#services" 
                  className="relative group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-xl transition-all hover:border-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Services
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
                src="/images/Car Battery Services.webp" 
                alt="Car Battery Service" 
                fill 
                className="object-cover" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Battery Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete battery care solutions</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Zap className="w-8 h-8 text-blue-600" />, 
              title: "Free Battery Check", 
              items: ["Voltage testing", "Load capacity check", "Terminal inspection", "Health report"] 
            },
            { 
              icon: <Battery className="w-8 h-8 text-blue-600" />, 
              title: "Battery Replacement", 
              items: ["Genuine batteries only", "Doorstep installation", "Old battery buyback", "Warranty support"] 
            },
            { 
              icon: <Wrench className="w-8 h-8 text-blue-600" />, 
              title: "Maintenance", 
              items: ["Terminal cleaning", "Corrosion treatment", "Water top-up (if applicable)", "Secure mounting"] 
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
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Signs You Need a New Battery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't get stranded - watch for these warning signs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <AlertTriangle className="w-8 h-8 text-blue-600" />, title: "Slow Engine Crank", desc: "Engine takes longer to start than usual" },
              { icon: <Lightbulb className="w-8 h-8 text-blue-600" />, title: "Dim Lights", desc: "Headlights or cabin lights appear weak" },
              { icon: <AlertTriangle className="w-8 h-8 text-blue-600" />, title: "Warning Light", desc: "Battery icon appears on dashboard" },
              { icon: <Calendar className="w-8 h-8 text-blue-600" />, title: "Age Over 3 Years", desc: "Most batteries need replacement after 3-4 years" }
            ].map((sign, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-5xl mb-3">{sign.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{sign.title}</h4>
                <p className="text-sm text-gray-600">{sign.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
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
              Need a Battery Replacement?
            </motion.h3>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Free battery check & doorstep installation
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
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>5-Star Rated Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Warranty on All Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}