import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.625rem] font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-2.5!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        amber: "bg-amber text-amber-foreground [a]:hover:bg-amber/80",
        sky: "bg-sky text-sky-foreground [a]:hover:bg-sky/80",
        slate: "bg-slate text-slate-foreground [a]:hover:bg-slate/80",
        teal: "bg-teal text-teal-foreground [a]:hover:bg-teal/80",
        rose: "bg-rose text-rose-foreground [a]:hover:bg-rose/80",
        purple: "bg-purple text-purple-foreground [a]:hover:bg-purple/80",
        blue: "bg-blue text-blue-foreground [a]:hover:bg-blue/80",
        "amber-outline": "bg-transparent border-amber text-amber [a]:hover:bg-amber/80",
        "sky-outline": "bg-transparent border-sky text-sky [a]:hover:bg-sky/80",
        "slate-outline": "bg-transparent border-slate text-slate [a]:hover:bg-slate/80",
        "teal-outline": "bg-transparent border-teal text-teal [a]:hover:bg-teal/80",
        "rose-outline": "bg-transparent border-rose text-rose [a]:hover:bg-rose/80",
        "purple-outline": "bg-transparent border-purple text-purple [a]:hover:bg-purple/80",
        "blue-outline": "bg-transparent border-blue text-blue [a]:hover:bg-blue/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border bg-input/20 text-foreground dark:bg-input/30 [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      type: {
        default: "",
        heading: "h-6 font-semibold text-xs uppercase tracking-wider"
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  type = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant, type }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
