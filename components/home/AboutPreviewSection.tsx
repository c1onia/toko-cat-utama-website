import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { aboutPreviewHeader } from "@/data/home";
import { timelineItems } from "@/data/history";

export function AboutPreviewSection() {
  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader {...aboutPreviewHeader} />
          <div className="grid gap-4">
            {timelineItems.map((item) => (
              <div key={item.year} className="rounded-lg border border-neutral-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                  <p className="font-heading text-3xl font-black text-utama-blue sm:w-32">{item.year}</p>
                  <div>
                    <h3 className="font-heading text-xl font-black text-utama-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
