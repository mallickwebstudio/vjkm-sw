"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Link, redirect } from "@/i18n/navigation";
// import { getAllDatas } from "@/lib/fetcher"
import { useClientLocale } from "@/i18n/utils"
import { cn } from "@/lib/utils"

export function SearchCommand({
    iconOnly,
    className
}: {
    iconOnly?: boolean;
    className?: string;
}) {
    const locale = useClientLocale();
    const [open, setOpen] = React.useState(false)

    // const { coursesData, collegesData, facilitiesData } = getAllDatas(locale);

    // const data = [
    //     {
    //         slug: "courses",
    //         category: "Course",
    //         items: [...coursesData.map(data => ({
    //             slug: data.slug,
    //             title: data.title,
    //             description: data.desc,
    //             imageSrc: data.thumbnail,
    //         }))],
    //     },
    //     {
    //         slug: "colleges",
    //         category: "College",
    //         items: [...collegesData.map(data => ({
    //             slug: data.slug,
    //             title: data.title,
    //             description: data.details.about,
    //             imageSrc: data.thumbnail,
    //         }))],
    //     },
    //     {
    //         slug: "facilities",
    //         category: "Facility",
    //         items: [...facilitiesData.map(data => ({
    //             slug: data.slug.toLocaleLowerCase().replace(" ", "-"),
    //             title: data.title,
    //             description: data.description,
    //             imageSrc: data.thumbnail,
    //         }))],
    //     },
    // ]

    return (
        <>
            <Button
                className={cn("font-semibold cursor-pointer",
                    iconOnly ? "size-6" : "",
                    className
                )}
                onClick={() => setOpen(true)}
                variant="secondary"
                size={iconOnly ? "icon" : "sm"}
            >
                <Search strokeWidth={3} />
                <span className={iconOnly ? "sr-only" : ""}>
                    Search
                </span>
            </Button>
            {open && (
                <CommandDialog
                    title="Search box"
                    description="Search for colleges, courses, facilities and more..."
                    className="top-4 md:top-1/3" open={open} onOpenChange={setOpen}
                >
                    <Command>
                        <CommandInput
                            placeholder="Search Colleges, Courses, Facilities..."
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setOpen(false);
                                    redirect({ href: "/search", locale: locale });
                                }
                            }}
                        />
                        {/* <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            {data.map((data, i) => (
                                <CommandGroup heading={data.category} key={data.category + i + "Navbar"}>
                                    {data.items.map((item, i) => (
                                        <CommandItem className="mt-1" key={item.title + i + "Navbar"}>
                                            <Link className="p-1 text-sm" href={`/${data.slug}/${item.slug}`} onClick={() => setOpen(false)}>
                                                <h3 className="font-serif line-clamp-1">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-1 text-xs line-clamp-2 text-muted-foreground">{item.description}</p>
                                            </Link>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            ))}
                        </CommandList> */}
                    </Command>
                </CommandDialog>
            )}
        </>
    )
}
