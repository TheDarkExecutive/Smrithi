"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section id="waitlist" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[18vw] font-bold font-sans tracking-tighter leading-none text-zinc-100 dark:text-zinc-800 whitespace-nowrap">
          JOIN US
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight max-w-4xl mx-auto mb-6 font-serif">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            {t("cta.subtitle")}
          </p>

          {isSubmitted ? (
            <div className="max-w-md mx-auto bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white dark:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">You are on the list</h3>
              <p className="text-muted-foreground text-sm">
                Thank you for your interest in Smrithi. We will reach out when we are ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("cta.emailPlaceholder")}
                  required
                  className="flex-1 px-5 py-3 rounded-full border border-border bg-white dark:bg-zinc-800 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative flex items-center justify-center gap-0 bg-foreground text-background rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden disabled:opacity-50"
                >
                  <span className="text-sm pr-4">
                    {isLoading ? "Joining..." : t("cta.button")}
                  </span>
                  <span className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam. We will only contact you about Smrithi updates.
              </p>
            </form>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-20">
          <div className="text-center">
            <p className="text-6xl md:text-7xl font-light text-foreground">60M+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Seniors in India</p>
          </div>
          <div className="text-center">
            <p className="text-6xl md:text-7xl font-light text-foreground">3+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Platform integrations</p>
          </div>
          <div className="text-center">
            <p className="text-6xl md:text-7xl font-light text-foreground">1</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Voice companion</p>
          </div>
        </div>
      </div>
    </section>
  )
}
