// src/components/HomeHero.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    name: 'General Service',
    description: 'Complete car service with 100% genuine parts',
    image: 'https://images.unsplash.com/photo-1606220838315-056e9b39b3cf',
  },
  {
    id: 2,
    name: 'Denting & Painting',
    description: 'High-quality dent removal and painting',
    image: 'https://images.pexels.com/photos/4489736/pexels-photo-4489736.jpeg',
  },
  {
    id: 3,
    name: 'Battery Replacement',
    description: 'Free installation & old battery pickup',
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a4d5b7a6',
  },
  {
    id: 4,
    name: 'Car Cleaning',
    description: 'Complete interior & exterior cleaning',
    image: 'https://images.unsplash.com/photo-1597007048443-9b4aa0f6e6a8',
  },
];


const HomeHero = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image - Top view of car with tools */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1920&q=80"
            alt="Car Service Top View"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Empty space for the car visual */}
            <div className="hidden lg:block"></div>
            
            {/* Right side - Form Card */}
            <div className="lg:ml-auto w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Experience The Best Car Services In Pune
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Get instant quotes for your car service
                </p>
                
                {/* Quote Form */}
                <form className="space-y-4">
                  <div>
                    <select className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 font-medium">
                      <option>PUNE</option>
                      <option>DELHI</option>
                      <option>BANGALORE</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700">
                      <option>SELECT YOUR CAR</option>
                      <option>Honda City</option>
                      <option>Tata Nexon</option>
                      <option>Hyundai i20</option>
                      <option>Maruti Swift</option>
                      <option>Toyota Fortuner</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="ENTER MOBILE NUMBER" 
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg text-lg"
                  >
                    CHECK PRICES FOR FREE
                  </button>
                </form>
                
                {/* Stats Section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex text-green-600 text-2xl">
                        <span>★</span>
                        <span className="font-bold ml-1">4.0</span>
                        <span className="text-gray-400">/5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">2 Million+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Based on 150000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
                  >
                    Know More 
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Why Choose BM Motors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Genuine Parts</h3>
              <p className="text-gray-600">We use 100% genuine spare parts with warranty</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">90 Min Service</h3>
              <p className="text-gray-600">Standard service completed in just 90 minutes</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Best Price</h3>
              <p className="text-gray-600">30% cheaper than authorized service centers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;