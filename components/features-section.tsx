"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

const features = [
  "Voice-first companion that adapts to your communication style",
  "Unified access to Khyaal, seniorshield, and ALYV",
  "Medication reminders with voice confirmation",
  "Emergency detection with loved one alerts",
  "Walks and conversations, not just timers",
  "Learns your preferences over time",
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white dark:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{t("features.listening")}</p>
                    <p className="text-foreground font-medium" style={{ fontFamily: "'Times New Roman', Times, serif" }}>&ldquo;{t("features.goodMorning")}&rdquo;</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{t("features.medication")}</p>
                    <p className="text-foreground font-medium" style={{ fontFamily: "'Times New Roman', Times, serif" }}>{t("features.bloodPressure")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{t("features.familyConnected")}</p>
                    <p className="text-foreground font-medium" style={{ fontFamily: "'Times New Roman', Times, serif" }}>{t("features.raviNotified")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">
                {t("features.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("features.subtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex items-center p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-300 gap-3 py-2"
                >
                  <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white dark:text-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
