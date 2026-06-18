import { MessageSquare, ClipboardCheck, HeartHandshake, Check, CalendarDays } from "lucide-react"
import { SectionEyebrow, GoldDiamond } from "@/components/lp/ornaments"
import { CtaButton } from "@/components/lp/cta-button"

const REASSURE = [
  {
    icon: MessageSquare,
    title: "内容が固まって\nいなくても大丈夫",
    desc: "整理から一緒にサポートします",
  },
  {
    icon: ClipboardCheck,
    title: "LPが必要かどうかの\n相談だけでもOK",
    desc: "方向性の確認からお手伝いします",
  },
  {
    icon: HeartHandshake,
    title: "無理な営業や\n売り込みは一切なし",
    desc: "安心してご相談いただけます",
  },
]

export function FinalCta() {
  return (
    <section id="contact" className="lp-backdrop relative overflow-hidden px-5 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 size-44 rounded-full bg-blush/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-[420px]">
        <SectionEyebrow number="08" label="Final CTA" />

        <h2 className="mt-7 text-center text-balance text-[1.7rem] font-medium leading-snug text-charcoal">
          あなたのサービスの魅力が、
          <br />
          <span className="text-mocha-rose">ちゃんと届くLPへ。</span>
        </h2>

        <div className="mt-6 flex items-center justify-center gap-3 text-gold">
          <span className="gold-line h-px w-12" aria-hidden="true" />
          <GoldDiamond />
          <span className="gold-line h-px w-12" aria-hidden="true" />
        </div>

        <p className="mx-auto mt-6 max-w-[360px] text-pretty text-center text-sm leading-relaxed text-mocha-brown/90">
          世界観も、伝える順番も、申し込みまでの流れも。
          ひとつずつ丁寧に整えて、あなたのサービスに合うLPの方向性を
          <span className="font-medium text-mocha-rose">一緒に</span>考えます。
        </p>

        {/* reassurance cards */}
        <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {REASSURE.map((r) => (
            <li
              key={r.title}
              className="card-soft relative rounded-2xl border border-border/60 px-4 py-6 text-center"
            >
              <span className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Check className="size-3.5" aria-hidden="true" strokeWidth={2.5} />
              </span>
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-blush/20">
                <r.icon className="size-6 text-mocha-rose" aria-hidden="true" strokeWidth={1.6} />
              </span>
              <p className="mt-4 whitespace-pre-line text-sm font-semibold leading-snug text-charcoal">
                {r.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-mocha-brown/80">{r.desc}</p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-9">
          <p className="mb-4 flex items-center justify-center gap-3 text-sm tracking-wide text-mocha-brown/80">
            <span className="gold-line h-px w-8" aria-hidden="true" />
            まずはお気軽にご相談ください
            <span className="gold-line h-px w-8" aria-hidden="true" />
          </p>
          <CtaButton href="#contact">無料相談でLPの方向性を相談する</CtaButton>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-mocha-brown/75">
            <CalendarDays className="size-4 text-gold" aria-hidden="true" />
            相談は無料・30分程度・オンラインで完結
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-card/70 px-5 py-7 text-center shadow-sm">
          <p className="text-pretty text-sm leading-relaxed text-mocha-brown">
            まだ内容が固まっていなくても大丈夫です。
          </p>
          <p className="mt-1.5 text-base font-medium leading-relaxed text-charcoal">
            まずは、今のサービスにどんなLPが合うか
            <br />
            <span className="text-mocha-rose">一緒に整理しましょう。</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-warm-ivory/60 px-5 py-10 text-center">
      <p className="font-display text-base tracking-[0.2em] text-mocha-brown">LENTO DESIGN</p>
      <p className="mt-3 text-xs leading-relaxed text-mocha-brown/70">
        女性向けブランド・個人サロン・講座主宰者のための上質LP制作
      </p>
      <p className="mt-6 text-[0.7rem] text-mocha-brown/60">
        © {new Date().getFullYear()} LENTO DESIGN. All rights reserved.
      </p>
    </footer>
  )
}
