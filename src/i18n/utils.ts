import type { Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function useClientLocale(): Locale {
    return useLocale() as Locale;
}