"use client"
import dynamic from "next/dynamic"

const InvoicePageClient = dynamic(() => import("./invoice-page-client"), {
    ssr: false,
})

export default function InvoicePage() {
    return <InvoicePageClient />
}