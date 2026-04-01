"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

const integrations = [
  {
    name: "Khyaal",
    description: "Health monitoring and wellness tracking",
    whatSmrithiDoes: "Smrithi pulls health data from Khyaal and reminds you about wellness activities through natural conversation, making health management feel like chatting with a caring friend.",
    color: "bg-teal-50 dark:bg-teal-900/30",
    borderColor: "border-teal-200 dark:border-teal-700",
  },
  {
    name: "seniorshield",
    description: "Safety and emergency response",
    whatSmrithiDoes: "Smrithi integrates with seniorshield to detect emergencies and automatically alert family members, while keeping you informed through calm, reassuring voice updates.",
    color: "bg-amber-50 dark:bg-amber-900/30",
    borderColor: "border-amber-200 dark:border-amber-700",
  },
  {
    name: "ALYV",
    description: "Active lifestyle and engagement",
    whatSmrithiDoes: "Smrithi connects with ALYV to encourage walks, social activities, and engagement. Not with notifications, but with friendly conversation that motivates and accompanies.",
    color: "bg-rose-50 dark:bg-rose-900/30",
    borderColor: "border-rose-200 dark:border-rose-700",
  },
]

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [hasTyped, setHasTyped] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped) {
          setIsTyping(true)
          setHasTyped(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasTyped])

  useEffect(() => {
    if (!isTyping) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isTyping, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <h2 ref={ref} className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">
      {displayText}
      <span className={`inline-block w-[3px] h-[1em] bg-foreground ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </h2>
  )
}

export function IntegrationsSection() {
  const { t } = useLanguage()

  return (
    <section id="integrations" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <TypewriterText text={t("integrations.title")} />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("integrations.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl border ${integration.color} ${integration.borderColor} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-foreground mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">What Smrithi does</p>
                <p className="text-sm text-foreground leading-relaxed">{integration.whatSmrithiDoes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
