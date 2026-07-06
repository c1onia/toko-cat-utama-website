import type { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    title: "Cat Interior",
    description: "Finishing halus, warna tahan lama, mudah dibersihkan, dan nyaman untuk ruang keluarga.",
    accent: "bg-utama-yellow",
  },
  {
    title: "Cat Eksterior",
    description: "Perlindungan fasad terhadap cuaca, panas, hujan, jamur, dan perubahan warna.",
    accent: "bg-utama-blue",
  },
  {
    title: "Cat Kayu & Besi",
    description: "Lapisan kuat untuk pintu, pagar, rangka, furnitur, dan elemen detail bangunan.",
    accent: "bg-utama-red",
  },
  {
    title: "Waterproofing",
    description: "Solusi pelapis anti bocor untuk dak, dinding luar, area basah, dan sambungan.",
    accent: "bg-neutral-950",
  },
  {
    title: "Industrial Coating",
    description: "Sistem proteksi untuk lantai, metal, area produksi, gudang, dan fasilitas industri.",
    accent: "bg-utama-blue",
  },
  {
    title: "Perlengkapan Cat",
    description: "Roller, kuas, tape, amplas, thinner, alat semprot, dan kebutuhan aplikasi lainnya.",
    accent: "bg-utama-yellow",
  },
];

export const productRecommendationFactors = [
  "Permukaan dan kondisi dinding",
  "Target warna dan tingkat kilap",
  "Kebutuhan daya tahan",
  "Estimasi volume dan perlengkapan",
];
