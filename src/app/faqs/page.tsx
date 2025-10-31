"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Car, 
  Wrench, 
  Shield, 
  Phone, 
  Mail, 
  Plus, 
  Minus, 
  Clock, 
  CreditCard, 
  HelpCircle,
  Star
} from "lucide-react";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { 
      category: "Service",
      q: "Do you offer free pickup and drop?", 
      a: "Yes, we offer complimentary pickup and drop service across most areas in Pune for your convenience. Our driver will collect your car from your location and return it after the service is completed." 
    },
    { 
      category: "Service",
      q: "What car brands do you service?", 
      a: "We service all major car brands including Maruti Suzuki, Hyundai, Honda, Toyota, Tata, Mahindra, Ford, Volkswagen, Skoda, and luxury brands like BMW, Mercedes, Audi, and more." 
    },
    { 
      category: "Service",
      q: "Do you use genuine spare parts?", 
      a: "Yes, we use only genuine OEM parts or approved aftermarket parts from trusted brands. All parts come with manufacturer warranty for your peace of mind." 
    },
    { 
      category: "Service",
      q: "How long does a typical service take?", 
      a: "A basic service usually takes 3-4 hours, while comprehensive service may take 6-8 hours. For major repairs or denting & painting, we'll provide you with an estimated timeline based on the scope of work." 
    },
    { 
      category: "Service",
      q: "Do you provide warranty on services?", 
      a: "Yes, we provide warranty on both parts and labor. The warranty period varies depending on the service type - typically 1000 km or 1 month for general services, and up to 1 year for painting and major repairs." 
    },
    { 
      category: "Payments",
      q: "Can I get a free estimate before service?", 
      a: "Absolutely! We provide transparent, itemized estimates before starting any work. You'll know exactly what you're paying for with no hidden charges." 
    },
    { 
      category: "Insurance",
      q: "Do you accept insurance claims?", 
      a: "Yes, we have cashless claim facility with all major insurance companies including HDFC ERGO, ICICI Lombard, Bajaj Allianz, TATA AIG, and many more. We'll handle all the paperwork for you." 
    },
    { 
      category: "Payments",
      q: "What payment methods do you accept?", 
      a: "We accept all major payment methods including cash, credit/debit cards, UPI, net banking, and digital wallets for your convenience." 
    },
    { 
      category: "Assistance",
      q: "Do you offer emergency breakdown assistance?", 
      a: "Yes, we provide emergency roadside assistance for battery jumpstart, tyre change, and towing services. Call us on +91 9637925555 for immediate help." 
    },
    { 
      category: "Service",
      q: "How can I book a service?", 
      a: "You can book a service by calling us at +91 9637925555 / 9763875767 or emailing us at bmmotors55@gmail.com. We'll schedule a convenient time for pickup." 
    },
  ];

  const infoItems = [
    { icon: Shield, text: "Genuine Parts" },
    { icon: Car, text: "Free Pickup & Drop" },
    { icon: Phone, text: "24x7 Assistance" },
    { icon: CreditCard, text: "Cashless Insurance" },
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
          <div className="absolute top-20 left-10 w-24 h-12 border-2 border-white rounded-t-full"></div>
          <div className="absolute top-20 left-20 w-16 h-8 border-2 border-white rounded-b-lg"></div>
          <div className="absolute top-24 left-12 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-24 left-24 w-4 h-4 bg-white rounded-full"></div>
          
          <div className="absolute top-32 right-20 w-24 h-12 border-2 border-white rounded-t-full"></div>
          <div className="absolute top-32 right-30 w-16 h-8 border-2 border-white rounded-b-lg"></div>
          <div className="absolute top-36 right-22 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-36 right-34 w-4 h-4 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/10"
            >
              Frequently Asked Questions
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Frequently Asked Questions
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Everything you need to know about BM Motors and our car care services in Pune
            </motion.p>
            
            {/* Floating FAQ icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-gray-800">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Common Questions</h2>
          <p className="text-xl text-gray-600">Find answers to the most frequently asked questions about our services</p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                      {faq.category}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{faq.q}</h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-blue-600" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pl-20 pr-16">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
                Still Have Questions?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Our Pune team is ready to assist you with any car service query
              </motion.p>
              
              <motion.div 
                className="flex gap-4 justify-center flex-wrap mb-8"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
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
                className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {/* <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-cyan-400" />
                  <span>10,000+ Cars Serviced in Pune</span>
                </div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}