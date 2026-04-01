"use client"

import { Link2, MessageCircle, Heart } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

const steps = [
  {
    icon: Link2,
    step: "01",
    titleKey: "howItWorks.step1.title",
    description: "Smrithi connects with the apps and services seniors already know and trust, bringing them together into one unified experience.",
  },
  {
    icon: MessageCircle,
    step: "02",
    titleKey: "howItWorks.step2.title",
    description: "No menus to navigate, no buttons to find. Just natural conversation. Smrithi learns your preferences and communication style over time.",
  },
  {
    icon: Heart,
    step: "03",
    titleKey: "howItWorks.step3.title",
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
        className={`text-foreground h-12 w-12 ${isVisible ? "animate-draw-icon" : ""}`}
        strokeWidth={1}
        style={{
          strokeDasharray: isVisible ? undefined : 1000,
          strokeDashoffset: isVisible ? undefined : 1000,
        }}
      />
    </div>
  )
}

export function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="py-32 px-6 relative overflow-hidden">
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
            {t("howItWorks.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 border border-white/50 dark:border-zinc-700/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Step {item.step}
                </span>
              </div>
              <div className="mb-6 flex justify-center">
                <AnimatedIcon Icon={item.icon} delay={index * 0.2} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground">{t(item.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
