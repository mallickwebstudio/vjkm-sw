import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { RiInstagramLine } from "@remixicon/react";
import { siteConfig } from "@/lib/metadata";
import Link from "next/link";

const links = [
  // {
  //   href: "https://www.instagram.com/vjkm_sf_msw/",
  //   icon: RiInstagramLine,
  //   label: "Instagram",
  //   bg: "bg-pink-600",
  // },
  {
    href: siteConfig.links.phone,
    icon: Phone,
    label: "Call",
    bg: "bg-blue-600",
  },
  {
    href: siteConfig.links.email,
    icon: Mail,
    label: "Email",
    bg: "bg-red-600",
  },
  {
    href: siteConfig.links.whatsapp,
    icon: MessageCircle,
    label: "WhatsApp",
    bg: "bg-green-600",
  },
];

export default function OverscreenLinks() {
  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 flex flex-col z-50">
      {links.map(({ href, icon: Icon, label, bg }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "rounded-none text-primary-foreground md:size-12 hover:bg-primary hover:text-primary-foreground",
            bg
          )}
        >
          <Icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
}
