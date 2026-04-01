"use client"

import { useState, useEffect, useRef } from "react"

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0">
        <span className="font-bold text-center text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-tighter text-zinc-100 whitespace-nowrap">
          PROBLEM
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={sectionRef} className="relative px-6 lg:px-8 py-16 lg:py-20 mb-16 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/7aecbceb-cbd3-4cbd-901c-dd0125d41525.png"
              alt="Senior using technology"
              className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                isVisible ? "scale-100" : "scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-medium mb-4">The challenge</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white text-balance mb-8">
              Technology should adapt to people, not the other way around
            </h2>
            <div className="space-y-6 text-white/90 leading-relaxed text-lg">
              <p>
                Elderly users in India face a fragmented landscape of apps for medication reminders, fitness tracking, health monitoring, and companionship. Each app demands the user adapt to its interface, its logic, its way of doing things.
              </p>
              <p>
                For many seniors, this creates frustration rather than support. Multiple logins, different interfaces, conflicting notifications. The technology meant to help them becomes another burden.
              </p>
              <p>
                Smrithi reverses this entirely. Instead of asking seniors to learn multiple apps, we bring everything together through one conversational voice interface that learns and adapts to each individual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
