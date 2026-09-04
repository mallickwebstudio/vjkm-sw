import { Link } from "@/i18n/navigation";
import { default as NextLink } from 'next/link';
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/metadata";
import { formatEmailHref, formatPhoneHref, formatWebsiteHref, formatWhatsappHref } from "@/lib/format";
import { useTranslations } from "next-intl";
import { navigationData } from "@/config/navigation";

export default function Footer() {
    const t = useTranslations();

    // Main top-level navigation links
    const exploreLinks = navigationData.map((item) => ({
        label: item.label.startsWith("navigation.") ? t(item.label) : item.label,
        href: item.href,
    }));

    // Extract quick links for student corner & fieldwork
    const studentCornerLinks = [
        { label: t("footer.studentCornerLinks.bsw"), href: "/courses/bsw" },
        { label: t("footer.studentCornerLinks.msw"), href: "/courses/msw" },
        { label: t("footer.studentCornerLinks.fieldwork"), href: "/fieldwork" },
        { label: t("navigation.gallery"), href: "/gallery" },
    ];

    // Governance & Compliance links
    const governanceLinks = [
        { label: t("navigation.governingBody"), href: "/about-us#governing-body" },
        { label: t("navigation.aboutTrust"), href: "/about-us#about-trust" },
        { label: t("footer.governanceLinks.gcas"), href: "/admission#gcas-guidance" },
        { label: t("navigation.privacyPolicy"), href: "/privacy-policy" },
        { label: t("navigation.termsOfService"), href: "/terms-of-service" },
    ];

    return (
        <footer id="main-footer" className="relative border-t bg-grad-primary-light bg-linear-to-t">
            <div className="mx-auto container p-4 py-8 sm:px-8 md:px-12 lg:px-14">
                <div className="pb-4 grid gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-5">
                    {/* Logo & Contact */}
                    <div className="lg:col-span-2">
                        <LogoColumn />
                    </div>

                    {/* Explore */}
                    <LinkColumn
                        h3={t("navigation.explore")}
                        data={exploreLinks}
                    />

                    {/* Student & Fieldwork */}
                    <LinkColumn
                        h3={t("footer.studentCorner")}
                        data={studentCornerLinks}
                    />

                    {/* Governance */}
                    <LinkColumn
                        h3={t("footer.governance")}
                        data={governanceLinks}
                    />
                </div>

                {/* Bottom */}
                <div className="pt-6 md:pt-12 flex gap-4 flex-col md:flex-row md:justify-between md:items-center text-sm border-t border-border/40">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <Link
                            className="hover:underline font-semibold"
                            href={siteConfig.baseUrl}
                            target="_blank"
                        >
                            {formatWebsiteHref(siteConfig.baseUrl)}
                        </Link>
                        . {t("footer.allRightsReserved")} |{" "}
                        <Link className="underline-offset-4 hover:underline hover:text-primary" href="/privacy-policy">
                            {t("navigation.privacyPolicy")}
                        </Link>{" "}
                        |{" "}
                        <Link className="underline-offset-4 hover:underline hover:text-primary" href="/terms-of-service">
                            {t("navigation.termsOfService")}
                        </Link>
                    </p>
                    <div className="flex flex-col md:flex-row-reverse md:items-center gap-4">
                        <NextLink
                            className="underline-offset-4 hover:underline hover:text-primary text-xs text-center md:text-right"
                            href="https://mallickwebstudio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("footer.designedBy")}
                        </NextLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function LogoColumn() {
    const t = useTranslations();

    return (
        <div>
            <Link className="flex items-center gap-2" href="/">
                <Image
                    className="size-16 object-contain rounded-full select-none pointer-events-none"
                    src="/images/logo/logo.webp"
                    width={56}
                    height={56}
                    alt={siteConfig.name.en + " Logo"}
                    unoptimized
                />
                <div>
                    <span className="block font-bold font-serif text-sm">{siteConfig.name.en}</span>
                    <span className="block text-xs font-semibold text-primary">{siteConfig.name.gu}</span>
                </div>
            </Link>

            <div className="mt-4 flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">
                    {t("footer.address")}
                </span>
            </div>

            <ul className="mt-4 space-y-2">
                <li>
                    <NextLink
                        className={cn(buttonVariants({ size: "sm", variant: "outline" }), "var-phone text-xs")}
                        href={siteConfig.links.phone}
                    >
                        <Phone className="size-3.5 mr-1" />
                        {formatPhoneHref(siteConfig.links.phone)}
                    </NextLink>
                </li>
                <li>
                    <NextLink
                        className={cn(buttonVariants({ size: "sm", variant: "outline" }), "var-whatsapp text-xs")}
                        href={siteConfig.links.whatsapp}
                    >
                        <MessageCircle className="size-3.5 mr-1" />
                        Whatsapp {formatWhatsappHref(siteConfig.links.whatsapp)}
                    </NextLink>
                </li>
                <li>
                    <NextLink
                        className={cn(buttonVariants({ size: "sm", variant: "outline" }), "var-mail text-xs")}
                        href={siteConfig.links.email}
                    >
                        <Mail className="size-3.5 mr-1" />
                        {formatEmailHref(siteConfig.links.email)}
                    </NextLink>
                </li>
            </ul>
        </div>
    );
}

function LinkColumn({ h3, data }: { h3: string; data: { label: string; href: string }[] }) {
    return (
        <div>
            <h3 className="font-bold text-sm text-foreground tracking-wide font-serif mb-3">{h3}</h3>
            <ul className="space-y-2">
                {data.map((item, i) => (
                    <li key={item.label + i + "Footer"}>
                        <Link
                            className="text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline line-clamp-1 transition-colors"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}