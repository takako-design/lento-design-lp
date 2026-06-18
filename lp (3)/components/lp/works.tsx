import Link from "next/link"
import { ChevronRight, Info } from "lucide-react"
import { SectionEyebrow } from "@/components/lp/ornaments"
import { CtaButton } from "@/components/lp/cta-button"

const WORKS = [
  {
    brand: "LUNÉA PILATES",
    title: "女性専用ピラティスLP",
    category: "Sage Wellness / Concept Work",
    tag: "Concept Work",
    desc: "心地よさと信頼感を大切に、初めての方でも安心して通えるやさしい印象に整えたデザイン。",
    sample: "自分らしく、\n整える時間を。",
    accent: "from-[#eef1ea] to-[#e3e7dd]",
    ink: "#5e6b52",
  },
  {
    brand: "MÉLIA NOIR",
    title: "ファッションブランドLP",
    category: "Luxury Feminine Mode / Concept Work",
    tag: "Concept Work",
    desc: "上質さと余白を生かし、ブランドの世界観が静かに伝わるモードな構成のデザイン。",
    sample: "わたしを、\n美しく着る。",
    accent: "from-[#f3ece9] to-[#e7d9d3]",
    ink: "#5b4a44",
  },
  {
    brand: "RITUEL AROMA SALON",
    title: "プライベートアロマサロン予約LP",
    category: "Quiet Relaxation / Concept Work",
    tag: "Concept Work",
    desc: "やわらかな色合いで癒しの世界観を表現し、予約までスムーズに導く導線設計。",
    sample: "静かに、\nととのう香り。",
    accent: "from-[#f7efe8] to-[#f0ddd2]",
    ink: "#8a5d4e",
  },
  {
    brand: "LENTO DESIGN",
    title: "上質LP制作サービスLP",
    category: "Feminine LP Design / Concept Work",
    tag: "自主制作サンプル",
    desc: "女性向けサービスの魅力を、美しく申し込みにつなげるための上質なLPデザイン。",
    sample: "魅力を、\n伝わるカタチに。",
    accent: "from-[#fbeee9] to-[#f3d6cf]",
    ink: "#b77e78",
  },
]

export function Works() {
  return (
    <section id="works" className="lp-backdrop relative px-5 py-16">
      <div className="mx-auto max-w-[420px]">
        <SectionEyebrow number="05" label="Works" />

        <h2 className="mt-7 text-center text-balance text-[1.7rem] font-medium leading-snug text-charcoal">
          <span className="text-mocha-rose">制作事例</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[360px] text-pretty text-center text-sm leading-relaxed text-mocha-brown/85">
          女性向けサービスに合う、上品で見やすいLPデザインを中心に制作しています。世界観だけでなく、スマホでの読みやすさや申し込み導線まで意識して整えます。
        </p>

        <p className="mx-auto mt-5 flex max-w-[360px] items-start justify-center gap-2 rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-xs leading-relaxed text-mocha-brown/80">
          <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
          掲載している制作事例には、自主制作サンプル・コンセプトワークを含みます。
        </p>

        <ul className="mt-9 flex flex-col gap-5">
          {WORKS.map((w) => (
            <li
              key={w.brand}
              className="card-soft overflow-hidden rounded-2xl border border-border/60"
            >
              {/* preview */}
              <div className={`relative bg-gradient-to-br ${w.accent} px-6 py-8`}>
                <span className="absolute right-4 top-4 rounded-full bg-card/85 px-3 py-1 text-[0.62rem] font-medium tracking-wide text-mocha-brown shadow-sm">
                  {w.tag}
                </span>
                <p
                  className="font-display text-[0.62rem] tracking-[0.22em]"
                  style={{ color: w.ink }}
                >
                  {w.brand}
                </p>
                <p
                  className="mt-3 whitespace-pre-line text-xl font-medium leading-snug"
                  style={{ color: w.ink }}
                >
                  {w.sample}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.62rem] text-white shadow-sm"
                  style={{ backgroundColor: w.ink }}
                >
                  View Concept
                </span>
              </div>
              {/* meta */}
              <div className="px-5 py-5">
                <p className="text-[0.7rem] tracking-wide text-mocha-brown/70">{w.category}</p>
                <h3 className="mt-1.5 text-base font-semibold text-charcoal">{w.title}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-mocha-brown/85">{w.desc}</p>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-mocha-rose transition-colors hover:text-[#a86d67]"
                >
                  詳しく見る
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>

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
