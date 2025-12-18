import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FormSection from '@/components/FormSection'
import HowItWorks from '@/components/HowItWorks'
import Parameters from '@/components/Parameters'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Parameters />
      <HowItWorks />
      <FormSection />
      
      <footer className="bg-[#0B897A] text-white/70 py-8 text-center text-sm">
        <p>&copy; 2024 FitLab Indonesia. Part of Oneject.</p>
      </footer>
    </main>
  )
}