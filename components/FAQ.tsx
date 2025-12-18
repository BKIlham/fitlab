'use client'

export default function FAQ() {
  const faqs = [
    {
      q: "Bagaimana cara menggunakan Fitlab Wellness Test?",
      a: (
        <ul className="list-decimal pl-4 space-y-2">
          <li><strong>Download Aplikasi Plebo:</strong> Mudah dan cepat! Cukup unduh aplikasi Plebo secara gratis dan daftar sebelum melakukan tes pertama Anda.</li>
          <li><strong>Arahkan Urin ke Strip:</strong> Buka kemasan, lalu arahkan urin ke seluruh kotak berwarna di strip selama 2-3 detik.  (Penting! jangan gunakan urin awal dan urin akhir. Gunakan urin yang keluar pada tengah - tengah urinasi).</li>
          <li><strong>Pindai Strip Anda:</strong> Setelah selesai, mulai timer di aplikasi. Ketika timer selesai, scan strip melalui aplikasi Plebo untuk melihat hasilnya.</li>
          <li><strong>Dapatkan Skor & Saran Pribadi:</strong> Dalam 90 detik, Anda akan mendapatkan hasil lengkap serta saran nutrisi dan gaya hidup yang sesuai dengan kebutuhan tubuh Anda. Selesai! Cepat, higienis, dan cerdas,  kesehatan Anda terbaca dalam kurang dari dua menit.</li>
        </ul>
      )
    },
    {
      q: "Kapan waktu terbaik untuk melakukan Fitlab Wellness Test?",
      a: "Sebenarnya, tidak ada waktu yang “salah”! Anda bisa melakukan Fitlab Wellness Test kapan saja, karena Fitlab bukan alat diagnosis. Namun, untuk hasil yang lebih akurat dan konsisten, kami menyarankan tes dilakukan pada urin kedua setelah bangun tidur. Jika Anda melakukan tes secara rutin, usahakan untuk melakukannya di waktu yang sama setiap minggunya. Cara ini membantu Anda memantau perubahan tubuh dengan lebih tepat. Sederhana, konsisten, dan sepenuhnya tentang memahami kondisi Anda!"
    },
    {
      q: "Seberapa sering saya harus melakukan Fitlab Wellness Test?",
      a: "Kami menyarankan melakukan Fitlab Wellness Test sekali seminggu untuk memantau kesehatan dan melihat perkembangan Anda dari waktu ke waktu. Namun, Anda bisa menggunakannya lebih sering jika diperlukan, jadi dapat sesuaikan dengan kebutuhan Anda!"
    },
    {
      q: "Faktor apa saja yang dipertimbangkan aplikasi Fitlab saat memberikan saran nutrisi & gaya hidup?",
      a: "Aplikasi Plebo memberikan saran yang benar-benar dipersonalisasi untuk Anda. Setiap rekomendasi dibuat berdasarkan informasi yang Anda isi saat registrasi,  mulai dari kondisi kesehatan, preferensi makanan, hingga kebiasaan hidup. Setiap kali Anda mengambil tes baru, Fitlab akan mengolah data tersebut untuk memberikan rekomendasi nutrisi dan gaya hidup yang sesuai dengan kebutuhan Anda. Semua panduan ini disusun oleh tim ahli dietisien dan nutrisionis Fitlab, sehingga Anda bisa yakin setiap insight kesehatan yang Anda dapatkan berbasis ilmu dan keahlian."
    },
    {
      q: "Parameter kesehatan apa yang bisa saya cek dengan Fitlab?",
      a: "Anda dapat memeriksa 9 biomarker utama, yaitu: Keton, pH, Specific Gravity, Kalsium, Natrium, Vitamin C, Magnesium, Oksidatif Stres, dan Hidrasi."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#0B897A] mb-2 uppercase">Pertanyaan Umum</h2>
          <div className="h-1 w-20 bg-[#FDBA19] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="group bg-[#F0FDF9] rounded-2xl p-1 border border-[#12B4A0]/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-white p-4 text-slate-700 font-bold transition hover:bg-slate-50">
                <h3 className="text-lg">{item.q}</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-[#0B897A] sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>

              <div className="p-4 leading-relaxed text-slate-600 font-medium text-sm">
                {item.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}