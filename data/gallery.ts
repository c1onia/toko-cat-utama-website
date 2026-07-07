import type { ProjectItem } from "@/types";
import { withBasePath } from "@/lib/utils";

export const projectCategories = [
  "Residential",
  "Commercial",
  "Industrial",
  "Marine",
  "Floor Coating",
];

export const projectGallery: ProjectItem[] = [
  {
    title: "Hunian Modern Semarang",
    category: "Residential",
    projectType: "Rumah tinggal dua lantai",
    productsUsed: "Cat eksterior premium + waterproofing (placeholder)",
    colorName: "Warm White + Utama Blue Accent (placeholder)",
    image: withBasePath("/brand/hero-house-v2.jpg"),
    description:
      "Fasad hunian dibuat bersih dan modern dengan aksen warna tegas agar rumah terasa lebih segar, rapi, dan percaya diri.",
  },
  {
    title: "Retail & F&B Facade",
    category: "Commercial",
    projectType: "Toko, kafe, dan bangunan komersial",
    productsUsed: "Cat eksterior tahan cuaca + sistem primer (placeholder)",
    colorName: "Soft Neutral + Brand Accent (placeholder)",
    image: withBasePath("/projects/commercial-retail.jpg"),
    reference: "Cimory Bawen dan proyek komersial sejenis",
    description:
      "Tampilan komersial yang rapi membantu bangunan lebih mudah dikenali, terasa profesional, dan tetap nyaman untuk pengunjung.",
  },
  {
    title: "Industrial Facility Coating",
    category: "Industrial",
    projectType: "Gudang dan fasilitas produksi",
    productsUsed: "Protective coating + metal primer (placeholder)",
    colorName: "Industrial Grey + Safety Accent (placeholder)",
    image: withBasePath("/projects/industrial-coating.jpg"),
    description:
      "Sistem coating industri membantu menjaga tampilan bangunan tetap bersih sekaligus mendukung perlindungan permukaan jangka panjang.",
  },
  {
    title: "Marine Protective Finish",
    category: "Marine",
    projectType: "Kapal dan area pelabuhan",
    productsUsed: "Marine coating system (placeholder)",
    colorName: "Marine Blue + Signal Red (placeholder)",
    image: withBasePath("/projects/marine-coating.jpg"),
    description:
      "Aplikasi marine coating membutuhkan pemilihan produk yang tepat agar permukaan lebih siap menghadapi air, panas, dan paparan cuaca.",
  },
  {
    title: "Epoxy Floor Showroom",
    category: "Floor Coating",
    projectType: "Showroom, bengkel, dan area kerja",
    productsUsed: "Epoxy floor coating system (placeholder)",
    colorName: "Light Grey Gloss + Yellow Line (placeholder)",
    image: withBasePath("/projects/floor-coating.jpg"),
    description:
      "Lantai epoxy memberi kesan bersih, terang, dan profesional untuk area kerja yang membutuhkan permukaan mudah dirawat.",
  },
];

export const projectReferences = [
  "YSKI",
  "RS Telogorejo",
  "RS Elizabeth",
  "RS Columbia",
  "Cimory Bawen",
  "SD / SMP / SMA Karangturi",
  "Gedung BPJS",
  "RS Sultan Agung",
  "UNDIP",
  "IKIP PGRI",
  "POLINES",
  "SD / SMP / SMA Theresiana",
];
