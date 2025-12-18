'use client'

import Image from 'next/image'

export default function Parameters() {
  // Data diambil dari referensi gambar yang diupload (113, 114, 115)
  const params = [
    {
      title: "Protein",
      desc: "Mendeteksi fungsi ginjal. Normalnya tidak ada atau sedikit. Jika tinggi, bisa indikasi dehidrasi atau aktivitas fisik berat.",
      icon: "🥩", // Bisa diganti Image nanti
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Ketones",
      desc: "Melacak pembakaran lemak (Ketosis). Sangat berguna jika Anda sedang diet keto atau puasa.",
      icon: "🔥",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Magnesium",
      desc: "Penting untuk energi, otot, dan saraf. Memastikan Anda memenuhi kebutuhan harian magnesium.",
      icon: "⚡",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Water (Hidrasi)",
      desc: "Mengetahui apakah tubuh Anda cukup cairan atau dehidrasi. Kunci untuk fungsi organ optimal.",
      icon: "💧",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "pH Urine",
      desc: "Mengukur tingkat asam/basa tubuh. Indikator keseimbangan pola makan (sayur vs daging).",
      icon: "⚖️",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Oxidative Stress",
      desc: "Mendeteksi radikal bebas & kerusakan sel. Indikator penuaan dini atau peradangan.",
      icon: "🛡️",
      color: "bg-slate-200 text-slate-600"
    },
    {
      title: "Calcium",
      desc: "Memantau kesehatan tulang dan gigi. Kadar yang tidak normal bisa mempengaruhi fungsi otot.",
      icon: "🦴",
      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Sodium (Garam)",
      desc: "Mengukur kadar garam tubuh. Penting untuk mengontrol tekanan darah dan keseimbangan cairan.",
      icon: "🧂",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Vitamin C",
      desc: "Memantau asupan antioksidan. Pastikan tubuh Anda punya cukup pelindung imun.",
      icon: "🍊",
      color: "bg-orange-100 text-orange-500"
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor (Ganti posisi biar beda dikit sama section atas) */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-[#FDBA19]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-[#12B4A0]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADLINE SECTION */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#0B897A] tracking-tight uppercase">
            9 Hal yang Tubuhmu <br className="md:hidden" />
            <span className="text-[#12B4A0]">Ingin Katakan</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Satu strip kecil, laporan lengkap. FitLab menerjemahkan sinyal tubuhmu menjadi data yang mudah dimengerti.
          </p>
        </div>

        {/* PARAMETERS GRID (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {params.map((item, index) => (
            <div key={index} className="group relative bg-white rounded-4xl p-8 shadow-xl border-2 border-transparent hover:border-[#12B4A0]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              
              {/* Icon Circle */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {item.icon}
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-[#0B897A]">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner (Pemanis Visual) */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#12B4A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

            </div>
          ))}

        </div>

        {/* Call to Action Kecil di Bawah Grid */}
        <div className="mt-16 text-center">
           <div className="inline-flex items-center gap-2 bg-[#F0FDF9] border border-[#12B4A0]/30 px-6 py-3 rounded-full text-[#0B897A] font-bold animate-bounce-slow">
              ✨ Dan masih banyak insight kesehatan lainnya di Aplikasi Plebo!
           </div>
        </div>

      </div>
    </section>
  )
}