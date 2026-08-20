import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Link } from "@/i18n/navigation"
import React from "react"

type BreadcrumbItemType = {
  label: string
  href?: string
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItemType[]
}

export function BreadcrumbNavigation({ items }: CustomBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="sticky top-18 md:top-14 h-13 md:h-full overflow-hidden bg-background z-20 border-b border-black shadow-lg bg-[repeating-linear-gradient(135deg,#eeeeee_0px_1px,transparent_1px_10px)]"
    >
      <Breadcrumb className="container mx-auto px-4 py-1 md:px-16">
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href && !isLast ? (
                    <BreadcrumbLink render={<Link href={item.href} />} className="px-1 focus-highlight">
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="line-clamp-1">{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>

                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  )
}
