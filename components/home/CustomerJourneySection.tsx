import Link from "next/link";
import { ArrowRight, Building2, Factory, Home as HomeIcon, MapPin, Palette } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { customerJourneyHeader, customerJourneys } from "@/data/home";

const journeyIcons = [HomeIcon, Building2, Factory, Palette, MapPin];

export function CustomerJourneySection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeader {...customerJourneyHeader} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {customerJourneys.map((item, index) => {
            const Icon = journeyIcons[index];

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-lg border border-neutral-100 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-utama-blue/30"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.tone}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-heading text-xl font-black leading-snug text-utama-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-utama-blue transition group-hover:gap-3">
                  Lihat solusi
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
