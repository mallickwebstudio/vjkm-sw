"use client"

import { useState } from "react"
import { Plus, Trash2, Printer } from "lucide-react"

import html2canvas from "html2canvas-pro"
import jsPDF from "jspdf"
import Image from "next/image"

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

export default function InvoicePageClient() {
    const academicYearOptions = generateAcademicYears()
    const defaultAcademicYear = academicYearOptions[academicYearOptions.length - 1] || "2025-2026"

    const [college, setCollege] = useState<string>("VJKM Self Finance College of BSW")
    const [receiptNo, setReceiptNo] = useState<string>(generateReceiptNo)
    const [receiptDate, setReceiptDate] = useState<string>(generateReceiptDate)
    const [studentName, setStudentName] = useState<string>("John Doe")
    const [phone, setPhone] = useState<string>("+91 9876543210")
    const [course, setCourse] = useState<string>("BSW")
    const [enrollmentNo, setEnrollmentNo] = useState<string>("EN2024001")
    const [admissionYr, setAdmissionYr] = useState<string>(defaultAcademicYear)
    const [academicYr, setAcademicYr] = useState<string>(defaultAcademicYear)
    const [paymentMode, setPaymentMode] = useState<string>("Cash")
    const [paymentId, setPaymentId] = useState<string>("")

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

    const handleDownloadPDF = async () => {
        const element = document.getElementById("printable-receipt-export")
        if (!element) return

        const canvas = await html2canvas(element, {
            scale: 3,
            useCORS: true,
            backgroundColor: "#ffffff",
        })

        const imgData = canvas.toDataURL("image/png")

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [788, 555],
        })

        pdf.addImage(imgData, "PNG", 0, 0, 788, 555)
        pdf.save(`Fees-Receipt-${receiptNo || "draft"}.pdf`)

        // Reset for the next receipt
        setReceiptNo(generateReceiptNo())
        setReceiptDate(generateReceiptDate())
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
        items,
        totalAmount,
        formatDateForDisplay,
    }

    return (
        <Section padding="xs" className="bg-teal-muted">
            <SectionContent className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-start overflow-hidden">
                {/* LEFT COLUMN: Input Form Controls */}
                <div className="lg:col-span-4 space-y-6 print:hidden">
                    <Card className="overflow-auto">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Fees Receipt Details</CardTitle>
                            <Button onClick={handleDownloadPDF} variant="outline" size="sm">
                                <Printer className="w-4 h-4 mr-2" /> Save PDF
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* College Select */}
                            <div>
                                <Label>College</Label>
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
                                    <Label>Receipt No</Label>
                                    <Input
                                        value={receiptNo}
                                        onChange={(e) => setReceiptNo(e.target.value)}
                                        placeholder="Receipt No"
                                    />
                                </div>
                                <div>
                                    <Label>Receipt Date</Label>
                                    <Input
                                        type="date"
                                        value={receiptDate}
                                        onChange={(e) => setReceiptDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            <hr />

                            {/* Student Details */}
                            <CardTitle className="text-base">Student Details</CardTitle>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Name</Label>
                                    <Input
                                        value={studentName}
                                        onChange={(e) => setStudentName(e.target.value)}
                                        placeholder="Student Name"
                                    />
                                </div>
                                <div>
                                    <Label>Enrollment No</Label>
                                    <Input
                                        value={enrollmentNo}
                                        onChange={(e) => setEnrollmentNo(e.target.value)}
                                        placeholder="Enrollment No"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Phone</Label>
                                    <Input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div>
                                    <Label>Admission Yr</Label>
                                    <Select value={admissionYr} onValueChange={(val) => val && setAdmissionYr(val)}>
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
                                    <Label>Course</Label>
                                    <Select value={course} onValueChange={(val) => val && setCourse(val)}>
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
                                    <Label>Academic Yr</Label>
                                    <Select value={academicYr} onValueChange={(val) => val && setAcademicYr(val)}>
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

                            <hr />

                            {/* Payment Details */}
                            <CardTitle className="text-base">Payment Details</CardTitle>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Payment Mode</Label>
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
                                    <Label>Payment Id (Optional)</Label>
                                    <Input
                                        value={paymentId}
                                        onChange={(e) => setPaymentId(e.target.value)}
                                        placeholder="Txn / Ref ID"
                                    />
                                </div>
                            </div>

                            <hr />

                            {/* Main Table Items */}
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-base">Fee Items</CardTitle>
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
                                            <Label className="text-xs">Fee Name / Particulars</Label>
                                            <Input
                                                placeholder="e.g. Tuition Fee"
                                                value={item.name}
                                                onChange={(e) =>
                                                    updateItem(item.id, "name", e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-span-4">
                                            <Label className="text-xs">Amount (₹)</Label>
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
    items,
    totalAmount,
    formatDateForDisplay,
}: ReceiptContentProps) {
    const bgTemplate = college.includes("MSW")
        ? "/images/invoice/fee-template-msw.png"
        : "/images/invoice/fee-template-bsw.png"

    return (
        <>
            {/* Background Template Image */}
            <div className="absolute inset-0 size-full">
                <Image
                    className="size-full object-fill object-center"
                    src={bgTemplate}
                    fill
                    crossOrigin="anonymous"
                    alt="Receipt Template"
                    unoptimized
                />
            </div>

            {/* Receipt No & Receipt Date Overlays */}
            <div className="absolute top-[47px] left-[490px] text-[10px] font-semibold text-gray-800">
                {formatDateForDisplay(receiptDate)}
            </div>
            <div className="absolute top-[47px] left-[670px] text-[10px] font-semibold text-gray-800">
                {receiptNo}
            </div>

            {/* Payment Section Overlays */}
            <div className="absolute top-[66px] left-[490px] text-[10px] font-semibold text-gray-800 truncate max-w-[220px]">
                {paymentMode || "—"}
            </div>
            <div className="absolute top-[66px] left-[670px] text-[10px] font-semibold text-gray-800 truncate max-w-[190px]">
                {paymentId || "—"}
            </div>

            {/* Grid Information Overlays */}
            {/* Row 1: Name & Enrollment No */}
            <div className="absolute top-[94px] left-[120px] text-[10px] font-semibold text-gray-800 truncate max-w-[280px]">
                {studentName || "—"}
            </div>
            <div className="absolute top-[94px] left-[500px] text-[10px] font-semibold text-gray-800 truncate max-w-[210px]">
                {enrollmentNo || "—"}
            </div>

            {/* Row 2: Phone No. & Admission Yr */}
            <div className="absolute top-[109px] left-[120px] text-[10px] font-semibold text-gray-800 truncate max-w-[280px]">
                {phone || "—"}
            </div>
            <div className="absolute top-[109px] left-[500px] text-[10px] font-semibold text-gray-800 truncate max-w-[210px]">
                {admissionYr || "—"}
            </div>

            {/* Row 3: Course & Academic Yr */}
            <div className="absolute top-[124px] left-[120px] text-[10px] font-semibold text-gray-800 truncate max-w-[280px]">
                {course || "—"}
            </div>
            <div className="absolute top-[124px] left-[500px] text-[10px] font-semibold text-gray-800 truncate max-w-[210px]">
                {academicYr || "—"}
            </div>

            {/* Row 4: College */}
            <div className="absolute top-[139px] left-[120px] text-[10px] font-semibold text-gray-800 truncate max-w-[620px]">
                {college || "—"}
            </div>

            {/* Main Table Items Overlay */}
            <div className="absolute top-[156px] left-[14px] w-[760px]">
                <Table className="border-collapse w-full">
                    <TableHeader>
                        <TableRow className="border-b-2 border-black text-xs font-bold text-gray-900">
                            <TableHead className="h-5 w-[5%] text-xs text-center text-inherit font-bold">Sr. No.</TableHead>
                            <TableHead className="h-5 w-[80%] text-xs text-left text-inherit font-bold">Particulars / Name</TableHead>
                            <TableHead className="h-5 w-[15%] text-xs text-right text-inherit font-bold pr-4">Amount (₹)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((row, index) => (
                            <TableRow
                                key={row.id}
                                className="border-b border-gray-200 text-xs text-gray-800"
                            >
                                <TableCell className="py-px w-[5%] text-[11px] text-center font-medium">{index + 1}</TableCell>
                                <TableCell className="py-px w-[80%] text-[11px] text-left font-medium text-wrap whitespace-break-spaces">{row.name || "—"}</TableCell>
                                <TableCell className="py-px w-[15%] text-[11px] text-right font-semibold pr-4">₹{(Number(row.amount) || 0).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Total Summary Row */}
                <div className="mt-2 flex justify-end pr-2">
                    <div className="px-2 py-1 w-fit border border-gray-400 rounded bg-gray-50/80 flex justify-between items-center text-xs font-bold">
                        <span className="text-gray-700">Total Amount: </span>
                        <span className="text-emerald-700 text-sm"> ₹{totalAmount.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
