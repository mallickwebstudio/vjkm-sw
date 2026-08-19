"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { NavItem } from "@/config/navigation";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface DesktopNavDropdownProps {
  item: NavItem;
  onItemClick?: () => void;
}

export function DesktopNavDropdown({ item, onItemClick }: DesktopNavDropdownProps) {
  const t = useTranslations();

  const displayLabel = item.label.startsWith("navigation.")
    ? t(item.label)
    : item.label;

  const children = item.children || [];

  return (
    <div className="w-72 md:w-80 p-2.5 bg-background/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-2xl space-y-1">
      {/* Category Overview Link */}
      <Link
        href={item.href}
        onClick={onItemClick}
        className="group flex items-center justify-between p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20 mb-1.5"
      >
        <span className="text-xs font-bold text-primary">Overview: {displayLabel}</span>
        <ChevronRight className="size-3.5 text-primary transition-transform group-hover:translate-x-0.5" />
      </Link>

      {/* Vertical List of Sub-links */}
      <div className="space-y-1 max-h-[70vh] overflow-y-auto">
        {children.map((sub, index) => {
          const subLabel = sub.label.startsWith("navigation.")
            ? t(sub.label)
            : sub.label;

          return (
            <Link
              key={`${sub.href}-${index}`}
              href={sub.href}
              onClick={onItemClick}
              className="group flex flex-col p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  {subLabel}
                </span>
                {sub.badge && (
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary shrink-0">
                    {sub.badge}
                  </span>
                )}
              </div>
              {sub.description && (
                <span className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                  {sub.description}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
