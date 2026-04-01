import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandBanner } from "@/components/brand-banner"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BrandBanner />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <IntegrationsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
