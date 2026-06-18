import { SectionEyebrow } from "@/components/lp/ornaments"
import { CtaButton } from "@/components/lp/cta-button"
import { ClipboardList, Feather, Monitor, Smartphone, GitBranch, CheckCircle2 } from "lucide-react"

const SERVICES = [
  {
    icon: ClipboardList,
    title: "構成設計",
    desc: "誰に、何を、どの順番で伝えるかを整理します。",
  },
  {
    icon: Feather,
    title: "コピー整理",
    desc: "サービスの魅力が自然に伝わる言葉へ整えます。",
  },
  {
    icon: Monitor,
    title: "デザイン制作",
    desc: "上品でやわらかい世界観を、LP全体に反映します。",
  },
  {
    icon: Smartphone,
    title: "スマホ最適化",
    desc: "スマホで読みやすく、申し込みやすい画面に整えます。",
  },
  {
    icon: GitBranch,
    title: "CTA導線設計",
    desc: "無料相談や申し込みにつながる流れを作ります。",
  },
  {
    icon: CheckCircle2,
    title: "公開前チェック",
    desc: "誤字・余白・スマホ表示・導線を確認します。",
  },
]

export function Service() {
  return (
    <section id="service" className="relative px-5 py-16">
      <div className="mx-auto max-w-[420px]">
        <SectionEyebrow number="04" label="Service" />

        <h2 className="mt-7 text-center text-balance text-[1.7rem] font-medium leading-snug text-charcoal">
          LENTO DESIGNが
          <br />
          <span className="text-mocha-rose">整えること</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[360px] text-pretty text-center text-sm leading-relaxed text-mocha-brown/85">
          見た目のデザインだけでなく、伝える順番・言葉・スマホでの見やすさ・申し込み導線まで、LP全体を丁寧に整えます。
        </p>

        <ul className="mt-9 flex flex-col gap-3.5">
          {SERVICES.map((s, i) => (
            <li
              key={s.title}
              className="card-soft flex items-center gap-4 rounded-2xl border border-border/60 px-4 py-4"
            >
              <span
                className="font-display text-3xl italic leading-none text-mocha-rose/70"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush/20">
                <s.icon className="size-5 text-mocha-rose" aria-hidden="true" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug text-mocha-rose">{s.title}</h3>
                <p className="mt-1 text-[0.82rem] leading-relaxed text-mocha-brown/85">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-warm-ivory/70 px-5 py-7 text-center">
          <span className="inline-block rounded-full border border-mocha-rose/40 bg-card/70 px-4 py-1.5 text-xs text-mocha-rose">
            まだ内容が固まっていなくても大丈夫◎
          </span>
          <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-charcoal">
            あなたのサービスにぴったりのLPを、
            <br />
            <span className="text-mocha-rose">一緒に整えていきましょう。</span>
          </p>
          <div className="mt-6">
            <CtaButton href="#contact">無料相談でLPの方向性を相談する</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
