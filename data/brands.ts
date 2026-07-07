import type { BrandPartner, BrandRecommendationStep, TextCard } from "@/types";
import { withBasePath } from "@/lib/utils";

export const brandSectionCopy = {
  eyebrow: "Official Brands",
  title: "Official Distributor & Authorized Dealer",
  description:
    "Kami menyediakan berbagai merek cat terpercaya untuk kebutuhan rumah, komersial, hingga industri.",
};

export const brandPartners: BrandPartner[] = [
  {
    name: "Dulux",
    logo: withBasePath("/brands/logos/dulux.jpg"),
    productImage: withBasePath("/brands/dulux-catylac.jpg"),
    segment: "Dekoratif interior & eksterior",
    bestFor: "Hunian, apartemen, dan retail yang membutuhkan warna rapi dan konsisten.",
    recommendation:
      "Kami rekomendasikan saat pelanggan mencari pilihan warna yang luas, hasil akhir halus, dan sistem produk yang mudah dipahami.",
  },
  {
    name: "Nippon Paint",
    logo: withBasePath("/brands/logos/nippon.jpg"),
    productImage: withBasePath("/brands/nippon-weatherbond.jpg"),
    segment: "Eksterior tahan cuaca",
    bestFor: "Fasad rumah, ruko, dan bangunan yang terkena panas serta hujan langsung.",
    recommendation:
      "Pilihan yang kuat untuk pelanggan yang membutuhkan perlindungan eksterior dengan ketersediaan produk yang stabil.",
  },
  {
    name: "Jotun",
    logo: withBasePath("/brands/logos/jotun.jpg"),
    productImage: withBasePath("/brands/jotun-galon-set.jpg"),
    segment: "Dekoratif premium & protektif",
    bestFor: "Rumah premium, proyek komersial, dan kebutuhan coating yang lebih teknis.",
    recommendation:
      "Sering kami arahkan untuk proyek yang membutuhkan kombinasi tampilan premium, daya tahan, dan dukungan sistem cat yang jelas.",
  },
  {
    name: "Mowilex",
    logo: withBasePath("/brands/logos/mowilex.jpg"),
    productImage: withBasePath("/brands/mowilex-weathercoat.jpg"),
    segment: "Premium decorative coating",
    bestFor: "Interior dan eksterior dengan standar estetika tinggi.",
    recommendation:
      "Cocok untuk pelanggan yang mengutamakan kualitas warna, tampilan bersih, dan finishing yang terasa lebih premium.",
  },
  {
    name: "Avian Brands",
    logo: withBasePath("/brands/logos/avian.jpg"),
    productImage: withBasePath("/brands/avian-nodrop.jpg"),
    segment: "Solusi rumah & waterproofing",
    bestFor: "Perawatan rumah, renovasi, area lembap, dan kebutuhan waterproofing praktis.",
    recommendation:
      "Kami rekomendasikan untuk pelanggan yang membutuhkan produk fungsional, mudah diaplikasikan, dan relevan untuk kebutuhan harian rumah.",
  },
  {
    name: "Propan",
    logo: withBasePath("/brands/logos/propan.jpg"),
    productImage: withBasePath("/brands/propan-primtop.jpg"),
    segment: "Kayu, metal, lantai & proyek",
    bestFor: "Furniture, lantai, metal, dan permukaan khusus yang butuh sistem coating tepat.",
    recommendation:
      "Pilihan kuat saat proyek membutuhkan sistem produk yang lebih spesifik daripada cat dinding biasa.",
  },
  {
    name: "Kansai Paint",
    logo: withBasePath("/brands/logos/kansai.jpg"),
    productImage: withBasePath("/brands/kansai-ftalit.jpg"),
    segment: "Dekoratif & enamel",
    bestFor: "Kebutuhan warna solid, metal, kayu, dan aplikasi renovasi.",
    recommendation:
      "Kami arahkan untuk pelanggan yang membutuhkan pilihan cat serbaguna dengan kategori produk yang mudah dicocokkan.",
  },
  {
    name: "MU Weber",
    logo: withBasePath("/brands/logos/weber.jpg"),
    segment: "Persiapan permukaan",
    bestFor: "Skim coat, mortar, perekat keramik, dan pekerjaan dasar sebelum finishing.",
    recommendation:
      "Kami gunakan dalam rekomendasi saat kualitas permukaan perlu disiapkan lebih dulu agar hasil cat lebih rata dan tahan lama.",
  },
];

export const trustedBrands = brandPartners.map((brand) => brand.name);

export const brandReasons: TextCard[] = [
  {
    title: "Setiap permukaan butuh sistem berbeda",
    description:
      "Dinding baru, fasad lama, lantai, kayu, metal, dan area lembap tidak bisa diperlakukan dengan satu produk yang sama.",
  },
  {
    title: "Setiap proyek punya prioritas sendiri",
    description:
      "Sebagian pelanggan mengejar warna premium, sebagian membutuhkan ketahanan cuaca, sebagian lagi harus menjaga anggaran dan jadwal.",
  },
  {
    title: "Rekomendasi dibuat berdasarkan kebutuhan",
    description:
      "Tim kami membantu membandingkan fungsi, daya tahan, hasil akhir, stok, dan nilai terbaik sebelum pelanggan memilih merek.",
  },
];

export const brandRecommendationSteps: BrandRecommendationStep[] = [
  {
    title: "Pahami ruang dan target hasil",
    description: "Kami mulai dari jenis bangunan, gaya visual, area aplikasi, dan ekspektasi daya tahan.",
  },
  {
    title: "Cek permukaan dan kondisi lapangan",
    description: "Permukaan baru, lembap, retak rambut, metal, kayu, atau lantai membutuhkan sistem yang berbeda.",
  },
  {
    title: "Bandingkan sistem produk",
    description: "Primer, cat akhir, waterproofing, coating pelindung, dan aksesori dipilih sebagai satu rangkaian kerja.",
  },
  {
    title: "Sesuaikan warna, anggaran, dan stok",
    description: "Kami membantu memilih merek yang realistis secara visual, teknis, dan ketersediaan barang.",
  },
  {
    title: "Siapkan kebutuhan proyek",
    description: "Tim kami membantu estimasi volume, kesiapan produk, dan pengiriman dari cabang terdekat.",
  },
];

export const brandStrengths: TextCard[] = [
  {
    title: "Pilihan lintas segmen",
    description: "Mulai dari kebutuhan rumah sampai proyek industri dengan alternatif produk yang relevan.",
  },
  {
    title: "Rekomendasi objektif",
    description: "Merek dipilih berdasarkan fungsi, permukaan, daya tahan, warna, dan nilai terbaik.",
  },
  {
    title: "Dukungan relasi proyek",
    description: "Kami membantu menyelaraskan kebutuhan pelanggan, aplikator, dan pemilik proyek.",
  },
];
