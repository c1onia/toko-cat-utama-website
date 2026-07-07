import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { brandSectionCopy, trustedBrands } from "@/data/brands";

export function BrandSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeader
          {...brandSectionCopy}
          align="center"
        />
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 rounded-lg border border-neutral-100 bg-neutral-50 p-5 text-center shadow-sm sm:flex-row sm:items-center sm:text-left">
          <span className="mx-auto inline-flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-utama-blue text-white sm:mx-0">
            <BadgeCheck className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-heading text-lg font-black text-utama-ink">Mitra resmi untuk merek cat terpercaya.</p>
            <p className="mt-1 text-sm leading-7 text-neutral-600">
              Pelanggan dapat memilih produk dekoratif, protektif, dan industri dengan dukungan rekomendasi yang jelas.
            </p>
          </div>
        </div>
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
