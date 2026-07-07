import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { brandAssets } from "@/data/site";
import { aboutValues, timelineItems } from "@/data/history";
import { whyChooseUs } from "@/data/home";

export const metadata: Metadata = {
  title: "Tentang Kami | Toko Cat Utama",
  description: "Kisah Toko Cat Utama, toko cat terpercaya yang mewarnai Indonesia sejak 1955.",
};

const valueIcons = [ShieldCheck, HeartHandshake, BadgeCheck];

export default function TentangKamiPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Tentang Kami"
        title="Mitra cat terpercaya yang bertumbuh bersama pelanggan sejak 1955."
        description="Toko Cat Utama lahir dari kepercayaan pelanggan dan terus berkembang untuk melayani kebutuhan cat rumah, komersial, dan industri dengan standar yang lebih modern."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Warisan layanan"
                title="Mewarnai Indonesia dengan pilihan produk dan nasihat yang bisa diandalkan."
                description="Kami percaya cat yang tepat bukan hanya soal warna, tetapi juga perlindungan, karakter ruang, dan ketenangan saat proyek berjalan."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {aboutValues.map((item, index) => {
                  const Icon = valueIcons[index];

                  return (
                    <div key={item.title} className="rounded-lg border border-neutral-100 bg-white p-5 shadow-card">
                      <Icon className="h-7 w-7 text-utama-blue" aria-hidden />
                      <h3 className="mt-4 font-heading text-lg font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-utama-yellow/20 p-8">
              <Image
                src={brandAssets.mascot}
                alt="Maskot Toko Cat Utama"
                width={2584}
                height={2834}
                className="mx-auto h-[420px] w-auto object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Timeline"
            title="Perjalanan Toko Cat Utama"
            description="Tonggak perjalanan yang membentuk cara kami melayani pelanggan sampai hari ini."
            align="center"
          />
          <div className="mt-10 grid gap-4">
            {timelineItems.map((item) => (
              <div key={item.year} className="rounded-lg border border-neutral-100 bg-white p-6 shadow-sm">
                <div className="grid gap-3 sm:grid-cols-[160px_1fr] sm:items-start">
                  <p className="font-heading text-3xl font-black text-utama-blue">{item.year}</p>
                  <div>
                    <h3 className="font-heading text-xl font-black text-utama-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-lg border border-neutral-100 p-6 shadow-card">
                <h3 className="font-heading text-xl font-black text-utama-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
