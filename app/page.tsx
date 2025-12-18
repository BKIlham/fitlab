import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FormSection from '@/components/FormSection'
import HowItWorks from '@/components/HowItWorks'
import Parameters from '@/components/Parameters'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Parameters />
      <HowItWorks />
      <FormSection />
      <FAQ />
      
      <Footer />
    </main>
  )
}