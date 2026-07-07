import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { projectGallery } from "@/data/gallery";

export function ProjectGallerySection() {
  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Project Gallery"
            title="Inspirasi hasil, warna, dan pengalaman Toko Cat Utama."
            description="Galeri dibuat untuk membantu pelanggan membayangkan hasil akhir sebelum memilih sistem cat dan palet warna."
          />
          <Link href="/galeri-proyek" className="inline-flex items-center gap-2 text-sm font-bold text-utama-blue transition hover:gap-3">
            Lihat galeri
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projectGallery.slice(0, 3).map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-lg bg-white shadow-card">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-utama-blue">{project.category}</p>
                <h3 className="mt-2 font-heading text-2xl font-black text-utama-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
