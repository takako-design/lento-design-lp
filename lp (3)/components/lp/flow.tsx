import { SectionEyebrow } from "@/components/lp/ornaments"
import { CtaButton } from "@/components/lp/cta-button"
import {
  MessageCircle,
  HeartHandshake,
  FileEdit,
  Monitor,
  SmartphoneCharging,
  Globe,
} from "lucide-react"

const STEPS = [
  {
    icon: MessageCircle,
    title: "無料相談",
    desc: "今のお悩みや、作りたいLPの方向性をお聞きします。",
  },
  {
    icon: HeartHandshake,
    title: "ヒアリング",
    desc: "サービス内容・ターゲット・世界観・必要な情報を整理します。",
  },
  {
    icon: FileEdit,
    title: "構成・コピー整理",
    desc: "どの順番で何を伝えるか、LP全体の流れを作ります。",
  },
  {
    icon: Monitor,
    title: "デザイン制作",
    desc: "世界観に合わせて、スマホで見やすいデザインに整えます。",
  },
  {
    icon: SmartphoneCharging,
    title: "実装・調整",
    desc: "表示や余白、CTA導線を確認しながら仕上げます。",
  },
  {
    icon: Globe,
    title: "公開",
    desc: "公開前チェックを行い、必要に応じて微調整します。",
  },
]

export function Flow() {
  return (
    <section id="flow" className="relative px-5 py-16">
      <div className="mx-auto max-w-[420px]">
        <SectionEyebrow number="06" label="Flow" />

        <h2 className="mt-7 text-center text-balance text-[1.7rem] font-medium leading-snug text-charcoal">
          ご相談から公開までの
          <span className="text-mocha-rose">流れ</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[360px] text-pretty text-center text-sm leading-relaxed text-mocha-brown/85">
          はじめてLPを依頼する方でも安心できるように、必要な情報を一緒に整理しながら進めます。
        </p>

        <ol className="relative mt-9 flex flex-col gap-3.5">
          {/* vertical connector */}
          <span
            aria-hidden="true"
            className="absolute left-[1.55rem] top-6 bottom-6 w-px bg-[repeating-linear-gradient(to_bottom,var(--color-gold)_0_4px,transparent_4px_9px)] opacity-50"
          />
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="card-soft relative flex items-center gap-4 rounded-2xl border border-border/60 px-4 py-4"
            >
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-blush/20 ring-4 ring-card">
                <s.icon className="size-5 text-mocha-rose" aria-hidden="true" strokeWidth={1.6} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-display text-xl italic leading-none text-mocha-rose/70"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-mocha-rose">{s.title}</h3>
                </div>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-mocha-brown/85">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-warm-ivory/70 px-5 py-7 text-center">
          <p className="text-pretty text-sm leading-relaxed text-mocha-brown">
            「何を準備したらいいかわからない…」という方も大丈夫。
          </p>
          <p className="mt-1.5 text-lg font-medium leading-relaxed text-charcoal">
            一つずつ丁寧にサポートしますので、
            <br />
            <span className="text-mocha-rose">安心してご相談ください。</span>
          </p>
          <div className="mt-6">
            <CtaButton href="#contact">無料相談でLPの方向性を相談する</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
