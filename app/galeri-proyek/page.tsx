import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Factory, Home, Layers3, Ship } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { projectCategories, projectGallery, projectReferences } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galeri Proyek | Toko Cat Utama",
  description: "Inspirasi proyek residential, commercial, industrial, marine, dan floor coating.",
};

const categoryIcons = [Home, Building2, Factory, Ship, Layers3];

export default function GaleriProyekPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Galeri Proyek"
        title="Referensi proyek untuk membayangkan hasil sebelum memilih cat."
        description="Lihat inspirasi aplikasi cat dan coating untuk rumah, bangunan komersial, fasilitas industri, marine, dan floor coating."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Project Gallery"
            title="Inspirasi aplikasi berdasarkan kebutuhan proyek."
            description="Setiap kategori membantu pelanggan membayangkan sistem cat, warna, dan hasil akhir yang paling relevan untuk proyek mereka."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {projectCategories.map((category, index) => {
              const Icon = categoryIcons[index];

              return (
                <div key={category} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-bold text-utama-ink shadow-sm">
                  <Icon className="h-4 w-4 text-utama-blue" aria-hidden />
                  {category}
                </div>
              );
            })}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projectGallery.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-lg bg-white shadow-card">
                <div className="relative h-80 overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-utama-blue shadow-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-utama-blue">{project.projectType}</p>
                  <h2 className="mt-2 font-heading text-2xl font-black text-utama-ink">{project.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{project.description}</p>
                  <dl className="mt-5 grid gap-4 rounded-lg border border-neutral-100 bg-neutral-50 p-4 text-sm md:grid-cols-2">
                    <div>
                      <dt className="font-bold text-utama-ink">Produk digunakan</dt>
                      <dd className="mt-1 leading-6 text-neutral-600">{project.productsUsed}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-utama-ink">Nama warna</dt>
                      <dd className="mt-1 leading-6 text-neutral-600">{project.colorName}</dd>
                    </div>
                  </dl>
                  {project.reference ? (
                    <p className="mt-4 text-xs font-bold uppercase tracking-wide text-neutral-500">
                      Referensi: {project.reference}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="Project References"
              title="Dipercaya berbagai kebutuhan proyek."
              description="Daftar berikut diambil dari profil perusahaan lama sebagai referensi kepercayaan, mulai dari pendidikan, kesehatan, komersial, hingga institusi."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {projectReferences.map((reference) => (
                <div key={reference} className="rounded-lg border border-neutral-100 bg-white px-5 py-4 font-heading text-lg font-black text-utama-ink shadow-sm">
                  {reference}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-950 py-16 text-white lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeader
              eyebrow="Inspirasi Proyek"
              title="Bawa referensi proyek Anda ke tim kami."
              description="Kami dapat membantu menerjemahkan foto, moodboard, kebutuhan permukaan, dan target anggaran menjadi pilihan produk yang lebih siap dipakai."
              className="text-white [&>p:first-child]:text-utama-yellow [&_h2]:text-white [&_p]:text-white/70"
            />
            <Link href="/kontak" className="inline-flex items-center justify-center gap-2 rounded-full bg-utama-yellow px-7 py-4 text-sm font-black text-utama-ink transition hover:-translate-y-1 hover:bg-white">
              Konsultasi proyek
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
