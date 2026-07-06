import type { Metadata } from "next";
import Image from "next/image";
import { Award, Boxes, Handshake } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { brandStrengths, trustedBrands } from "@/data/brands";
import { brandAssets } from "@/data/site";

export const metadata: Metadata = {
  title: "Merek | Toko Cat Utama",
  description: "Pilihan merek cat terpercaya untuk kebutuhan dekoratif, komersial, dan industri.",
};

const brandIcons = [Boxes, Award, Handshake];

export default function MerekPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Merek"
        title="Merek cat terpercaya untuk standar hasil yang lebih konsisten."
        description="Toko Cat Utama menghadirkan pilihan brand cat dan coating yang membantu pelanggan menyeimbangkan kualitas, tampilan, ketersediaan, dan anggaran."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Trusted Brands"
            title="Satu toko untuk banyak kebutuhan merek."
            description="Pilihan merek disusun agar pelanggan lebih mudah membandingkan fungsi, karakter warna, dan solusi teknis."
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustedBrands.map((brand) => (
              <div key={brand} className="flex min-h-32 items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50 p-4 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-card">
                <p className="font-heading text-xl font-black text-utama-ink">{brand}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-950 py-16 text-white lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Brand system"
                title="Pilihan merek dibuat jelas, bukan membingungkan."
                description="Toko Cat Utama membantu pelanggan memahami perbedaan produk, bukan hanya membandingkan nama merek."
                className="text-white [&_h2]:text-white [&_p]:text-white/70"
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {brandStrengths.map((item, index) => {
                  const Icon = brandIcons[index];

                  return (
                    <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                      <Icon className="h-7 w-7 text-utama-yellow" aria-hidden />
                      <h3 className="mt-4 font-heading text-lg font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/70">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <Image
              src={brandAssets.colorBars}
              alt="Palet warna Toko Cat Utama"
              width={2172}
              height={724}
              className="w-full rounded-lg bg-white object-cover"
            />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
