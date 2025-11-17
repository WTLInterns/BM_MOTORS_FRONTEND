
'use client';

import Image from "next/image";
import { CheckCircle, Timer, DollarSign, Car, Wrench, Smartphone, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Reduced Height with Compact Form */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Image */}
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
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left side - left empty to show car visual */}
            <div className="hidden lg:block"></div>

            {/* Right side - Compact Quote Form Card */}
            <div className="lg:ml-auto w-full max-w-md mt-20">
              <div className="rounded-xl shadow-xl p-6 bg-white/10 backdrop-blur-md ring-1 ring-white/10">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Experience The Best Car Services
                </h1>
                <p className="text-base text-white/80 mb-6">
                  Get instant quotes for your car service
                </p>

                <form className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="ENTER CITY NAME"
                      className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/20 text-white placeholder-white/80 border border-white/30 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="ENTER CAR NAME"
                      className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/20 text-white placeholder-white/80 border border-white/30 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="ENTER MOBILE NUMBER"
                      className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/20 text-white placeholder-white/80 border border-white/30 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 text-base"
                  >
                    CHECK PRICES FOR FREE
                  </button>
                </form>

                {/* Compact Stats */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex text-green-400 text-xl">
                        <span>★</span>
                        <span className="font-bold ml-1 text-white">4.0</span>
                        <span className="text-white/70">/5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">2 Million+</div>
                      <div className="text-xs text-white/80">Happy Customers</div>
                    </div>
                  </div>
                  <p className="text-xs text-white/70 mt-1">Based on 150000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Working Carousel */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            Our Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Professional Car Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience top-quality car maintenance with certified technicians, genuine parts, and
            <span className="font-semibold text-blue-600"> complimentary pickup & drop</span> across Pune
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10 bg-white hover:bg-blue-50 rounded-full p-4 shadow-2xl border border-blue-100 transition-all duration-300 hover:scale-110 hover:shadow-blue-200/50"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10 bg-white hover:bg-blue-50 rounded-full p-4 shadow-2xl border border-blue-100 transition-all duration-300 hover:scale-110 hover:shadow-blue-200/50"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Services Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth px-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

            {[
              {
                name: "Periodic Services",
                img: "/images/periodic1.jpg",
                href: "/services/scheduled",
                description: "Complete maintenance package including oil change, filter replacement and comprehensive checkup",
                features: ["Free Pickup & Drop", "90 Min Service", "6 Months Warranty"],
                price: "₹2,499",
                popular: true
              },
              {
                name: "AC Service & Repair",
                img: "/images/periodic2.jpg",
                href: "/services/ac",
                description: "Professional AC system cleaning, gas refill, and cooling system repair",
                features: ["Free Diagnosis", "Original Gas", "1 Year Warranty"],
                price: "₹1,799"
              },
              {
                name: "Denting & Painting",
                img: "/images/periodic3.jpg",
                href: "/services/denting-painting",
                description: "Expert dent removal and painting with guaranteed color matching",
                features: ["Color Match", "Rust Proof", "2 Years Warranty"],
                price: "₹1,999"
              },
              {
                name: "Car Spa & Cleaning",
                img: "/images/periodic4.jpg",
                href: "/services/detailing",
                description: "Premium interior and exterior cleaning with polishing and waxing",
                features: ["Interior Vacuum", "Exterior Polish", "Engine Cleaning"],
                price: "₹1,299",
                popular: true
              },
              {
                name: "Battery Services",
                img: "/images/periodic5.jpg",
                href: "/services/batteries",
                description: "Genuine battery replacement with installation and disposal",
                features: ["Free Installation", "18 Months Warranty", "Battery Pickup"],
                price: "₹3,999"
              },
              {
                name: "Tyres & Wheel Care",
                img: "/images/periodic6.jpg",
                href: "/services/tyres",
                description: "Tyre replacement, wheel alignment and balancing services",
                features: ["Free Alignment", "Wheel Balancing", "Tyre Rotation"],
                price: "₹499"
              },
              {
                name: "Windshields & Glass",
                img: "/images/periodic7.jpg",
                href: "/services/windshields",
                description: "Professional windshield repair and glass replacement",
                features: ["OEM Quality", "Quick Service", "Waterproof"],
                price: "₹2,999"
              },
              {
                name: "Insurance Claims",
                img: "/images/periodic8.jpg",
                href: "/services/insurance",
                description: "Hassle-free insurance claim processing and assistance",
                features: ["Cashless Service", "Quick Processing", "Expert Help"],
                price: "Free"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group border border-gray-100 snap-start hover:scale-105"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ Popular
                  </div>
                )}

                {/* Image Section - Reduced Height */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Price Tag */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-xl text-sm font-bold shadow-lg border border-blue-400/30">
                    From {service.price}
                  </div>

                  {/* Service Name */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white drop-shadow-2xl mb-1">{service.name}</h3>
                    <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
                  </div>
                </div>

                {/* Content Section - Compact */}
                <div className="p-5">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features List - Compact */}
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2 text-xs">
                        <div className="flex-shrink-0 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-2.5 h-2.5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons - Compact */}
                  <div className="flex gap-2">
                    <a
                      href={service.href}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-center font-semibold py-3 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-sm"
                    >
                      Book Now
                    </a>
                    <button className="px-3 py-3 border border-gray-300 hover:border-blue-300 hover:bg-blue-50 rounded-lg transition-all duration-300 group-hover:scale-105">
                      <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold mb-4">
              <span className="text-red-600">How BM Motors</span>{' '}
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for hassle-free car service experience
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Left Side - Two Large Featured Cards Side by Side */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {[
                {
                  step: "1",
                  name: "Select Service",
                  img: "/images/service8.jpg",
                  desc: "Choose from our wide range of services including periodic maintenance, repairs, or specialized car care packages",
                  features: ["Online Booking", "Service Selection", "Time Slot"]
                },
                {
                  step: "2",
                  name: "Free Pickup",
                  img: "/images/service9.jpg",
                  desc: "We pick up your car from your preferred location anywhere in Pune at your convenience",
                  features: ["Doorstep Service", "Flexible Timing", "Safe Handling"]
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={step.img}
                      alt={step.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Step Number */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-2xl border border-blue-400/30">
                      {step.step}
                    </div>

                    {/* Step Title */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-2xl">{step.name}</h3>
                      <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature, featureIdx) => (
                        <span
                          key={featureIdx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Four Small Cards in 2x2 Grid */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    step: "3",
                    name: "Expert Service",
                    img: "/images/service1.jpg",
                    desc: "Skilled mechanics with genuine parts",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    step: "4",
                    name: "Doorstep Delivery",
                    img: "/images/service2.jpg",
                    desc: "Car delivered back fully serviced",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    step: "5",
                    name: "Quality Check",
                    img: "/images/service3.jpg",
                    desc: "Comprehensive quality inspection",
                    color: "from-orange-500 to-orange-600"
                  },
                  {
                    step: "6",
                    name: "Happy Customer",
                    img: "/images/service4.jpg",
                    desc: "Complete satisfaction guarantee",
                    color: "from-pink-500 to-pink-600"
                  }
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
                  >
                    {/* Image - Increased Height */}
                    <div className="relative h-20 mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={step.img}
                        alt={step.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>

                      {/* Step Number */}
                      {/* <div className={`absolute top-3 left-3 w-9 h-9 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {step.step}
                      </div> */}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-lg">{step.icon}</span>
                        <h4 className="font-bold text-gray-900 text-base">{step.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Line - Full Width & Thinner */}
          <div className="mt-12">
            <div className="w-full h-[1px] rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-red-600 float-left"></div>
              <div className="w-1/2 h-full bg-black float-left"></div>
            </div>
          </div>

        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h4 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Why Choose BM Motors?
          </h4>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pune's most trusted car service partner with 10+ years of excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">✓</div>,
              title: "100% Genuine Parts",
              desc: "We use only authentic OEM spare parts with comprehensive warranty coverage",
              stats: "2 Years Warranty",
              badge: "⭐ Premium"
            },
            {
              icon: <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">⏱</div>,
              title: "Quick Service",
              desc: "Most services completed within 90 minutes with our efficient workflow system",
              stats: "90 Min Average",
              badge: "⚡ Fast"
            },
            {
              icon: <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white">₹</div>,
              title: "Best Price Guarantee",
              desc: "Up to 40% more affordable than authorized service centers without compromising quality",
              stats: "40% Cheaper",
              badge: "💰 Save"
            },
            {
              icon: <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">🚗</div>,
              title: "Free Pickup & Drop",
              desc: "Complimentary doorstep service across all major areas in Pune for your convenience",
              stats: "Free Service",
              badge: "🚗 Convenient"
            },
            {
              icon: <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">🔧</div>,
              title: "Expert Mechanics",
              desc: "Certified technicians with 10+ years of experience and specialized training",
              stats: "10+ Years Exp",
              badge: "🔧 Expert"
            },
            {
              icon: <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">📱</div>,
              title: "Live Updates",
              desc: "Real-time service progress updates via SMS, WhatsApp, and phone calls",
              stats: "Live Tracking",
              badge: "📱 Live"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400 group hover:-translate-y-2 relative overflow-visible"
            >
              {/* Top Right Badge */}
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-20 border-2 border-white">
                {item.badge}
              </div>

              {/* Content */}
              <div className="mt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  {item.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section with Navy Blue Background */}
        <div className="mt-12 bg-blue-200 py-16 rounded-2xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-0 mb-2">
              <h3 className="text-4xl font-bold text-black ml-20">
                Our Clients
              </h3>
              <img
                src="/images/heartcar.png"
                alt="Heart Car"
                className="h-30 w-65 -mt-10 ml-1"
              />
            </div>
            {/* Gradient Underline - Blue and Black Mixed */}
            <div className="w-50 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-400 to-gray-900 rounded-full"></div>
            <p className="text-lg text-black-300 max-w-2xl mx-auto mt-4">
              We're proud to serve customers from these reputable companies across Pune
            </p>
          </div>

          {/* Logo Grid - Larger Logos without Hover Effect */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center px-8">
            {[...Array(14)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-lg border border-gray-200 w-full max-w-[160px]"
              >
                <div className="w-full h-10 flex items-center justify-center">
                  <img
                    src={`/images/logo${idx + 1}.png`}
                    alt={`Client Logo ${idx + 1}`}
                    className="max-h-16 max-w-full object-contain opacity-100"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/120x60/3B82F6/FFFFFF?text=Logo+${idx + 1}`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="max-w-7xl mx-auto px-2 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Areas We Serve in Pune
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Providing premium car services across all major locations in Pune
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {[
            "Kothrud",
            "Viman Nagar",
            "Hinjewadi",
            "Kalyani Nagar",
            "Baner",
            "Wakad",
            "Hadapsar",
            "Pimple Saudagar",
            "Camp",
            "Magarpatta"
          ].map((area) => (
            <a
              key={area}
              href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-white rounded-2xl p-4 border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  {area}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Areas Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Service Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">30 Min</div>
            <div className="text-gray-600 font-medium">Average Response</div>
          </div>
        </div>

        {/* Horizontal Full Width Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white py-5">
        <div className="max-w-7xl mx-auto px-2">
          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Insurance Partners
            </h2>
            {/* Underline */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-black mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Cashless insurance claims & hassle-free renewals with our trusted partners
            </p>
          </div>

          {/* Insurance Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-2 ">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cashless Claims</h3>
              <p className="text-gray-600 text-sm">
                Direct settlement with insurance companies. Zero paperwork, instant approval for all repairs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Policy Renewals</h3>
              <p className="text-gray-600 text-sm">
                Easy insurance renewals with best premium rates. Compare & choose from multiple providers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Dedicated insurance support team. Assistance with claims, documentation & renewals anytime.
              </p>
            </div>
          </div>

          {/* Insurance Companies Marquee */}
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-lg border border-gray-100 p-4">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Marquee Tag - Right to Left */}
            <marquee behavior="scroll" direction="left" scrollamount="8" className="py-3">
              {[
                "toyota",
                "honda",
                "ford",
                "hundayi",
                "maruti",
                "tata",
                "mahindra",
                "volkswagen",
                "renault",
                "skoda",
                "suzuki"
              ].map((company, idx) => (
                <div
                  key={idx}
                  className="inline-flex align-middle mx-5 w-40 h-28 bg-blue-50 rounded-2xl items-center justify-center p-4 border-2 border-blue-100 shadow-md"
                  style={{ verticalAlign: 'middle' }}
                >
                  <img
                    src={`/images/${company}.png`}
                    alt={`${company} insurance`}
                    className="h-20 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </marquee>
          </div>
        </div>
      </section>


      {/* <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">What Our Customers Say</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">Trusted by thousands of car owners in Pune</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Shubham Jagtap", area: "Katraj", img: "/images/photo.jpg", text: "Excellent service! Got my car serviced in Andheri. Pickup and drop on time. Price was half of what the dealership quoted. Highly recommended!", rating: 4 },
              { name: "Afreen Ansari", area: "Baner", img: "/images/Afreen.webp", text: "AC service was done perfectly. Cooling is back to normal. The mechanics are professional and the process was very smooth.", rating: 5 },
              { name: "Saurabh Shinde", area: "Wakad", img: "/images/saurabh shinde.jpeg", text: "Amazing dent repair and paint job. The finish is perfect and matches exactly. Great value for money with warranty included!", rating: 4 },
            ].map((t, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-orange-500 object-cover" loading="lazy" />
                  <div>
                    <div className="font-bold text-lg">{t.name}</div>
                    <div className="text-sm text-gray-300">{t.area}, Pune</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                  ))}
                </div>
                <p className="text-gray-200 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
}