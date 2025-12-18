'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-[#FDBA19] shadow-none py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
        >
          <Image 
            src="/images/logo.png"
            alt="Fitlab Logo" 
            width={120}
            height={40}
            className={`object-contain transition-all duration-300 ${
               isScrolled 
                 ? ''
                 : 'brightness-0 invert'
            }`}
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
            {['Parameter', 'Cara Pakai', 'FAQ'].map((item, index) => {
                const targetId = item === 'Cara Pakai' ? 'how-it-works' 
                               : item === 'Parameter' ? 'parameters' 
                               : 'faq';
                return (
                    <span 
                        key={index}
                        onClick={() => scrollToSection(targetId)}
                        className={`font-bold text-md cursor-pointer transition-colors duration-300 hover:scale-105 ${
                            isScrolled 
                                ? 'text-slate-600 hover:text-[#0B897A]' 
                                : 'text-white/90 hover:text-white'
                        }`}
                    >
                        {item}
                    </span>
                )
            })}
        </div>

        <button 
            onClick={scrollToForm}
            className={`px-5 py-2.5 cursor-pointer rounded-full font-black text-sm transition-all shadow-md active:scale-95 ${
                isScrolled 
                ? 'bg-[#FDBA19] hover:bg-yellow-400 text-white'
                : 'bg-white hover:bg-slate-100 text-[#FDBA19]'
            }`}
        >
            Daftar
        </button>

      </div>
    </nav>
  )
}