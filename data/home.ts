import type { CustomerJourney, LoyaltyProgram, LoyaltyReward, PromoContent, SectionCopy, TextCard } from "@/types";

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
    title: "Sejak 1955",
    description: "Pengalaman panjang membuat setiap rekomendasi produk, warna, dan aplikasi lebih matang.",
  },
  {
    title: "Gratis Ongkir hingga 20 KM*",
    description: "Pengiriman dapat dibantu dari cabang terdekat sesuai syarat dan ketentuan yang berlaku.",
  },
  {
    title: "Utama Loyalty Member",
    description: "Pelanggan dapat mengumpulkan poin transaksi dan menukarkannya dengan hadiah program resmi.",
  },
  {
    title: "Jaringan Cabang yang Luas",
    description: "Cabang resmi Toko Cat Utama membantu pelanggan menemukan produk lebih dekat dan cepat.",
  },
  {
    title: "Konsultasi Warna Profesional",
    description: "Tim membantu menyesuaikan palet dengan gaya bangunan, cahaya, dan kebutuhan ruang.",
  },
  {
    title: "Solusi Rumah, Komersial & Industri",
    description: "Pilihan produk dan layanan disiapkan untuk hunian, bisnis, proyek, dan area kerja berat.",
  },
];

export const freeDeliveryPromo: PromoContent = {
  eyebrow: "Gratis Ongkir",
  title: "Gratis Pengiriman hingga Radius 20 KM*",
  description:
    "Nikmati layanan pengiriman GRATIS untuk pembelian sesuai syarat dan ketentuan dari cabang terdekat.",
  disclaimer: "*Syarat & ketentuan berlaku.",
};

export const loyaltyProgram: LoyaltyProgram = {
  eyebrow: "Utama Loyalty Member",
  title: "Belanja cat jadi poin untuk hadiah pilihan.",
  description:
    "Program member resmi Toko Cat Utama membantu pelanggan mengumpulkan poin dari transaksi dan menukarkannya dengan voucher, merchandise, kebutuhan rumah tangga, elektronik, hingga sepeda motor sesuai tabel poin resmi.",
  primaryCta: "Join Member",
  secondaryCta: "Pelajari Selengkapnya",
  pointRule: "1 poin = Rp. 100.000,- untuk pembelian produk apapun di Toko UTAMA GROUP.",
  transactionDeadline: "Transaksi untuk mendapatkan poin berlaku sampai 31 Desember 2026.",
  redemptionDeadline: "Batas penukaran poin sampai 31 Desember 2026.",
};

export const loyaltyBenefits: TextCard[] = [
  {
    title: "Kumpulkan poin dari transaksi",
    description: "Gunakan nama dan nomor yang sesuai dengan pendaftaran member saat melakukan pembelian.",
  },
  {
    title: "Tukar poin dengan hadiah",
    description: "Pilihan hadiah mencakup voucher UTAMA, merchandise, perlengkapan rumah tangga, elektronik, dan sepeda motor.",
  },
  {
    title: "Registrasi mudah",
    description: "Isi formulir keikutsertaan Member UTAMA dengan fotokopi KTP atau tanda pengenal.",
  },
];

export const loyaltyRewards: LoyaltyReward[] = [
  { item: "Voucher UTAMA @25 K", points: 40 },
  { item: "Kaos UTAMA", points: 90 },
  { item: "Payung UTAMA", points: 130 },
  { item: "Magic Com", points: 425 },
  { item: "Handphone Samsung (Android)", points: 3750 },
  { item: "Sepeda Motor", points: 11000 },
];

export const ctaContent = {
  eyebrow: "WhatsApp CTA",
  title: "Siap memilih cat untuk rumah, toko, atau proyek Anda?",
  description:
    "Ceritakan kebutuhan permukaan, area, warna, dan jadwal. Tim Toko Cat Utama akan membantu menyusun pilihan yang paling pas.",
  action: "Chat WhatsApp",
};
