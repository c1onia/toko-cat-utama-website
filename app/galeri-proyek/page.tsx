import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { projectGallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galeri Proyek | Toko Cat Utama",
  description: "Inspirasi proyek, warna, fasad, dan pengalaman Toko Cat Utama.",
};

export default function GaleriProyekPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Galeri Proyek"
        title="Inspirasi visual untuk membayangkan hasil sebelum memilih cat."
        description="Lihat bagaimana warna, permukaan, dan identitas brand dapat bekerja bersama dalam proyek rumah, retail, dan komersial."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Project Gallery"
            title="Referensi warna dan aplikasi"
            description="Galeri ini menggunakan aset brand Toko Cat Utama untuk menjaga tampilan tetap selaras dan mudah dikenali."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projectGallery.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-lg bg-white shadow-card">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-utama-blue">{project.category}</p>
                  <h2 className="mt-2 font-heading text-2xl font-black text-utama-ink">{project.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-950 py-16 text-white lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeader
              eyebrow="Inspirasi Warna"
              title="Bawa referensi warna Anda ke tim kami."
              description="Kami dapat membantu menerjemahkan gaya, moodboard, atau kebutuhan brand menjadi pilihan warna yang lebih siap dipakai."
              className="text-white [&_h2]:text-white [&_p]:text-white/70"
            />
            <Link href="/kontak" className="inline-flex items-center justify-center gap-2 rounded-full bg-utama-yellow px-7 py-4 text-sm font-black text-utama-ink transition hover:-translate-y-1 hover:bg-white">
              Konsultasi galeri
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
