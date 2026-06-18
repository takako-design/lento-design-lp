import { SectionEyebrow, GoldDiamond } from "@/components/lp/ornaments"
import { Heart, Route, Layout, Share2, ListChecks, BadgeCheck } from "lucide-react"

const FUTURES = [
  {
    icon: Heart,
    title: "サービスの魅力が自然に伝わる",
    desc: "あなたの想いや世界観が伝わり、見る人の心にすっと届きます。",
  },
  {
    icon: Route,
    title: "申し込みまでの流れがわかりやすくなる",
    desc: "必要な情報が整理され、迷わず安心して申し込める導線に。",
  },
  {
    icon: Layout,
    title: "世界観に合った案内ページが持てる",
    desc: "色・写真・言葉のトーンが整い、ブランドの印象が伝わります。",
  },
  {
    icon: Share2,
    title: "SNSや紹介からスムーズに案内できる",
    desc: "投稿や口コミから訪れた人を、自然に申し込みへつなげます。",
  },
  {
    icon: ListChecks,
    title: "価格・流れ・FAQをまとめられる",
    desc: "知りたい情報がそろい、不安や疑問が解消されます。",
  },
  {
    icon: BadgeCheck,
    title: "信頼感のある印象を作れる",
    desc: "上質なデザインで、安心して選んでもらえる印象に。",
  },
]

export function IdealFuture() {
  return (
    <section id="future" className="lp-backdrop relative px-5 py-16">
      <div className="mx-auto max-w-[420px]">
        <SectionEyebrow number="03" label="Ideal Future" />

        <h2 className="mt-7 text-center text-balance text-[1.7rem] font-medium leading-snug text-charcoal">
          整ったLPがあると、
          <br />
          魅力は<span className="text-mocha-rose">もっと自然に届く</span>。
        </h2>

        <p className="mx-auto mt-6 max-w-[360px] text-pretty text-center text-sm leading-relaxed text-mocha-brown/85">
          世界観・情報・導線が整うことで、SNSや紹介から訪れた人にも、あなたのサービスの価値が伝わりやすくなります。
        </p>

        <ul className="mt-9 flex flex-col gap-3.5">
          {FUTURES.map((f, i) => (
            <li
              key={f.title}
              className="card-soft flex items-center gap-4 rounded-2xl border border-border/60 px-4 py-4"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush/20">
                <f.icon className="size-5 text-mocha-rose" aria-hidden="true" strokeWidth={1.6} />
              </span>
              <span
                className="font-display text-2xl italic leading-none text-mocha-rose/80"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-[0.98rem] font-semibold leading-snug text-charcoal">
                  {f.title}
                </h3>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-mocha-brown/80">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-9 rounded-2xl border border-gold/50 bg-card/70 px-5 py-7 text-center shadow-sm">
          <GoldDiamond className="mx-auto" />
          <p className="mt-3 text-sm leading-relaxed text-mocha-brown">
            あなたのサービスの魅力が、ちゃんと届くLPへ。
          </p>
          <p className="mt-1 text-lg font-medium leading-relaxed text-mocha-rose">
            理想の未来を、一緒につくりましょう。
          </p>
        </div>
      </div>
    </section>
  )
}
