"use client"

import { Plus, Trash2, AlertTriangle, X } from "lucide-react"

import html2canvas from "html2canvas-pro"
import jsPDF from "jspdf"
import Image from "next/image"

import {
    InvoiceActionBarProvider,
    SavePdfButton,
    SendReceiptButton,
    StudentDbButton,
    ImportSpreadsheetButton,
    ExportCsvButton,
    FeeTemplatesButton,
} from "./invoice-action-bar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Section, SectionContent } from "@/components/section/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

interface FeeItem {
    id: string
    name: string
    amount: number
}

interface ReceiptContentProps {
    college: string
    receiptNo: string
    receiptDate: string
    studentName: string
    phone: string
    course: string
    enrollmentNo: string
    admissionYr: string
    academicYr: string
    paymentMode: string
    paymentId: string
    remark: string
    printDate: string
    items: FeeItem[]
    totalAmount: number
    formatDateForDisplay: (dateString: string) => string
}

function generateReceiptNo() {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, "0")
    const mm = String(today.getMonth() + 1).padStart(2, "0")
    const yyyy = String(today.getFullYear())
    const hh = String(today.getHours()).padStart(2, "0")
    const min = String(today.getMinutes()).padStart(2, "0")
    const ss = String(today.getSeconds()).padStart(2, "0")

    return `${dd}${mm}${yyyy}${hh}${min}${ss}`
}

function generateReceiptDate() {
    return new Date().toISOString().split("T")[0]
}

