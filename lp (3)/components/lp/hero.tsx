import { CtaButton } from "@/components/lp/cta-button"
import { GoldDiamond } from "@/components/lp/ornaments"
import { LayoutTemplate, Smartphone, FileText, Sparkles } from "lucide-react"

const CHIPS = [
  { icon: Sparkles, label: "女性向けデザイン" },
  { icon: Smartphone, label: "スマホ最適化" },
  { icon: FileText, label: "情報整理" },
  { icon: LayoutTemplate, label: "LP構成・CTA設計" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-14 pt-10">
      {/* soft petals */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-8 size-44 rounded-full bg-blush/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-40 size-40 rounded-full bg-pink-beige/40 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-[420px] flex-col items-center text-center">
        {/* label chip */}
        <p className="rounded-full border border-gold/50 bg-card/70 px-4 py-2 text-xs leading-relaxed text-mocha-brown/90 shadow-sm">
          女性向けブランド・個人サロン・講座主宰者のためのLP制作
        </p>

        {/* headline */}
        <h1 className="mt-7 text-balance text-[1.9rem] font-medium leading-[1.5] text-charcoal">
          女性向けサービスの魅力を、
          <br />
          <span className="mt-1 inline-block text-[3.1rem] font-semibold leading-none text-mocha-rose">
            美しく、
          </span>
          <br />
          <span className="text-[2.6rem] font-semibold leading-tight text-mocha-rose">
            申し込み
          </span>
          <span className="text-charcoal">につながる</span>
          <br />
          <span className="font-display text-[3rem] italic leading-none text-gold">LP</span>
          <span className="text-charcoal">へ。</span>
        </h1>

        <div className="mt-6 flex items-center gap-3 text-gold">
          <span className="gold-line h-px w-12" aria-hidden="true" />
          <GoldDiamond />
          <span className="gold-line h-px w-12" aria-hidden="true" />
        </div>

        <p className="mt-6 text-pretty text-[0.95rem] leading-relaxed text-mocha-brown/90">
          世界観・導線・スマホの見やすさまで整える、
          <br />
          女性向けブランドのための
          <span className="font-medium text-mocha-rose">上質LP制作</span>。
        </p>

        {/* CTAs */}
        <div className="mt-8 flex w-full flex-col gap-3">
          <CtaButton href="#contact">無料相談する</CtaButton>
          <CtaButton href="#works" variant="outline">
            制作例を見る
          </CtaButton>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-mocha-brown/70">
          まだ内容が固まっていなくても大丈夫です。
        </p>

        {/* trust chips */}
        <ul className="mt-7 grid w-full grid-cols-2 gap-2.5">
          {CHIPS.map((chip) => (
            <li
              key={chip.label}
              className="flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-card/70 px-3 py-2.5 text-xs text-mocha-brown shadow-sm"
            >
              <chip.icon className="size-4 text-mocha-rose" aria-hidden="true" strokeWidth={1.75} />
              {chip.label}
            </li>
          ))}
        </ul>

        {/* sample LP mockups */}
        <div className="mt-10 w-full">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[290px]">
      <div className="absolute inset-x-0 -bottom-4 mx-auto h-10 w-[80%] rounded-full bg-mocha-rose/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.2rem] border border-border/70 bg-card p-2 shadow-[0_28px_60px_-30px_rgba(107,78,69,0.5)] ring-1 ring-white/50">
        <div className="overflow-hidden rounded-[1.7rem]">
          {/* screen */}
          <div className="bg-gradient-to-b from-warm-ivory to-[#f7e9e2] px-5 pb-6 pt-7 text-left">
            <p className="font-display text-[0.7rem] tracking-[0.25em] text-mocha-brown/70">
              LENTO DESIGN
            </p>
            <h3 className="mt-4 font-display text-2xl leading-tight text-mocha-rose">
              Brand LP
              <br />
              Sample
            </h3>
            <p className="mt-3 text-[0.78rem] leading-relaxed text-mocha-brown/85">
              世界観が伝わる、
              <br />
              申し込み導線へ。
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-mocha-rose px-4 py-1.5 text-[0.72rem] text-primary-foreground shadow-sm">
              View Concept
            </span>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {["世界観設計", "導線設計", "スマホ最適化"].map((t) => (
                <div
                  key={t}
                  className="rounded-lg border border-border/60 bg-card/70 px-1.5 py-2 text-center text-[0.55rem] leading-tight text-mocha-brown/80"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
