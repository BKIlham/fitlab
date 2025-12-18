'use client'

import Image from "next/image";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F0FDF9] pt-20 pb-10 border-t border-[#12B4A0]/10 text-slate-600 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 mb-16">
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-black text-[#0B897A] uppercase tracking-wider text-sm">Menu</h4>
              <ul className="space-y-3 text-sm font-medium cursor-pointer">
                <li>
                  <span onClick={() => scrollToSection('home')} className="hover:text-[#FDBA19] transition-colors block py-1">
                    Beranda
                  </span>
                </li>
                <li>
                  <span onClick={() => scrollToSection('parameters')} className="hover:text-[#FDBA19] transition-colors block py-1">
                    9 Parameter
                  </span>
                </li>
                <li>
                  <span onClick={() => scrollToSection('how-it-works')} className="hover:text-[#FDBA19] transition-colors block py-1">
                    Cara Pakai
                  </span>
                </li>
                <li>
                  <span onClick={() => scrollToSection('faq')} className="hover:text-[#FDBA19] transition-colors block py-1">
                    FAQ
                  </span>
                </li>
              </ul>
            </div>
  
            <div className="space-y-4">
              <h4 className="font-black text-[#0B897A] uppercase tracking-wider text-sm">Order</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a 
                    href="https://www.tokopedia.com/fitlabindonesia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#42B549] transition-colors font-bold flex items-center gap-2 group"
                  >
                    <div className="relative w-6 h-6">
                      <Image 
                        src="/images/Tokopedia_Mascot.png"
                        alt="Tokopedia"
                        fill
                        className="object-contain"
                      />
                    </div>
                    Tokopedia Official
                  </a>
                </li>
                <li><span onClick={() => scrollToSection('form-section')} className="hover:text-[#FDBA19] transition-colors cursor-pointer">Daftar Undian</span></li>
              </ul>
            </div>
  
            <div className="space-y-4">
              <h4 className="font-black text-[#0B897A] uppercase tracking-wider text-sm">Bantuan</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="https://oneject.co.id/" className="hover:text-[#FDBA19] transition-colors">Oneject Indonesia</a></li>
              </ul>
            </div>
  
            <div className="space-y-4">
              <h4 className="font-black text-[#0B897A] uppercase tracking-wider text-sm">Follow Us</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <a href="https://www.instagram.com/fitlab.indonesia/" className="hover:text-[#E1306C] transition-colors flex items-center gap-2 group">
                     <svg fill="#E1306C" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover:text-[#E1306C] transition-colors">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                     Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="mt-5 bg-white border-2 border-[#12B4A0]/20 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden">
               <div className="relative w-16 h-16">
                  <Image 
                    src="/images/pleboicon.png" 
                    alt="Plebo"
                    fill
                    className="object-contain"
                  />
               </div>
               
               <div className="text-center sm:text-left space-y-2">
                  <h4 className="font-black text-[#0B897A] text-lg leading-tight">
                    Download Aplikasi Plebo
                  </h4>
                  <p className="text-xs font-medium text-slate-500">
                    Cek hasil tes kesehatanmu sekarang. Tersedia di:
                  </p>
                  
                  <div className="flex gap-2 justify-center sm:justify-start pt-1">
                    <a href="https://apps.apple.com/id/app/plebo/id6447778159" className="bg-slate-900 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors">
                      <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                      <span className="text-[10px] font-bold">App Store</span>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.plebo.pro.mobile.patient&hl=id-ID" className="bg-slate-900 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors">
                      <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                      <span className="text-[10px] font-bold">Google Play</span>
                    </a>
                  </div>
               </div>
            </div>

            
          </div>

        </div>

        <div className="border-t border-[#12B4A0]/20 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold text-slate-400">
              &copy; {new Date().getFullYear()} PT Oneject Indonesia. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-300 mt-1">
              &quot;FitLab&quot; and &quot;Plebo&quot; are registered trademarks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}