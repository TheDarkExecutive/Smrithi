"use client"

export function BrandBanner() {
  return (
    <div className="w-full overflow-hidden pointer-events-none select-none py-4 md:py-6 bg-background dark:bg-zinc-950">
      <span
        className="block font-normal text-[28vw] sm:text-[26vw] md:text-[24vw] lg:text-[22vw] xl:text-[20vw] tracking-tighter leading-none w-full text-center"
        style={{ fontFamily: "'Times New Roman', Times, serif", color: '#C4824A' }}
      >
        SMRITHI
      </span>
    </div>
  )
}
