import { CalendarCheck, Factory, Palette, Star, Store, Truck } from "lucide-react";
import { Card } from "@/components/common/Card";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { whyChooseUs, whyChooseUsHeader } from "@/data/home";

const whyIcons = [CalendarCheck, Truck, Star, Store, Palette, Factory];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeader {...whyChooseUsHeader} align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = whyIcons[index];

            return (
              <Card key={item.title} className="rounded-lg border border-neutral-100 bg-white p-6 shadow-card transition hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-utama-blue text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-heading text-xl font-black text-utama-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
