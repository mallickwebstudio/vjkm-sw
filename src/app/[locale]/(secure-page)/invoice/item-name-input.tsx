"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface ItemNameInputProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export function ItemNameInput({ value, onChange, placeholder }: ItemNameInputProps) {
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    // Filter suggestions from the static package list based on current input
    // const suggestions =
    //     value.trim().length > 0
    //         ? packagesData
    //               .filter((pkg) =>
    //                   pkg.title.toLowerCase().includes(value.toLowerCase())
    //               )
    //               .slice(0, 6) // cap the list so it doesn't overwhelm the row
    //         : packagesData.slice(0, 6) // show a starter list when field is empty + focused

    // Close dropdown when clicking outside this input
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div ref={wrapperRef} className="relative">
            <Input
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value) // always allow free typing
                    setIsOpen(true)
                }}
                onFocus={() => setIsOpen(true)}
                autoComplete="off"
            />

            {/* {isOpen && suggestions.length > 0 && (
                <div className="absolute z-40 mt-1 w-full max-h-56 overflow-y-auto rounded-md border bg-popover shadow-md">
                    {suggestions.map((pkg) => (
                        <button
                            key={pkg.slug}
                            type="button"
                            className="w-full text-left px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                            onMouseDown={(e) => {
                                // onMouseDown fires before Input's onBlur, so selection registers
                                e.preventDefault()
                                onChange(pkg.title)
                                setIsOpen(false)
                            }}
                        >
                            {pkg.title}
                        </button>
                    ))}
                </div>
            )} */}
        </div>
    )
}