"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV = [
  { label: "Service", href: "#service" },
  { label: "Works", href: "#works" },
  { label: "Flow", href: "#flow" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[440px] items-center justify-between px-5">
        <Link
          href="#top"
          className="font-display text-lg tracking-[0.18em] text-mocha-brown"
          onClick={() => setOpen(false)}
        >
          LENTO DESIGN
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="メインナビゲーション">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm tracking-wide text-mocha-brown/80 transition-colors hover:text-mocha-rose"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="rounded-full bg-mocha-rose px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-[#a86d67]"
          >
            無料相談
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-mocha-brown md:hidden"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-ivory/95 px-5 py-3 md:hidden"
          aria-label="モバイルナビゲーション"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-3 font-display text-sm tracking-wide text-mocha-brown/90"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
