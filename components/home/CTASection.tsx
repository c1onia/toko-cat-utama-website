import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { brandAssets, whatsappHref } from "@/data/site";
import { ctaContent } from "@/data/home";

export function CTASection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-utama-blue p-7 text-white shadow-soft sm:p-10 lg:p-14">
          <div className="absolute inset-x-0 top-0 h-3 bg-[linear-gradient(90deg,#FFDD00_0_33%,#CF3339_33%_66%,#0055B8_66%_100%)]" />
          <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-utama-yellow">{ctaContent.eyebrow}</p>
              <h2 className="mt-3 max-w-3xl font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                {ctaContent.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">{ctaContent.description}</p>
              <a
                href={whatsappHref}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-utama-yellow px-7 py-4 text-sm font-black text-utama-ink transition hover:-translate-y-1 hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {ctaContent.action}
              </a>
            </div>
            <Image
              src={brandAssets.mascot}
              alt="Maskot Toko Cat Utama"
              width={2584}
              height={2834}
              className="mx-auto h-64 w-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
