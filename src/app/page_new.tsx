import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  🚗 Pune&apos;s Trusted Car Service Center
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Expert Car Service &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  Repair in Pune
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Professional car servicing, AC repair, denting & painting, detailing, and more. Free pickup & drop across Pune.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+919637925555" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a href="/services" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                  View Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-6 pt-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-blue-100">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">5000+ Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519681394-0b6b20b7b6a8?w=1200&q=80"
                  alt="Car Service Hero BM Motors"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 max-w-xs hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/approval.png" alt="checkmark" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Free Pickup & Drop</div>
                    <div className="text-sm text-gray-500">Across Pune</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Our Service Categories</h2>
          <p className="text-lg text-gray-600">Comprehensive automotive solutions for every need</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Car Services Mechanic Work", slug: "mechanic-work", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80", desc: "Expert mechanical repairs and maintenance" },
            { title: "Car Denting and Painting", slug: "denting-painting", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80", desc: "Professional bodywork and paint services" },
            { title: "Scrap Vehicle Purchase", slug: "scrap-vehicle", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80", desc: "Best prices for old vehicles" },
            { title: "Car Insurance Claim", slug: "insurance-claim", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80", desc: "Hassle-free insurance claim assistance" },
            { title: "Car Insurance Renewal", slug: "insurance-renewal", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80", desc: "Quick and easy renewal services" },
            { title: "Car Detailing", slug: "detailing", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80", desc: "Premium interior and exterior detailing" },
          ].map((c) => (
            <a key={c.slug} href={`/categories/${c.slug}`} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 w-full">
                <Image src={c.img} alt={c.title} fill className="object-contain group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-xl mb-2">{c.title}</h3>
                <p className="text-sm text-gray-200">{c.desc}</p>
                <div className="mt-3 inline-flex items-center text-sm font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Our Services</h2>
            <p className="text-lg text-gray-600">Premium car care solutions for all makes and models</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Scheduled Service", href: "/services/scheduled", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80" },
              { name: "AC Services", href: "/services/ac", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80" },
              { name: "Car Detailing", href: "/services/detailing", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80" },
              { name: "Denting & Painting", href: "/services/denting-painting", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80" },
              { name: "Insurance", href: "/services/insurance", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80" },
              { name: "Batteries", href: "/services/batteries", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80" },
              { name: "Tyres", href: "/services/tyres", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80" },
              { name: "Windshields", href: "/services/windshields", img: "https://images.unsplash.com/photo-1518773553398-650c18450000?w=400&q=80" },
            ].map(({ name, href, img }) => (
              <a key={name} href={href} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative h-32 w-full">
                  <Image src={img} alt={name} fill className="object-contain group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4 text-center">
                  <div className="font-semibold text-gray-900">{name}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Areas Section */}
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


      {/* Testimonials */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Customers Say</h2>
            <p className="text-lg text-blue-100">Real reviews from satisfied car owners in Pune</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Pickup & drop was on time and the car came back spotless. Price was almost half of what the dealership quoted.",
                name: "Saurabh Ganjale",
                area: "Kharadi",
                rating: 4,
              },
              {
                text: "AC service done right. Cooling is back to normal and the whole process was smooth. Highly recommend!",
                name: "Ajay Bhor",
                area: "Pashan",
                rating: 5,
              },
              {
                text: "Neat dent repair and perfect paint match. Great value and professional work. Very impressed with the finish.",
                name: "Bhavesh Patil",
                area: "Manchar",
                rating: 4,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white mb-4 leading-relaxed">&quot;{t.text}&quot;</p>
                <div className="text-sm border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-blue-100">{t.area}, Pune</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Quick answers to common questions</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "Do you offer pickup and drop?",
              a: "Yes, pickup & drop is available across most areas in Pune at no extra cost.",
            },
            {
              q: "Which services do you provide?",
              a: "Scheduled service, AC repair, denting & painting, detailing, batteries, tyres, windshields, and more.",
            },
            {
              q: "How can I contact BM Motors?",
              a: "Call +91 9637925555 / 9763875767 or email bmmotors55@gmail.com.",
            },
          ].map((f) => (
            <div key={f.q} className="border-2 border-gray-200 rounded-xl p-6 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="font-semibold text-lg text-gray-900 mb-2">{f.q}</div>
              <div className="text-gray-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Need help with your car?</h3>
              <p className="text-lg text-blue-100">Call or email and our expert team will assist you right away.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+919637925555" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                Mail Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
