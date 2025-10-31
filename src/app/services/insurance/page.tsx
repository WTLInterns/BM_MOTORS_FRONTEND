"use client";

import { motion } from "framer-motion";
import { Shield, FileText, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function InsurancePage() {
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
                🛡️ Insurance Services
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                variants={itemVariants}
              >
                Car Insurance Services
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Complete insurance support including claims, renewals, and policy guidance. Hassle-free cashless claims with all major insurers.
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
                     Call Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>
                
                <motion.a 
                  href="mailto:bmmotors55@gmail.com" 
                  className="relative group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-xl transition-all hover:border-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    ✉️ Mail Us
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
                src="https://images.pexels.com/photos/7661591/pexels-photo-7661591.jpeg?w=800&q=80" 
                alt="Car Insurance" 
                fill 
                className="object-cover p-6" 
                loading="lazy"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Insurance Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete insurance support for your vehicle</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Insurance Claims</h2>
                <p className="text-gray-600">Hassle-free cashless claims processing</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {[
                "Cashless claim processing",
                "Survey appointment coordination",
                "Document preparation",
                "Estimate approval assistance",
                "Direct settlement with insurer",
                "Repair work management",
                "Quality assurance"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Policy Services</h2>
                <p className="text-gray-600">Complete policy management solutions</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {[
                "New policy purchase",
                "Renewal assistance",
                "Policy comparison",
                "Add-on recommendations",
                "NCB protection advice",
                "Transfer & updates",
                "Expert consultation"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Cashless Claim Process */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Cashless Claim Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Accident Report", desc: "Inform insurer within 24 hrs" },
              { step: "2", title: "Bring to BM Motors", desc: "We handle the rest" },
              { step: "3", title: "Survey & Approval", desc: "Surveyor inspection" },
              { step: "4", title: "Repair Work", desc: "Expert restoration" },
              { step: "5", title: "Delivery", desc: "Zero out-of-pocket" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">{item.step}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Insurers */}
        <motion.div
          className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Tie-ups with Major Insurers</h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">We have cashless claim facility with all leading insurance companies</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz", "TATA AIG", 
              "Reliance General", "New India", "Oriental", "United India", 
              "National", "Bharti AXA", "SBI General", "Many More"
            ].map((insurer, i) => (
              <motion.div 
                key={i} 
                className="border rounded-xl p-4 text-center bg-gray-50 hover:bg-white hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {insurer}
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
              Need Insurance Support?
            </motion.h3>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Expert insurance services with cashless claims
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