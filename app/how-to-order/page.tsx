import type { Metadata } from "next";
import { StepsList, SlingSend } from "@/components/HowSteps";
import SocialButtons from "@/components/SocialButtons";
import { PAYMENTS, POLICIES, FAQ } from "@/data/site";

export const metadata: Metadata = { title: "How to Order", description: "Step-by-step guide: send a screenshot by DM, pay securely, approve your video, and receive your bag by FedEx with tracking." };

export default function HowToOrder() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6">
      <header className="reveal text-center">
        <h1 className="text-5xl sm:text-6xl">How to order</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Ordering takes a few minutes and happens entirely in direct messages. This website is your catalog and guide — choose where to message us:</p>
        <SocialButtons solid className="mt-6 justify-center" />
      </header>

      <section className="mt-12"><StepsList /></section>

      <section className="reveal mt-16 rounded-3xl border border-gold/40 bg-card p-6 sm:p-10">
        <h2 className="text-center text-3xl sm:text-4xl">Ready? Send your screenshot</h2>
        <div className="mt-6"><SlingSend /></div>
      </section>

      <section className="reveal mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border p-6"><h2 className="text-3xl text-gold">Payment methods</h2><ul className="mt-3 space-y-2 text-foreground/90">{PAYMENTS.map((p) => <li key={p}>— {p}</li>)}</ul><p className="mt-3 text-sm text-muted-foreground">After paying, share the payment screenshot so we can confirm your order immediately.</p></div>
        <div className="rounded-2xl border border-border p-6"><h2 className="text-3xl text-gold">Shipping &amp; delivery</h2><ul className="mt-3 space-y-2 text-foreground/90"><li>— Courier: FedEx with tracking number</li><li>— Worldwide; shipping is included</li><li>— Dispatch the day after you approve your video</li><li>— Delivery within a few business days</li></ul></div>
      </section>

      <section className="reveal mt-16">
        <h2 className="text-center text-3xl sm:text-4xl">Our policies</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">Full policy slides are saved in our Instagram highlights. Ask us in DM about any of these before you pay.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">{POLICIES.map((p) => <div key={p} className="rounded-xl border border-border bg-card px-3 py-4 text-center font-display text-lg">{p}</div>)}</div>
      </section>

      <section className="mt-16">
        <h2 className="reveal text-center text-3xl sm:text-4xl">Questions</h2>
        <div className="mt-6 space-y-3">
          {FAQ.map(([q, a]) => (
            <details key={q} className="reveal group rounded-2xl border border-border bg-card px-5 py-4 open:border-gold/50">
              <summary className="cursor-target flex min-h-[32px] cursor-pointer list-none items-center justify-between gap-4 font-display text-xl">{q}<span className="text-gold transition group-open:rotate-45">+</span></summary>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
