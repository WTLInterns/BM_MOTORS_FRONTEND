import Image from "next/image";
import { CheckCircle, Timer, DollarSign, Car, Wrench, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Full Screen with Right Form (GoMechanic style) */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - left empty to show car visual */}
            <div className="hidden lg:block"></div>

            {/* Right side - Quote Form Card */}
            <div className="lg:ml-auto w-full max-w-md">
              <div className="rounded-2xl shadow-xl p-8 bg-white/10 backdrop-blur-md ring-1 ring-white/20">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Experience The Best Car Services
                </h1>
                <p className="text-lg text-white/80 mb-8">
                  Get instant quotes for your car service
                </p>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="ENTER CITY NAME"
                      className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/20 text-white placeholder-white/80 border border-white/30"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="ENTER CAR NAME"
                      className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/20 text-white placeholder-white/80 border border-white/30"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="ENTER MOBILE NUMBER"
                      className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/20 text-white placeholder-white/80 border border-white/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg text-lg"
                  >
                    CHECK PRICES FOR FREE
                  </button>
                </form>

                {/* Stats */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex text-green-400 text-2xl">
                        <span>★</span>
                        <span className="font-bold ml-1 text-white">4.0</span>
                        <span className="text-white/70">/5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">2 Million+</div>
                      <div className="text-sm text-white/80">Happy Customers</div>
                    </div>
                  </div>
                  <p className="text-xs text-white/70 mt-2">Based on 150000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">Our Car Services</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Choose from our wide range of professional car care services</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {name: "Periodic Services", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", href: "/services/scheduled"},
            {name: "AC Service & Repair", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", href: "/services/ac"},  
            {name: "Denting & Painting", img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80", href: "/services/denting-painting"},
            {name: "Car Spa & Cleaning", img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80", href: "/services/detailing"},  
            {name: "Batteries", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", href: "/services/batteries"},
            {name: "Tyres & Wheel Care", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", href: "/services/tyres"},
            {name: "Windshields & Glass", img: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", href: "/services/windshields"},
            {name: "Insurance Claims", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", href: "/services/insurance"},
          ].map((s, idx) => (
            <a key={idx} href={s.href} className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
              <div className="relative h-36 md:h-44 overflow-hidden">
                <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="text-sm md:text-base font-bold text-white drop-shadow-lg">{s.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">How BM Motors Works</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Four simple steps to get your car serviced</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {step: "1", name: "Select Service", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80", desc: "Choose from periodic services, repairs, or car care"},
              {step: "2", name: "Free Pickup", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80", desc: "We pick up your car from anywhere in Pune"},
              {step: "3", name: "Expert Service", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80", desc: "Skilled mechanics with genuine parts & real-time updates"},
              {step: "4", name: "Doorstep Delivery", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80", desc: "Your car delivered back to your doorstep"},
            ].map((f, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-44 overflow-hidden">
                  <Image src={f.img} alt={f.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">{f.step}</div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{f.name}</h4>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">Why Choose BM Motors?</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Pune's trusted car service partner</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
      icon: <CheckCircle className="w-10 h-10 text-green-600" />, 
      title: "100% Genuine Parts", 
      desc: "We use only authentic spare parts with warranty" 
    },
    { 
      icon: <Timer className="w-10 h-10 text-orange-600" />, 
      title: "Quick Service", 
      desc: "Most services completed within 90 minutes" 
    },
    { 
      icon: <DollarSign className="w-10 h-10 text-amber-600" />, 
      title: "Best Price Guarantee", 
      desc: "Up to 40% cheaper than authorized service centers" 
    },
    { 
      icon: <Car className="w-10 h-10 text-blue-600" />, 
      title: "Free Pickup & Drop", 
      desc: "Complimentary doorstep service across Pune" 
    },
    { 
      icon: <Wrench className="w-10 h-10 text-purple-600" />, 
      title: "Expert Mechanics", 
      desc: "Certified technicians with years of experience" 
    },
    { 
      icon: <Smartphone className="w-10 h-10 text-cyan-600" />, 
      title: "Live Updates", 
      desc: "Real-time service updates via SMS and calls" 
    }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">What Our Customers Say</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">Trusted by thousands of car owners in Pune</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name:"Shubham Jagtap",area:"Katraj",img:"/images/photo.jpg",text:"Excellent service! Got my car serviced in Andheri. Pickup and drop on time. Price was half of what the dealership quoted. Highly recommended!",rating:4},
              {name:"Afreen Ansari",area:"Baner",img:"/images/Afreen.webp",text:"AC service was done perfectly. Cooling is back to normal. The mechanics are professional and the process was very smooth.",rating:5},
              {name:"Saurabh Shinde",area:"Wakad",img:"/images/saurabh shinde.jpeg",text:"Amazing dent repair and paint job. The finish is perfect and matches exactly. Great value for money with warranty included!",rating:4},
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
                  {Array.from({length: t.rating}).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                  ))}
                </div>
                <p className="text-gray-200 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Areas */}
    <section className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-gray-900">Popular Areas We Serve</h2>
  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
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
        className="border-2 border-gray-200 rounded-xl px-4 py-3 bg-white hover:border-blue-500 hover:bg-blue-50 hover:shadow-md transition-all duration-300 text-center font-medium"
      >
        {area}
      </a>
    ))}
  </div>
</section>


      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-10 text-lg">Get answers to common questions</p>
          <div className="space-y-4">
          {[
            {q:"How do I book a car service with BM Motors?",a:"Simply call us at +91 9637925555 or fill out our online booking form. Select your car model, choose the service you need, and schedule a pickup time that works for you."},
            {q:"What areas do you cover in Pune?",a:"We provide doorstep car service across all major areas in Pune including Kothrud, Viman Nagar, Hinjewadi, Kalyani Nagar, Baner, Wakad, and many more locations."},
            {q:"How much does a basic car service cost?",a:"Our Basic Service package starts from just ₹2,499, which is up to 40% less than authorized service centers. The price includes genuine parts, oil change, and essential checks."},
            {q:"Do you use genuine spare parts?",a:"Yes, we use 100% genuine OEM or equivalent quality spare parts for all services. All parts come with manufacturer warranty."},
          ].map((f, idx) => (
            <details key={idx} className="rounded-xl border border-gray-200 bg-white p-5 group transition-all hover:shadow-md">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 group-open:text-blue-600 flex justify-between items-center">
                {f.q}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">{f.a}</p>
            </details>
          ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-10 md:p-16 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Service Your Car?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Book now for genuine parts, expert mechanics, and complimentary pickup & drop service</p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="tel:+919637925555" className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 py-4 font-bold text-lg shadow-xl transition-all transform hover:scale-105">
                 Call: +91 9637925555
              </a>
              <a href="mailto:bmmotors55@gmail.com" className="bg-white hover:bg-gray-100 text-blue-700 rounded-xl px-8 py-4 font-bold text-lg shadow-xl transition-all">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
