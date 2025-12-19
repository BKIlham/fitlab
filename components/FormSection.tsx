'use client'

import { useState } from 'react'

export default function FormSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    

    const data = {
      nama: formData.get('nama'),
      instagram: formData.get('instagram'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      alamat: formData.get('alamat'),
      kota: formData.get('kota'),
      kodepos: formData.get('kodepos'),
      fax: formData.get('fax'),
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const responseData = await response.json();

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        
        let pesanError = responseData.error || "Gagal mengirim data.";

        if (responseData.details) {
            const errorKeys = Object.keys(responseData.details).filter(key => key !== '_errors');
            
            if (errorKeys.length > 0) {
                const firstField = errorKeys[0]; 
                
                const firstMessage = responseData.details[firstField]?._errors?.[0];
                
                if (firstMessage) {
                    pesanError = `${firstMessage} (${firstField.toUpperCase()})`;
                }
            }
        }
        
        setErrorMessage(pesanError);
      }

    } catch (err) {
      setStatus('error')
      setErrorMessage("Terjadi kesalahan koneksi. Cek internet Anda.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleNumberInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
  };
  const handleNameInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[0-9]/g, '');
  };

  return (
    <section id="form-section" className="py-24 px-4 bg-[#12B4A0] relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FDBA19] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 grid lg:grid-cols-5 gap-8 items-center">
        
        <div className="lg:col-span-2 text-white text-center lg:text-left space-y-6">
          <div className="inline-block bg-[#FDBA19] text-[#0B897A] font-black px-4 py-1 rounded-full text-sm mb-2 transform -rotate-2 border-2 border-white/20">
            STOK TERBATAS
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            DAFTAR <br/>
            <span className="text-[#FDBA19]">DISINI</span>
          </h2>
          <p className="text-white/90 text-lg font-medium leading-relaxed">
            Isi data diri dan bawa pulang hadiahnya! Dipilih 3 pemenang setiap hari. Paket dikirim langsung ke rumah <br /> <strong className="underline decoration-[#FDBA19] decoration-4 underline-offset-4">100% GRATIS.</strong>
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white/20 backdrop-blur-sm">
            
            {status === 'success' ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-24 h-24 bg-green-100 text-[#12B4A0] rounded-full flex items-center justify-center mx-auto text-5xl animate-bounce">
                  🎉
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#0B897A] mb-2">Permintaan Diterima!</h3>
                  <p className="text-slate-500 font-medium">Tim kami akan memproses pengiriman ke alamatmu.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="text-[#12B4A0] font-black underline hover:text-[#0B897A]">Kirim data lain</button>
              </div>
            ) : (
              
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}>
                   <input type="text" name="fax" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-extrabold text-[#0B897A] ml-2">NAMA LENGKAP</label>
                  <input name="nama" required type="text" onInput={handleNameInput} placeholder="Budi Santoso" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">AKUN INSTAGRAM</label>
                    <input name="instagram" required type="text" placeholder="@username" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">EMAIL</label>
                    <input name="email" required type="email" placeholder="budi@gmail.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">WHATSAPP</label>
                    <input name="whatsapp" required type="tel" onInput={handleNumberInput} placeholder="0812xxxxxxxx" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-extrabold text-[#0B897A] ml-2">ALAMAT LENGKAP</label>
                  <textarea name="alamat" required rows={3} placeholder="Jalan Mawar No. 10..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400 resize-none"></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">KOTA/KEC</label>
                    <input name="kota" required type="text" placeholder="Jakarta Selatan" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">KODE POS</label>
                    <input name="kodepos" required type="tel" placeholder="12xxx" onInput={handleNumberInput} maxLength={5} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                </div>

                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#FDBA19] hover:bg-yellow-500 text-white text-xl py-5 rounded-2xl font-black transition-all shadow-[0_8px_0px_0px_#d99404] hover:shadow-[0_4px_0px_0px_#d99404] hover:translate-y-1 active:shadow-none active:translate-y-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2 border-2 border-[#FDBA19]"
                >
                  {isLoading ? 'SEDANG MEMPROSES...' : '🚀 IKUT UNDIAN'}
                </button>
                
                {status === 'error' && (
                  <div className="bg-red-50 text-red-500 text-sm font-bold p-4 rounded-xl text-center border-2 border-red-100 animate-pulse">
                    ⚠️ {errorMessage || "Gagal mengirim. Cek koneksi internetmu."}
                  </div>
                )}
                
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}