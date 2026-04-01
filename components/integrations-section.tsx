"use client"

import { motion } from "framer-motion"

const integrations = [
  {
    name: "Khyaal",
    description: "Health monitoring and wellness tracking",
    whatSmrithiDoes: "Smrithi pulls health data from Khyaal and reminds you about wellness activities through natural conversation, making health management feel like chatting with a caring friend.",
    color: "bg-teal-50",
    borderColor: "border-teal-200",
  },
  {
    name: "seniorshield",
    description: "Safety and emergency response",
    whatSmrithiDoes: "Smrithi integrates with seniorshield to detect emergencies and automatically alert family members, while keeping you informed through calm, reassuring voice updates.",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    name: "ALYV",
    description: "Active lifestyle and engagement",
    whatSmrithiDoes: "Smrithi connects with ALYV to encourage walks, social activities, and engagement. Not with notifications, but with friendly conversation that motivates and accompanies.",
    color: "bg-rose-50",
    borderColor: "border-rose-200",
  },
]

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center pointer-events-none z-0">
        <span className="font-bold text-center text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] leading-none tracking-tighter text-zinc-100 whitespace-nowrap">
          INTEGRATIONS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">
            Works with what you already trust
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Smrithi brings together the platforms seniors in India already rely on, creating one seamless voice experience.
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
                <h3 className="text-2xl font-medium text-foreground mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
              <div className="pt-6 border-t border-zinc-200">
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
