import type { BusinessHour, ContactDetail } from "@/types";
import { whatsappDisplay, whatsappHref } from "@/data/site";
import { withBasePath } from "@/lib/utils";

export const businessHours: BusinessHour[] = [
  { day: "Senin - Jumat", time: "07.30 - 16.30" },
  { day: "Sabtu", time: "07.30 - 15.00" },
  { day: "Minggu / Hari Besar", time: "09.00 - 15.00" },
];

export const contactDetails: ContactDetail[] = [
  { label: "WhatsApp", value: whatsappDisplay, href: whatsappHref },
  { label: "Email", value: "info@tokocatutama.com", href: "mailto:info@tokocatutama.com" },
  { label: "Jam Layanan", value: "Lihat jam buka toko", href: withBasePath("/kontak") },
];

export const contactPromptItems = [
  "Area dan jenis bangunan",
  "Permukaan yang akan dicat",
  "Target warna atau referensi",
  "Perkiraan jadwal pengerjaan",
];
