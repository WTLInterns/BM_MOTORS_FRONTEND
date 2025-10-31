import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

// Removed Geist font setup. Use native modern system fonts instead

export const metadata: Metadata = {
  title: "BM Motors | Car Service & Repair in Pune",
  description:
    "BM Motors - Expert car service, AC repair, denting & painting, detailing, batteries, tyres, and more in Pune. Call +91 9637925555 / 9763875767 or mail bmmotors55@gmail.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50" style={{ fontFamily: 'Inter, Poppins, Roboto, Helvetica, Arial, sans-serif' }}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="w-full border-t bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
              <div>
                <h3 className="font-semibold mb-3 text-white">About</h3>
                <ul className="space-y-2">
                  <li><a className="hover:underline hover:text-white" href="/about">About Us</a></li>
                  <li><a className="hover:underline hover:text-white" href="/contact">Contact Us</a></li>
                  <li><a className="hover:underline hover:text-white" href="/terms">Terms and Conditions</a></li>
                  <li><a className="hover:underline hover:text-white" href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-white">Our Services</h3>
                <ul className="space-y-2">
                  <li><a className="hover:underline hover:text-white" href="/services/scheduled">Scheduled Services</a></li>
                  <li><a className="hover:underline hover:text-white" href="/services/ac">AC Services</a></li>
                  <li><a className="hover:underline hover:text-white" href="/services/detailing">Cleaning & Detailing</a></li>
                  <li><a className="hover:underline hover:text-white" href="/services/denting-painting">Denting & Painting</a></li>
                  <li><a className="hover:underline hover:text-white" href="/services/batteries">Batteries</a></li>
                  <li><a className="hover:underline hover:text-white" href="/services/tyres">Tyres</a></li>
                  <li><a className="hover:underline hover:text-white" href="/services/windshields">Windshields & Glass</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-white">Popular Areas</h3>
                <ul className="space-y-2">
                  <li><a className="hover:underline hover:text-white" href="/areas/andheri">Baner</a></li>
                  <li><a className="hover:underline hover:text-white" href="/areas/bandra">Katraj</a></li>
                  <li><a className="hover:underline hover:text-white" href="/areas/borivali">Wakad</a></li>
                  <li><a className="hover:underline hover:text-white" href="/areas/chembur">Viman Nagar</a></li>
                  <li><a className="hover:underline hover:text-white" href="/areas/powai">Kharadi</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-white">Contact</h3>
                <p className="mb-2"><a className="hover:underline hover:text-white" href="mailto:bmmotors55@gmail.com">bmmotors55@gmail.com</a></p>
                <p className="mb-2"><a className="hover:underline hover:text-white" href="tel:+919637925555">+91 9637925555</a></p>
                <p className="mb-4"><a className="hover:underline hover:text-white" href="tel:+919763875767">9763875767</a></p>
                <div className="flex gap-2">
                  <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-red-600 hover:bg-red-700 text-white px-3 py-2">Call Now</a>
                  <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-gray-600 hover:border-white px-3 py-2 hover:text-white">Mail Us</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 text-xs text-gray-400 bg-gray-950">
              <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <span>© {new Date().getFullYear()} BM Motors. All rights reserved.</span>
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

