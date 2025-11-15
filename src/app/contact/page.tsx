// "use client";

// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
//           <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
//         </div>
        
//         {/* Pune cityscape pattern */}
//         <div className="absolute inset-0 z-0 opacity-10">
//           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
//           <div className="absolute bottom-10 left-10 w-16 h-24 bg-white rounded-t-lg"></div>
//           <div className="absolute bottom-10 left-32 w-12 h-20 bg-white rounded-t-lg"></div>
//           <div className="absolute bottom-10 left-52 w-20 h-32 bg-white rounded-t-lg"></div>
//           <div className="absolute bottom-10 right-40 w-14 h-18 bg-white rounded-t-lg"></div>
//           <div className="absolute bottom-10 right-20 w-18 h-28 bg-white rounded-t-lg"></div>
//           <div className="absolute bottom-10 right-60 w-10 h-16 bg-white rounded-t-lg"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 py-32 relative z-10">
//           <div className="text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-block"
//             >
//               <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
//                 Contact BM Motors
//               </h1>
//               <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
//             </motion.div>
            
//             <motion.p 
//               className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Get in touch with Pune's trusted car service experts
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="max-w-7xl mx-auto px-4 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Find Us in Pune</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">Visit our service center for premium car care solutions</p>
//         </motion.div>
        
//         <motion.div 
//           className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-500/20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Gradient border effect */}
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-indigo-500/30 opacity-50 -z-10"></div>
//           <iframe
//             title="Pune Map"
//             width="100%"
//             height="450"
//             style={{ border: 0 }}
//             loading="lazy"
//             allowFullScreen
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242142.7090226114!2d73.73353350781247!3d18.520432899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7185d1e43f%3A0x828d6198bd86e455!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
//           />
//         </motion.div>
//       </section>

//       {/* Contact Info & Services Grid */}
//       <section className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Contact Information */}
//           <motion.div 
//             className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
//             <div className="space-y-6">
//               <div>
//                 <div className="text-sm font-medium text-gray-500 mb-2">Phone Numbers</div>
//                 <div className="space-y-3">
//                   <motion.a 
//                     href="tel:+919637925555" 
//                     className="flex items-center gap-4 text-gray-900 hover:text-blue-600 font-medium transition-colors group"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
//                       <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
//                     </div>
//                     <span className="text-lg">+91 9637925555</span>
//                   </motion.a>
//                   <motion.a 
//                     href="tel:+919763875767" 
//                     className="flex items-center gap-4 text-gray-900 hover:text-blue-600 font-medium transition-colors group"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
//                       <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
//                     </div>
//                     <span className="text-lg">+91 9763875767</span>
//                   </motion.a>
//                 </div>
//               </div>

//               <div>
//                 <div className="text-sm font-medium text-gray-500 mb-2">Email Address</div>
//                 <motion.a 
//                   href="mailto:bmmotors55@gmail.com" 
//                   className="flex items-center gap-4 text-gray-900 hover:text-blue-600 font-medium transition-colors group"
//                   whileHover={{ x: 5 }}
//                 >
//                   <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
//                     <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
//                   </div>
//                   <span className="text-lg">bmmotors55@gmail.com</span>
//                 </motion.a>
//               </div>

//               <div>
//                 <div className="text-sm font-medium text-gray-500 mb-2">Location</div>
//                 <div className="flex items-start gap-4 text-gray-700">
//                   <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
//                     <MapPin className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div className="pt-1">
//                     <span className="font-medium text-gray-900 text-lg">Pune Nagar Road, Khandave Nagar, Wagholi,Opposite - Tata Motors Showroom</span>
//                     <p className="text-gray-600 mt-1">Serving all major areas</p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="text-sm font-medium text-gray-500 mb-2">Working Hours</div>
//                 <div className="flex items-start gap-4 text-gray-700">
//                   <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
//                     <Clock className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div className="pt-1">
//                     <div className="font-medium text-gray-900 text-lg">Monday - Saturday: 9:00 AM - 7:00 PM</div>
//                     <div className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Services List */}
//           <motion.div 
//             className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 shadow-xl"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Services</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[
//                 "Periodic Car Services",
//                 "AC Service & Repair",
//                 "Denting & Painting",
//                 "Car Detailing & Spa",
//                 "Battery Replacement",
//                 "Tyre & Wheel Services",
//                 "Windshield Replacement",
//                 "Insurance Claims",
//                 "Brake Services",
//                 "Engine Repairs",
//                 "Suspension Work",
//                 "Electrical Repairs"
//               ].map((service, idx) => (
//                 <motion.div 
//                   key={idx} 
//                   className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-gray-200"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: idx * 0.05 }}
//                   whileHover={{ y: -3 }}
//                 >
//                   <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <CheckCircle className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="font-medium text-gray-800">{service}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Floating Contact Card / CTA Section */}
//       <section className="py-16">
//         <div className="max-w-4xl mx-auto px-4">
//           <motion.div 
//             className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-2xl"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             {/* Glowing elements */}
//             <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
//             <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
            
