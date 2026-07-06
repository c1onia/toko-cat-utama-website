import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { productCategories, productRecommendationFactors } from "@/data/products";

export const metadata: Metadata = {
  title: "Produk | Toko Cat Utama",
  description: "Kategori produk cat interior, eksterior, kayu, besi, waterproofing, industri, dan perlengkapan cat.",
};

export default function ProdukPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Produk"
        title="Pilihan cat lengkap untuk permukaan, warna, dan skala proyek berbeda."
        description="Temukan cat dekoratif, pelapis protektif, coating industri, waterproofing, dan perlengkapan aplikasi dalam satu ekosistem layanan."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Kategori Produk"
            title="Disusun agar mudah memilih dari kebutuhan, bukan sekadar rak produk."
            description="Setiap kategori membantu pelanggan menemukan jenis cat yang sesuai dengan bidang aplikasi dan target hasil akhir."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((item) => (
              <article key={item.title} className="rounded-lg border border-neutral-100 bg-white p-6 shadow-card transition hover:-translate-y-1">
                <span className={`mb-5 block h-2 w-20 ${item.accent}`} />
                <h2 className="font-heading text-2xl font-black text-utama-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeader
              eyebrow="Cara kami membantu"
              title="Rekomendasi produk berdasarkan kondisi nyata di lapangan."
              description="Tim Toko Cat Utama melihat permukaan, area penggunaan, paparan cuaca, waktu pengerjaan, dan target tampilan sebelum merekomendasikan sistem cat."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {productRecommendationFactors.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 flex-none text-utama-blue" aria-hidden />
                  <p className="text-sm font-semibold text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href="/kontak" className="mt-10 inline-flex items-center gap-2 rounded-full bg-utama-blue px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-utama-red">
            Konsultasi produk
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
