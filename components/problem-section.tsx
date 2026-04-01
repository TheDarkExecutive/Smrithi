"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="problem" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={sectionRef} className="relative px-6 lg:px-8 py-16 lg:py-20 mb-16 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/seniors-sunset.png"
              alt="The challenge of technology for seniors"
              className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                isVisible ? "scale-100" : "scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-medium mb-4">{t("problem.label")}</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white text-balance mb-8">
              {t("problem.title")}
            </h2>
            <div className="space-y-6 text-white/90 leading-relaxed text-lg">
              <p>{t("problem.p1")}</p>
              <p>{t("problem.p2")}</p>
              <p>{t("problem.p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
