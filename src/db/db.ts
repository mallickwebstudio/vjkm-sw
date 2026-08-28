
export type NoticeType = {
    timestamp: string;
    category: string;
    title: string;
    href: string;
    type: "pdf" | "link" | "paper";
    active: boolean;
}


export async function getNoticeDb() {
    const res = await fetch(
        "https://script.google.com/macros/s/AKfycby0WeYZT3sM7fKpP6mzVV9juBcYE04DLH2ZAkUWsRMXlsBQWCIWUB_VdhE8LNrej8dn/exec",
        {
            next: { revalidate: 300 }, // 30 minutes
        }
    );

    const data = await res.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map((item: any) => ({
        timestamp: item.Timestamp,
        category: item.category,
        title: item.title,
        href: item.href,
        type: item.type,
        active: item.active
    }));
}

export * from "./article";