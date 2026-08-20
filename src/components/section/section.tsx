import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const sectionContainerVariants = cva("container mx-auto flex flex-col gap-8 lg:gap-10", {
    variants: {
        padding: {
            default: "px-6 py-12 lg:px-16 xl:py-16",
            xs: "px-2 py-4 lg:px-10 xl:py-8",
            sm: "px-4 py-6 lg:px-12 xl:py-12",
            md: "px-6 py-10 lg:px-18 xl:py-18",
            lg: "px-8 py-12 lg:px-20 xl:py-20",
            none: "p-0",
        },
    },
    defaultVariants: {
        padding: "default",
    },
})

function Section({
    className,
    containerClassName,
    padding,
    children,
    ...props
}: React.ComponentProps<"section"> &
    VariantProps<typeof sectionContainerVariants> & {
        containerClassName?: string
    }) {
    return (
        <section
            data-slot="section"
            className={cn("relative w-full bg-background", className)}
            {...props}
        >
            <div
                data-slot="section-container"
                data-padding={padding ?? "default"}
                className={cn(sectionContainerVariants({ padding }), containerClassName)}
            >
                {children}
            </div>
        </section>
    )
}

const sectionHeaderVariants = cva("max-w-2xl flex flex-col gap-2 w-full", {
    variants: {
        align: {
            left: "items-start text-left",
            center: "items-center text-center self-center",
            right: "items-end text-right self-end",
        },
    },
    defaultVariants: {
        align: "left",
    },
})

function SectionHeader({
    className,
    align,
    asChild = false,
    ...props
}: React.ComponentProps<"header"> &
    VariantProps<typeof sectionHeaderVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot.Root : "header"

    return (
        <Comp
            data-slot="section-header"
            data-align={align ?? "left"}
            className={cn(sectionHeaderVariants({ align }), className)}
            {...props}
        />
    )
}

function SectionTitle({
    className,
    asChild = false,
    ...props
}: React.ComponentProps<"h2"> & {
    asChild?: boolean
}) {
    const Comp = asChild ? Slot.Root : "h2"

    return (
        <Comp
            data-slot="section-title"
            className={cn(
                "h2",
                className
            )}
            {...props}
        />
    )
}

function SectionDescription({
    className,
    asChild = false,
    ...props
}: React.ComponentProps<"p"> & {
    asChild?: boolean
}) {
    const Comp = asChild ? Slot.Root : "p"

    return (
        <Comp
            data-slot="section-description"
            className={cn("text-base/relaxed text-muted-foreground sm:text-lg/snug", className)}
            {...props}
        />
    )
}

const sectionActionsVariants = cva(
    "flex items-center flex-wrap gap-4 shrink-0 w-full transition-all",
    {
        variants: {
            align: {
                left: "justify-start text-left",
                center: "justify-center text-center",
                right: "justify-end text-right",
            },
        },
        defaultVariants: {
            align: "left",
        },
    }
)

function SectionActions({
    className,
    align,
    ...props
}: React.ComponentProps<"div"> &
    VariantProps<typeof sectionActionsVariants>) {
    return (
        <div
            data-slot="section-actions"
            data-align={align ?? "left"}
            className={cn(sectionActionsVariants({ align }), className)}
            {...props}
        />
    )
}

function SectionContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="section-content"
            className={cn("w-full grid grid-cols-1", className)}
            {...props}
        />
    )
}

export {
    Section,
    SectionHeader,
    SectionTitle,
    SectionDescription,
    SectionActions,
    SectionContent,
}