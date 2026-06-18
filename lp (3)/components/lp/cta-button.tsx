import Link from "next/link"
import { ChevronRight, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type CtaButtonProps = {
  href?: string
  children: React.ReactNode
  variant?: "primary" | "outline"
  withIcon?: boolean
  className?: string
}

/** Primary / outline CTA used across the page. All CTAs point to #contact. */
export function CtaButton({
  href = "#contact",
  children,
  variant = "primary",
  withIcon = true,
  className,
}: CtaButtonProps) {
  const base =
    "group relative inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-base font-medium tracking-wide transition-all duration-300 sm:text-lg"

  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={cn(
          base,
          "border border-gold/60 bg-card/70 text-mocha-brown shadow-sm hover:bg-card",
          className,
        )}
      >
        <span>{children}</span>
        {withIcon && <ChevronRight className="size-5 text-mocha-rose" aria-hidden="true" />}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        base,
        "bg-gradient-to-b from-[#c08983] to-mocha-rose text-primary-foreground shadow-[0_14px_30px_-12px_rgba(183,126,120,0.85)] ring-1 ring-inset ring-white/30 hover:from-mocha-rose hover:to-[#a86d67] hover:shadow-[0_18px_36px_-12px_rgba(183,126,120,0.95)]",
        className,
      )}
    >
      {withIcon && (
        <MessageCircle className="size-5 shrink-0" aria-hidden="true" strokeWidth={1.75} />
      )}
      <span className="text-balance">{children}</span>
      <ChevronRight
        className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  )
}
