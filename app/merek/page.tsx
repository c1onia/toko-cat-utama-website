import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Layers3,
  PackageCheck,
  Palette,
  SearchCheck,
  ShieldCheck,
  Truck,
  WalletCards,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  brandPartners,
  brandReasons,
  brandRecommendationSteps,
  brandSectionCopy,
} from "@/data/brands";

export const metadata: Metadata = {
  title: "Merek | Toko Cat Utama",
  description: "Pilihan merek cat terpercaya untuk kebutuhan dekoratif, komersial, dan industri.",
};

const reasonIcons = [Layers3, WalletCards, ShieldCheck];
const recommendationIcons = [ClipboardCheck, SearchCheck, PackageCheck, Palette, Truck];

export default function MerekPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Merek"
        title="Pilih merek berdasarkan kebutuhan, bukan sekadar nama besar."
        description="Toko Cat Utama membantu pelanggan memilih merek cat dan coating yang paling sesuai dengan permukaan, fungsi, tampilan akhir, anggaran, dan ketersediaan produk."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Mengapa Banyak Merek"
            title="Setiap proyek membutuhkan solusi cat yang berbeda."
            description="Kami membawa beberapa merek terpercaya agar pelanggan tidak dipaksa memakai satu jawaban untuk semua kebutuhan."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {brandReasons.map((reason, index) => {
              const Icon = reasonIcons[index];

              return (
                <article key={reason.title} className="rounded-lg border border-neutral-100 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-utama-blue text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-heading text-xl font-black leading-tight text-utama-ink">{reason.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{reason.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-24">
        <Container>
          <SectionHeader
            {...brandSectionCopy}
            description="Kami menyediakan pilihan merek yang saling melengkapi, sehingga pelanggan bisa mendapatkan rekomendasi yang lebih tepat untuk rumah, toko, gedung, lantai, metal, kayu, hingga kebutuhan proyek."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {brandPartners.map((brand) => (
              <article key={brand.name} className="group flex h-full flex-col rounded-lg border border-neutral-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-utama-blue/30 hover:shadow-card">
                <div className="flex h-24 items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50 p-4">
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={220}
                    height={110}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-utama-blue">{brand.segment}</p>
                <h2 className="mt-2 font-heading text-2xl font-black text-utama-ink">{brand.name}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-600">
                  <div>
                    <p className="font-bold text-utama-ink">Cocok untuk</p>
                    <p>{brand.bestFor}</p>
                  </div>
                  <div>
                    <p className="font-bold text-utama-ink">Cara kami merekomendasikan</p>
                    <p>{brand.recommendation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-950 py-16 text-white lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Customer Journey"
                title="Cara kami membantu pelanggan memilih produk."
                description="Rekomendasi yang baik tidak dimulai dari merek. Rekomendasi dimulai dari memahami permukaan, fungsi, warna, anggaran, dan jadwal proyek."
                className="text-white [&>p:first-child]:text-utama-yellow [&_h2]:text-white [&_p]:text-white/70"
              />
              <Link href="/kontak" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-utama-yellow px-7 py-4 text-sm font-black text-utama-ink transition hover:-translate-y-1 hover:bg-white">
                Konsultasi merek
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="grid gap-4">
              {brandRecommendationSteps.map((step, index) => {
                const Icon = recommendationIcons[index];

                return (
                  <article key={step.title} className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[auto_1fr]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-utama-blue">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-utama-yellow">Langkah {index + 1}</p>
                      <h2 className="mt-1 font-heading text-xl font-black">{step.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-white/70">{step.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
