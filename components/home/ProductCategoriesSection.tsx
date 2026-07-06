import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { productCategories } from "@/data/products";

export function ProductCategoriesSection() {
  return (
    <section className="bg-neutral-950 py-16 text-white lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Product Categories"
            title="Kategori produk untuk semua permukaan dan skala pekerjaan."
            description="Dari dinding rumah sampai lantai industri, setiap kategori disusun untuk membantu Anda menemukan solusi cat yang tepat."
            className="text-white [&_h2]:text-white [&_p]:text-white/70"
          />
          <div className="grid grid-cols-3 overflow-hidden rounded-lg">
            <span className="h-16 bg-utama-yellow" />
            <span className="h-16 bg-utama-red" />
            <span className="h-16 bg-utama-blue" />
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <span className={`mb-5 block h-2 w-20 ${item.accent}`} />
              <h3 className="font-heading text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
