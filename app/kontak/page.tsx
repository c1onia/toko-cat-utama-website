import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { businessHours, contactDetails, contactPromptItems } from "@/data/contact";
import { whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak | Toko Cat Utama",
  description: "Hubungi Toko Cat Utama untuk konsultasi produk, warna, proyek, lokasi toko, dan pengadaan cat.",
};

const contactIcons = [MessageCircle, Mail, Clock];

export default function KontakPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        eyebrow="Kontak"
        title="Bicarakan kebutuhan cat Anda dengan tim Toko Cat Utama."
        description="Untuk rumah, proyek komersial, atau kebutuhan industri, tim kami siap membantu mengarahkan produk, warna, volume, dan layanan yang sesuai."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Hubungi Kami"
            title="Pilih kanal yang paling nyaman."
            description="Sampaikan kebutuhan permukaan, area, target warna, dan jadwal agar tim dapat memberi arahan yang lebih tepat."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contactDetails.map((item, index) => {
              const Icon = contactIcons[index];

              return (
                <a key={item.label} href={item.href} className="rounded-lg border border-neutral-100 bg-white p-6 shadow-card transition hover:-translate-y-1">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-utama-blue text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-5 text-sm font-bold text-utama-red">{item.label}</p>
                  {item.label === "Jam Layanan" ? (
                    <div className="mt-3 grid gap-2">
                      {businessHours.map((hour) => (
                        <div key={hour.day} className="rounded-lg bg-neutral-50 px-3 py-2">
                          <p className="text-xs font-semibold text-neutral-500">{hour.day}</p>
                          <p className="font-heading text-lg font-black text-utama-ink">{hour.time}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <h2 className="mt-2 font-heading text-xl font-black text-utama-ink">{item.value}</h2>
                  )}
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="rounded-lg bg-utama-blue p-7 text-white sm:p-10">
              <MessageCircle className="h-10 w-10 text-utama-yellow" aria-hidden />
              <h2 className="mt-5 font-heading text-3xl font-black leading-tight">Respons cepat melalui WhatsApp.</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Cocok untuk konsultasi warna, ketersediaan produk, estimasi kebutuhan, dan koordinasi pengiriman.
              </p>
              <a href={whatsappHref} className="mt-7 inline-flex items-center gap-2 rounded-full bg-utama-yellow px-7 py-4 text-sm font-black text-utama-ink transition hover:-translate-y-1 hover:bg-white">
                Chat WhatsApp
                <MessageCircle className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactPromptItems.map((item) => (
                <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                  <MapPin className="h-6 w-6 text-utama-blue" aria-hidden />
                  <p className="mt-4 font-semibold text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
