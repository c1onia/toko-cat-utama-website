import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { brandAssets } from "@/data/site";
import { homeHero } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[86svh] items-end overflow-hidden pt-24 text-utama-ink">
      <Image
        src={brandAssets.heroHouse}
        alt="Rumah modern Indonesia dua lantai dengan aksen biru, merah, dan kuning Toko Cat Utama"
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.86)_38%,rgba(255,255,255,0.24)_70%,rgba(255,255,255,0.08)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#FFDD00_0_33%,#CF3339_33%_66%,#0055B8_66%_100%)]" />
      <Container className="pb-14 pt-16 lg:pb-20">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-utama-blue/15 bg-white/80 px-4 py-2 text-sm font-bold text-utama-blue shadow-sm backdrop-blur">
            {homeHero.eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-black leading-tight text-utama-ink sm:text-5xl lg:text-7xl">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">{homeHero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href="/produk"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-utama-blue px-7 py-4 text-sm font-bold text-white shadow-card transition hover:-translate-y-1 hover:bg-utama-red"
            >
              {homeHero.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href="/kontak"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-7 py-4 text-sm font-bold text-utama-ink shadow-sm transition hover:-translate-y-1 hover:border-utama-yellow hover:bg-utama-yellow"
            >
              {homeHero.secondaryCta}
            </Button>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {homeHero.serviceLabels.map((item) => (
              <div key={item} className="rounded-lg border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold text-neutral-500">Layanan</p>
                <p className="font-heading text-lg font-black text-utama-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
