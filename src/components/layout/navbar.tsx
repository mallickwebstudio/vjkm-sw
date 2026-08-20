"use client";

import React, { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown, ChevronRight, MoreHorizontal } from "lucide-react";
import { siteConfig } from "@/lib/metadata";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { navigationData, NavItem } from "@/config/navigation";
import { DesktopNavDropdown } from "./desktop-nav-dropdown";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "@/components/ui/hover-card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { SearchCommand } from "../shared/search-command";
import LanguageToggle from "../other/language-toggle";

const logos = [
    {
        src: "/images/logo/sba.png",
        alt: "Swachh Bharat Abhiyan",
    },
    {
        src: "/images/logo/g20.png",
        alt: "G20",
    },
    {
        src: "/images/logo/vg.png",
        alt: "Vibrant Gujarat",
    },
    {
        src: "/images/logo/vba.png",
        alt: "Viksit Bharat",
    },
];

export default function Navbar() {
    return (
        <>
            {/* Header */}
            <div className="container mx-auto flex h-20 px-4 md:px-8 lg:px-12">
                <div className="flex w-full items-center justify-between gap-4">
                    <div className="hidden lg:flex flex-col items-start">
                        <LogoLink className="text-primary text-lg font-bold uppercase leading-6" />
                    </div>

                    {logos.map(({ src, alt }) => (
                        <div
                            key={src + "Authority"}
                            className="h-8 md:h-14 aspect-video"
                        >
                            <Image
                                src={src}
                                alt={alt}
                                width={56}
                                height={56}
                                priority
                                unoptimized
                                className="h-full w-auto pointer-events-none select-none object-contain"
                                style={{ width: "auto" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <header className="sticky top-0 z-50 backdrop-blur-md border-b bg-amber! py-2 shadow-lg md:py-0 lg:h-12">
                <div className="container mx-auto h-full px-4 md:px-8 lg:px-12">
                    <div className="lg:hidden">
                        <MobileNav />
                    </div>

                    <div className="hidden h-full lg:flex items-center">
                        <DesktopNav />
                    </div>
                </div>
            </header>
        </>
    );
}

function DesktopNav() {
    const t = useTranslations();
    const navRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState<number>(navigationData.length);

    useEffect(() => {
        const container = navRef.current;
        if (!container) return;

        const calculateVisibleItems = () => {
            const totalWidth = container.clientWidth;
            // Reserve ~180px for right action controls (Search + Language toggle)
            const availableWidth = totalWidth - 180;

            // Average width per top nav button is approx 110px
            const avgItemWidth = 100;
            const count = Math.floor(availableWidth / avgItemWidth);

            if (count >= navigationData.length) {
                setVisibleCount(navigationData.length);
            } else {
                // Reserve ~80px for the "More" ellipsis button
                const adjustedWidth = availableWidth;
                const calcCount = Math.max(2, Math.floor(adjustedWidth / avgItemWidth));
                setVisibleCount(calcCount);
            }
        };

        calculateVisibleItems();
        const observer = new ResizeObserver(calculateVisibleItems);
        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    const visibleItems = navigationData.slice(0, visibleCount);
    const overflowItems = navigationData.slice(visibleCount);

    return (
        <div ref={navRef} className="w-full flex items-center justify-between gap-2 h-full">
            {/* Primary Nav Links */}
            <div className="flex items-center gap-1 overflow-hidden">
                {visibleItems.map((item: NavItem, index: number) => {
                    const displayLabel = item.label.startsWith("navigation.")
                        ? t(item.label)
                        : item.label;

                    if (item.type === "dropdown") {
                        return (
                            <HoverCard key={`${item.label}-${index}-desktop`} >
                                <HoverCardTrigger closeDelay={150} render={
                                    <Link className={cn(buttonVariants({ variant: "secondary", size: "sm" }))} href={item.href}>
                                        <span>{displayLabel}</span>
                                        <ChevronDown className="size-3 opacity-70" />
                                    </Link>
                                } />
                                <HoverCardContent
                                    align="start"
                                    side="bottom"
                                    sideOffset={8}
                                    className="w-auto p-0 border-none bg-transparent shadow-none"
                                >
                                    <DesktopNavDropdown item={item} />
                                </HoverCardContent>
                            </HoverCard>
                        );
                    }

                    return (
                        <Button
                            key={`${item.label}-${index}-desktop`}
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/10 hover:text-white font-semibold text-xs px-2.5 shrink-0"
                            render={
                                <Link href={item.href}>{displayLabel}</Link>
                            }
                        >
                        </Button>
                    );
                })}

                {/* Overflow Ellipsis Button ("More") */}
                {overflowItems.length > 0 && (
                    <HoverCard >
                        <HoverCardTrigger closeDelay={150} render={
                            <Button
                                variant="secondary"
                                size="sm"
                            >
                                <MoreHorizontal />
                                <span>More</span>
                                <ChevronDown />
                            </Button>
                        } />
                        <HoverCardContent
                            align="end"
                            side="bottom"
                            sideOffset={8}
                            className="w-64 p-2 bg-background/95 backdrop-blur-md border border-border/60 rounded-xl shadow-xl"
                        >
                            <div className="space-y-1 flex flex-col items-start">
                                {overflowItems.map((item: NavItem, idx: number) => {
                                    const displayLabel = item.label.startsWith("navigation.")
                                        ? t(item.label)
                                        : item.label;

                                    if (item.type === "dropdown" && item.children) {
                                        return (
                                            <DropdownMenu key={`overflow-${item.label}-${idx}`}>
                                                <DropdownMenuTrigger render={
                                                    <Button
                                                        variant="secondary"
                                                        size="sm"
                                                        className="w-full justify-between"
                                                    >
                                                        <span>{displayLabel}</span>
                                                        <ChevronRight className="size-3.5 opacity-60" />
                                                    </Button>
                                                } />
                                                <DropdownMenuContent side="right" align="start" className="w-64 p-2 bg-background/95 backdrop-blur-md">
                                                    <Link
                                                        href={item.href}
                                                        className="block text-xs font-bold text-primary p-2 hover:bg-accent rounded-md border-b border-border/40 mb-1"
                                                    >
                                                        Overview: {displayLabel} →
                                                    </Link>
                                                    {item.children.map((sub, sIdx) => {
                                                        const subLabel = sub.label.startsWith("navigation.")
                                                            ? t(sub.label)
                                                            : sub.label;
                                                        return (
                                                            <Link
                                                                key={`sub-${sub.href}-${sIdx}`}
                                                                href={sub.href}
                                                                className="block p-2 text-xs rounded-md hover:bg-accent transition-colors"
                                                            >
                                                                <div className="font-semibold text-foreground">{subLabel}</div>
                                                                {sub.description && (
                                                                    <div className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">{sub.description}</div>
                                                                )}
                                                            </Link>
                                                        );
                                                    })}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={`overflow-${item.label}-${idx}`}
                                            href={item.href}
                                            className="block p-2 text-xs font-semibold rounded-md hover:bg-accent transition-colors text-foreground"
                                        >
                                            {displayLabel}
                                        </Link>
                                    );
                                })}
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                )}
            </div>

            {/* Utility Actions */}
            <div className="flex items-center gap-2 shrink-0">
                <Link className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "bg-primary text-primary-foreground hover:bg-primary/70")} href="/contact-us">
                    {t("navigation.contact")}
                </Link>
                <SearchCommand />
                <LanguageToggle />
            </div>
        </div>
    );
}

function MobileNav() {
    const [open, setOpen] = useState(false);
    const t = useTranslations();

    const closeSheet = () => setOpen(false);

    return (
        <div className="flex h-14 items-center justify-between">
            <LogoLink className="text-white" />

            <Sheet open={open} onOpenChange={setOpen}>
                <div className="flex items-center gap-2">
                    <SearchCommand iconOnly />
                    <LanguageToggle iconOnly />
                    <SheetTrigger render={(
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/10 hover:text-white"
                        >
                            <Menu className="size-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    )} />
                </div>

                <SheetContent
                    side="left"
                    className="flex w-[320px] flex-col p-0 sm:w-90"
                >
                    <SheetHeader className="border-b px-6 py-5">
                        <SheetTitle>
                            <LogoLink />
                        </SheetTitle>
                    </SheetHeader>

                    <div className="flex-1 overflow-y-auto">
                        <Accordion className="w-full">
                            {navigationData.map((item: NavItem, index: number) => {
                                const displayLabel = item.label.startsWith("navigation.")
                                    ? t(item.label)
                                    : item.label;

                                return (
                                    <AccordionItem
                                        key={`${item.label}-${index}-mobile`}
                                        value={`item-${index}`}
                                        className="px-6"
                                    >
                                        {item.type === "dropdown" ? (
                                            <>
                                                <AccordionTrigger className="py-4 -mx-4 text-left font-semibold hover:no-underline">
                                                    {displayLabel}
                                                </AccordionTrigger>

                                                <AccordionContent className="-mx-4 px-4 bg-secondary/40 space-y-1.5 py-3">
                                                    <Link
                                                        href={item.href}
                                                        onClick={closeSheet}
                                                        className="block py-2 px-3 text-xs font-bold text-primary hover:bg-background/60 rounded-md transition-colors border-b border-border/30 mb-2"
                                                    >
                                                        Overview: {displayLabel} →
                                                    </Link>
                                                    {item.children?.map((sub, sIdx) => {
                                                        const subLabel = sub.label.startsWith("navigation.")
                                                            ? t(sub.label)
                                                            : sub.label;

                                                        return (
                                                            <Link
                                                                key={`${sub.href}-${sIdx}`}
                                                                href={sub.href}
                                                                onClick={closeSheet}
                                                                className="block py-2 px-3 rounded-md hover:bg-background/60 transition-colors"
                                                            >
                                                                <div className="text-xs font-semibold text-foreground">
                                                                    {subLabel}
                                                                </div>
                                                                {sub.description && (
                                                                    <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                                                                        {sub.description}
                                                                    </div>
                                                                )}
                                                            </Link>
                                                        );
                                                    })}
                                                </AccordionContent>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={closeSheet}
                                                className="block py-4 text-sm font-semibold transition-colors hover:text-primary"
                                            >
                                                {displayLabel}
                                            </Link>
                                        )}
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>

                    <SheetFooter>
                        <div className="border-t p-6">
                            <div className="flex items-center justify-between gap-3">
                                <SearchCommand />
                                <LanguageToggle />
                            </div>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}

function LogoLink({ className }: { className?: string }) {
    return (
        <Link className={cn("relative flex items-center gap-2", className)} href="/">
            <Image
                className="size-14 lg:size-16 object-contain select-none pointer-events-none"
                src="/images/logo/logo.webp"
                width={56}
                height={56}
                priority
                sizes="(min-width: 1024px) 64px, 56px"
                alt={siteConfig.name.en + " Logo"}
                unoptimized
            />
            <div>
                <span className="block text-xs md:text-sm font-bold font-serif text-inherit">Vadodara Jilla <br className='md:hidden' /> Kelavani Mandal</span>
                <span className="block text-xs md:text-sm font-bold font-serif mt-1 text-blue-300 lg:text-primary">વડોદરા જિલ્લા કેળવણી મંડળ</span>
            </div>
        </Link>
    );
}
