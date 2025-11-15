
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href?: string;
  label: string;
  iconSrc: string;
  className?: string;
  children?: React.ReactNode;
  asButton?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
};

function HoverIconWrapper({
  href,
  label,
  iconSrc,
  className = "",
  children,
  asButton = false,
  onMouseEnter,
  onMouseLeave,
  isActive = false,
}: NavItemProps) {
  const baseClasses =
    "relative group flex flex-col items-center justify-center";
  const content = (
    <>
      {/* Icon above text - always visible when active, on hover when not active */}
      <span className={`pointer-events-none absolute -top-5 opacity-0 translate-y-1 transition-all duration-200 ${
        isActive 
          ? "opacity-100 translate-y-0" 
          : "group-hover:opacity-100 group-hover:translate-y-0"
      }`}>
        <img
          src={iconSrc}
          alt=""
          className="h-8 w-auto"
        />
      </span>
      {children}
    </>
  );

  if (asButton) {
    return (
      <button
        type="button"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`${baseClasses} ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={`${baseClasses} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </a>
  );
}

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

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

  // Different icons for each nav item
  const navIcons = {
    home: "/images/home.png",
    services: "/images/services.png",
    categories: "/images/categories.png",
    areas: "/images/areas.png",
    pricing: "/images/pricing.png",
    reviews: "/images/reviews.png",
    faqs: "/images/faqs.png",
    contact: "/images/contact.png",
  };

  const getTextColor = () => {
    if (!isHome) return "text-gray-700";
    return isScrolled ? "text-gray-700" : "text-white/90";
  };

  const getHoverColor = () => {
    if (!isHome) return "hover:text-blue-600";
    return isScrolled ? "hover:text-blue-600" : "hover:text-white";
  };

  const getHeaderBackground = () => {
    if (!isHome)
      return "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm";
    return isScrolled
      ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-lg"
      : "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg";
  };

  const getLogoColor = () => {
    if (!isHome) return "text-gray-900 hover:text-blue-600";
    return isScrolled
      ? "text-gray-900 hover:text-blue-600"
      : "text-white hover:text-white/90";
  };

  const getMobileButtonColor = () => {
    if (!isHome) return "text-gray-700 hover:bg-gray-100/80";
    return isScrolled
      ? "text-gray-700 hover:bg-gray-100/80"
      : "text-white hover:bg-white/20";
  };

  // Check if current page is active
  const isActivePage = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`w-full ${
        isHome ? "fixed" : "sticky"
      } top-0 ${isHome ? "z-[9999]" : "z-50"} transition-all duration-300 ${getHeaderBackground()}`}
    >
      {/* Increased navbar height - py-5 */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <a
          href="/"
          className={`text-2xl font-bold transition-colors duration-300 ${getLogoColor()}`}
        >
          BM Motors
        </a>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-8 text-sm font-medium ${getTextColor()}`}
        >
          {/* Home */}
          <HoverIconWrapper
            href="/"
            label="Home"
            iconSrc={navIcons.home}
            className={`transition-colors duration-200 ${getHoverColor()}`}
            isActive={isActivePage("/")}
          >
            <span className="py-3">Home</span>
          </HoverIconWrapper>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <HoverIconWrapper
              label="Services"
              iconSrc={navIcons.services}
              asButton
              className={`transition-colors duration-200 ${getHoverColor()}`}
              isActive={isActivePage("/services")}
            >
              <span className="flex items-center gap-1 py-3">
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${
                    isHome && !isScrolled ? "text-white/90" : "text-gray-700"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </HoverIconWrapper>

            {servicesOpen && (
              <div className="absolute top-full left-0 pt-3 z-50 animate-in fade-in duration-200">
                <div className="w-64 bg-white/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl py-2">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200"
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
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <HoverIconWrapper
              label="Categories"
              iconSrc={navIcons.categories}
              asButton
              className={`transition-colors duration-200 ${getHoverColor()}`}
              isActive={isActivePage("/categories")}
            >
              <span className="flex items-center gap-1 py-3">
                Categories
                <svg
                  className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${
                    isHome && !isScrolled ? "text-white/90" : "text-gray-700"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </HoverIconWrapper>

            {categoriesOpen && (
              <div className="absolute top-full left-0 pt-3 z-50 animate-in fade-in duration-200">
                <div className="w-72 bg-white/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl py-2">
                  {categories.map((c) => (
                    <a
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200"
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Areas */}
          <HoverIconWrapper
            href="/areas"
            label="Areas"
            iconSrc={navIcons.areas}
            className={`transition-colors duration-200 ${getHoverColor()}`}
            isActive={isActivePage("/areas")}
          >
            <span className="py-3">Areas</span>
          </HoverIconWrapper>

          {/* Pricing */}
          <HoverIconWrapper
            href="/pricing"
            label="Pricing"
            iconSrc={navIcons.pricing}
            className={`transition-colors duration-200 ${getHoverColor()}`}
            isActive={isActivePage("/pricing")}
          >
            <span className="py-3">Pricing</span>
          </HoverIconWrapper>

          {/* Reviews */}
          <HoverIconWrapper
            href="/reviews"
            label="Reviews"
            iconSrc={navIcons.reviews}
            className={`transition-colors duration-200 ${getHoverColor()}`}
            isActive={isActivePage("/reviews")}
          >
            <span className="py-3">Reviews</span>
          </HoverIconWrapper>

          {/* FAQs */}
          <HoverIconWrapper
            href="/faqs"
            label="FAQs"
            iconSrc={navIcons.faqs}
            className={`transition-colors duration-200 ${getHoverColor()}`}
            isActive={isActivePage("/faqs")}
          >
            <span className="py-3">FAQs</span>
          </HoverIconWrapper>

          {/* Contact */}
          <HoverIconWrapper
            href="/contact"
            label="Contact"
            iconSrc={navIcons.contact}
            className={`transition-colors duration-200 ${getHoverColor()}`}
            isActive={isActivePage("/contact")}
          >
            <span className="py-3">Contact</span>
          </HoverIconWrapper>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919637925555"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-3 rounded-lg transition-all duration-200 ${getMobileButtonColor()}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/80 bg-white/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-5 space-y-3">
            <a
              href="/"
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg font-medium transition-all duration-200"
            >
              Home
            </a>

            <div>
              <div className="font-semibold mb-3 text-gray-900 px-3">
                Services
              </div>
              <div className="pl-4 space-y-2">
                {services.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 py-2.5 px-3 rounded-lg transition-all duration-200"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-semibold mb-3 text-gray-900 px-3">
                Categories
              </div>
              <div className="pl-4 space-y-2">
                {categories.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 py-2.5 px-3 rounded-lg transition-all duration-200"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/areas"
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg font-medium transition-all duration-200"
            >
              Areas
            </a>
            <a
              href="/pricing"
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg font-medium transition-all duration-200"
            >
              Pricing
            </a>
            <a
              href="/reviews"
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg font-medium transition-all duration-200"
            >
              Reviews
            </a>
            <a
              href="/faqs"
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg font-medium transition-all duration-200"
            >
              FAQs
            </a>
            <a
              href="/contact"
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg font-medium transition-all duration-200"
            >
              Contact
            </a>

            <a
              href="tel:+919637925555"
              className="block mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-xl font-semibold text-center transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}