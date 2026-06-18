"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

/**
 * Subtle sticky bottom CTA for mobile. Appears after the hero and hides
 * automatically when the final CTA section is in view so it doesn't compete.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("top")
    const finalCta = document.getElementById("contact")

    let pastHero = false
    let atFinal = false
    const update = () => setVisible(pastHero && !atFinal)

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        pastHero = !entry.isIntersecting
        update()
      },
      { threshold: 0.1 },
    )
    const finalObs = new IntersectionObserver(
      ([entry]) => {
        atFinal = entry.isIntersecting
        update()
      },
      { threshold: 0.15 },
    )

    if (hero) heroObs.observe(hero)
    if (finalCta) finalObs.observe(finalCta)
    return () => {
      heroObs.disconnect()
      finalObs.disconnect()
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Link
        href="#contact"
        className="flex w-full max-w-[420px] items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#c08983] to-mocha-rose px-6 py-3.5 text-base font-medium tracking-wide text-primary-foreground shadow-[0_12px_30px_-8px_rgba(107,78,69,0.5)] ring-1 ring-inset ring-white/30"
      >
        <MessageCircle className="size-5" aria-hidden="true" strokeWidth={1.75} />
        無料相談する
      </Link>
    </div>
  )
}
