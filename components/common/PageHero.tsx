import Image from "next/image";
import { Container } from "@/components/common/Container";
import { brandAssets } from "@/data/site";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-utama-blue pt-28 text-white lg:pt-32">
      <Image
        src={brandAssets.colorBars}
        alt=""
        width={2172}
        height={724}
        className="absolute bottom-0 right-0 -z-10 h-40 w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(0,85,184,0.98),rgba(0,0,0,0.76))]" />
      <Container className="py-16 lg:py-24">
        <p className="mb-4 text-sm font-bold uppercase text-utama-yellow">{eyebrow}</p>
        <h1 className="max-w-4xl font-heading text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{description}</p>
      </Container>
    </section>
  );
}