//             <div className="relative z-10">
//               <motion.h2 
//                 className="text-3xl md:text-4xl font-bold mb-5 text-white"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Book a Service Now
//               </motion.h2>
              
//               <motion.p 
//                 className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//               >
//                 Experience premium car care services from Pune's trusted experts
//               </motion.p>
              
//               <motion.div 
//                 className="flex gap-4 justify-center flex-wrap"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <motion.a 
//                   href="tel:+919637925555" 
//                   className="relative group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-9 rounded-xl transition-all shadow-xl hover:shadow-red-500/40"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     <Phone className="w-5 h-5" />
//                     Call Now
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </motion.a>
                
//                 <motion.a 
//                   href="mailto:bmmotors55@gmail.com"
//                   className="relative group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all hover:border-white/50"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     <Mail className="w-5 h-5" />
//                     Email Us
//                   </span>
//                 </motion.a>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-[60vh] flex items-center">
        {/* Background Footer Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/footerimage.png"
            alt="BM Motors Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Contact BM Motors
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
            </motion.div>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch with Pune's trusted car service experts
            </motion.p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Find Us in Pune</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Visit our service center for premium car care solutions</p>
        </motion.div>
        
        <motion.div 
          className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-indigo-500/30 opacity-50 -z-10"></div>
          <iframe
            title="Pune Map"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242142.7090226114!2d73.73353350781247!3d18.520432899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7185d1e43f%3A0x828d6198bd86e455!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          />
        </motion.div>
      </section>

      {/* Contact Info & Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Phone Numbers</div>
                <div className="space-y-3">
                  <motion.a 
                    href="tel:+919637925555" 
                    className="flex items-center gap-4 text-gray-900 hover:text-blue-600 font-medium transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                      <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <span className="text-lg">+91 9637925555</span>
                  </motion.a>
                  <motion.a 
                    href="tel:+919763875767" 
                    className="flex items-center gap-4 text-gray-900 hover:text-blue-600 font-medium transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                      <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <span className="text-lg">+91 9763875767</span>
                  </motion.a>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Email Address</div>
                <motion.a 
                  href="mailto:bmmotors55@gmail.com" 
                  className="flex items-center gap-4 text-gray-900 hover:text-blue-600 font-medium transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                    <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <span className="text-lg">bmmotors55@gmail.com</span>
                </motion.a>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Location</div>
                <div className="flex items-start gap-4 text-gray-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="pt-1">
                    <span className="font-medium text-gray-900 text-lg">Pune Nagar Road, Khandave Nagar, Wagholi,Opposite - Tata Motors Showroom</span>
                    <p className="text-gray-600 mt-1">Serving all major areas</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Working Hours</div>
                <div className="flex items-start gap-4 text-gray-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="pt-1">
                    <div className="font-medium text-gray-900 text-lg">Monday - Saturday: 9:00 AM - 7:00 PM</div>
                    <div className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services List */}
          <motion.div 
            className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Periodic Car Services",
                "AC Service & Repair",
                "Denting & Painting",
                "Car Detailing & Spa",
                "Battery Replacement",
                "Tyre & Wheel Services",
                "Windshield Replacement",
                "Insurance Claims",
                "Brake Services",
                "Engine Repairs",
                "Suspension Work",
                "Electrical Repairs"
              ].map((service, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Card / CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-2xl"
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
                Book a Service Now
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Experience premium car care services from Pune's trusted experts
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
                    <Phone className="w-5 h-5" />
                    Call Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>
                
                <motion.a 
                  href="mailto:bmmotors55@gmail.com"
                  className="relative group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all hover:border-white/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}