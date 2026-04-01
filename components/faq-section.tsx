import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Smrithi work with existing apps?",
    answer:
      "Smrithi integrates with platforms like Khyaal, seniorshield, and ALYV through secure APIs. Once connected, Smrithi pulls relevant information and presents it through natural voice conversations. Seniors do not need to open multiple apps or remember different interfaces.",
  },
  {
    question: "Does my parent need to be tech-savvy to use Smrithi?",
    answer:
      "Not at all. Smrithi is designed for people who find technology challenging. There are no apps to navigate, no buttons to press, no screens to read. Everything happens through natural conversation. If they can talk, they can use Smrithi.",
  },
  {
    question: "How does emergency detection work?",
    answer:
      "Smrithi primarily uses your phone to detect falls or emergencies through motion sensors and voice pattern analysis. If you have a seniorshield device, Smrithi integrates with it for enhanced fall detection and emergency response. When something seems wrong, Smrithi first checks in with you through conversation. If needed, it automatically alerts your designated family members.",
  },
  {
    question: "What languages does Smrithi support?",
    answer:
      "Smrithi is built for India and supports Hindi, English, and regional languages. The voice interface adapts to how each person naturally speaks, including mixed language conversations that are common in Indian households.",
  },
  {
    question: "How is my family member's data protected?",
    answer:
      "Privacy is fundamental to Smrithi. Health data stays encrypted and is only shared with explicitly authorized family members. We do not sell data to third parties. Voice conversations are processed securely and are not stored unless the user opts in for improving their experience.",
  },
  {
    question: "When will Smrithi be available?",
    answer:
      "We are currently in development and testing with select families. Join the waitlist to be notified when Smrithi becomes available in your area. Early waitlist members will get priority access.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-32 px-6 pb-80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Frequently asked questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Smrithi. Have a question not listed here? Reach out to us.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 py-0 my-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-foreground/30"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
