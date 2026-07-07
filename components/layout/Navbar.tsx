"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems } from "@/data/navigation";
import { brandAssets } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Toko Cat Utama home">
          <Image
            src={brandAssets.logoPrimary}
            alt="Toko Cat Utama"
            width={4500}
            height={2333}
            priority
            className="h-12 w-auto object-contain"
            sizes="180px"
          />
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition ${
                pathname === item.href ? "text-utama-blue" : "text-neutral-700 hover:text-utama-blue"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <WhatsAppButton className="inline-flex items-center gap-2 rounded-full bg-utama-blue px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-utama-red" />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-utama-ink transition hover:border-utama-blue hover:text-utama-blue xl:hidden"
          aria-label="Buka menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {isOpen ? <MobileMenu navItems={navItems} pathname={pathname} onNavigate={() => setIsOpen(false)} /> : null}
    </header>
  );
}
