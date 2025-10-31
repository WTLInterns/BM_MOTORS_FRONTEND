"use client";

import { motion } from "framer-motion";
import { Star, Quote, Car, Wrench, Shield } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    {name: "Sudhir Adhav", area: "Aundh", rating: 4, text: "Booked my service in Aundh and honestly it was smoother than I thought. They picked up the car right on time, sent me updates during the day, and dropped it back cleaner than I left it. Price was almost half of what the dealership quoted, so I'm happy with this one.", service: "Scheduled Service", img: "/images/photo1.jpeg"},
    {name: "Abhi Morde", area: "Hinjewadi", rating: 4, text: "Got my AC serviced in Hinjewadi. Cooling is back to proper chill now which was badly needed in this weather. The pickup and drop thing is a lifesaver, otherwise I would've wasted 3-4 hours in traffic.", service: "AC Service", img: "/images/photo2.jpeg"},
    {name: "Yatish", area: "Koregaon Park", rating: 4, text: "My car had a dent in Koregaon Park parking and I gave BM Motors a try. The repair was neat, paint matched perfectly, and they even gave warranty which I didn't expect. No one can tell there was a dent before, very impressed with the finish.", service: "Denting & Painting", img: "/images/photo3.jpeg"},
    {name: "Ritik Bagal", area: "Viman Nagar", rating: 4, text: "Battery died in Viman Nagar one night and BM Motors sorted it fast, like really fast. Mechanic came, checked, replaced with genuine battery and the car started instantly. Service was quick but also professional.", service: "Battery Replacement", img: "/images/photo4.jpeg"},
    {name: "Hardik Thorat", area: "Kothrud", rating: 4, text: "Did regular servicing at their Kothrud workshop. They gave me a proper inspection report, told me what needs fixing now and what can wait which honestly felt honest because most garages just try to push everything at once.", service: "Scheduled Service", img: "/images/photo5.jpeg"},
    {name: "Varun Chaudhary", area: "Baner", rating: 4, text: "Booked a car spa after weeks of driving through rain and dust, and man the difference is crazy. The interiors smell fresh, stains on the seats gone, and the exterior polish brought back the shine. My car actually looks new again.", service: "Car Detailing", img: "/images/photo6.jpeg"},
  ];

  const stats = [
    { icon: Star, value: "4.0/5", label: "Average Rating" },
    { icon: Car, value: "5000+", label: "Cars Serviced" },
    { icon: Shield, value: "100%", label: "Genuine Parts" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Car outline pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-12 border-2 border-white rounded-t-full"></div>
          <div className="absolute top-10 left-20 w-16 h-8 border-2 border-white rounded-b-lg"></div>
          <div className="absolute top-14 left-12 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-14 left-24 w-4 h-4 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/10"
            >
              Customer Stories
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Customer Reviews
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What our customers in Pune say about BM Motors
            </motion.p>
            
            {/* Floating quote icon */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10"
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Customer Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real experiences from car owners across Pune</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Floating quote icon */}
              <div className="absolute top-4 right-4 text-blue-200 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={r.img} 
                  alt={r.name} 
                  className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover"
                />
                <div className="flex-1">
                  <div className="font-bold text-lg text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-600">{r.area}, Pune</div>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-semibold">
                  {r.service}
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Star 
                      className={`w-5 h-5 ${i < r.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-700 italic relative">
                "{r.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Share Your Experience (CTA Section) */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden"
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
                Share Your Experience
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We'd love to hear about your journey with BM Motors
              </motion.p>
              
              <motion.div 
                className="flex gap-4 justify-center flex-wrap"
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
                     Call Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>
                
                <motion.a 
                  href="mailto:bmmotors55@gmail.com"
                  className="relative group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all hover:border-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    ✉️ Email Us
                  </span>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Rated 4.0★ on Google</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}