'use client'

import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#F0FDF9] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-250 bg-[#12B4A0]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#0B897A] tracking-tight uppercase drop-shadow-sm">
            4 Langkah Mudah <br className="md:hidden" />
            <span className="text-[#12B4A0]">Hidup Lebih Sehat</span>
          </h2>
          <div className="inline-block bg-[#FDBA19] text-[#0B897A] font-black px-6 py-2 rounded-full transform -rotate-1 shadow-[4px_4px_0px_rgba(11,137,122,0.2)] border-2 border-white text-lg">
            STOP MENERKA-NERKA!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="group relative bg-white rounded-4xl p-6 shadow-xl border-2 border-transparent hover:border-[#12B4A0]/30 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -top-5 -left-3 w-14 h-14 bg-[#FDBA19] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(217,148,4,1)] border-4 border-white z-20 transform -rotate-6 group-hover:rotate-0 transition-transform">
              <span className="text-2xl font-black text-white">1</span>
            </div>
            
            <div className="mt-6 text-center space-y-3">
              <div className="h-40 relative rounded-xl overflow-hidden bg-green-50 flex items-center justify-center mb-4">
                <Image 
                 src="/images/plebo.png"
                 alt="Plebo" 
                 fill 
                 className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-black text-[#0B897A] uppercase leading-tight">
                Siapkan <br/><span className="text-[#FDBA19]">Alat Tempur</span>
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Download aplikasi <strong>Plebo</strong> dan buka kemasan strip FitLab.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-4xl p-6 shadow-xl border-2 border-transparent hover:border-[#12B4A0]/30 transition-all duration-300 hover:-translate-y-2">
             <div className="absolute -top-5 -left-3 w-14 h-14 bg-[#FDBA19] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(217,148,4,1)] border-4 border-white z-20 transform -rotate-6 group-hover:rotate-0 transition-transform">
              <span className="text-2xl font-black text-white">2</span>
            </div>

            <div className="mt-6 text-center space-y-3">
              <div className="h-40 relative rounded-xl overflow-hidden bg-green-50 flex items-center justify-center mb-4">
                <Image 
                 src="/images/toilet.png"
                 alt="toilet" 
                 fill 
                 className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-black text-[#0B897A] uppercase leading-tight">
                Ambil Sample <br/><span className="text-[#FDBA19]">Dengan Strip</span>
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Basahi semua kotak pada strip dengan urin selama <strong>2-5 detik</strong>.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-4xl p-6 shadow-xl border-2 border-transparent hover:border-[#12B4A0]/30 transition-all duration-300 hover:-translate-y-2">
             <div className="absolute -top-5 -left-3 w-14 h-14 bg-[#FDBA19] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(217,148,4,1)] border-4 border-white z-20 transform -rotate-6 group-hover:rotate-0 transition-transform">
              <span className="text-2xl font-black text-white">3</span>
            </div>

            <div className="mt-6 text-center space-y-3">
              <div className="h-40 relative rounded-xl overflow-hidden bg-green-50 flex items-center justify-center mb-4">
                <Image 
                 src="/images/wait.png"
                 alt="toilet" 
                 fill 
                 className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-black text-[#0B897A] uppercase leading-tight">
                Aktifkan Timer <br/><span className="text-[#FDBA19]">90 Detik</span>
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Tunggu 90 detik di aplikasi Plebo hingga strip bereaksi sempurna.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-4xl p-6 shadow-xl border-2 border-transparent hover:border-[#12B4A0]/30 transition-all duration-300 hover:-translate-y-2">
             <div className="absolute -top-5 -left-3 w-14 h-14 bg-[#12B4A0] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(11,137,122,1)] border-4 border-white z-20 transform -rotate-6 group-hover:rotate-0 transition-transform">
              <span className="text-2xl font-black text-white">4</span>
            </div>

            <div className="mt-6 text-center space-y-3">
              <div className="h-40 relative rounded-xl overflow-hidden bg-green-50 flex items-center justify-center mb-4">
                <Image 
                 src="/images/result.png"
                 alt="toilet" 
                 fill 
                 className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-black text-[#0B897A] uppercase leading-tight">
                Scan & Lihat <br/><span className="text-[#FDBA19]">Hasilmu!</span>
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Foto stripnya. <strong>9 Parameter</strong> kesehatan akan langsung terdeteksi!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}