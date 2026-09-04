"use client"

import { useState } from "react"
import { toast } from "sonner"
import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnquiryFormProps {
    className?: string;
    onSuccess?: () => void;
}

const COURSE_OPTIONS = ["B.S.W.", "M.S.W."] as const

export default function EnquiryForm({ className, onSuccess }: EnquiryFormProps) {
    const t = useTranslations("form")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        course: "",
        message: "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    function handleCourseChange(value: string | null) {
        setFormData((prev) => ({ ...prev, course: value || "" }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!formData.name.trim() || !formData.phone.trim()) {
            toast.error(t("validationError"))
            return
        }

        setIsSubmitting(true)

        try {
            const res = await fetch("/api/submit-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    course: formData.course || undefined,
                    message: formData.message.trim() || undefined,
                }),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                toast.success(t("success"))
                setIsSubmitted(true)
                if (onSuccess) onSuccess()
            } else {
                toast.error(data.error || t("error"))
            }
        } catch (error) {
            console.error("Submission error:", error)
            toast.error(t("error"))
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn("space-y-4 max-w-2xl mx-auto", className)}>
            {/* Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                        {t("yourName")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="name"
                        className="mt-0.5 border-black/20"
                        name="name"
                        placeholder={t("vikasSharma")}
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium">
                        {t("phoneNo")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="phone"
                        className="mt-0.5 border-black/20"
                        name="phone"
                        placeholder="+91 00000 00000"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Row 2: Course Selection */}
            <div>
                <label htmlFor="course" className="block text-sm font-medium">
                    {t("course")} <span className="text-xs text-muted-foreground">({t("optional")})</span>
                </label>
                <Select
                    value={formData.course}
                    onValueChange={handleCourseChange}
                >
                    <SelectTrigger id="course" className="mt-0.5 flex w-full justify-between items-center h-9 px-3 rounded-md border border-black/20 bg-background text-sm">
                        <SelectValue placeholder={t("selectCourse")} />
                    </SelectTrigger>
                    <SelectContent>
                        {COURSE_OPTIONS.map((c) => (
                            <SelectItem key={c} value={c} className="text-sm">
                                {c}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Row 3: Message / Remarks */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium">
                    {t("message")} <span className="text-xs text-muted-foreground">({t("optional")})</span>
                </label>
                <Textarea
                    id="message"
                    className="mt-0.5 border-black/20 resize-none"
                    name="message"
                    rows={3}
                    placeholder={t("messageNote")}
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <div className="flex justify-center pt-1">
                <Button
                    className="relative cursor-pointer min-w-[180px]"
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                >
                    <LoaderIcon className={cn("animate-spin mr-2", isSubmitting ? "inline-block" : "hidden")} />
                    {isSubmitting
                        ? t("submitting")
                        : isSubmitted
                            ? t("submitted")
                            : t("requestCallback")}
                </Button>
            </div>
        </form>
    )
}
