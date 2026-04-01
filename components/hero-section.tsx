"use client"
import { useEffect, useState } from "react"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

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
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-[5] flex items-end justify-center"
        style={{
          transform: `translateY(${scrollProgress * 150}px)`,
          opacity: 1 - scrollProgress * 0.8,
          height: "100%",
        }}
      >
        <span
          className="block text-white font-bold text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] tracking-tighter select-none text-center leading-none"
          style={{ marginBottom: "0" }}
        >
          SMRITHI
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col min-h-[80vh] justify-end pb-32">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-left max-w-2xl">
            <div
              className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <h1 className="font-serif text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-normal leading-tight mb-6 text-white text-balance">
                <AnimatedText text="A voice companion that adapts to you, not the other way" delay={0.3} />
              </h1>
              <div
                className={`inline-block backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-6 py-4 mt-4 transition-all duration-1000 delay-[1200ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <p className="text-lg md:text-xl text-white">
                  One conversational friend that unifies the apps seniors already use
                </p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div
              className={`relative w-[200px] md:w-[240px] lg:w-[280px] will-change-transform transition-all duration-[1500ms] ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
              }`}
            >
              <img src="/images/iphone-frame.png" alt="Smrithi App" className="w-full h-auto relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
