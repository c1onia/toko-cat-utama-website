import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { trustedBrands } from "@/data/brands";

export function BrandSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Trusted Brands"
          title="Merek cat pilihan dalam satu tempat."
          description="Toko Cat Utama menghadirkan pilihan merek dekoratif, protektif, dan industri untuk berbagai kebutuhan bangunan."
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {trustedBrands.map((brand) => (
            <div key={brand} className="flex min-h-28 items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-utama-blue/30 hover:bg-white hover:shadow-card">
              <p className="font-heading text-xl font-black text-utama-ink">{brand}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
