import { cn } from "@/lib/utils"

/** A thin gold horizontal divider line. */
export function GoldLine({ className }: { className?: string }) {
  return <span className={cn("gold-line block w-full", className)} aria-hidden="true" />
}

/** A small gold diamond/floret ornament used as a centered accent. */
export function GoldDiamond({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center justify-center text-gold", className)}
      aria-hidden="true"
    >
      <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
        <path
          d="M11 1.5 13 6l-2 4.5L9 6l2-4.5Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path d="M1 6h7M14 6h7" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="11" cy="6" r="0.9" fill="currentColor" />
      </svg>
    </span>
  )
}

/**
 * Decorative section eyebrow: number + English label flanked by gold lines,
 * matching the comps (e.g. "02 / Problem").
 */
export function SectionEyebrow({
  number,
  label,
  className,
}: {
  number: string
  label: string
  className?: string
}) {
  return (
    <div className={cn("flex flex-col items-center gap-2 text-center", className)}>
      <div className="flex items-center gap-3 text-mocha-rose">
        <span className="gold-line h-px w-10 sm:w-14" aria-hidden="true" />
        <span className="font-display text-3xl italic leading-none text-mocha-rose">
          {number}
        </span>
        <span className="gold-line h-px w-10 sm:w-14" aria-hidden="true" />
      </div>
      <p className="font-display text-sm tracking-[0.3em] text-mocha-rose/90">{label}</p>
      <GoldDiamond />
    </div>
  )
}
