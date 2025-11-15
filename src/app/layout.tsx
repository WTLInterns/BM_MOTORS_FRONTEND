import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
            {/* Reduced padding from py-10 to py-8 */}
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2 text-white">About</h3>
                <ul className="space-y-1">
                  <li><a className="hover:underline hover:text-white" href="/about">About Us</a></li>
                  <li><a className="hover:underline hover:text-white" href="/contact">Contact Us</a></li>
                  <li><a className="hover:underline hover:text-white" href="/terms">Terms and Conditions</a></li>
                  <li><a className="hover:underline hover:text-white" href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-white">Our Services</h3>
                <ul className="space-y-1">
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
                <h3 className="font-semibold mb-2 text-white">Popular Areas</h3>
                <ul className="space-y-1">
                  <li><a className="hover:underline hover:text-white" href="/areas/andheri">Baner</a></li>
                  <li><a className="hover:underline hover:text-white" href="/areas/bandra">Katraj</a></li>
                  <li><a className="hover:underline hover:text-white" href="/areas/borivali">Wakad</a></li>
                  <li><a className="hover:underline hover:text-white" href="/areas/chembur">Viman Nagar</a></li>
                  <li><a className="hover:underline hover:text-white" href="/areas/powai">Kharadi</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-white">Contact</h3>
                <p className="mb-1"><a className="hover:underline hover:text-white" href="mailto:bmmotors55@gmail.com">bmmotors55@gmail.com</a></p>
                <p className="mb-1"><a className="hover:underline hover:text-white" href="tel:+919637925555">+91 9637925555</a></p>
                <p className="mb-3"><a className="hover:underline hover:text-white" href="tel:+919763875767">9763875767</a></p>
                
                {/* Address Section */}
                <div className="mb-3 p-2 bg-gray-800/50 rounded-lg border-l-4 border-red-600">
                  <p className="text-white font-medium mb-1 text-sm">Our Location:</p>
                  <p className="text-xs">
                    Pune Nagar Road, Khandave Nagar, Wagholi,<br />
                    Opposite - Tata Motors Showroom
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 text-sm">Call Now</a>
                  <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-gray-600 hover:border-white px-3 py-1.5 text-sm hover:text-white">Mail Us</a>
                </div>
              </div>
            </div>

            {/* Social Media Section - Reduced padding from py-8 to py-6 */}
            <div className="border-t border-gray-800 py-6">
              <div className="max-w-7xl mx-auto px-4">
                  <div className="flex justify-center items-center gap-4">
                    {/* Facebook */}
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    
                    {/* Instagram */}
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.198-1.558-.75-.947-1.011-2.168-.711-3.387.3-1.219 1.111-2.219 2.258-2.749 1.146-.53 2.478-.53 3.624 0 1.147.53 1.958 1.53 2.258 2.749.3 1.219.039 2.44-.711 3.387-.75.947-1.901 1.558-3.198 1.558z"/>
                      </svg>
                    </a>
                    
                    {/* WhatsApp */}
                    <a 
                      href="https://wa.me/919637925555" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.495 3.09"/>
                      </svg>
                    </a>
                    
                    {/* YouTube */}
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    
                    {/* Twitter/X */}
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-black text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
            
              </div>
            </div>

            {/* Copyright Section - Reduced padding from py-4 to py-3 */}
            <div className="border-t border-gray-800 text-xs text-gray-400 bg-gray-950">
              <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>© {new Date().getFullYear()} BM Motors. All rights reserved.</span>
                <span>Pune Nagar Road, Khandave Nagar, Wagholi, Opposite - Tata Motors Showroom</span>
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/Header";

// export const metadata: Metadata = {
//   title: "BM Motors | Car Service & Repair in Pune",
//   description:
//     "BM Motors - Expert car service, AC repair, denting & painting, detailing, batteries, tyres, and more in Pune. Call +91 9637925555 / 9763875767 or mail bmmotors55@gmail.com.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="antialiased bg-gray-50" style={{ fontFamily: 'Inter, Poppins, Roboto, Helvetica, Arial, sans-serif' }}>
//         <div className="min-h-screen flex flex-col">
//           <Header />
//           <main className="flex-1">{children}</main>
//           <footer className="w-full border-t relative text-white">
//             {/* Background Image with Overlay */}
//             <div 
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//               style={{
//                 backgroundImage: 'url("/images/footerimage.png")',
//               }}
//             >
//               {/* Dark Overlay for Better Readability */}
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
//             </div>

//             {/* Main Content - Moved Down */}
//             <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
//               <div>
//                 <h3 className="font-semibold mt-35 text-white text-lg">About</h3>
//                 <ul className="space-y-3">
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/about">About Us</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/contact">Contact Us</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/terms">Terms and Conditions</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/privacy">Privacy Policy</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-semibold mt-35 text-white text-lg">Our Services</h3>
//                 <ul className="space-y-3">
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/services/scheduled">Scheduled Services</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/services/ac">AC Services</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/services/detailing">Cleaning & Detailing</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/services/denting-painting">Denting & Painting</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/services/batteries">Batteries</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/services/tyres">Tyres</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/services/windshields">Windshields & Glass</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-semibold mt-35 text-white text-lg">Popular Areas</h3>
//                 <ul className="space-y-3">
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/areas/baner">Baner</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/areas/katraj">Katraj</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/areas/wakad">Wakad</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/areas/viman-nagar">Viman Nagar</a></li>
//                   <li><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="/areas/kharadi">Kharadi</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-semibold mt-35 text-white text-lg">Contact</h3>
//                 <p className="mb-3"><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="mailto:bmmotors55@gmail.com">bmmotors55@gmail.com</a></p>
//                 <p className="mb-3"><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="tel:+919637925555">+91 9637925555</a></p>
//                 <p className="mb-6"><a className="hover:underline hover:text-white text-gray-200 transition-colors" href="tel:+919763875767">9763875767</a></p>
//                 <div className="flex gap-3">
//                   <a href="tel:+919637925555" className="inline-flex items-center rounded-lg bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 transition-all hover:scale-105 text-sm font-medium">Call Now</a>
//                   <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-lg border border-white/30 hover:border-white px-4 py-2.5 transition-all hover:scale-105 hover:bg-white/10 text-sm font-medium">Mail Us</a>
//                 </div>
//               </div>
//             </div>
            
//             {/* Social Media Icons - Moved to Bottom */}
//             <div className="relative z-10 max-w-7xl mx-auto px-4 pb-6">
//               <div className="flex justify-center space-x-3 mb-4">
//                 {[
//                   { name: 'Facebook', icon: (
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                     </svg>
//                   ), url: '#' },
//                   { name: 'Instagram', icon: (
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.297-3.323 1.297z"/>
//                     </svg>
//                   ), url: '#' },
//                   { name: 'Twitter', icon: (
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                     </svg>
//                   ), url: '#' },
//                   { name: 'YouTube', icon: (
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                     </svg>
//                   ), url: '#' },
//                   { name: 'LinkedIn', icon: (
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                     </svg>
//                   ), url: '#' }
//                 ].map((social) => (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/30 border border-white/30"
//                     title={social.name}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="relative z-10 border-t border-white/20 text-xs text-gray-300 bg-black/50 backdrop-blur-sm">
//               <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
//                 <span>© {new Date().getFullYear()} BM Motors. All rights reserved.</span>
//                 <span>Pune, Maharashtra</span>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </body>
//     </html>
//   );
// }