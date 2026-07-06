import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { NavItem } from "@/types";
import { whatsappHref } from "@/data/site";

interface MobileMenuProps {
  navItems: NavItem[];
  pathname: string;
  onNavigate: () => void;
}

export function MobileMenu({ navItems, pathname, onNavigate }: MobileMenuProps) {
  return (
    <div className="border-t border-neutral-100 bg-white px-5 py-4 shadow-card xl:hidden">
      <div className="grid gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`rounded-lg px-3 py-3 text-sm font-bold transition ${
              pathname === item.href ? "bg-utama-blue text-white" : "text-neutral-700 hover:bg-neutral-50"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={whatsappHref}
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-utama-red px-5 py-3 text-sm font-bold text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
