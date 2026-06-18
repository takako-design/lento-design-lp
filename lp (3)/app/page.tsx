import { SiteHeader } from "@/components/lp/site-header"
import { StickyCta } from "@/components/lp/sticky-cta"
import { Hero } from "@/components/lp/hero"
import { Problem } from "@/components/lp/problem"
import { IdealFuture } from "@/components/lp/ideal-future"
import { Service } from "@/components/lp/service"
import { Works } from "@/components/lp/works"
import { Flow } from "@/components/lp/flow"
import { Faq } from "@/components/lp/faq"
import { FinalCta, SiteFooter } from "@/components/lp/final-cta"

export default function Page() {
  return (
    <div className="lp-backdrop min-h-screen">
      {/* Centered mobile-first column with soft side margins on desktop */}
      <div className="mx-auto w-full max-w-[440px] bg-ivory/40 shadow-[0_0_80px_-40px_rgba(107,78,69,0.35)]">
        <SiteHeader />
        <main>
          <Hero />
          <Problem />
          <IdealFuture />
          <Service />
          <Works />
          <Flow />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
      <StickyCta />
    </div>
  )
}
