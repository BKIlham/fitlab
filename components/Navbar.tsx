'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
          : 'bg-[#FDBA19] shadow-none py-3'
      }`}
    >
      <div className="ml-3 mx-auto px-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer">
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
      </div>
    </nav>
  )
}