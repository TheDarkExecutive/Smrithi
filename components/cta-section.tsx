"use client"

import { ArrowUpRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

function useRushCount(target: number, duration: number = 2000, suffix: string = "") {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for rush effect - starts fast, slows at end
      const easeOutExpo = 1 - Math.pow(2, -10 * progress)
      
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutExpo)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target, duration])

  return { count, elementRef, suffix }
}

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()
  
  const seniors = useRushCount(60, 1500)
  const platforms = useRushCount(3, 1200)
  const companion = useRushCount(1, 800)

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
          <div className="text-center" ref={seniors.elementRef}>
            <p className="text-6xl md:text-7xl font-light text-foreground tabular-nums">
              {seniors.count}M+
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Seniors in India</p>
          </div>
          <div className="text-center" ref={platforms.elementRef}>
            <p className="text-6xl md:text-7xl font-light text-foreground tabular-nums">
              {platforms.count}+
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Platform integrations</p>
          </div>
          <div className="text-center" ref={companion.elementRef}>
            <p className="text-6xl md:text-7xl font-light text-foreground tabular-nums">
              {companion.count}
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Voice companion</p>
          </div>
        </div>
      </div>
    </section>
  )
}
