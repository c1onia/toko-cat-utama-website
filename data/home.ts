import type { CustomerJourney, SectionCopy, TextCard } from "@/types";

export const homeHero = {
  eyebrow: "Mewarnai Indonesia Sejak 1955",
  title: "Solusi Cat Terpercaya untuk Setiap Proyek Sejak 1955",
  description:
    "Dari rumah keluarga sampai proyek komersial dan industri, Toko Cat Utama membantu Anda memilih cat, warna, dan sistem aplikasi yang tepat.",
  primaryCta: "Jelajahi Produk",
  secondaryCta: "Konsultasi Warna",
  serviceLabels: ["Retail", "Proyek", "Industri"],
};

export const customerJourneyHeader: SectionCopy = {
  eyebrow: "Mulai dari kebutuhan Anda",
  title: "Pilih jalur yang paling sesuai dengan proyek Anda.",
  description:
    "Setiap pelanggan datang dengan kebutuhan berbeda. Toko Cat Utama menata pilihan produk dan layanan agar keputusan jadi lebih cepat, jelas, dan percaya diri.",
};

export const customerJourneys: CustomerJourney[] = [
  {
    title: "Saya Ingin Mengecat Rumah",
    description: "Panduan cat interior, eksterior, warna, dan kebutuhan volume untuk hunian.",
    href: "/produk",
    tone: "bg-utama-yellow/20 text-utama-ink",
  },
  {
    title: "Saya Punya Proyek Komersial",
    description: "Dukungan spesifikasi, jadwal suplai, dan rekomendasi sistem pengecatan proyek.",
    href: "/layanan",
    tone: "bg-utama-blue/10 text-utama-blue",
  },
  {
    title: "Butuh Cat Industri",
    description: "Solusi coating protektif, lantai, metal, dan kebutuhan area kerja berat.",
    href: "/produk",
    tone: "bg-utama-red/10 text-utama-red",
  },
  {
    title: "Inspirasi Warna",
    description: "Kurasi palet dan kombinasi warna untuk rumah, toko, kantor, dan fasad.",
    href: "/galeri-proyek",
    tone: "bg-neutral-100 text-neutral-900",
  },
  {
    title: "Temukan Toko Terdekat",
    description: "Akses cabang, mitra layanan, dan konsultasi produk sesuai area Anda.",
    href: "/lokasi-toko",
    tone: "bg-utama-blue text-white",
  },
];

export const aboutPreviewHeader: SectionCopy = {
  eyebrow: "Tentang Kami",
  title: "Perjalanan panjang yang tetap dekat dengan pelanggan.",
  description:
    "Sejak 1955, Toko Cat Utama bertumbuh bersama kebutuhan bangunan Indonesia: dari toko cat keluarga menjadi mitra untuk rumah, bisnis, dan proyek.",
};

export const whyChooseUsHeader: SectionCopy = {
  eyebrow: "Why Choose Us",
  title: "Layanan cat yang rapi dari pilihan produk sampai pengiriman.",
  description:
    "Kami memadukan pengalaman, pilihan merek, konsultasi praktis, dan dukungan proyek agar hasil pengecatan lebih terukur.",
};

export const whyChooseUs: TextCard[] = [
  {
    title: "Pengalaman Sejak 1955",
    description: "Warisan layanan panjang membuat setiap rekomendasi lebih matang dan praktis.",
  },
  {
    title: "Pilihan Produk Lengkap",
    description: "Cat dekoratif, komersial, industri, perlengkapan aplikasi, dan aksesoris tersedia.",
  },
  {
    title: "Konsultasi Warna",
    description: "Tim membantu menyesuaikan palet dengan gaya bangunan, cahaya, dan kebutuhan ruang.",
  },
  {
    title: "Dukungan Proyek",
    description: "Pengadaan, rekomendasi sistem, dan koordinasi suplai dibuat lebih terstruktur.",
  },
];

export const ctaContent = {
  eyebrow: "WhatsApp CTA",
  title: "Siap memilih cat untuk rumah, toko, atau proyek Anda?",
  description:
    "Ceritakan kebutuhan permukaan, area, warna, dan jadwal. Tim Toko Cat Utama akan membantu menyusun pilihan yang paling pas.",
  action: "Chat WhatsApp",
};
