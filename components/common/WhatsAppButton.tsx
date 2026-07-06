import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { whatsappHref } from "@/data/site";

interface WhatsAppButtonProps {
  children?: ReactNode;
  className: string;
  iconClassName?: string;
}

export function WhatsAppButton({
  children = "WhatsApp",
  className,
  iconClassName = "h-4 w-4",
}: WhatsAppButtonProps) {
  return (
    <a href={whatsappHref} className={className}>
      <MessageCircle className={iconClassName} aria-hidden />
      {children}
    </a>
  );
}
