"use client";

import { buttonVariants } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import EnquiryForm from "@/components/other/enquiry-form";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/metadata";
import { formatPhoneHref, formatWhatsappHref, formatEmailHref } from "@/lib/format";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Locale } from "@/i18n/routing";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "./section";

export default function Contact({ locale }: { locale: Locale }) {
  const path = usePathname();
  const t = useTranslations();

  if (path.includes("/certificate")) {
    return null;
  }

  return (
    <Section>
      <SectionContent className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Form and Details */}
        <div>
          <SectionHeader className="max-w-sm">
            <SectionTitle>Contact <br /> {siteConfig.name[locale]}</SectionTitle>

            <SectionDescription>
              Fill out the form, and we&apos;ll get back to you as soon as possible.
            </SectionDescription>
          </SectionHeader>

          <EnquiryForm />

          {/* Contact Cards Container */}
          {/* <div className="mt-4 border rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-hidden">

            <address className="p-4 not-italic font-normal">
              <h3 className="h4 font-bold text-foreground">
                {t("section.contact.h3One")}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("section.contact.h3Onep")}
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <Link
                  className={cn(buttonVariants({ size: "sm" }), "var-phone w-full justify-start gap-2")}
                  href={siteConfig.links.phone}
                >
                  <Phone className="size-4" />
                  {formatPhoneHref(siteConfig.links.phone)}
                </Link>

                <Link
                  className={cn(buttonVariants({ size: "sm" }), "var-whatsapp w-full justify-start gap-2")}
                  href={siteConfig.links.whatsapp}
                >
                  <MessageCircle className="size-4" />
                  <span>Whatsapp us</span>
                </Link>

                <Link
                  className={cn(buttonVariants({ size: "sm" }), "var-mail w-full justify-start gap-2")}
                  href={siteConfig.links.email}
                >
                  <Mail className="size-4" />
                  {formatEmailHref(siteConfig.links.email)}
                </Link>
              </div>
            </address>

            <div className="p-4 bg-secondary">
              <h3 className="h4 font-bold text-foreground">
                {t("section.contact.h3Two")}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We are available to assist you during our working hours,{" "}
                <strong className="font-semibold text-foreground">Monday to Saturday</strong>,{" "}
                from <strong className="font-semibold text-foreground">9:30 AM to 1:00 PM</strong>.
                Feel free to contact or visit us during this time, and we&quot;ll be happy to help.
              </p>
            </div>
          </div> */}
        </div>

        {/* Right Column: Visual Map Context */}
        <div className="size-full bg-background aspect-square rounded-md overflow-hidden border">
          <iframe
            className="size-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.3423330843193!2d73.40717955629691!3d22.132029031364485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fe197ccdfb7dd%3A0xc387065eb673d598!2sVJKM%20Self%20Finance%20MSW%20-%20BSW%20College!5e1!3m2!1sen!2sin!4v1788341619060!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VJKM Self Finance College Map Location"
          />
        </div>
      </SectionContent>
    </Section>
  );
}