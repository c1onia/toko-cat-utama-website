import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { contactDetails } from "@/data/contact";
import { navItems } from "@/data/navigation";
import { brandAssets, whatsappHref } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image
              src={brandAssets.logo}
              alt="Toko Cat Utama"
              width={4500}
              height={2333}
              className="h-16 w-auto bg-white object-contain p-2"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Toko Cat Utama membantu pelanggan rumah, komersial, dan industri menemukan cat yang tepat dengan layanan yang ramah, rapi, dan berpengalaman.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-3 w-16 bg-utama-yellow" />
              <span className="h-3 w-16 bg-utama-red" />
              <span className="h-3 w-16 bg-utama-blue" />
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-black">Navigasi</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-utama-yellow">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-black">Kontak</h3>
            <div className="mt-5 grid gap-4 text-sm text-white/70">
              <a href={whatsappHref} className="flex items-center gap-3 transition hover:text-utama-yellow">
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </a>
              <a href={contactDetails[1].href} className="flex items-center gap-3 transition hover:text-utama-yellow">
                <Mail className="h-4 w-4" aria-hidden />
                {contactDetails[1].value}
              </a>
              <Link href="/lokasi-toko" className="flex items-center gap-3 transition hover:text-utama-yellow">
                <MapPin className="h-4 w-4" aria-hidden />
                Lokasi Toko
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Toko Cat Utama. All rights reserved.</p>
          <p>Mewarnai Indonesia Sejak 1955</p>
        </div>
      </Container>
    </footer>
  );
}
