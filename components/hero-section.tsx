"use client"
import { useEffect, useState } from "react"
import { AnimatedText } from "./animated-text"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let rafId: number
    let currentProgress = 0

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 400
      const targetProgress = Math.min(scrollY / maxScroll, 1)

      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1

        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }

      cancelAnimationFrame(rafId)
      smoothUpdate()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const borderRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 top-0">
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            height: `${heightVh}vh`,
          }}
        >
          <img src="/images/seniors-lakeside.png" alt="Elderly couple enjoying a peaceful moment by the lake" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-end min-h-[70vh]">
        <div className="mb-24 relative">
          <div
            className="absolute -bottom-16 left-0 right-0 overflow-hidden pointer-events-none z-[1]"
            style={{
              transform: `translateY(${scrollProgress * 100}px)`,
              opacity: 1 - scrollProgress * 0.8,
            }}
          >
            <span
              className="block text-white/20 font-bold text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] tracking-tighter select-none leading-none"
            >
              SMRITHI
            </span>
          </div>
          <div
            className={`relative z-[2] transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-normal leading-tight mb-6 w-full max-w-3xl text-white text-justify">
              <AnimatedText text={t("hero.tagline")} delay={0.3} />
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
