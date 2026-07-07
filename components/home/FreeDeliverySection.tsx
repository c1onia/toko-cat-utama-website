import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { freeDeliveryPromo } from "@/data/home";

export function FreeDeliverySection() {
  return (
    <section className="bg-neutral-50 py-12 lg:py-16">
      <Container>
        <div className="grid gap-5 rounded-lg border border-neutral-100 bg-white p-6 shadow-sm sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-utama-blue text-white">
            <Truck className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-bold uppercase text-utama-red">{freeDeliveryPromo.eyebrow}</p>
            <h2 className="mt-2 font-heading text-2xl font-black leading-tight text-utama-ink sm:text-3xl">
              {freeDeliveryPromo.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-neutral-600">{freeDeliveryPromo.description}</p>
            {freeDeliveryPromo.disclaimer ? (
              <p className="mt-2 text-xs font-semibold text-neutral-500">{freeDeliveryPromo.disclaimer}</p>
            ) : null}
          </div>
          <Link
            href="/lokasi-toko"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-utama-yellow px-6 py-3 text-sm font-black text-utama-ink transition hover:-translate-y-1 hover:bg-utama-blue hover:text-white"
          >
            Temukan Cabang
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
