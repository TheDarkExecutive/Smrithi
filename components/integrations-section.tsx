"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Activity } from "lucide-react"

const integrations = [
  {
    name: "Khyaal",
    description: "Health monitoring and wellness tracking",
    whatSmrithiDoes: "Smrithi pulls health data from Khyaal and reminds you about wellness activities through natural conversation, making health management feel like chatting with a caring friend.",
    icon: Heart,
    gradient: "from-teal-400 to-emerald-500",
    bgGradient: "from-teal-50 to-emerald-50",
    iconBg: "bg-teal-500",
    borderColor: "border-teal-200/60",
    shadowColor: "shadow-teal-500/10",
  },
  {
    name: "seniorshield",
    description: "Safety and emergency response",
    whatSmrithiDoes: "Smrithi integrates with seniorshield to detect emergencies and automatically alert family members, while keeping you informed through calm, reassuring voice updates.",
    icon: Shield,
    gradient: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-500",
    borderColor: "border-amber-200/60",
    shadowColor: "shadow-amber-500/10",
  },
  {
    name: "ALYV",
    description: "Active lifestyle and engagement",
    whatSmrithiDoes: "Smrithi connects with ALYV to encourage walks, social activities, and engagement. Not with notifications, but with friendly conversation that motivates and accompanies.",
    icon: Activity,
    gradient: "from-rose-400 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-500",
    borderColor: "border-rose-200/60",
    shadowColor: "shadow-rose-500/10",
  },
]

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-zinc-50/50 to-white">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center pointer-events-none z-0">
        <span className="font-bold text-center text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] leading-none tracking-tighter text-zinc-100/80 whitespace-nowrap">
          INTEGRATIONS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-zinc-100 rounded-full mb-6">
              Seamless Connections
            </span>
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">
              Works with what you already trust
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Smrithi brings together the platforms seniors in India already rely on, creating one seamless voice experience.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div 
                className={`relative p-8 rounded-3xl border bg-gradient-to-br ${integration.bgGradient} ${integration.borderColor} transition-all duration-500 hover:shadow-2xl ${integration.shadowColor} hover:-translate-y-2 overflow-hidden`}
              >
                {/* Decorative gradient orb */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${integration.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${integration.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <integration.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{integration.description}</p>
                  </div>

                  {/* Divider */}
                  <div className={`h-px bg-gradient-to-r ${integration.gradient} opacity-30 mb-6`} />

                  {/* Content */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">What Smrithi does</p>
                    <p className="text-sm text-foreground leading-relaxed">{integration.whatSmrithiDoes}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom connector line */}
        <div className="flex justify-center mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-300 to-zinc-300" />
            <div className="w-3 h-3 rounded-full bg-foreground" />
            <span className="text-sm text-muted-foreground font-medium">All unified through Smrithi</span>
            <div className="w-3 h-3 rounded-full bg-foreground" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-zinc-300 to-zinc-300" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
