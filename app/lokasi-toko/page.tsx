import type { Metadata } from "next";
import { ArrowRight, Clock, ExternalLink, MapPin, MessageCircle, Navigation, Store } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { branchGroups } from "@/data/branches";
import { businessHours } from "@/data/contact";
import { branchMapHref, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Lokasi Toko | Toko Cat Utama",
  description: "Temukan 17 cabang Toko Cat Utama di Semarang, Ungaran, Mranggen, Salatiga, Pekalongan, Weleri, dan Batang.",
};

export default function LokasiTokoPage() {
  const branchCount = branchGroups.reduce((total, group) => total + group.branches.length, 0);

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Lokasi Toko"
        title="Temukan cabang Toko Cat Utama terdekat."
        description="Pelanggan rumah, kontraktor, dan industri dapat memilih cabang resmi kami di Semarang, Ungaran, Mranggen, Salatiga, Pekalongan, Weleri, dan Batang."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <SectionHeader
              eyebrow="Branch Directory"
              title={`${branchCount} cabang resmi untuk kebutuhan cat Anda.`}
              description="Daftar ini memudahkan pelanggan memilih lokasi toko terdekat. Untuk rute dan titik peta, gunakan branch list Google Maps resmi Toko Cat Utama."
            />
            <div className="rounded-lg bg-utama-blue p-6 text-white shadow-card">
              <Store className="h-9 w-9 text-utama-yellow" aria-hidden />
              <h2 className="mt-5 font-heading text-2xl font-black">Lihat semua cabang di Maps</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Buka peta cabang resmi untuk melihat titik lokasi, memilih rute, dan membagikan cabang.
              </p>
              <a
                href={branchMapHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-utama-yellow px-6 py-3 text-sm font-black text-utama-ink transition hover:-translate-y-1 hover:bg-white"
              >
                Buka Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {branchGroups.map((group) => (
              <article
                key={group.city}
                className={`rounded-lg border border-neutral-100 bg-white p-6 shadow-card ${
                  group.city === "Semarang" ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-4">
                  <div>
                    <p className="text-sm font-bold uppercase text-utama-red">{group.city}</p>
                    <h2 className="mt-1 font-heading text-2xl font-black text-utama-ink">
                      {group.branches.length} cabang
                    </h2>
                  </div>
                  <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-utama-blue text-white">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className={`mt-5 grid gap-3 ${group.branches.length > 3 ? "md:grid-cols-2" : ""}`}>
                  {group.branches.map((branch) => (
                    <div key={branch.number} className="flex gap-3 rounded-lg bg-neutral-50 p-4">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-utama-yellow font-heading text-sm font-black text-utama-ink">
                        {branch.number}
                      </span>
                      <p className="text-sm font-semibold leading-7 text-neutral-700">{branch.address}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-lg bg-utama-blue p-6 text-white">
              <Navigation className="h-8 w-8 text-utama-yellow" aria-hidden />
              <h3 className="mt-5 font-heading text-2xl font-black">Buka peta cabang resmi</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Gunakan daftar cabang Google Maps untuk memilih lokasi, melihat rute, dan membagikan titik toko.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm lg:col-span-2">
              <Clock className="h-8 w-8 text-utama-blue" aria-hidden />
              <h3 className="mt-5 font-heading text-2xl font-black text-utama-ink">Jam Layanan</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Untuk kebutuhan proyek, hubungi tim terlebih dahulu agar stok, volume, dan jadwal pengiriman dapat disiapkan.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {businessHours.map((hour) => (
                  <div key={hour.day} className="rounded-lg bg-neutral-50 p-4">
                    <p className="text-xs font-bold uppercase text-utama-red">{hour.day}</p>
                    <p className="mt-1 font-heading text-xl font-black text-utama-ink">{hour.time}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={branchMapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-utama-yellow px-6 py-3 text-sm font-black text-utama-ink transition hover:-translate-y-1"
                >
                  Lihat cabang di Maps
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={whatsappHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-utama-blue px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-utama-red"
                >
                  Tanya cabang
                  <MessageCircle className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
