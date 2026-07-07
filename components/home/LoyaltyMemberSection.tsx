import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, Gift } from "lucide-react";
import { Container } from "@/components/common/Container";
import { brandAssets, whatsappHref } from "@/data/site";
import { loyaltyBenefits, loyaltyProgram, loyaltyRewards } from "@/data/home";

const benefitIcons = [BadgeCheck, Gift, ClipboardCheck];

export function LoyaltyMemberSection() {
  return (
    <section id="utama-loyalty-member" className="bg-neutral-950 py-16 text-white lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-utama-yellow">{loyaltyProgram.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {loyaltyProgram.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/75">{loyaltyProgram.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {loyaltyBenefits.map((benefit, index) => {
                const Icon = benefitIcons[index];

                return (
                  <div key={benefit.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="h-7 w-7 text-utama-yellow" aria-hidden />
                    <h3 className="mt-4 font-heading text-lg font-black">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <p className="font-heading text-lg font-black text-utama-yellow">{loyaltyProgram.pointRule}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <p className="text-sm leading-7 text-white/70">{loyaltyProgram.transactionDeadline}</p>
                <p className="text-sm leading-7 text-white/70">{loyaltyProgram.redemptionDeadline}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-utama-yellow px-7 py-4 text-sm font-black text-utama-ink transition hover:-translate-y-1 hover:bg-white"
              >
                {loyaltyProgram.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-utama-yellow hover:text-utama-yellow"
              >
                {loyaltyProgram.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-white p-3 shadow-soft">
            <Image
              src={brandAssets.loyaltyMember}
              alt="Brosur resmi Utama Loyalty Member"
              width={1132}
              height={1600}
              className="h-auto w-full rounded object-contain"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {loyaltyRewards.map((reward) => (
            <div key={reward.item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="font-heading text-xl font-black text-utama-yellow">{reward.points}</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-white/75">{reward.item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
