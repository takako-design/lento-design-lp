import { SectionEyebrow } from "@/components/lp/ornaments"
import { Camera, Sparkles, PenTool, Smartphone, HelpCircle, ShieldX } from "lucide-react"

const PROBLEMS = [
  {
    icon: Camera,
    title: "Instagramだけでは詳しく伝えきれない",
  },
  {
    icon: Sparkles,
    title: "世界観はあるのに申し込みにつながらない",
  },
  {
    icon: PenTool,
    title: "自分で作ると安っぽく見えてしまう",
  },
  {
    icon: Smartphone,
    title: "スマホで見にくく、途中で離脱されている気がする",
  },
  {
    icon: HelpCircle,
    title: "価格や流れをまとめる場所がない",
  },
  {
    icon: ShieldX,
    title: "強い営業感は出したくない",
  },
]

export function Problem() {
  return (
    <section id="problem" className="relative px-5 py-16">
      <div className="mx-auto max-w-[420px]">
        <SectionEyebrow number="02" label="Problem" />

        <h2 className="mt-7 text-center text-balance text-[1.7rem] font-medium leading-snug text-charcoal">
          こんなお悩み、
          <br />
          <span className="text-mocha-rose">ありませんか？</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[360px] text-pretty text-center text-sm leading-relaxed text-mocha-brown/85">
          サービスの魅力はあるのに、伝え方や導線が整っていないだけで、申し込みにつながりにくくなっているかもしれません。
        </p>

        <ul className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {PROBLEMS.map((p) => (
            <li
              key={p.title}
              className="card-soft flex items-start gap-3.5 rounded-2xl border border-border/60 p-4"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush/25">
                <p.icon className="size-5 text-mocha-rose" aria-hidden="true" strokeWidth={1.6} />
              </span>
              <p className="pt-1 text-[0.92rem] font-medium leading-relaxed text-charcoal">
                {p.title}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-9 rounded-2xl border border-gold/40 bg-warm-ivory/70 px-5 py-6 text-center">
          <p className="text-pretty text-sm leading-relaxed text-mocha-brown">
            大切なのは、ただ綺麗に見せることではなく、
            <br className="hidden sm:block" />
            見る人が迷わず
            <span className="font-medium text-mocha-rose">「相談してみたい」</span>
            と思える流れを整えることです。
          </p>
        </div>
      </div>
    </section>
  )
}
