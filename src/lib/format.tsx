
export function formatPhoneHref(href: string) {
    return href
        .replace(/^tel:/, "")
        .replace(/^(\+91)(\d{5})(\d{5})$/, "$1 $2 $3");
}

export function formatWhatsappHref(href: string) {
    return href
        .replace(/^https:\/\/wa\.me\//, "")
        .replace(/^(\+91)(\d{5})(\d{5})$/, "$1 $2 $3");
}

export function formatEmailHref(href: string) {
    return href.replace(/^mailto:/, "");
}

export function formatWebsiteHref(href: string) {
    return href
        .replace(/^https?:\/\//, "")
        .replace(/^www\./, "")
        .replace(/\/$/, "");
}
