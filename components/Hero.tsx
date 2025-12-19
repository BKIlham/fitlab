'use client'
import Image from 'next/image'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className="relative mt-5 overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40 bg-linear-to-b from-[#F0FDF9] to-white">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-[#12B4A0]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-[20%] left-[-10%] w-100 h-100 bg-[#FDBA19]/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#12B4A0]/20 text-[#0B897A] rounded-full text-xs font-black tracking-wide shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#FDBA19] animate-pulse"></span>
            STOK TERBATAS
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0B897A] leading-[1.1] tracking-tight">
            Raih Kesempatan untuk Cek <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#12B4A0] to-teal-400">
              Biomarkers Gratis.
            </span>
          </h1>

          <p className="text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Tidak perlu ke Lab. Tidak perlu jarum suntik. Cek kondisi 9 organ vital tubuhmu hanya dalam 90 detik. <br /><span className="text-[#0B897A] font-bold">Laboratorium dalam saku Anda.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <button 
              onClick={scrollToForm}
              className="group relative bg-[#FDBA19] text-white text-lg px-8 py-4 rounded-2xl font-black shadow-[0_10px_20px_-10px_rgba(253,186,25,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(253,186,25,0.6)] hover:-translate-y-1 transition-all duration-300 border-2 border-yellow-400 cursor-pointer"
            >
              Daftar Disini
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 relative">
                    <Image 
                      src="/images/oguz.jpg" 
                      alt="User 1" 
                      fill
                      sizes="40px"
                      className="object-cover" 
                    />
                 </div>
                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 relative">
                    <Image 
                      src="/images/ben.jpg" 
                      alt="User 2" 
                      fill
                      sizes="40px"
                      className="object-cover" 
                    />
                 </div>
                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 relative">
                    <Image 
                      src="/images/veras.jpg" 
                      alt="User 3" 
                      fill
                      sizes="40px"
                      className="object-cover" 
                    />
                 </div>
              </div>
              <p className="text-xs font-bold text-slate-400">
                500+ Orang <br/>Sudah Mencoba
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="relative rounded-[2.5rem] bg-linear-to-b from-[#F0FDF9] to-white border border-white/50 shadow-2xl p-6 lg:p-8 backdrop-blur-sm">
             <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
               <Image 
                 src="/images/hero.png" 
                 alt="FitLab Box" 
                 fill 
                 className="object-contain hover:scale-105 transition-transform duration-500"
               />
             </div>
             
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="w-12 h-12 rounded-full bg-[#12B4A0]/10 flex items-center justify-center text-[#12B4A0] text-xl font-black">
                  ✓
                </div>
                <div>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Kondisi Tubuh</p>
                   <p className="text-base font-black text-[#0B897A]">Sehat (Prima)</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </header>
  )
}