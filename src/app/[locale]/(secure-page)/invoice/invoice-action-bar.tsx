"use client"

import { useState, useEffect, createContext, useContext, ReactNode } from "react"
import {
    Printer,
    Upload,
    Download,
    Database,
    FileSpreadsheet,
    Plus,
    Trash2,
    Edit2,
    Search,
    UserCheck,
    Check,
    X,
    Save,
    AlertTriangle,
    BookmarkPlus,
    Layers,
    Copy,
    Share2,
    Send,
    MessageCircle,
    HardDrive,
    CloudUpload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
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

export interface StudentRecord {
    id: string
    name: string
    phone: string
    enrollment: string
    course?: string
    admissionYr?: string
}

export interface FeeItemSimple {
    id?: string
    name: string
    amount: number
}

export interface FeeItemTemplate {
    id: string
    title: string
    items: { name: string; amount: number }[]
    totalAmount: number
    updatedAt: string
}

export interface InvoiceActionBarProps {
    onSavePdf: () => void
    onSaveToDrive?: () => void
    onEmailPdf?: (email: string, subject: string, message: string) => void
    onSharePdf?: () => void
    onSelectStudent: (student: {
        name: string
        phone: string
        enrollment: string
        course?: string
        admissionYr?: string
    }) => void
    currentItems?: FeeItemSimple[]
    onApplyTemplate?: (items: { id: string; name: string; amount: number }[]) => void
    receiptDetails?: {
        studentName?: string
        phone?: string
        receiptNo?: string
        receiptDate?: string
        course?: string
        enrollmentNo?: string
        college?: string
        totalAmount?: number
        remark?: string
    }
    children?: ReactNode
}

export interface ValidationResult {
    isValid: boolean
    error: string | null
}

const STUDENT_STORAGE_KEY = "vjkm_student_records"
const TEMPLATE_STORAGE_KEY = "vjkm_fee_item_templates"

export function generateAcademicYears() {
    const currentYear = new Date().getFullYear()
    const years: string[] = []
    for (let i = 5; i >= 0; i--) {
        const start = currentYear - i
        const end = start + 1
        years.push(`${start}-${end}`)
    }
    return years
}

export function normalizeCourse(c?: string): string {
    if (!c) return "BSW"
    const upper = c.trim().toUpperCase()
    if (upper.includes("MSW")) return "MSW"
    return "BSW"
}

export function validateStudentInput(data: { name: string; phone: string; enrollment: string }): ValidationResult {
    const name = data.name.trim()
    const phone = data.phone.trim()
    const enrollment = data.enrollment.trim()

    if (!name) {
        return { isValid: false, error: "Student Name is mandatory!" }
    }
    if (!phone) {
        return { isValid: false, error: "Phone number is mandatory!" }
    }
    if (!enrollment) {
        return { isValid: false, error: "Enrollment number is mandatory!" }
    }

    if (/\d/.test(name)) {
        return { isValid: false, error: "Invalid Name: Numbers or digits are not allowed in student name." }
    }
    if (!/^[A-Za-z\s.'-]+$/.test(name)) {
        return { isValid: false, error: "Invalid Name: Must contain valid letters and spaces only." }
    }

    if (/[a-zA-Z]/.test(phone)) {
        return { isValid: false, error: "Invalid Phone: Letters or alphabets are not allowed in phone number." }
    }

    const cleanDigits = phone.replace(/\D/g, "")
    if (cleanDigits.length < 10) {
        return { isValid: false, error: `Invalid Phone: Too short (${cleanDigits.length} digits). Must be 10 digits.` }
    }
    if (cleanDigits.length > 12) {
        return { isValid: false, error: `Invalid Phone: Too long (${cleanDigits.length} digits). Maximum 12 digits (91 + 10 digits).` }
    }
    if (cleanDigits.length === 12 && !cleanDigits.startsWith("91")) {
        return { isValid: false, error: "Invalid Phone: 12-digit numbers must start with country code '91'." }
    }
    if (cleanDigits.length === 11 && !cleanDigits.startsWith("0")) {
        return { isValid: false, error: "Invalid Phone: 11-digit numbers are invalid (must be 10 digits)." }
    }

    if (enrollment.length < 2) {
        return { isValid: false, error: "Invalid Enrollment: Enrollment number must be at least 2 characters." }
    }

    return { isValid: true, error: null }
}

export function normalizePhoneForStorage(phoneInput: string): string {
    if (!phoneInput) return ""
    const digits = phoneInput.replace(/\D/g, "")

    if (digits.length === 10) {
        return `+91${digits}`
    } else if (digits.length === 12 && digits.startsWith("91")) {
        return `+${digits}`
    } else if (digits.length === 11 && digits.startsWith("0")) {
        return `+91${digits.slice(1)}`
    } else if (digits.length > 0) {
        return digits.startsWith("91") ? `+${digits}` : `+91${digits}`
    }
    return phoneInput.trim()
}

export function formatPhoneForDisplay(phoneStr: string): string {
    if (!phoneStr) return "—"
    const digits = phoneStr.replace(/\D/g, "")
    if (digits.length === 12 && digits.startsWith("91")) {
        const sub = digits.slice(2)
        return `+91 ${sub.slice(0, 5)} ${sub.slice(5)}`
    } else if (digits.length === 10) {
        return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
    }
    return phoneStr
}

const INITIAL_STUDENTS: StudentRecord[] = [
    { id: "1", name: "John Doe", phone: "+919876543210", enrollment: "EN2024001", course: "BSW", admissionYr: "2025-2026" },
    { id: "2", name: "Priya Patel", phone: "+919898989898", enrollment: "EN2024002", course: "MSW", admissionYr: "2025-2026" },
]

const INITIAL_TEMPLATES: FeeItemTemplate[] = [
    {
        id: "tpl-1",
        title: "BSW 1st Semester Standard Fee",
        items: [
            { name: "Tuition Fee", amount: 15000 },
            { name: "Admission & Reg Fee", amount: 1500 },
            { name: "Library & Computer Lab Fee", amount: 1000 },
        ],
        totalAmount: 17500,
        updatedAt: new Date().toLocaleDateString(),
    },
    {
        id: "tpl-2",
        title: "MSW 1st Semester Standard Fee",
        items: [
            { name: "Tuition Fee", amount: 18000 },
            { name: "Fieldwork Practicum Fee", amount: 2500 },
            { name: "Exam & Seminar Fee", amount: 1500 },
        ],
        totalAmount: 22000,
        updatedAt: new Date().toLocaleDateString(),
    },
]

interface InvoiceActionBarContextType {
    savePdf: () => void
    openSaveModal: () => void
    openImport: () => void
    openCrud: () => void
    openTemplates: () => void
    openEmail: () => void
    exportCsv: () => void
    studentsCount: number
    templatesCount: number
}

const InvoiceActionBarContext = createContext<InvoiceActionBarContextType | null>(null)

export function InvoiceActionBarProvider({
    onSavePdf,
    onSaveToDrive,
    onEmailPdf,
    onSharePdf,
    onSelectStudent,
    currentItems = [],
    onApplyTemplate,
    receiptDetails,
    children,
}: InvoiceActionBarProps) {
    const currentYearStr = `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`

    const [students, setStudents] = useState<StudentRecord[]>([])
    const [templates, setTemplates] = useState<FeeItemTemplate[]>([])

    const [isImportOpen, setIsImportOpen] = useState(false)
    const [isCrudOpen, setIsCrudOpen] = useState(false)
    const [isTemplateOpen, setIsTemplateOpen] = useState(false)
    const [isSendOpen, setIsSendOpen] = useState(false)
    const [isSavePdfOpen, setIsSavePdfOpen] = useState(false)

    // WhatsApp Send state
    const [waPhone, setWaPhone] = useState("")
    const [waMessage, setWaMessage] = useState("")

    // Import state
    const [pasteText, setPasteText] = useState("")
    const [importedPreview, setImportedPreview] = useState<StudentRecord[]>([])

    // Search & Edit state in Student CRUD modal
    const [searchQuery, setSearchQuery] = useState("")
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editForm, setEditForm] = useState<{
        name: string
        phone: string
        enrollment: string
        course: string
        admissionYr: string
    }>({
        name: "",
        phone: "",
        enrollment: "",
        course: "BSW",
        admissionYr: currentYearStr,
    })

    // Add New Student state in CRUD modal
    const [showAddForm, setShowAddForm] = useState(false)
    const [newStudent, setNewStudent] = useState<{
        name: string
        phone: string
        enrollment: string
        course: string
        admissionYr: string
    }>({
        name: "",
        phone: "",
        enrollment: "",
        course: "BSW",
        admissionYr: currentYearStr,
    })

    // Fee Template State & CRUD
    const [searchTemplateQuery, setSearchTemplateQuery] = useState("")
    const [showSaveCurrentForm, setShowSaveCurrentForm] = useState(false)
    const [saveTemplateTitle, setSaveTemplateTitle] = useState("")
    const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null)
    const [editTemplateTitle, setEditTemplateTitle] = useState("")
    const [editTemplateItems, setEditTemplateItems] = useState<{ name: string; amount: number }[]>([])

    const [validationError, setValidationError] = useState<string | null>(null)
    const [toastMessage, setToastMessage] = useState<string | null>(null)

    const showNotification = (msg: string) => {
        setToastMessage(msg)
        setTimeout(() => setToastMessage(null), 3000)
    }

    useEffect(() => {
        try {
            const savedStudents = localStorage.getItem(STUDENT_STORAGE_KEY)
            if (savedStudents) {
                const parsed = JSON.parse(savedStudents)
                if (Array.isArray(parsed)) {
                    setStudents(
                        parsed.map((s: StudentRecord) => ({
                            ...s,
                            phone: normalizePhoneForStorage(s.phone),
                        }))
                    )
                } else {
                    setStudents(INITIAL_STUDENTS)
                }
            } else {
                setStudents(INITIAL_STUDENTS)
                localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(INITIAL_STUDENTS))
            }
        } catch {
            setStudents(INITIAL_STUDENTS)
        }

        try {
            const savedTpls = localStorage.getItem(TEMPLATE_STORAGE_KEY)
            if (savedTpls) {
                const parsed = JSON.parse(savedTpls)
                if (Array.isArray(parsed)) {
                    setTemplates(parsed)
                } else {
                    setTemplates(INITIAL_TEMPLATES)
                }
            } else {
                setTemplates(INITIAL_TEMPLATES)
                localStorage.setItem(TEMPLATE_STORAGE_KEY, JSON.stringify(INITIAL_TEMPLATES))
            }
        } catch {
            setTemplates(INITIAL_TEMPLATES)
        }
    }, [])

    const saveStudentsToStorage = (records: StudentRecord[]) => {
        setStudents(records)
        try {
            localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(records))
        } catch (err) {
            console.error("Failed to save students to localStorage", err)
        }
    }

    const saveTemplatesToStorage = (records: FeeItemTemplate[]) => {
        setTemplates(records)
        try {
            localStorage.setItem(TEMPLATE_STORAGE_KEY, JSON.stringify(records))
        } catch (err) {
            console.error("Failed to save templates to localStorage", err)
        }
    }

    const openSendModal = () => {
        const name = receiptDetails?.studentName || ""
        const phoneStr = receiptDetails?.phone || ""
        const receiptNo = receiptDetails?.receiptNo || ""
        const collegeName = receiptDetails?.college || "VJKM Self Finance College"
        const courseName = receiptDetails?.course || ""
        const enrollment = receiptDetails?.enrollmentNo || ""
        const total = receiptDetails?.totalAmount || 0
        const remarkText = receiptDetails?.remark || ""

        setWaPhone(phoneStr)

        const defaultMsg =
            `*Fees Receipt - ${collegeName}*\n\n` +
            `*Student Name:* ${name || "—"}\n` +
            `*Receipt No:* ${receiptNo || "—"}\n` +
            `*Enrollment No:* ${enrollment || "—"}\n` +
            `*Course:* ${courseName || "—"}\n` +
            `*Total Amount Paid:* ₹${total.toLocaleString("en-IN")}\n` +
            (remarkText ? `*Remark:* ${remarkText}\n` : "") +
            `\nThank you!`

        setWaMessage(defaultMsg)
        setIsSendOpen(true)
    }

    const handleSendWhatsApp = () => {
        let cleanDigits = waPhone.replace(/\D/g, "")
        if (!cleanDigits) {
            showNotification("Please enter a valid phone number for WhatsApp!")
            return
        }
        if (cleanDigits.length === 10) {
            cleanDigits = `91${cleanDigits}`
        }

        if (onEmailPdf) {
            onEmailPdf(cleanDigits, "Fees Receipt", waMessage)
            setIsSendOpen(false)
        } else if (onSharePdf) {
            onSharePdf()
            setIsSendOpen(false)
        } else {
            const url = `https://api.whatsapp.com/send?phone=${cleanDigits}&text=${encodeURIComponent(waMessage)}`
            window.open(url, "_blank")
            setIsSendOpen(false)
            showNotification("Opening WhatsApp...")
        }
    }

    const handleSaveInDevice = () => {
        setIsSavePdfOpen(false)
        onSavePdf()
    }

    const handleSaveInDrive = () => {
        setIsSavePdfOpen(false)
        if (onSaveToDrive) {
            onSaveToDrive()
        } else {
            window.open("https://drive.google.com/drive/my-drive", "_blank")
        }
        showNotification("Opening Google Drive...")
    }

    const parseCsvContent = (content: string): StudentRecord[] => {
        const lines = content
            .split(/\r?\n/)
            .map((l) => l.trim())
            .filter(Boolean)
        if (lines.length === 0) return []

        const records: StudentRecord[] = []
        const firstLine = lines[0]
        let sep = ","
        if (firstLine.includes("\t")) sep = "\t"
        else if (firstLine.includes(";")) sep = ";"

        const headerTokens = firstLine.toLowerCase().split(sep).map((s) => s.trim().replace(/^["']|["']$/g, ""))
        const hasHeader =
            headerTokens.some((t) => t.includes("name") || t.includes("student")) ||
            headerTokens.some((t) => t.includes("phone") || t.includes("mobile")) ||
            headerTokens.some((t) => t.includes("enroll") || t.includes("no")) ||
            headerTokens.some((t) => t.includes("course") || t.includes("admission"))

        let nameIdx = 0
        let phoneIdx = 1
        let enrollIdx = 2
        let courseIdx = 3
        let admissionYrIdx = 4

        if (hasHeader) {
            const foundName = headerTokens.findIndex((t) => t.includes("name") || t.includes("student"))
            const foundPhone = headerTokens.findIndex((t) => t.includes("phone") || t.includes("mobile") || t.includes("contact"))
            const foundEnroll = headerTokens.findIndex((t) => t.includes("enroll") || t.includes("no") || t.includes("id"))
            const foundCourse = headerTokens.findIndex((t) => t.includes("course") || t.includes("program") || t.includes("degree"))
            const foundAdmissionYr = headerTokens.findIndex(
                (t) =>
                    t.includes("admission") ||
                    t.includes("year") ||
                    t.includes("yr") ||
                    t.includes("admission-year") ||
                    t.includes("admission_year")
            )

            if (foundName !== -1) nameIdx = foundName
            if (foundPhone !== -1) phoneIdx = foundPhone
            if (foundEnroll !== -1) enrollIdx = foundEnroll
            if (foundCourse !== -1) courseIdx = foundCourse
            if (foundAdmissionYr !== -1) admissionYrIdx = foundAdmissionYr
        }

        const dataLines = hasHeader ? lines.slice(1) : lines

        dataLines.forEach((line, idx) => {
            const cols = line.split(sep).map((c) => c.trim().replace(/^["']|["']$/g, ""))
            const name = cols[nameIdx] || ""
            const rawPhone = cols[phoneIdx] || ""
            const enrollment = cols[enrollIdx] || ""
            const course = cols[courseIdx] || "BSW"
            const admissionYr = cols[admissionYrIdx] || currentYearStr

            if (name || rawPhone || enrollment) {
                records.push({
                    id: `${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 4)}`,
                    name,
                    phone: normalizePhoneForStorage(rawPhone),
                    enrollment,
                    course: normalizeCourse(course),
                    admissionYr,
                })
            }
        })

        return records
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = (event) => {
            const text = event.target?.result as string
            if (text) {
                const parsed = parseCsvContent(text)
                setImportedPreview(parsed)
            }
        }
        reader.readAsText(file)
    }

    const handlePasteChange = (val: string) => {
        setPasteText(val)
        if (val.trim()) {
            const parsed = parseCsvContent(val)
            setImportedPreview(parsed)
        } else {
            setImportedPreview([])
        }
    }

    const confirmImport = () => {
        if (importedPreview.length === 0) return

        const updated = [...students]
        let addedCount = 0
        let invalidCount = 0

        importedPreview.forEach((imp) => {
            const val = validateStudentInput({ name: imp.name, phone: imp.phone, enrollment: imp.enrollment })
            if (!val.isValid) {
                invalidCount++
                return
            }

            const exists = updated.some(
                (s) =>
                    (s.enrollment && s.enrollment.toLowerCase() === imp.enrollment.toLowerCase()) ||
                    (s.name.toLowerCase() === imp.name.toLowerCase() && s.phone === imp.phone)
            )
            if (!exists) {
                updated.push({
                    ...imp,
                    phone: normalizePhoneForStorage(imp.phone),
                })
                addedCount++
            }
        })

        saveStudentsToStorage(updated)
        let msg = `Successfully imported ${addedCount} student record(s)!`
        if (invalidCount > 0) {
            msg += ` (${invalidCount} invalid rows skipped)`
        }
        showNotification(msg)
        setIsImportOpen(false)
        setPasteText("")
        setImportedPreview([])
    }

    const handleExportCsv = () => {
        if (students.length === 0) {
            showNotification("No student records to export!")
            return
        }

        const headers = ["name", "phone", "enrollment", "course", "admission_year"]
        const csvRows = [
            headers.join(","),
            ...students.map((s) =>
                [
                    `"${s.name || ""}"`,
                    `"${formatPhoneForDisplay(s.phone)}"`,
                    `"${s.enrollment || ""}"`,
                    `"${s.course || ""}"`,
                    `"${s.admissionYr || ""}"`,
                ].join(",")
            ),
        ]

        const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.setAttribute("href", url)
        link.setAttribute("download", `student_records_vjkm_${Date.now()}.csv`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        showNotification("Student database exported to CSV!")
    }

    const handleAddStudent = () => {
        const validation = validateStudentInput(newStudent)
        if (!validation.isValid) {
            setValidationError(validation.error)
            return
        }

        setValidationError(null)

        const record: StudentRecord = {
            id: Date.now().toString(),
            name: newStudent.name.trim(),
            phone: normalizePhoneForStorage(newStudent.phone.trim()),
            enrollment: newStudent.enrollment.trim(),
            course: normalizeCourse(newStudent.course),
            admissionYr: newStudent.admissionYr.trim() || currentYearStr,
        }

        const updated = [record, ...students]
        saveStudentsToStorage(updated)
        setNewStudent({ name: "", phone: "", enrollment: "", course: "BSW", admissionYr: currentYearStr })
        setShowAddForm(false)
        showNotification("Student added successfully!")
    }

    const startEditing = (student: StudentRecord) => {
        setValidationError(null)
        setEditingId(student.id)
        setEditForm({
            name: student.name,
            phone: formatPhoneForDisplay(student.phone),
            enrollment: student.enrollment,
            course: normalizeCourse(student.course),
            admissionYr: student.admissionYr || currentYearStr,
        })
    }

    const saveEditing = (id: string) => {
        const validation = validateStudentInput(editForm)
        if (!validation.isValid) {
            setValidationError(validation.error)
            return
        }

        setValidationError(null)

        const updated = students.map((s) =>
            s.id === id
                ? {
                    ...s,
                    name: editForm.name.trim(),
                    phone: normalizePhoneForStorage(editForm.phone.trim()),
                    enrollment: editForm.enrollment.trim(),
                    course: normalizeCourse(editForm.course),
                    admissionYr: editForm.admissionYr.trim(),
                }
                : s
        )
        saveStudentsToStorage(updated)
        setEditingId(null)
        showNotification("Student details updated!")
    }

    const deleteStudent = (id: string, studentName?: string) => {
        const nameLabel = studentName ? `"${studentName}"` : "this student"
        if (confirm(`Are you sure you want to delete ${nameLabel}?`)) {
            const updated = students.filter((s) => s.id !== id)
            saveStudentsToStorage(updated)
            showNotification("Student deleted!")
        }
    }

    const clearAllStudents = () => {
        if (confirm("Are you sure you want to clear ALL stored student records? This action cannot be undone.")) {
            saveStudentsToStorage([])
            showNotification("All student records cleared!")
        }
    }

    const handleSelectAndAutofill = (student: StudentRecord) => {
        onSelectStudent({
            name: student.name,
            phone: formatPhoneForDisplay(student.phone),
            enrollment: student.enrollment,
            course: student.course,
            admissionYr: student.admissionYr,
        })
        setIsCrudOpen(false)
        showNotification(`Loaded student: ${student.name}`)
    }

    const handleSaveCurrentAsTemplate = () => {
        if (!saveTemplateTitle.trim()) {
            showNotification("Please enter a title for the template.")
            return
        }

        const validItems = currentItems
            .map((i) => ({ name: i.name.trim(), amount: Number(i.amount) || 0 }))
            .filter((i) => i.name.length > 0)

        if (validItems.length === 0) {
            showNotification("Receipt has no valid fee items to save!")
            return
        }

        const totalAmount = validItems.reduce((sum, item) => sum + item.amount, 0)

        const newTemplate: FeeItemTemplate = {
            id: Date.now().toString(),
            title: saveTemplateTitle.trim(),
            items: validItems,
            totalAmount,
            updatedAt: new Date().toLocaleDateString(),
        }

        const updated = [newTemplate, ...templates]
        saveTemplatesToStorage(updated)
        setSaveTemplateTitle("")
        setShowSaveCurrentForm(false)
        showNotification(`Saved template "${newTemplate.title}"!`)
    }

    const handleUseTemplate = (tpl: FeeItemTemplate) => {
        if (!onApplyTemplate) return

        const mappedFeeItems = tpl.items.map((item, idx) => ({
            id: `${Date.now()}-${idx}`,
            name: item.name,
            amount: item.amount,
        }))

        onApplyTemplate(mappedFeeItems)
        setIsTemplateOpen(false)
        showNotification(`Loaded fee template: "${tpl.title}"`)
    }

    const startEditingTemplate = (tpl: FeeItemTemplate) => {
        setEditingTemplateId(tpl.id)
        setEditTemplateTitle(tpl.title)
        setEditTemplateItems(tpl.items.map((i) => ({ ...i })))
    }

    const saveEditingTemplate = (id: string) => {
        if (!editTemplateTitle.trim()) return

        const validItems = editTemplateItems
            .map((i) => ({ name: i.name.trim(), amount: Number(i.amount) || 0 }))
            .filter((i) => i.name.length > 0)

        const totalAmount = validItems.reduce((sum, i) => sum + i.amount, 0)

        const updated = templates.map((t) =>
            t.id === id
                ? {
                    ...t,
                    title: editTemplateTitle.trim(),
                    items: validItems,
                    totalAmount,
                    updatedAt: new Date().toLocaleDateString(),
                }
                : t
        )

        saveTemplatesToStorage(updated)
        setEditingTemplateId(null)
        showNotification("Template updated successfully!")
    }

    const deleteTemplate = (id: string, title?: string) => {
        const label = title ? `"${title}"` : "this template"
        if (confirm(`Are you sure you want to delete template ${label}?`)) {
            const updated = templates.filter((t) => t.id !== id)
            saveTemplatesToStorage(updated)
            showNotification("Template deleted!")
        }
    }

    const addRowToEditingTemplate = () => {
        setEditTemplateItems([...editTemplateItems, { name: "", amount: 0 }])
    }

    const updateEditingTemplateItem = (index: number, field: "name" | "amount", val: string | number) => {
        const updated = editTemplateItems.map((item, idx) =>
            idx === index ? { ...item, [field]: val } : item
        )
        setEditTemplateItems(updated)
    }

    const removeEditingTemplateItem = (index: number) => {
        setEditTemplateItems(editTemplateItems.filter((_, idx) => idx !== index))
    }

    const filteredStudents = students.filter((s) => {
        const q = searchQuery.toLowerCase()
        return (
            s.name.toLowerCase().includes(q) ||
            s.phone.toLowerCase().includes(q) ||
            s.enrollment.toLowerCase().includes(q) ||
            (s.course && s.course.toLowerCase().includes(q)) ||
            (s.admissionYr && s.admissionYr.toLowerCase().includes(q))
        )
    })

    const filteredTemplates = templates.filter((t) =>
        t.title.toLowerCase().includes(searchTemplateQuery.toLowerCase())
    )

    const contextValue: InvoiceActionBarContextType = {
        savePdf: onSavePdf,
        openSaveModal: () => setIsSavePdfOpen(true),
        openImport: () => setIsImportOpen(true),
        openCrud: () => setIsCrudOpen(true),
        openTemplates: () => setIsTemplateOpen(true),
        openEmail: openSendModal,
        exportCsv: handleExportCsv,
        studentsCount: students.length,
        templatesCount: templates.length,
    }

    return (
        <InvoiceActionBarContext.Provider value={contextValue}>
            {children}

            {toastMessage && (
                <div className="fixed top-4 right-4 z-50 px-3 py-2 bg-emerald-600 text-white shadow-lg rounded-md text-xs flex justify-between items-center gap-3 animate-in fade-in duration-200">
                    <span>{toastMessage}</span>
                    <button onClick={() => setToastMessage(null)} className="text-emerald-200 hover:text-white">
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            )}

            {/* MODAL 1: Fee Item Templates Manager */}
            <Dialog open={isTemplateOpen} onOpenChange={setIsTemplateOpen}>
                <DialogContent className="md:max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center justify-between text-base">
                            <span className="flex items-center gap-2">
                                <Layers className="w-5 h-5 text-purple-600" />
                                Fee Item Templates Manager
                            </span>
                            <Badge variant="outline" className="text-xs font-mono">
                                Saved: {templates.length}
                            </Badge>
                        </DialogTitle>
                        <DialogDescription className="text-xs">
                            Select a template to instantly apply its fee items to the receipt, or save your active fee items as a new template.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-3 py-1">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                            <div className="relative flex-1">
                                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                                <Input
                                    placeholder="Search template title..."
                                    value={searchTemplateQuery}
                                    onChange={(e) => setSearchTemplateQuery(e.target.value)}
                                    className="pl-8 text-xs h-8"
                                />
                            </div>
                            <Button
                                size="sm"
                                variant={showSaveCurrentForm ? "secondary" : "default"}
                                onClick={() => setShowSaveCurrentForm(!showSaveCurrentForm)}
                                className="h-8 text-xs bg-purple-700 hover:bg-purple-800 text-white"
                            >
                                <BookmarkPlus className="w-3.5 h-3.5 mr-1" />
                                {showSaveCurrentForm ? "Cancel Save" : "Save Active Items as Template"}
                            </Button>
                        </div>

                        {showSaveCurrentForm && (
                            <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-lg space-y-2 text-xs animate-in fade-in duration-150">
                                <span className="font-semibold text-purple-900 block">
                                    Save Active Receipt Fee Items ({currentItems.length} items)
                                </span>
                                <div className="flex gap-2 items-end">
                                    <div className="flex-1">
                                        <Label className="text-[11px] mb-0.5 block font-medium">Template Title *</Label>
                                        <Input
                                            placeholder="e.g. BSW 1st Sem Standard Fee"
                                            value={saveTemplateTitle}
                                            onChange={(e) => setSaveTemplateTitle(e.target.value)}
                                            className="h-8 text-xs bg-white"
                                        />
                                    </div>
                                    <Button
                                        size="sm"
                                        onClick={handleSaveCurrentAsTemplate}
                                        className="h-8 text-xs bg-purple-700 hover:bg-purple-800 text-white shrink-0"
                                    >
                                        <Save className="w-3.5 h-3.5 mr-1" /> Save Template
                                    </Button>
                                </div>
                            </div>
                        )}

                        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                            {filteredTemplates.length === 0 ? (
                                <div className="p-6 text-center text-slate-500 text-xs border rounded-lg">
                                    {searchTemplateQuery ? "No matching templates found." : "No fee item templates saved yet."}
                                </div>
                            ) : (
                                filteredTemplates.map((tpl) => {
                                    const isEditing = editingTemplateId === tpl.id
                                    return (
                                        <div
                                            key={tpl.id}
                                            className="p-3 border rounded-lg bg-white hover:border-purple-300 transition-colors shadow-2xs space-y-2"
                                        >
                                            {isEditing ? (
                                                <div className="space-y-2 border-l-2 border-purple-500 pl-2">
                                                    <div className="flex gap-2">
                                                        <Input
                                                            value={editTemplateTitle}
                                                            onChange={(e) => setEditTemplateTitle(e.target.value)}
                                                            className="h-7 text-xs font-semibold"
                                                            placeholder="Template Title"
                                                        />
                                                        <Button
                                                            size="xs"
                                                            variant="outline"
                                                            onClick={addRowToEditingTemplate}
                                                            className="h-7 text-xs shrink-0"
                                                        >
                                                            <Plus className="w-3 h-3 mr-1" /> Item
                                                        </Button>
                                                    </div>
                                                    <div className="space-y-1">
                                                        {editTemplateItems.map((item, idx) => (
                                                            <div key={idx} className="flex gap-2 items-center">
                                                                <Input
                                                                    value={item.name}
                                                                    onChange={(e) => updateEditingTemplateItem(idx, "name", e.target.value)}
                                                                    placeholder="Particulars"
                                                                    className="h-6 text-xs flex-1"
                                                                />
                                                                <Input
                                                                    type="number"
                                                                    value={item.amount}
                                                                    onChange={(e) =>
                                                                        updateEditingTemplateItem(idx, "amount", parseFloat(e.target.value) || 0)
                                                                    }
                                                                    placeholder="Amount"
                                                                    className="h-6 text-xs w-24"
                                                                />
                                                                <Button
                                                                    size="icon-sm"
                                                                    variant="ghost"
                                                                    onClick={() => removeEditingTemplateItem(idx)}
                                                                    className="h-6 w-6 text-red-500"
                                                                >
                                                                    <Trash2 className="w-3 h-3" />
                                                                </Button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="flex justify-end gap-2 pt-1">
                                                        <Button size="xs" variant="outline" onClick={() => setEditingTemplateId(null)}>
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            size="xs"
                                                            onClick={() => saveEditingTemplate(tpl.id)}
                                                            className="bg-emerald-600 text-white hover:bg-emerald-700"
                                                        >
                                                            <Check className="w-3 h-3 mr-1" /> Save
                                                        </Button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-semibold text-slate-800 text-xs">{tpl.title}</span>
                                                            <Badge variant="secondary" className="text-[10px] bg-purple-50 text-purple-700 border border-purple-200">
                                                                ₹{tpl.totalAmount.toLocaleString()} ({tpl.items.length} items)
                                                            </Badge>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Button
                                                                size="xs"
                                                                onClick={() => handleUseTemplate(tpl)}
                                                                className="h-6 text-[11px] px-2.5 bg-purple-700 hover:bg-purple-800 text-white font-medium"
                                                                title="Apply these fee items to receipt"
                                                            >
                                                                <Copy className="w-3 h-3 mr-1" />
                                                                Use Template
                                                            </Button>
                                                            <Button
                                                                size="icon-sm"
                                                                variant="ghost"
                                                                onClick={() => startEditingTemplate(tpl)}
                                                                className="h-6 w-6 text-slate-500 hover:text-purple-600"
                                                                title="Edit Template"
                                                            >
                                                                <Edit2 className="w-3.5 h-3.5" />
                                                            </Button>
                                                            <Button
                                                                size="icon-sm"
                                                                variant="ghost"
                                                                onClick={() => deleteTemplate(tpl.id, tpl.title)}
                                                                className="h-6 w-6 text-red-500 hover:text-red-700"
                                                                title="Delete Template"
                                                            >
                                                                <Trash2 className="w-3.5 h-3.5" />
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    <div className="pt-1 space-y-0.5">
                                                        {tpl.items.map((item, idx) => (
                                                            <Badge
                                                                key={idx}
                                                                className="flex justify-between w-full"
                                                                variant="secondary"
                                                            >
                                                                <span className="line-clamp-1 truncate">{item.name} :</span> <span> ₹{item.amount.toLocaleString()}</span>
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    </div>

                    <DialogFooter className="pt-2">
                        <Button variant="outline" size="sm" onClick={() => setIsTemplateOpen(false)}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* MODAL 2: Import Spreadsheet Dialog */}
            <Dialog open={isImportOpen} onOpenChange={setIsImportOpen}>
                <DialogContent className="md:max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-base">
                            <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                            Import Student Spreadsheet
                        </DialogTitle>
                        <DialogDescription>
                            Upload a <code>.csv</code> file or paste rows with columns: <strong>name, phone, enrollment, course, admission-year</strong>.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-2">
                        <div>
                            <Label className="mb-1 block text-xs font-semibold">Upload CSV / TSV File</Label>
                            <Input
                                type="file"
                                accept=".csv,.tsv,.txt"
                                onChange={handleFileUpload}
                                className="cursor-pointer text-xs"
                            />
                        </div>

                        <div className="flex items-center gap-2 text-slate-400 text-xs my-1">
                            <div className="h-px bg-slate-200 flex-1" />
                            <span>OR PASTE DATA</span>
                            <div className="h-px bg-slate-200 flex-1" />
                        </div>

                        <div>
                            <Label className="mb-1 block text-xs font-semibold">Paste Excel / Google Sheets Rows</Label>
                            <Textarea
                                placeholder={`Name      \tPhone   \tEnrollment\tCourse\tAdmissionYear\nJohn Doe\t9876543210\tEN2024001\tBSW   \t2025-2026\nPriya Patel\t9898989898\tEN2024002\tMSW   \t2025-2026`}
                                value={pasteText}
                                onChange={(e) => handlePasteChange(e.target.value)}
                                rows={4}
                                className="font-mono text-xs"
                            />
                        </div>

                        {importedPreview.length > 0 && (
                            <div className="space-y-2 pt-2 border-t">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-semibold text-emerald-700">
                                        Parsed Preview ({importedPreview.length} records found)
                                    </span>
                                </div>
                                <div className="max-h-48 overflow-y-auto border rounded text-xs bg-slate-50">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="py-1 h-6">Name</TableHead>
                                                <TableHead className="py-1 h-6">Phone</TableHead>
                                                <TableHead className="py-1 h-6">Enrollment</TableHead>
                                                <TableHead className="py-1 h-6">Course</TableHead>
                                                <TableHead className="py-1 h-6">Admission Yr</TableHead>
                                                <TableHead className="py-1 h-6 text-right">Validation</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {importedPreview.map((row, idx) => {
                                                const check = validateStudentInput({ name: row.name, phone: row.phone, enrollment: row.enrollment })
                                                return (
                                                    <TableRow key={idx}>
                                                        <TableCell className="py-1 text-[11px] font-medium">{row.name || "—"}</TableCell>
                                                        <TableCell className="py-1 text-[11px] font-mono">{formatPhoneForDisplay(row.phone)}</TableCell>
                                                        <TableCell className="py-1 text-[11px] font-mono">{row.enrollment || "—"}</TableCell>
                                                        <TableCell className="py-1 text-[11px]">{row.course || "—"}</TableCell>
                                                        <TableCell className="py-1 text-[11px]">{row.admissionYr || "—"}</TableCell>
                                                        <TableCell className="py-1 text-[11px] text-right">
                                                            {check.isValid ? (
                                                                <span className="text-emerald-600 font-semibold">Valid</span>
                                                            ) : (
                                                                <span className="text-red-500 font-semibold" title={check.error || ""}>
                                                                    Invalid
                                                                </span>
                                                            )}
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </div>

                    <DialogFooter>
                        <Button variant="outline" size="sm" onClick={() => setIsImportOpen(false)}>
                            Cancel
                        </Button>
                        <Button
                            onClick={confirmImport}
                            disabled={importedPreview.length === 0}
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                            <Upload className="w-3.5 h-3.5 mr-1" />
                            Save {importedPreview.length} Record(s) to DB
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* MODAL 3: Student Database CRUD Dialog */}
            <Dialog open={isCrudOpen} onOpenChange={(open) => {
                setIsCrudOpen(open)
                if (!open) setValidationError(null)
            }}>
                <DialogContent className="md:max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center justify-between text-base">
                            <span className="flex items-center gap-2">
                                <Database className="w-5 h-5 text-sky-600" />
                                Student Database Manager
                            </span>
                            <Badge variant="outline" className="text-xs font-mono">
                                Total: {students.length}
                            </Badge>
                        </DialogTitle>
                        <DialogDescription className="text-xs">
                            Select a student to autofill the active receipt form (including Name, Phone, Enrollment, Course, and Admission Year).
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-3 py-1">
                        {validationError && (
                            <div className="p-2.5 bg-red-50 border border-red-300 text-red-700 text-xs rounded-md font-medium flex items-center justify-between animate-in fade-in duration-150">
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                                    <span>{validationError}</span>
                                </div>
                                <button onClick={() => setValidationError(null)} className="text-red-400 hover:text-red-700">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                            <div className="relative flex-1">
                                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                                <Input
                                    placeholder="Search name, phone, enrollment, course, year..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-8 text-xs h-8"
                                />
                            </div>
                            <Button
                                size="sm"
                                variant={showAddForm ? "secondary" : "default"}
                                onClick={() => {
                                    setShowAddForm(!showAddForm)
                                    setValidationError(null)
                                }}
                                className="h-8 text-xs"
                            >
                                <Plus className="w-3.5 h-3.5 mr-1" />
                                {showAddForm ? "Cancel Add" : "Add Student"}
                            </Button>
                        </div>

                        {showAddForm && (
                            <div className="p-3 bg-sky-50/70 border border-sky-200 rounded-lg space-y-2 text-xs animate-in fade-in duration-150">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-sky-900">Create New Student Record</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                                    <div>
                                        <Label className="text-[11px] mb-0.5 block font-medium">Name *</Label>
                                        <Input
                                            placeholder="Letters only (e.g. John Doe)"
                                            value={newStudent.name}
                                            onChange={(e) => {
                                                setNewStudent({ ...newStudent, name: e.target.value })
                                                if (validationError) setValidationError(null)
                                            }}
                                            className="h-7 text-xs bg-white"
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-[11px] mb-0.5 block font-medium">Phone *</Label>
                                        <Input
                                            placeholder="Digits (e.g. 9876543210)"
                                            value={newStudent.phone}
                                            onChange={(e) => {
                                                setNewStudent({ ...newStudent, phone: e.target.value })
                                                if (validationError) setValidationError(null)
                                            }}
                                            className="h-7 text-xs bg-white"
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-[11px] mb-0.5 block font-medium">Enrollment *</Label>
                                        <Input
                                            placeholder="e.g. EN2024001"
                                            value={newStudent.enrollment}
                                            onChange={(e) => {
                                                setNewStudent({ ...newStudent, enrollment: e.target.value })
                                                if (validationError) setValidationError(null)
                                            }}
                                            className="h-7 text-xs bg-white"
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-[11px] mb-0.5 block font-medium">Course</Label>
                                        <Select
                                            value={normalizeCourse(newStudent.course)}
                                            onValueChange={(val) => val && setNewStudent({ ...newStudent, course: val })}
                                        >
                                            <SelectTrigger className="h-7 text-xs bg-white">
                                                <SelectValue placeholder="Course" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="BSW" className="text-xs">BSW</SelectItem>
                                                <SelectItem value="MSW" className="text-xs">MSW</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label className="text-[11px] mb-0.5 block font-medium">Admission Yr</Label>
                                        <Select
                                            value={newStudent.admissionYr || currentYearStr}
                                            onValueChange={(val) => val && setNewStudent({ ...newStudent, admissionYr: val })}
                                        >
                                            <SelectTrigger className="h-7 text-xs bg-white">
                                                <SelectValue placeholder="Select Year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {generateAcademicYears().map((yr) => (
                                                    <SelectItem key={yr} value={yr} className="text-xs">
                                                        {yr}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 pt-1">
                                    <Button size="sm" variant="outline" onClick={() => {
                                        setShowAddForm(false)
                                        setValidationError(null)
                                    }} className="h-7 text-xs">
                                        Cancel
                                    </Button>
                                    <Button size="sm" onClick={handleAddStudent} className="h-7 text-xs bg-sky-700 hover:bg-sky-800 text-white">
                                        <Save className="w-3 h-3 mr-1" /> Save Record
                                    </Button>
                                </div>
                            </div>
                        )}

                        <div className="border rounded-lg max-h-64 overflow-y-auto bg-white">
                            {filteredStudents.length === 0 ? (
                                <div className="p-6 text-center text-slate-500 text-xs">
                                    {searchQuery ? "No matching students found." : "No student records saved in database."}
                                </div>
                            ) : (
                                <Table>
                                    <TableHeader className="bg-slate-50 sticky top-0 z-10">
                                        <TableRow>
                                            <TableHead className="h-7 py-1 text-xs">Student Name</TableHead>
                                            <TableHead className="h-7 py-1 text-xs">Phone</TableHead>
                                            <TableHead className="h-7 py-1 text-xs">Enrollment</TableHead>
                                            <TableHead className="h-7 py-1 text-xs">Course</TableHead>
                                            <TableHead className="h-7 py-1 text-xs">Admission Yr</TableHead>
                                            <TableHead className="h-7 py-1 text-xs text-right pr-3">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredStudents.map((s) => {
                                            const isEditing = editingId === s.id
                                            return (
                                                <TableRow key={s.id} className="hover:bg-slate-50/80">
                                                    {isEditing ? (
                                                        <>
                                                            <TableCell className="py-1">
                                                                <Input
                                                                    value={editForm.name}
                                                                    onChange={(e) => {
                                                                        setEditForm({ ...editForm, name: e.target.value })
                                                                        if (validationError) setValidationError(null)
                                                                    }}
                                                                    className="h-7 text-xs"
                                                                    placeholder="Name"
                                                                />
                                                            </TableCell>
                                                            <TableCell className="py-1">
                                                                <Input
                                                                    value={editForm.phone}
                                                                    onChange={(e) => {
                                                                        setEditForm({ ...editForm, phone: e.target.value })
                                                                        if (validationError) setValidationError(null)
                                                                    }}
                                                                    className="h-7 text-xs font-mono"
                                                                    placeholder="Phone"
                                                                />
                                                            </TableCell>
                                                            <TableCell className="py-1">
                                                                <Input
                                                                    value={editForm.enrollment}
                                                                    onChange={(e) => {
                                                                        setEditForm({ ...editForm, enrollment: e.target.value })
                                                                        if (validationError) setValidationError(null)
                                                                    }}
                                                                    className="h-7 text-xs font-mono"
                                                                    placeholder="Enrollment"
                                                                />
                                                            </TableCell>
                                                            <TableCell className="py-1 min-w-[85px]">
                                                                <Select
                                                                    value={normalizeCourse(editForm.course)}
                                                                    onValueChange={(val) => val && setEditForm({ ...editForm, course: val })}
                                                                >
                                                                    <SelectTrigger className="h-7 text-xs">
                                                                        <SelectValue placeholder="Course" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="BSW" className="text-xs">BSW</SelectItem>
                                                                        <SelectItem value="MSW" className="text-xs">MSW</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                            </TableCell>
                                                            <TableCell className="py-1 min-w-[115px]">
                                                                <Select
                                                                    value={editForm.admissionYr || currentYearStr}
                                                                    onValueChange={(val) => val && setEditForm({ ...editForm, admissionYr: val })}
                                                                >
                                                                    <SelectTrigger className="h-7 text-xs">
                                                                        <SelectValue placeholder="Select Year" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        {generateAcademicYears().map((yr) => (
                                                                            <SelectItem key={yr} value={yr} className="text-xs">
                                                                                {yr}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                            </TableCell>
                                                            <TableCell className="py-1 text-right pr-2">
                                                                <div className="flex justify-end gap-1">
                                                                    <Button
                                                                        size="icon-sm"
                                                                        variant="outline"
                                                                        onClick={() => saveEditing(s.id)}
                                                                        className="h-6 w-6 text-emerald-600 hover:text-emerald-700"
                                                                        title="Save"
                                                                    >
                                                                        <Check className="w-3.5 h-3.5" />
                                                                    </Button>
                                                                    <Button
                                                                        size="icon-sm"
                                                                        variant="ghost"
                                                                        onClick={() => {
                                                                            setEditingId(null)
                                                                            setValidationError(null)
                                                                        }}
                                                                        className="h-6 w-6 text-slate-500"
                                                                        title="Cancel"
                                                                    >
                                                                        <X className="w-3.5 h-3.5" />
                                                                    </Button>
                                                                </div>
                                                            </TableCell>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TableCell className="py-1.5 text-xs font-semibold text-slate-800">
                                                                {s.name}
                                                            </TableCell>
                                                            <TableCell className="py-1.5 text-xs text-slate-600 font-mono">
                                                                {formatPhoneForDisplay(s.phone)}
                                                            </TableCell>
                                                            <TableCell className="py-1.5 text-xs text-slate-600 font-mono">
                                                                {s.enrollment || "—"}
                                                            </TableCell>
                                                            <TableCell className="py-1.5 text-xs text-slate-700 font-medium">
                                                                {s.course || "—"}
                                                            </TableCell>
                                                            <TableCell className="py-1.5 text-xs text-slate-700 font-mono">
                                                                {s.admissionYr || "—"}
                                                            </TableCell>
                                                            <TableCell className="py-1.5 text-right pr-2">
                                                                <div className="flex justify-end items-center gap-1">
                                                                    <Button
                                                                        size="xs"
                                                                        variant="default"
                                                                        onClick={() => handleSelectAndAutofill(s)}
                                                                        className="h-6 text-[11px] px-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                                                                        title="Autofill this student into receipt"
                                                                    >
                                                                        <UserCheck className="w-3 h-3 mr-1" />
                                                                        Select
                                                                    </Button>
                                                                    <Button
                                                                        size="icon-sm"
                                                                        variant="ghost"
                                                                        onClick={() => startEditing(s)}
                                                                        className="h-6 w-6 text-slate-500 hover:text-sky-600"
                                                                        title="Edit"
                                                                    >
                                                                        <Edit2 className="w-3.5 h-3.5" />
                                                                    </Button>
                                                                    <Button
                                                                        size="icon-sm"
                                                                        variant="ghost"
                                                                        onClick={() => deleteStudent(s.id, s.name)}
                                                                        className="h-6 w-6 text-red-500 hover:text-red-700"
                                                                        title="Delete"
                                                                    >
                                                                        <Trash2 className="w-3.5 h-3.5" />
                                                                    </Button>
                                                                </div>
                                                            </TableCell>
                                                        </>
                                                    )}
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            )}
                        </div>
                    </div>

                    <DialogFooter className="flex justify-between items-center sm:justify-between w-full pt-2">
                        {students.length > 0 ? (
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={clearAllStudents}
                                className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50 px-2"
                            >
                                <Trash2 className="w-3.5 h-3.5 mr-1" /> Clear All Database
                            </Button>
                        ) : <div />}
                        <Button variant="outline" size="sm" onClick={() => setIsCrudOpen(false)}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* MODAL 4: Send Receipt via WhatsApp Dialog */}
            <Dialog open={isSendOpen} onOpenChange={setIsSendOpen}>
                <DialogContent className="md:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-base">
                            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                            Send Receipt via WhatsApp
                        </DialogTitle>
                        <DialogDescription className="text-xs">
                            Send the fees receipt PDF along with the prefilled message content directly to the student on WhatsApp.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-3 py-2 text-xs">
                        <div>
                            <Label className="text-[11px] mb-1 block font-medium">Student WhatsApp Phone *</Label>
                            <Input
                                placeholder="e.g. +91 98765 43210"
                                value={waPhone}
                                onChange={(e) => setWaPhone(e.target.value)}
                                className="h-8 text-xs font-mono"
                            />
                        </div>

                        <div>
                            <Label className="text-[11px] mb-1 block font-medium">WhatsApp Message Content</Label>
                            <Textarea
                                value={waMessage}
                                onChange={(e) => setWaMessage(e.target.value)}
                                rows={6}
                                className="text-xs font-mono"
                            />
                        </div>
                    </div>

                    <DialogFooter className="flex justify-end items-center pt-2">
                        <Button
                            size="sm"
                            onClick={handleSendWhatsApp}
                            className="w-full text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xs"
                        >
                            <MessageCircle className="w-4 h-4 mr-1.5 fill-current" />
                            Send via WhatsApp
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* MODAL 5: Save PDF Options Dialog */}
            <Dialog open={isSavePdfOpen} onOpenChange={setIsSavePdfOpen}>
                <DialogContent className="md:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-base">
                            <Printer className="w-5 h-5 text-amber-600" />
                            Save Receipt PDF
                        </DialogTitle>
                        <DialogDescription className="text-xs">
                            Select where you would like to save the generated fees receipt PDF.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3">
                        {/* Option 1: Save in Device */}
                        <div
                            onClick={handleSaveInDevice}
                            className="p-4 border-2 border-slate-200 hover:border-amber-500 rounded-xl bg-slate-50/50 hover:bg-amber-50/40 cursor-pointer transition-all flex flex-col items-center justify-center text-center space-y-2 group shadow-2xs"
                        >
                            <div className="p-3 bg-amber-100 text-amber-700 rounded-full group-hover:scale-110 transition-transform">
                                <HardDrive className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-800">1. Save in Device</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Download PDF file to local computer / phone storage</p>
                            </div>
                        </div>

                        {/* Option 2: Save in Drive */}
                        <div
                            onClick={handleSaveInDrive}
                            className="p-4 border-2 border-slate-200 hover:border-blue-500 rounded-xl bg-slate-50/50 hover:bg-blue-50/40 cursor-pointer transition-all flex flex-col items-center justify-center text-center space-y-2 group shadow-2xs"
                        >
                            <div className="p-3 bg-blue-100 text-blue-700 rounded-full group-hover:scale-110 transition-transform">
                                <CloudUpload className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-800">2. Save in Drive</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Save to Google Drive / Cloud storage via native picker or web link</p>
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="pt-1">
                        <Button variant="outline" size="sm" onClick={() => setIsSavePdfOpen(false)} className="text-xs">
                            Cancel
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </InvoiceActionBarContext.Provider>
    )
}

export function SavePdfButton({ className }: { className?: string }) {
    const ctx = useContext(InvoiceActionBarContext)
    return (
        <Button onClick={ctx?.openSaveModal} variant="amber" size="sm" className={className || "font-semibold shadow-xs"}>
            <Printer className="w-4 h-4 mr-1.5" /> Save PDF
        </Button>
    )
}

export function SendReceiptButton({ className }: { className?: string }) {
    const ctx = useContext(InvoiceActionBarContext)
    return (
        <Button
            onClick={ctx?.openEmail}
            variant="outline"
            size="sm"
            className={className || "bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300 text-xs shadow-2xs font-semibold"}
            title="Send Receipt via WhatsApp"
        >
            <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-600 fill-emerald-600/20" />
            Send Receipt
        </Button>
    )
}

// Export alias for backward compatibility
export const EmailReceiptButton = SendReceiptButton

export function StudentDbButton({ className }: { className?: string }) {
    const ctx = useContext(InvoiceActionBarContext)
    return (
        <Button
            onClick={ctx?.openCrud}
            variant="outline"
            size="sm"
            className={className || "bg-white hover:bg-slate-50 text-slate-700 border-slate-300 text-xs shadow-2xs"}
        >
            <Database className="w-3.5 h-3.5 mr-1 text-sky-600" />
            Student DB
            {(ctx?.studentsCount ?? 0) > 0 && (
                <Badge variant="secondary" className="ml-1 px-1.5 py-0 size-4 text-[10px] bg-slate-200 text-slate-800 font-mono">
                    {ctx?.studentsCount}
                </Badge>
            )}
        </Button>
    )
}

export function ImportSpreadsheetButton({ className }: { className?: string }) {
    const ctx = useContext(InvoiceActionBarContext)
    return (
        <Button
            onClick={ctx?.openImport}
            variant="outline"
            size="sm"
            className={className || "bg-white hover:bg-slate-50 text-slate-700 border-slate-300 text-xs shadow-2xs"}
        >
            <FileSpreadsheet className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            Import CSV
        </Button>
    )
}

export function ExportCsvButton({ className }: { className?: string }) {
    const ctx = useContext(InvoiceActionBarContext)
    return (
        <Button
            onClick={ctx?.exportCsv}
            variant="outline"
            size="sm"
            className={className || "bg-white hover:bg-slate-50 text-slate-700 border-slate-300 text-xs shadow-2xs"}
            title="Export Database to CSV"
        >
            <Download className="w-3.5 h-3.5 mr-1 text-blue-600" />
            Export CSV
        </Button>
    )
}

export function FeeTemplatesButton({ className }: { className?: string }) {
    const ctx = useContext(InvoiceActionBarContext)
    return (
        <Button
            onClick={ctx?.openTemplates}
            variant="outline"
            size="sm"
            className={className || "bg-white hover:bg-slate-50 text-slate-700 border-slate-300 text-xs shadow-2xs"}
        >
            <Layers className="text-purple" />
            Fee Templates
            {(ctx?.templatesCount ?? 0) > 0 && (
                <Badge variant="secondary" className="ml-1 px-1.5 size-4 py-0 text-[10px] bg-purple-100 text-purple-800 font-mono">
                    {ctx?.templatesCount}
                </Badge>
            )}
        </Button>
    )
}

export function InvoiceActionBar(props: InvoiceActionBarProps) {
    return (
        <InvoiceActionBarProvider {...props}>
            <div className="p-2.5 bg-slate-100/90 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-2 shadow-xs mb-3">
                <div className="flex items-center gap-2">
                    <SendReceiptButton />
                    <SavePdfButton />
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                    <FeeTemplatesButton />
                    <StudentDbButton />
                    <ImportSpreadsheetButton />
                    <ExportCsvButton />
                </div>
            </div>
        </InvoiceActionBarProvider>
    )
}
