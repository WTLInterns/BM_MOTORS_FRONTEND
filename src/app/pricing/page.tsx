"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Snowflake, Battery, Sparkles, Circle, Paintbrush, CheckCircle, Star, Settings, Shield } from "lucide-react";
import React from "react";

interface PriceItem {
  service: string;
  price: string;
}

interface CategoryPrices {
  hatchback: PriceItem[];
  sedan: PriceItem[];
  suv: PriceItem[];
}

interface PricingCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  popular: boolean;
  prices: CategoryPrices;
}

export default function PricingPage() {
  const [carType, setCarType] = useState<"hatchback" | "sedan" | "suv">("hatchback");
  
  const pricingData: PricingCategory[] = [
    {
      id: "scheduled",
      title: "Scheduled Service",
      icon: <Settings className="w-6 h-6" />,
      popular: false,
      prices: {
        hatchback: [
          { service: "Basic Service", price: "₹2,499+" },
          { service: "Standard Service", price: "₹4,999+" },
          { service: "Comprehensive", price: "₹7,999+" }
        ],
        sedan: [
          { service: "Basic Service", price: "₹2,799+" },
          { service: "Standard Service", price: "₹5,499+" },
          { service: "Comprehensive", price: "₹8,499+" }
        ],
        suv: [
          { service: "Basic Service", price: "₹3,299+" },
          { service: "Standard Service", price: "₹5,999+" },
          { service: "Comprehensive", price: "₹9,999+" }
        ]
      }
    },
    {
      id: "ac",
      title: "AC Services",
      icon: <Snowflake className="w-6 h-6" />,
      popular: false,
      prices: {
        hatchback: [
          { service: "AC Gas Refill", price: "₹2,499+" },
          { service: "AC Service", price: "₹1,999+" },
          { service: "Compressor Repair", price: "₹8,999+" }
        ],
        sedan: [
          { service: "AC Gas Refill", price: "₹2,799+" },
          { service: "AC Service", price: "₹2,299+" },
          { service: "Compressor Repair", price: "₹9,499+" }
        ],
        suv: [
          { service: "AC Gas Refill", price: "₹3,299+" },
          { service: "AC Service", price: "₹2,799+" },
          { service: "Compressor Repair", price: "₹10,999+" }
        ]
      }
    },
    {
      id: "battery",
      title: "Batteries",
      icon: <Battery className="w-6 h-6" />,
      popular: false,
      prices: {
        hatchback: [
          { service: "Battery Check", price: "Free" },
          { service: "Battery Replacement", price: "₹3,999+" },
          { service: "Premium Battery", price: "₹6,999+" }
        ],
        sedan: [
          { service: "Battery Check", price: "Free" },
          { service: "Battery Replacement", price: "₹4,499+" },
          { service: "Premium Battery", price: "₹7,499+" }
        ],
        suv: [
          { service: "Battery Check", price: "Free" },
          { service: "Battery Replacement", price: "₹4,999+" },
          { service: "Premium Battery", price: "₹7,999+" }
        ]
      }
    },
    {
      id: "detailing",
      title: "Car Detailing",
      icon: <Sparkles className="w-6 h-6" />,
      popular: false,
      prices: {
        hatchback: [
          { service: "Basic Spa", price: "₹1,499+" },
          { service: "Premium Spa", price: "₹3,999+" },
          { service: "Ceramic Coating", price: "₹12,999+" }
        ],
        sedan: [
          { service: "Basic Spa", price: "₹1,799+" },
          { service: "Premium Spa", price: "₹4,499+" },
          { service: "Ceramic Coating", price: "₹13,999+" }
        ],
        suv: [
          { service: "Basic Spa", price: "₹1,999+" },
          { service: "Premium Spa", price: "₹4,999+" },
          { service: "Ceramic Coating", price: "₹14,999+" }
        ]
      }
    },
    {
      id: "tyres",
      title: "Tyres & Wheels",
      icon: <Circle className="w-6 h-6" />,
      popular: false,
      prices: {
        hatchback: [
          { service: "Wheel Alignment", price: "₹999+" },
          { service: "Wheel Balancing", price: "₹599+" },
          { service: "Tyre Replacement", price: "₹4,999+" }
        ],
        sedan: [
          { service: "Wheel Alignment", price: "₹1,199+" },
          { service: "Wheel Balancing", price: "₹699+" },
          { service: "Tyre Replacement", price: "₹5,499+" }
        ],
        suv: [
          { service: "Wheel Alignment", price: "₹1,399+" },
          { service: "Wheel Balancing", price: "₹799+" },
          { service: "Tyre Replacement", price: "₹5,999+" }
        ]
      }
    },
    {
      id: "denting",
      title: "Denting & Painting",
      icon: <Paintbrush className="w-6 h-6" />,
      popular: true,
      prices: {
        hatchback: [
          { service: "Minor Dent (PDR)", price: "₹1,999+" },
          { service: "Panel Painting", price: "₹4,999+" },
          { service: "Full Body Paint", price: "₹35,999+" }
        ],
        sedan: [
          { service: "Minor Dent (PDR)", price: "₹2,299+" },
          { service: "Panel Painting", price: "₹5,499+" },
          { service: "Full Body Paint", price: "₹37,999+" }
        ],
        suv: [
          { service: "Minor Dent (PDR)", price: "₹2,799+" },
          { service: "Panel Painting", price: "₹5,999+" },
          { service: "Full Body Paint", price: "₹39,999+" }
        ]
      }
    }
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
             Transparent Pricing
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Car Services Price List (Pune)
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transparent pricing with no hidden charges. Contact us for exact quotes based on your car model.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
                href="#pricing" 
                className="relative group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-xl transition-all hover:border-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Pricing
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Car Type Selector */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {(["hatchback", "sedan", "suv"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setCarType(type)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                carType === type
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Pricing Grid Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Service Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Premium automotive services with transparent pricing</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((category, index) => (
            <motion.div
              key={category.id}
              className={`bg-white border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden ${
                category.popular 
                  ? "border-2 border-blue-500 ring-4 ring-blue-500/10" 
                  : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {category.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  category.popular 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white" 
                    : "bg-blue-100 text-blue-600"
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.prices[carType].map((item, itemIndex) => (
                  <motion.div 
                    key={item.service}
                    className="flex justify-between items-center pb-3 border-b border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                  >
                    <span className="text-gray-700 font-medium">{item.service}</span>
                    <span className="font-bold text-blue-600">{item.price}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.a 
                href="tel:+919637925555"
                className="mt-8 w-full block text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Service
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose BM Motors?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Premium automotive services with unmatched quality</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
             { 
      icon: <Wrench className="w-10 h-10 text-blue-600" />, 
      title: "Transparent Pricing", 
      desc: "Clear estimates before work begins with no hidden charges" 
    },
    { 
      icon: <Star className="w-10 h-10 text-green-600" />, 
      title: "Best Value", 
      desc: "Competitive pricing without compromising on quality" 
    },
    { 
      icon: <Shield className="w-10 h-10 text-purple-600" />, 
      title: "Quality Guarantee", 
      desc: "Warranty on parts and service for peace of mind" 
    },
    { 
      icon: <Settings className="w-10 h-10 text-orange-600" />, 
      title: "Expert Technicians", 
      desc: "Certified professionals with years of experience" 
    }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Get a Free Quote
            </motion.h2>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Personalized pricing based on your car make and model
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
                   Call Now
                </span>
              </motion.a>
              
              <motion.a 
                href="mailto:bmmotors55@gmail.com" 
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-xl transition-all hover:border-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✉️ Email Us
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
                <Wrench className="w-5 h-5 text-cyan-400" />
                <span>OEM Parts Only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>1-Year Warranty</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}