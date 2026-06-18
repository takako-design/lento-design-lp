"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionEyebrow } from "@/components/lp/ornaments"
import { CtaButton } from "@/components/lp/cta-button"

const FAQS = [
  {
    q: "まだ内容が固まっていなくても相談できますか？",
    a: "はい、大丈夫です。サービス内容や掲載する情報の整理から一緒に進められます。",
  },
  {
    q: "写真や文章がなくても依頼できますか？",
    a: "可能です。必要な素材や文章の方向性も、ヒアリングしながら整理します。",
  },
  {
    q: "スマホ対応はできますか？",
    a: "はい。女性向けサービスの閲覧環境を考え、スマホで見やすく申し込みやすい構成を大切にしています。",
  },
  {
    q: "制作期間はどれくらいですか？",
    a: "内容やボリュームによって変わりますが、まずは無料相談で必要な範囲を確認します。",
  },
  {
    q: "まず相談だけでも大丈夫ですか？",
    a: "はい。いきなり依頼ではなく、LPが必要かどうか、どんな方向性が合うかの相談から可能です。",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="lp-backdrop relative px-5 py-16">
      <div className="mx-auto max-w-[420px]">
        <SectionEyebrow number="07" label="FAQ" />

        <h2 className="mt-7 text-center text-[1.9rem] font-medium tracking-[0.12em] text-charcoal">
          よくあるご質問
        </h2>

        <p className="mx-auto mt-6 max-w-[360px] text-pretty text-center text-sm leading-relaxed text-mocha-brown/85">
          はじめての方にも<span className="text-mocha-rose">安心してご相談いただける</span>よう、
          よくいただくご質問をまとめました。
        </p>

        <ul className="mt-9 flex flex-col gap-3.5">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <li
                key={item.q}
                className="card-soft overflow-hidden rounded-2xl border border-border/60"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blush/25 font-display text-sm font-semibold text-mocha-rose">
                    Q
                  </span>
                  <span className="flex-1 text-[0.95rem] font-medium leading-snug text-mocha-rose">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-mocha-rose transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex gap-3 border-t border-border/60 px-4 py-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-sm font-semibold text-gold">
                        A
                      </span>
                      <p className="pt-1 text-[0.86rem] leading-relaxed text-mocha-brown/90">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-9 rounded-2xl border border-gold/40 bg-card/70 px-5 py-7 text-center shadow-sm">
          <p className="text-pretty text-sm leading-relaxed text-mocha-brown">
            その他にもご不明な点がございましたら、
            <br />
            <span className="font-medium text-mocha-rose">お気軽にお問い合わせください。</span>
          </p>
          <div className="mt-6">
            <CtaButton href="#contact">無料相談でLPの方向性を相談する</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
