import React from "react";
import { Link } from "@/i18n/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbNavigation({ items, className }: BreadcrumbNavigationProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("bg-muted/40 border-b border-border/50 py-3.5 px-6 md:px-16", className)}
    >
      <div className="container mx-auto flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors flex items-center gap-1.5 font-medium"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5 shrink-0" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className={cn("truncate font-medium", isLast ? "text-foreground font-semibold" : "")}>
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
