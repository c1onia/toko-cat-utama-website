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
      <body>{children}</body>
    </html>
  );
}
