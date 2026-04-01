"use client"

import { Link2, MessageCircle, Heart } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Integrates with trusted platforms",
    description: "Smrithi connects with the apps and services seniors already know and trust, bringing them together into one unified experience.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Conversational voice interface",
    description: "No menus to navigate, no buttons to find. Just natural conversation. Smrithi learns your preferences and communication style over time.",
  },
  {
    icon: Heart,
    step: "03",
    title: "Unified companion for daily life",
    description: "Medication reminders with voice confirmation. Walks and conversations, not just timers. Emergency detection with alerts to loved ones.",
  },
]

function AnimatedIcon({ Icon, delay = 0 }: { Icon: React.ElementType; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (iconRef.current) {
      observer.observe(iconRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={iconRef} className="relative">
      <Icon
        className={`text-foreground h-10 w-10 ${isVisible ? "animate-draw-icon" : ""}`}
        strokeWidth={1.5}
        style={{
          strokeDasharray: isVisible ? undefined : 1000,
          strokeDashoffset: isVisible ? undefined : 1000,
        }}
      />
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center pointer-events-none z-0">
        <span className="font-bold text-center text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] leading-none tracking-tighter text-zinc-100 whitespace-nowrap">
          HOW IT WORKS
        </span>
      </div>

      <style jsx>{`
        @keyframes drawPath {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }
        :global(.animate-draw-icon) :global(path),
        :global(.animate-draw-icon) :global(line),
        :global(.animate-draw-icon) :global(polyline),
        :global(.animate-draw-icon) :global(circle),
        :global(.animate-draw-icon) :global(rect) {
          animation: drawPath 2s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">
            Simple by design
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Smrithi works the way conversation works. No learning curve, no technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl text-center backdrop-blur-xl bg-white/60 border border-white/40 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider bg-white/50 rounded-full border border-white/60">
                    Step {item.step}
                  </span>
                </div>
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/70 border border-white/50 flex items-center justify-center shadow-sm">
                    <AnimatedIcon Icon={item.icon} delay={index * 0.2} />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
