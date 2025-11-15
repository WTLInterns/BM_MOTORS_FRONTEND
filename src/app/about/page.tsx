// import { Wrench, CheckCircle, DollarSign, Car, Shield, Timer } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About BM Motors</h1>
//               <p className="text-xl text-blue-100">Pune's trusted partner for professional car care and service excellence</p>
//             </div>
//             <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
//               <img src="/images/service9.jpg" alt="BM Motors Team" className="object-cover w-full h-full" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
//             <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               BM Motors is Pune's trusted car service center, providing comprehensive automotive care with expertise, quality, and transparency. We understand that your car is more than just a vehicle—it's your daily companion, and we treat it with the care it deserves.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               With years of experience serving car owners across Pune, we've built our reputation on honest service, skilled technicians, and competitive pricing. From routine maintenance to major repairs, we're equipped to handle all your car care needs.
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
//             <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               To deliver exceptional car service experiences that build lasting relationships with our customers through quality workmanship, transparent pricing, and reliable service.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               We believe in empowering car owners with knowledge and choices, ensuring every service is performed with their consent and understanding.
//             </p>
//           </div>
//         </div>

//         {/* Why Choose Us */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">Why Choose BM Motors?</h2>
//         <p className="text-center text-gray-600 mb-12 text-lg">Your trusted car service partner in Pune</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {[
//             { 
//       icon: <Wrench className="w-10 h-10 text-blue-600" />, 
//       title: "Expert Technicians", 
//       desc: "Certified mechanics with extensive experience across all car brands and models" 
//     },
//     { 
//       icon: <CheckCircle className="w-10 h-10 text-green-600" />, 
//       title: "Quality Parts", 
//       desc: "Only genuine OEM or approved aftermarket parts with manufacturer warranty" 
//     },
//     { 
//       icon: <DollarSign className="w-10 h-10 text-amber-600" />, 
//       title: "Transparent Pricing", 
//       desc: "Clear estimates before work begins with no hidden charges or surprises" 
//     },
//     { 
//       icon: <Car className="w-10 h-10 text-red-600" />, 
//       title: "Free Pickup & Drop", 
//       desc: "Complimentary doorstep service across Pune for your convenience" 
//     },
//     { 
//       icon: <Shield className="w-10 h-10 text-purple-600" />, 
//       title: "Service Warranty", 
//       desc: "Comprehensive warranty on parts and labor for complete peace of mind" 
//     },
//     { 
//       icon: <Timer className="w-10 h-10 text-orange-600" />, 
//       title: "Quick Turnaround", 
//       desc: "Efficient service without compromising quality to get you back on the road" 
//     }
//           ].map((item, i) => (
//             <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
//               <div className="text-5xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//           {[
//             {number: "10+", label: "Years Experience"},
//             {number: "5000+", label: "Happy Customers"},
//             {number: "100%", label: "Quality Guaranteed"}
//           ].map((stat, i) => (
//             <div key={i} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-lg">
//               <div className="text-5xl font-bold mb-2">{stat.number}</div>
//               <div className="text-blue-100">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experience the BM Motors Difference</h2>
//             <p className="text-xl text-blue-100 mb-8">Visit us today and discover why thousands of car owners trust BM Motors. Quality service, honest pricing, customer satisfaction guaranteed.</p>
//             <div className="flex gap-4 justify-center flex-wrap">
//               <a href="tel:+919637925555" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-xl"> Call Now</a>
//               <a href="/contact" className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-lg transition-all">Contact Us</a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Wrench, CheckCircle, DollarSign, Car, Shield, Timer, MapPin, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Professional Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BM Motors</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pune's trusted automotive service center specializing in comprehensive car maintenance and repair services
            </p>
          </div>
        </div>
      </section>

      {/* About & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BM Motors is Pune's trusted car service center, providing comprehensive automotive care with expertise, quality, and transparency. We understand that your car is more than just a vehicle—it's your daily companion, and we treat it with the care it deserves.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With years of experience serving car owners across Pune, we've built our reputation on honest service, skilled technicians, and competitive pricing. From routine maintenance to major repairs, we're equipped to handle all your car care needs.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To deliver exceptional car service experiences that build lasting relationships with our customers through quality workmanship, transparent pricing, and reliable service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in empowering car owners with knowledge and choices, ensuring every service is performed with their consent and understanding.
            </p>
          </div>
        </div>

        {/* Core Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600">Professional automotive care for all makes and models</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { 
              title: "Regular Maintenance", 
              services: ["Oil Changes", "Brake Service", "Filter Replacement", "Fluid Checks"]
            },
            { 
              title: "Engine Services", 
              services: ["Engine Repair", "Transmission Service", "Cooling System", "Electrical Systems"]
            },
            { 
              title: "Performance Services", 
              services: ["Wheel Alignment", "Suspension Repair", "Exhaust Systems", "AC Service"]
            },
            { 
              title: "Safety Services", 
              services: ["Brake Inspection", "Lighting Systems", "Tire Service", "Safety Checks"]
            },
            { 
              title: "Diagnostic Services", 
              services: ["Computer Diagnostics", "Engine Scanning", "Performance Testing", "Pre-purchase Inspection"]
            },
            { 
              title: "Additional Services", 
              services: ["Battery Replacement", "Car Detailing", "Insurance Claims", "Roadside Assistance"]
            }
          ].map((category, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.services.map((service, j) => (
                  <li key={j} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us - Compact */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose BM Motors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Wrench className="w-6 h-6" />, title: "Expert Technicians", desc: "Certified professionals with brand-specific training" },
              { icon: <Shield className="w-6 h-6" />, title: "Service Warranty", desc: "Comprehensive warranty on all parts and labor" },
              { icon: <DollarSign className="w-6 h-6" />, title: "Fair Pricing", desc: "Competitive rates with no hidden charges" }
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "5000+", label: "Happy Customers" },
            { number: "50+", label: "Car Brands" },
            { number: "100%", label: "Quality Guaranteed" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional CTA */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Professional Car Service?</h2>
          <p className="text-gray-300 mb-6">Schedule your service today with Pune's trusted automotive experts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919637925555" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a 
              href="/contact" 
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Visit Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}