function getFormattedPrintDateTime(d: Date = new Date()) {
    const dd = String(d.getDate()).padStart(2, "0")
    const mm = String(d.getMonth() + 1).padStart(2, "0")
    const yyyy = d.getFullYear()

    let hours = d.getHours()
    const ampm = hours >= 12 ? "pm" : "am"
    hours = hours % 12
    hours = hours ? hours : 12 // convert 0 to 12
    const hh = String(hours).padStart(2, "0")

    const min = String(d.getMinutes()).padStart(2, "0")
    const ss = String(d.getSeconds()).padStart(2, "0")

    return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss} ${ampm}`
}

function generateAcademicYears() {
    const currentYear = new Date().getFullYear()
    const years: string[] = []
    for (let i = 5; i >= 0; i--) {
        const start = currentYear - i
        const end = start + 1
        years.push(`${start}-${end}`)
    }
    return years
}

const REMARK_PRESETS = [
    "1st Sem Fee Paid",
    "2nd Sem Fee Paid",
    "3rd Sem Fee Paid",
    "4th Sem Fee Paid",
    "5th Sem Fee Paid",
    "6th Sem Fee Paid",
    "1st Year Fee Paid",
    "2nd Year Fee Paid",
    "3rd Year Fee Paid",
    "Full Payment Received",
    "Partial Payment Received",
    "Late Fee Charges Included",
    "Scholarship Adjusted",
    "Custom Remark",
]

export default function InvoicePageClient() {
    const academicYearOptions = generateAcademicYears()
    const defaultAcademicYear = academicYearOptions[academicYearOptions.length - 1] || "2025-2026"

    const [college, setCollege] = useState<string>("VJKM Self Finance College of BSW")
    const [receiptNo, setReceiptNo] = useState<string>(generateReceiptNo)
    const [receiptDate, setReceiptDate] = useState<string>(generateReceiptDate)
    const [studentName, setStudentName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [course, setCourse] = useState<string>("")
    const [enrollmentNo, setEnrollmentNo] = useState<string>("")
    const [admissionYr, setAdmissionYr] = useState<string>("")
    const [academicYr, setAcademicYr] = useState<string>("")
    const [paymentMode, setPaymentMode] = useState<string>("Cash")
    const [paymentId, setPaymentId] = useState<string>("")
    const [presetRemark, setPresetRemark] = useState<string>("")
    const [remark, setRemark] = useState<string>("")
    const [printDate, setPrintDate] = useState<string>("")
    const [printError, setPrintError] = useState<string | null>(null)

    // Fee Items State
    const [items, setItems] = useState<FeeItem[]>([
        {
            id: "1",
            name: "Tuition Fee",
            amount: 15000,
        },
    ])

    const handleCollegeChange = (selectedCollege: string | null) => {
        if (!selectedCollege) return
        setCollege(selectedCollege)
        if (selectedCollege.includes("BSW")) {
            setCourse("BSW")
        } else if (selectedCollege.includes("MSW")) {
            setCourse("MSW")
        }
        if (printError) setPrintError(null)
    }

    const addItem = () => {
        setItems([
            ...items,
            {
                id: Date.now().toString(),
                name: "",
                amount: 0,
            },
        ])
    }

    const removeItem = (id: string) => {
        if (items.length > 1) {
            setItems(items.filter((item) => item.id !== id))
        }
    }

    const updateItem = (id: string, field: keyof FeeItem, value: string | number) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        )
    }

    const totalAmount = items.reduce(
        (acc, item) => acc + (Number(item.amount) || 0),
        0
    )

    const formatDateForDisplay = (dateString: string) => {
        if (!dateString) return ""
        const [year, month, day] = dateString.split("-")
        return `${day}/${month}/${year}`
    }

    const generatePdfFile = async (): Promise<{ pdf: jsPDF; pdfBlob: Blob; pdfFile: File } | null> => {
        const missingFields: string[] = []

        if (!studentName.trim()) missingFields.push("Student Name")
        if (!enrollmentNo.trim()) missingFields.push("Enrollment No")
        if (!phone.trim()) missingFields.push("Phone Number")
        if (!course.trim()) missingFields.push("Course")
        if (!admissionYr.trim()) missingFields.push("Admission Yr")
        if (!academicYr.trim()) missingFields.push("Academic Yr")
        if (!remark.trim()) missingFields.push("Remark")
        if (!printDate.trim()) missingFields.push("Print Date & Time")

        if (missingFields.length > 0) {
            setPrintError(`Cannot process PDF! Please fill in all required fields: ${missingFields.join(", ")}.`)
            return null
        }

        setPrintError(null)

        const element = document.getElementById("printable-receipt-export")
        if (!element) return null

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
        })

        const imgData = canvas.toDataURL("image/jpeg", 0.88)

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [788, 555],
            compress: true,
        })

        pdf.addImage(imgData, "JPEG", 0, 0, 788, 555, undefined, "FAST")

        const pdfBlob = pdf.output("blob")
        const fileName = `Fees-Receipt-${receiptNo || "draft"}.pdf`
        const pdfFile = new File([pdfBlob], fileName, { type: "application/pdf" })

        return { pdf, pdfBlob, pdfFile }
    }

    const handleDownloadPDF = async () => {
        const result = await generatePdfFile()
        if (!result) return

        result.pdf.save(result.pdfFile.name)

        setReceiptNo(generateReceiptNo())
        setReceiptDate(generateReceiptDate())
    }

    const handleSharePDF = async () => {
        const result = await generatePdfFile()
        if (!result) return

        if (typeof navigator !== "undefined" && navigator.canShare && navigator.canShare({ files: [result.pdfFile] })) {
            try {
                await navigator.share({
                    title: `Fees Receipt - ${studentName || "Student"}`,
                    text: `Fees Receipt #${receiptNo} for ${studentName} (${college})`,
                    files: [result.pdfFile],
                })
            } catch (err) {
                console.log("Share cancelled", err)
            }
        } else {
            result.pdf.save(result.pdfFile.name)
            alert("Web Share API is not supported on this browser. The PDF file has been downloaded to your device.")
        }
    }

    const handleEmailPDF = async (phoneOrEmail: string, subject: string, body: string) => {
        const result = await generatePdfFile()
        if (!result) return

        if (typeof navigator !== "undefined" && navigator.canShare && navigator.canShare({ files: [result.pdfFile] })) {
            try {
                await navigator.share({
                    title: subject,
                    text: body,
                    files: [result.pdfFile],
                })
                return
            } catch {
                // User closed share sheet
            }
        }

        result.pdf.save(result.pdfFile.name)

        const cleanDigits = phoneOrEmail.replace(/\D/g, "")
        if (cleanDigits.length >= 10) {
            const waUrl = `https://api.whatsapp.com/send?phone=${cleanDigits}&text=${encodeURIComponent(body)}`
            window.open(waUrl, "_blank")
        } else if (phoneOrEmail.includes("@")) {
            const mailtoUrl = `mailto:${encodeURIComponent(phoneOrEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            window.location.href = mailtoUrl
        } else {
            const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(body)}`
            window.open(waUrl, "_blank")
        }
    }

    const handleSaveToDrive = async () => {
        const result = await generatePdfFile()
        if (!result) return

        const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

        // On Mobile devices (Android/iOS): Use Web Share API which triggers native "Save to Drive" app modal
        if (isMobile && typeof navigator !== "undefined" && navigator.canShare && navigator.canShare({ files: [result.pdfFile] })) {
            try {
                await navigator.share({
                    title: `Fees Receipt - ${studentName || "Student"}`,
                    text: `Fees Receipt #${receiptNo} - ${studentName}`,
                    files: [result.pdfFile],
                })
                return
            } catch (err) {
                console.log("Drive share closed or cancelled", err)
            }
        }

        // On Desktop browsers: Save PDF file to downloads and open Google Drive in new tab
        result.pdf.save(result.pdfFile.name)
        window.open("https://drive.google.com/drive/my-drive", "_blank")
    }

    const receiptProps: ReceiptContentProps = {
        college,
        receiptNo,
        receiptDate,
        studentName,
        phone,
        course,
        enrollmentNo,
        admissionYr,
        academicYr,
        paymentMode,
        paymentId,
        remark,
        printDate,
        items,
        totalAmount,
        formatDateForDisplay,
    }

    return (
        <Section padding="xs" className="bg-teal-muted">
            <SectionContent className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-start overflow-hidden">
                {/* LEFT COLUMN: Input Form Controls */}
                <div className="lg:col-span-4 space-y-6 print:hidden">
                    <InvoiceActionBarProvider
                        onSavePdf={handleDownloadPDF}
                        onSaveToDrive={handleSaveToDrive}
                        onSharePdf={handleSharePDF}
                        onEmailPdf={handleEmailPDF}
                        receiptDetails={{
                            studentName,
                            phone,
                            receiptNo,
                            receiptDate,
                            course,
                            enrollmentNo,
                            college,
                            totalAmount,
                            remark,
                        }}
                        onSelectStudent={({ name, phone, enrollment, course, admissionYr }) => {
                            if (name) setStudentName(name)
                            if (phone) setPhone(phone)
                            if (enrollment) setEnrollmentNo(enrollment)
                            if (course) setCourse(course)
                            if (admissionYr) setAdmissionYr(admissionYr)
                            if (printError) setPrintError(null)
                        }}
                        currentItems={items}
                        onApplyTemplate={(newItems) => setItems(newItems)}
                    >
                        <Card className="overflow-auto">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Fees Receipt Details</CardTitle>
                                <div className="flex items-center gap-2">
                                    <SendReceiptButton />
                                    <SavePdfButton />
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {printError && (
                                    <div className="p-3 bg-red-50 border border-red-300 text-red-700 text-xs rounded-md font-medium flex items-start justify-between gap-2 animate-in fade-in duration-150">
                                        <div className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                            <span>{printError}</span>
                                        </div>
                                        <button onClick={() => setPrintError(null)} className="text-red-400 hover:text-red-700">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                                {/* College Select */}
                                <div>
                                    <Label className="mb-0.5">College</Label>
                                    <Select value={college} onValueChange={handleCollegeChange}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select College" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="VJKM Self Finance College of BSW">
                                                VJKM Self Finance College of BSW
                                            </SelectItem>
                                            <SelectItem value="VJKM Self Finance College of MSW">
                                                VJKM Self Finance College of MSW
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Receipt No & Receipt Date */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="mb-0.5">Receipt No</Label>
                                        <Input
                                            value={receiptNo}
                                            onChange={(e) => setReceiptNo(e.target.value)}
                                            placeholder="Receipt No"
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-0.5">Receipt Date</Label>
                                        <Input
                                            type="date"
                                            value={receiptDate}
                                            onChange={(e) => setReceiptDate(e.target.value)}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <hr />

                                {/* Student Details */}
                                <div className="space-y-2">
                                    <CardTitle className="text-base">Student Details</CardTitle>

                                    {/* Import, Export, Student DB below "Student Details" */}
                                    <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-100/90 rounded-lg border border-slate-200">
                                        <ImportSpreadsheetButton />
                                        <ExportCsvButton />
                                        <StudentDbButton />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-1">
                                        <div>
                                            <Label className="mb-0.5">Name</Label>
                                            <Input
                                                value={studentName}
                                                onChange={(e) => {
                                                    setStudentName(e.target.value)
                                                    if (printError) setPrintError(null)
                                                }}
                                                placeholder="Student Name"
                                            />
                                        </div>
                                        <div>
                                            <Label className="mb-0.5">Enrollment No</Label>
                                            <Input
                                                value={enrollmentNo}
                                                onChange={(e) => {
                                                    setEnrollmentNo(e.target.value)
                                                    if (printError) setPrintError(null)
                                                }}
                                                placeholder="Enrollment No"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label className="mb-0.5">Phone</Label>
                                            <Input
                                                value={phone}
                                                onChange={(e) => {
                                                    setPhone(e.target.value)
                                                    if (printError) setPrintError(null)
                                                }}
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div>
                                            <Label className="mb-0.5">Admission Yr</Label>
                                            <Select
                                                value={admissionYr}
                                                onValueChange={(val) => {
                                                    if (!val) return
                                                    setAdmissionYr(val)
                                                    if (printError) setPrintError(null)
                                                }}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select Year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {academicYearOptions.map((yr) => (
                                                        <SelectItem key={yr} value={yr}>
                                                            {yr}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label className="mb-0.5">Course</Label>
                                            <Select
                                                value={course}
                                                onValueChange={(val) => {
                                                    if (!val) return
                                                    setCourse(val)
                                                    if (printError) setPrintError(null)
                                                }}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select Course" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="BSW">BSW</SelectItem>
                                                    <SelectItem value="MSW">MSW</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label className="mb-0.5">Academic Yr</Label>
                                            <Select
                                                value={academicYr}
                                                onValueChange={(val) => {
                                                    if (!val) return
                                                    setAcademicYr(val)
                                                    if (printError) setPrintError(null)
                                                }}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select Year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {academicYearOptions.map((yr) => (
                                                        <SelectItem key={yr} value={yr}>
                                                            {yr}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                {/* Payment Details */}
                                <CardTitle className="text-base">Payment Details</CardTitle>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="mb-0.5">Payment Mode</Label>
                                        <Select value={paymentMode} onValueChange={(val) => val && setPaymentMode(val)}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Payment Mode" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Cash">Cash</SelectItem>
                                                <SelectItem value="Online">Online</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label className="mb-0.5">Payment Id (Optional)</Label>
                                        <Input
                                            value={paymentId}
                                            onChange={(e) => setPaymentId(e.target.value)}
                                            placeholder="Txn / Ref ID"
                                        />
                                    </div>
                                </div>

                                <hr />

                                {/* Remark & Print Metadata */}
                                <CardTitle className="text-base">Remark & Print Metadata</CardTitle>
                                <div className="space-y-3">
                                    <div>
                                        <Label className="mb-0.5">Select Remark Preset</Label>
                                        <Select
                                            value={presetRemark}
                                            onValueChange={(val) => {
                                                if (!val) return
                                                setPresetRemark(val)
                                                if (val !== "Custom Remark") {
                                                    setRemark(val)
                                                }
                                                if (printError) setPrintError(null)
                                            }}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Remark" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {REMARK_PRESETS.map((preset) => (
                                                    <SelectItem key={preset} value={preset}>
                                                        {preset}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label className="mb-0.5">Custom / Edit Remark</Label>
                                        <Input
                                            value={remark}
                                            onChange={(e) => {
                                                setRemark(e.target.value)
                                                if (!REMARK_PRESETS.includes(e.target.value)) {
                                                    setPresetRemark("Custom Remark")
                                                }
                                                if (printError) setPrintError(null)
                                            }}
                                            placeholder="Write remark..."
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-0.5">Print Date & Time</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                value={printDate}
                                                onChange={(e) => {
                                                    setPrintDate(e.target.value)
                                                    if (printError) setPrintError(null)
                                                }}
                                                placeholder="dd/mm/yyyy hh:mm:ss am|pm"
                                            />
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    setPrintDate(getFormattedPrintDateTime())
                                                    if (printError) setPrintError(null)
                                                }}
                                                title="Update to current time"
                                            >
                                                Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                {/* Main Table Items */}
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <CardTitle className="text-base">Fee Items</CardTitle>
                                        <FeeTemplatesButton />
                                    </div>
                                    <Button onClick={addItem} size="sm" variant="outline">
                                        <Plus className="w-4 h-4 mr-1" /> Add Row
                                    </Button>
                                </div>

                                {items.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="p-3 border rounded-md space-y-2 relative bg-slate-50/50"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-xs text-slate-500">
                                                Item #{index + 1} (Sr No: {index + 1})
                                            </span>
                                            {items.length > 1 && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6 text-red-500"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-12 gap-2">
                                            <div className="col-span-8">
                                                <Label className="mb-0.5">Fee Name / Particulars</Label>
                                                <Input
                                                    placeholder="e.g. Tuition Fee"
                                                    value={item.name}
                                                    onChange={(e) =>
                                                        updateItem(item.id, "name", e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <Label className="mb-0.5">Amount (₹)</Label>
                                                <Input
                                                    type="number"
                                                    value={item.amount}
                                                    onChange={(e) =>
                                                        updateItem(
                                                            item.id,
                                                            "amount",
                                                            parseFloat(e.target.value) || 0
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </InvoiceActionBarProvider>
                </div>

                {/* RIGHT COLUMN: Live Printable Canvas (788px x 555px - Landscape A5) */}
                <div className="relative lg:col-span-8 flex justify-center items-center overflow-x-auto w-full">
                    {/* Visible Preview */}
                    <div id="printable-receipt" className="relative w-[788px] h-[555px] shadow-xl overflow-hidden bg-white shrink-0">
                        <ReceiptContent {...receiptProps} />
                    </div>

                    {/* Hidden Export Target — exact 788x555 canvas */}
                    <div style={{ position: "fixed", top: 0, left: "-9999px", width: "788px", height: "555px" }}>
                        <div id="printable-receipt-export" className="relative w-[788px] h-[555px] overflow-hidden bg-white">
                            <ReceiptContent {...receiptProps} />
                        </div>
                    </div>
                </div>
            </SectionContent>
        </Section>
    )
}

function ReceiptContent({
    college,
    receiptNo,
    receiptDate,
    studentName,
    phone,
    course,
    enrollmentNo,
    admissionYr,
    academicYr,
    paymentMode,
    paymentId,
    remark,
    printDate,
    items,
    totalAmount,
    formatDateForDisplay,
}: ReceiptContentProps) {
    const isMsw = college.includes("MSW") || course.includes("MSW")
    const logoSrc = isMsw ? "/images/logo/log-msw.webp" : "/images/logo/logo-bsw.webp"
    const collegeTitle = college || (isMsw ? "VJKM Self Finance College of MSW" : "VJKM Self Finance College of BSW")
    const signatoryText = isMsw ? "VJKM SELF FINANCE COLLEGE OF MSW" : "VJKM SELF FINANCE COLLEGE OF BSW"

    return (
        <div className="w-[788px] h-[555px] p-3 pb-4 bg-white font-sans text-gray-900 flex flex-col justify-between select-none box-border relative">
            {/* Outer Frame Box */}
            <div className="border border-slate-900 h-full flex flex-col justify-between relative bg-white">

                {/* 1. TOP HEADER SECTION */}
                <div>
                    <div className="p-1 flex justify-between items-start gap-2">
                        {/* Left: Logo & College Titles */}
                        <div className="flex items-center gap-3">
                            <div className="relative w-14 h-14 shrink-0">
                                <Image
                                    src={logoSrc}
                                    alt="College Logo"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <div>
                                <h1 className="font-serif text-lg font-bold text-slate-900 tracking-tight leading-snug">
                                    {collegeTitle}
                                </h1>
                                <p className="text-[10.5px] font-medium text-slate-700 mt-0.5">
                                    Managed By: Vadodara Jilla Kelavani Mandal
                                </p>
                                <p className="text-[10.5px] font-medium text-slate-700">
                                    Affiliated to: Shri Govind Guru University
                                </p>
                            </div>
                        </div>

                        {/* Right: FEES RECEIPT Bar & Receipt Meta Table */}
                        <div className="w-[330px] shrink-0">
                            <div className="bg-black text-white text-[11px] font-bold text-center py-0.5 tracking-wider uppercase">
                                FEES RECEIPT
                            </div>
                            <div className="border border-t-0 border-slate-900 p-1.5 text-[10px] space-y-1 bg-white">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-1">
                                        <span className="font-medium text-slate-700">Receipt Date</span>
                                        <span className="font-semibold text-slate-900">: {formatDateForDisplay(receiptDate) || "—"}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="font-medium text-slate-700">Receipt No.</span>
                                        <span className="font-semibold text-slate-900">: {receiptNo || "—"}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-1">
                                        <span className="font-medium text-slate-700">Payment Mode</span>
                                        <span className="font-semibold text-slate-900">: {paymentMode || "Cash"}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="font-medium text-slate-700">Payment Id (opt)</span>
                                        <span className="font-semibold text-slate-900">: {paymentId || "—"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-slate-900" />

                    {/* 2. STUDENT & ACADEMIC DETAILS GRID */}
                    <div className="p-1 grid grid-cols-12 gap-x-4 gap-y-px text-[10px]">
                        {/* Left Column (Span 7) */}
                        <div className="col-span-7 space-y-px">
                            <div className="flex">
                                <span className="w-20 font-medium text-slate-700">Name</span>
                                <span className="font-semibold text-slate-900 flex-1">: {studentName || "—"}</span>
                            </div>
                            <div className="flex">
                                <span className="w-20 font-medium text-slate-700">Phone No.</span>
                                <span className="font-semibold text-slate-900 flex-1">: {phone || "—"}</span>
                            </div>
                            <div className="flex">
                                <span className="w-20 font-medium text-slate-700">Course</span>
                                <span className="font-semibold text-slate-900 flex-1">: {course || "—"}</span>
                            </div>
                            <div className="flex">
                                <span className="w-20 font-medium text-slate-700">College</span>
                                <span className="font-semibold text-slate-900 flex-1 truncate">: {collegeTitle}</span>
                            </div>
                        </div>

                        {/* Right Column (Span 5) */}
                        <div className="col-span-5 space-y-0.5 pl-2">
                            <div className="flex">
                                <span className="w-26 font-medium text-slate-700">Enrollment No</span>
                                <span className="font-semibold text-slate-900 flex-1">: {enrollmentNo || "—"}</span>
                            </div>
                            <div className="flex">
                                <span className="w-26 font-medium text-slate-700">Admission Yr</span>
                                <span className="font-semibold text-slate-900 flex-1">: {admissionYr || "—"}</span>
                            </div>
                            <div className="flex">
                                <span className="w-26 font-medium text-slate-700">Academic Yr</span>
                                <span className="font-semibold text-slate-900 flex-1">: {academicYr || "—"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-slate-900" />
                </div>

                {/* 3. MAIN TABLE ITEMS AREA */}
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                    <div className="overflow-hidden">
                        <table className="w-full text-xs border-collapse">
                            <thead>
                                <tr className="border-b border-slate-900 text-slate-900 font-bold">
                                    <th className="py-1 text-center w-[7%] text-[11px]">Sr. No.</th>
                                    <th className="py-1 text-left w-[75%] text-[11px] px-2">Particulars / Name</th>
                                    <th className="py-1 text-right w-[18%] text-[11px] pr-2">Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((row, index) => (
                                    <tr
                                        key={row.id || index}
                                        className="border-b border-slate-200 text-slate-800"
                                    >
                                        <td className="py-0.5 text-center text-[10.5px] font-medium text-slate-600">
                                            {index + 1}
                                        </td>
                                        <td className="py-0.5 text-left text-[10.5px] font-medium px-2 text-wrap whitespace-break-spaces">
                                            {row.name || "—"}
                                        </td>
                                        <td className="py-0.5 text-right text-[10.5px] font-semibold pr-2">
                                            ₹{(Number(row.amount) || 0).toLocaleString("en-IN")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Total Amount Badge */}
                        <div className="flex justify-end px-1 py-0.5">
                            <div className="border bg-slate-muted px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                                <span className="text-slate-700">Total Amount:</span>
                                <span className="text-emerald-700 font-bold">
                                    ₹{totalAmount.toLocaleString("en-IN")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. FOOTER & SIGNATURE SECTION */}
                <div>
                    <div className="h-px bg-slate-900 mb-1.5" />
                    <div className="flex justify-between items-end px-0.5 pb-0.5">
                        {/* Remark */}
                        <div className="text-[10px] text-slate-800 max-w-[500px] line-clamp-3">
                            {remark ? (
                                <span>
                                    <strong className="font-bold text-slate-900">Remark: </strong>
                                    {remark}
                                </span>
                            ) : (
                                <span className="text-slate-400 italic">No remark</span>
                            )}
                        </div>

                        {/* Signatory */}
                        <div className="text-center w-52 shrink-0">
                            <div className="w-44 h-px bg-slate-900 mx-auto mb-1" />
                            <p className="font-bold text-[9.5px] text-slate-900 tracking-wider uppercase">
                                AUTHORIZED SIGNATORY
                            </p>
                            <p className="font-semibold text-[8.5px] text-slate-700 uppercase mt-0.5">
                                {signatoryText}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Print Date Line (Outside Box) */}
            <div className="text-[9.5px] font-medium text-slate-500 text-right pt-0.5 pr-0.5">
                Print Date: {printDate || "—"}
            </div>
        </div>
    )
}

