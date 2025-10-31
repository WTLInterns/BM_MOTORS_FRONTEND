"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const services = [
    { name: "Scheduled Services", href: "/services/scheduled" },
    { name: "AC Services", href: "/services/ac" },
    { name: "Cleaning & Detailing", href: "/services/detailing" },
    { name: "Denting & Painting", href: "/services/denting-painting" },
    { name: "Insurance", href: "/services/insurance" },
    { name: "Batteries", href: "/services/batteries" },
    { name: "Tyres", href: "/services/tyres" },
    { name: "Windshields & Glass", href: "/services/windshields" },
  ];

  const categories = [
    { name: "Car Services Mechanic Work", href: "/categories/mechanic-work" },
    { name: "Car Denting and Painting", href: "/categories/denting-painting" },
    { name: "Scrap Vehicle Purchase", href: "/categories/scrap-vehicle" },
    { name: "Car Insurance Claim", href: "/categories/insurance-claim" },
    { name: "Car Insurance Renewal", href: "/categories/insurance-renewal" },
    { name: "Car Detailing", href: "/categories/detailing" },
  ];

  return (
    <header className={`w-full ${isHome ? "fixed" : "sticky"} top-0 ${isHome ? "z-[9999]" : "z-50"} ${isHome ? "border-transparent bg-transparent shadow-none" : "border-b border-gray-200 bg-white shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className={`text-2xl font-bold transition-colors ${isHome ? "text-white hover:text-white/80" : "text-gray-900 hover:text-blue-600"}`}>
          BM Motors
        </a>
        
        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-7 text-sm font-medium ${isHome ? "text-white/90" : "text-gray-700"}`}>
          <a href="/" className={`${isHome ? "text-white/90 hover:text-white" : "hover:text-blue-600"} transition-colors`}>Home</a>
          
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`${isHome ? "text-white/90 hover:text-white" : "hover:text-blue-600"} flex items-center gap-1 transition-colors py-2`}>
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-0 z-50">
                <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className={`${isHome ? "text-white/90 hover:text-white" : "hover:text-blue-600"} flex items-center gap-1 transition-colors py-2`}>
              Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {categoriesOpen && (
              <div className="absolute top-full left-0 pt-0 z-50">
                <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                  {categories.map((c) => (
                    <a
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/areas" className={`${isHome ? "text-white/90 hover:text-white" : "hover:text-blue-600"} transition-colors`}>Areas</a>
          <a href="/pricing" className={`${isHome ? "text-white/90 hover:text-white" : "hover:text-blue-600"} transition-colors`}>Pricing</a>
          <a href="/reviews" className={`${isHome ? "text-white/90 hover:text-white" : "hover:text-blue-600"} transition-colors`}>Reviews</a>
          <a href="/faqs" className={`${isHome ? "text-white/90 hover:text-white" : "hover:text-blue-600"} transition-colors`}>FAQs</a>
          <a href="/contact" className={`${isHome ? "text-white/90 hover:text-white" : "hover:text-blue-600"} transition-colors`}>Contact</a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919637925555" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors shadow-md">
             Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 ${isHome ? "text-white" : "text-gray-700"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <a href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <div>
              <div className="font-semibold mb-2 text-gray-900">Services</div>
              <div className="pl-4 space-y-2">
                {services.map((s) => (
                  <a key={s.href} href={s.href} className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2 text-gray-900">Categories</div>
              <div className="pl-4 space-y-2">
                {categories.map((c) => (
                  <a key={c.href} href={c.href} className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    {c.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="/areas" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Areas</a>
            <a href="/pricing" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
            <a href="/reviews" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
            <a href="/faqs" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">FAQs</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <a href="tel:+919637925555" className="block mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold text-center transition-colors">
               Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
