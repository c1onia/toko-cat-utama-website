import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toko Cat Utama | Mewarnai Indonesia Sejak 1955",
  description:
    "Toko Cat Utama menyediakan solusi cat rumah, komersial, industri, konsultasi warna, dan layanan proyek profesional sejak 1955.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-utama-yellow focus:px-5 focus:py-3 focus:text-sm focus:font-black focus:text-utama-ink focus:shadow-card"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
