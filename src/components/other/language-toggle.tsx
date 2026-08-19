'use client';

import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function LanguageToggle({
  iconOnly,
  className
}: {
  iconOnly?: boolean;
  className?: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === 'en' ? 'gu' : 'en';

  return (
    <Button
      className={cn("font-semibold cursor-pointer",
        iconOnly ? "size-6" : "",
        className
      )}
      variant="secondary"
      size={iconOnly ? "icon" : "sm"}
      onClick={() =>
        router.replace(pathname, {
          locale: nextLocale
        })
      }
    >
      <Languages className={iconOnly ? "hidden" : ""} />
      <span className={iconOnly ? "sr-only" : ""}>
        {locale === 'en' ? 'ગુજરાતી' : 'English'}
        {iconOnly && (locale === 'en' ? 'ગુજ' : 'Eng')}
      </span>
      <span className="px-1 lg:hidden text-xs">
        {iconOnly && (locale === 'en' ? 'ગુજ' : 'Eng')}
      </span>
    </Button>
  );
}