import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Paintbrush, Palette, Truck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Layanan | Toko Cat Utama",
  description: "Konsultasi produk, konsultasi warna, pengadaan proyek, dan pengiriman terjadwal dari Toko Cat Utama.",
};

const serviceIcons = [Paintbrush, Palette, ClipboardCheck, Truck];

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Layanan"
        title="Layanan yang membantu proyek cat berjalan lebih mudah."
        description="Dari pemilihan produk sampai koordinasi suplai, Toko Cat Utama mendampingi pelanggan dengan proses yang praktis dan komunikatif."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Apa yang kami bantu"
            title="Bukan hanya menjual cat, kami membantu keputusan."
            description="Setiap layanan dirancang untuk mengurangi kebingungan saat memilih produk, warna, volume, dan jadwal."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => {
              const Icon = serviceIcons[index];

              return (
                <div key={item.title} className="rounded-lg border border-neutral-100 bg-white p-6 shadow-card transition hover:-translate-y-1">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-utama-blue text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-heading text-xl font-black text-utama-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-24">
        <Container>
          <div className="rounded-lg bg-utama-yellow p-7 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase text-utama-ink">Dukungan proyek</p>
                <h2 className="mt-3 max-w-3xl font-heading text-3xl font-black leading-tight text-utama-ink sm:text-4xl">
                  Butuh rekomendasi sistem cat untuk area tertentu?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-800">
                  Tim kami dapat membantu menyusun opsi berdasarkan permukaan, eksposur, tingkat pemakaian, dan target umur pakai.
                </p>
              </div>
              <Link href="/kontak" className="inline-flex items-center justify-center gap-2 rounded-full bg-utama-blue px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-utama-red">
                Hubungi tim
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
