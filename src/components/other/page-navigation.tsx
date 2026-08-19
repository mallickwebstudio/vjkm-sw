"use client";

import { ReactNode, useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavigationItem = {
  label: ReactNode;
  href: `#${string}`;
  primary?: boolean;
};

interface PageNavigationProps {
  items: NavigationItem[];
  className?: string;
  // pageName?: string;
}

export default function PageNavigation({
  items,
  className,
  // pageName
}: PageNavigationProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* {pageName && <div className="mx-auto container px-6 lg:px-12 sticky top-18 md:top-14 p-1 font-serif text-xs text-center bg-amber-100 z-20 line-clamp-1">
        {pageName}
      </div>} */}

      <section
        className={cn(
          "sticky top-30.5 md:top-20.5 sm:h-full z-20 border-y border-black bg-background shadow",
          // pageName ? "top-23.5 md:top-20" : "top-18 md:top-14",
          className
        )}
      >
        <div className="container mx-auto px-4 lg:px-16">
          <nav>
            <ul className="flex flex-wrap">
              {items.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "h-8! px-2 text-xs md:text-base",
                        item.primary &&
                        !isActive &&
                        "bg-grad-primary bg-linear-to-t text-white hover:text-white",
                        isActive &&
                        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}