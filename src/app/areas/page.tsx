"use client";

import { motion } from "framer-motion";
import { Search, Car, MapPin, Clock, Star, Phone, Mail } from "lucide-react";

export default function AreasPage() {
  const areas = [
    "Aundh", "Baner", "Bavdhan", "Dhole Patil Road", "Erandwane", "FC Road", 
    "Hadapsar", "Hinjewadi", "Kalyani Nagar", "Karve Nagar", "Katraj", "Kharadi",
    "Kondhwa", "Koregaon Park", "Kothrud", "Magarpatta City", "Model Colony", 
    "NIBM Road", "Parvati", "Pashan", "Paud Road", "Pimpri Chinchwad", "Rasta Peth",
    "Sadashiv Peth", "Shivaji Nagar", "Sus", "Swargate", "Viman Nagar", "Wakad", 
    "Wanowrie", "Yerawada"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Floating elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/10"
            >
              Service Coverage
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Service Areas in Pune
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Free pickup & drop service across the city with our professional technicians
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a 
                href="tel:+919637925555" 
                className="relative group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-9 rounded-xl transition-all shadow-xl hover:shadow-red-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              
              <motion.a 
                href="/contact" 
                className="relative group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-xl transition-all hover:border-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Areas We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional car service with free pickup & drop across Pune</p>
        </motion.div>
        
        {/* Search Bar */}
        <motion.div 
          className="mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Find your area..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </motion.div>
        
        {/* Areas Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {areas.map((area, index) => (
            <motion.a
              key={area}
              href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="font-medium text-gray-800 text-sm group-hover:text-blue-600 transition-colors">{area}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Info Sections */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Pickup & Drop Card */}
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Car className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Free Pickup & Drop</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              We understand that visiting a service center can be time-consuming. That's why we offer complimentary pickup and drop service across all our service areas in Pune.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                { icon: "🚗", text: "Convenient doorstep pickup" },
                { icon: "🛡️", text: "Safe delivery back to your location" },
                { icon: "📱", text: "Real-time service updates" },
                { icon: "💰", text: "No extra charges for pickup/drop" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href="tel:+919637925555"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Schedule Pickup
            </motion.a>
          </motion.div>
          
          {/* Can't Find Your Area Card */}
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-indigo-50 border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Can't Find Your Area?</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Even if your area isn't listed above, we may still be able to serve you. We're constantly expanding our service coverage across Pune and surrounding areas.
            </p>
            
            <p className="text-gray-700 mb-8">
              Contact us to check if we can provide pickup and drop service in your locality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="tel:+919637925555"
                className="relative group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-9 rounded-xl transition-all shadow-xl hover:shadow-red-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
              
              <motion.a 
                href="mailto:bmmotors55@gmail.com"
                className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-5 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Book Your Service Today
            </motion.h2>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Professional car care delivered to your doorstep across Pune
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
                  <Phone className="w-5 h-5" />
                  Call: +91 9637925555
                </span>
              </motion.a>
              
              <motion.a 
                href="/contact" 
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-xl transition-all hover:border-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </span>
              </motion.a>
              
              <motion.a 
                href="/services" 
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-4 px-9 rounded-xl transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Book Online
                </span>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>5000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-cyan-400" />
                <span>Free Pickup & Drop</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}