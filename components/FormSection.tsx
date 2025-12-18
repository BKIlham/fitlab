'use client'

import { useState } from 'react'

export default function FormSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data = {
      nama: formData.get('nama'),
      whatsapp: formData.get('whatsapp'),
      alamat: formData.get('alamat'),
      kota: formData.get('kota'),
      kodepos: formData.get('kodepos'),
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        // e.currentTarget.reset() // Optional: Reset form
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="form-section" className="py-24 px-4 bg-[#12B4A0] relative overflow-hidden">
      
      {/* Background Decor (Pola Garis/Lingkaran Halus) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FDBA19] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 grid lg:grid-cols-5 gap-8 items-center">
        
        {/* LEFT SIDE: Copywriting (Biar gak cuma form doang) */}
        <div className="lg:col-span-2 text-white text-center lg:text-left space-y-6">
          <div className="inline-block bg-[#FDBA19] text-[#0B897A] font-black px-4 py-1 rounded-full text-sm mb-2 transform -rotate-2 border-2 border-white/20">
            STOK TERBATAS!
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            SIAP MENCOBA <br/>
            <span className="text-[#FDBA19]">SENDIRI?</span>
          </h2>
          <p className="text-white/90 text-lg font-medium leading-relaxed">
            Rasakan kemudahan cek kesehatan dalam 90 detik. Produknya <strong className="underline decoration-[#FDBA19] decoration-4 underline-offset-4">GRATIS</strong>, kamu cukup bantu kami bayar ongkirnya saja.
          </p>
          
          {/* Trust Badge Kecil */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 opacity-80">
            <div className="flex items-center gap-2">
               <span className="bg-white/20 p-2 rounded-full">🔒</span>
               <span className="text-xs font-bold">Data Aman</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="bg-white/20 p-2 rounded-full">⚡</span>
               <span className="text-xs font-bold">Proses Cepat</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM CARD */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white/20 backdrop-blur-sm">
            
            {/* STATE: SUCCESS */}
            {status === 'success' ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-24 h-24 bg-green-100 text-[#12B4A0] rounded-full flex items-center justify-center mx-auto text-5xl animate-bounce">
                  🎉
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#0B897A] mb-2">Permintaan Diterima!</h3>
                  <p className="text-slate-500 font-medium">Tim kami akan segera menghubungi WhatsApp kamu untuk konfirmasi pengiriman.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="text-[#12B4A0] font-black underline hover:text-[#0B897A]">Kirim data lain</button>
              </div>
            ) : (
              
              /* STATE: FORM INPUT */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">NAMA LENGKAP</label>
                    <input name="nama" required type="text" placeholder="Budi Santoso" 
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">WHATSAPP</label>
                    <input name="whatsapp" required type="tel" placeholder="0812-xxxx-xxxx" 
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-extrabold text-[#0B897A] ml-2">ALAMAT LENGKAP</label>
                  <textarea name="alamat" required rows={3} placeholder="Jalan, No. Rumah, RT/RW, Patokan..." 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400 resize-none"></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">KOTA/KEC</label>
                    <input name="kota" required type="text" placeholder="Jakarta Selatan" 
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-extrabold text-[#0B897A] ml-2">KODE POS</label>
                    <input name="kodepos" required type="number" placeholder="12xxx" 
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-[#12B4A0] focus:ring-4 focus:ring-[#12B4A0]/10 transition-all outline-none font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                </div>

                {/* Bill Summary Styled Like a Ticket */}
                <div className="bg-[#F0FDF9] p-6 rounded-2xl border-2 border-dashed border-[#12B4A0]/30 mt-6 relative">
                  <div className="flex justify-between text-sm mb-3 font-medium text-slate-600">
                    <span>FitLab Starter Pack (1 Strip)</span>
                    <span className="font-bold text-[#12B4A0] bg-[#12B4A0]/10 px-2 py-1 rounded text-xs">GRATIS</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4 border-b-2 border-dashed border-[#12B4A0]/20 pb-4 font-medium text-slate-600">
                    <span>Estimasi Ongkir</span>
                    <span className="font-bold">Rp 9.000</span>
                  </div>
                  <div className="flex justify-between text-xl font-black text-[#0B897A] items-center">
                    <span>TOTAL BAYAR</span>
                    <span className="text-2xl">Rp 9.000</span>
                  </div>
                </div>

                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#FDBA19] hover:bg-yellow-500 text-[#0B897A] text-xl py-5 rounded-2xl font-black transition-all shadow-[0_8px_0px_0px_#d99404] hover:shadow-[0_4px_0px_0px_#d99404] hover:translate-y-1 active:shadow-none active:translate-y-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2 border-2 border-[#FDBA19]"
                >
                  {isLoading ? 'SEDANG MEMPROSES...' : '🚀 KIRIM KE RUMAH SAYA'}
                </button>
                
                {status === 'error' && (
                  <div className="bg-red-50 text-red-500 text-sm font-bold p-3 rounded-xl text-center border border-red-100">
                    Gagal mengirim. Coba cek koneksi internetmu.
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