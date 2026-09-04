export interface NotificationItem {
  title: string;
  href?: string;
  date?: string;
}

export interface NoticeItem {
  title: string;
  date?: string;
  course?: 'General' | 'BSW' | 'MSW' | string;
  badge?: string;
  type?: string;
  href?: string;
}

export interface AnnouncementsData {
  notifications: NotificationItem[];
  notices: NoticeItem[];
}

export type Notice = NoticeItem;

export const mockNotificationsData: NotificationItem[] = [
  {
    title: 'GCAS & Self-Finance Admission 2026-27 Open for BSW & MSW Programs',
    href: 'https://gcasstudent.gujgov.edu.in',
    date: '2026-08-20T10:30:00Z',
  },
  {
    title: 'Document Verification Desk Active Daily at Campus Administrative Room 102',
    href: '/admission',
    date: '2026-08-18T09:00:00Z',
  },
  {
    title: 'SGGU Semester Examination Schedule Announced for BSW & MSW Batches',
    href: '/news-and-updates',
    date: '2026-08-15T11:45:00Z',
  },
  {
    title: 'Mandatory Pre-Fieldwork 7-Day Rural Camp Orientation for MSW Students',
    href: '/fieldwork',
    date: '2026-08-10T10:00:00Z',
  },
];

export const mockNoticesData: NoticeItem[] = [
  {
    title: 'GCAS & Self-Finance Admission 2026-27 Open for BSW & MSW Programs',
    date: '2026-08-20T10:30:00Z',
    course: 'General',
    badge: 'Admission',
    type: 'Admission',
    href: 'https://gcasstudent.gujgov.edu.in',
  },
  {
    title: 'SGGU Semester Examination Datesheet Declared for BSW & MSW Batches',
    date: '2026-08-22T14:15:00Z',
    course: 'BSW',
    badge: 'Exam Cell',
    type: 'Exam Cell',
    href: '/news-and-updates',
  },
  {
    title: 'Mandatory Pre-Fieldwork 7-Day Rural Camp Orientation for MSW Students',
    date: '2026-08-18T09:00:00Z',
    course: 'MSW',
    badge: 'Fieldwork',
    type: 'Fieldwork',
    href: '/fieldwork',
  },
  {
    title: 'Annual Campus Placement & CSR Recruiter Drive 2026 Registration Open',
    date: '2026-08-15T11:45:00Z',
    course: 'MSW',
    badge: 'Placement',
    type: 'Placement',
    href: '/fieldwork',
  },
  {
    title: 'NSS Blood Donation Camp & Free Health Checkup Drive Announced',
    date: '2026-08-01T15:00:00Z',
    course: 'General',
    badge: 'Notice',
    type: 'Notice',
    href: '/news-and-updates',
  },
];

export const noticesData: NoticeItem[] = mockNoticesData;

/**
 * Safely parses various date formats returned by Google Sheets CSV (DD/MM/YYYY, MM/DD/YYYY, ISO).
 */
export function parseDateSafe(dateStr?: string): Date {
  if (!dateStr || !dateStr.trim()) return new Date();
  const trimmed = dateStr.trim();

  // Check for DD/MM/YYYY or MM/DD/YYYY formats
  const parts = trimmed.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
  if (parts) {
    const p1 = parseInt(parts[1], 10);
    const p2 = parseInt(parts[2], 10);
    const year = parseInt(parts[3], 10);
    const hour = parts[4] ? parseInt(parts[4], 10) : 0;
    const min = parts[5] ? parseInt(parts[5], 10) : 0;
    const sec = parts[6] ? parseInt(parts[6], 10) : 0;

    // If p1 > 12, p1 is day. If p2 > 12, p2 is day.
    // Default to Day/Month/Year (standard Google Sheets format in India)
    let day = p1;
    let month = p2 - 1;
    if (p1 <= 12 && p2 > 12) {
      day = p2;
      month = p1 - 1;
    }
    const customDate = new Date(year, month, day, hour, min, sec);
    if (!isNaN(customDate.getTime())) return customDate;
  }

  const d = new Date(trimmed);
  return isNaN(d.getTime()) ? new Date() : d;
}

/**
 * Parses raw CSV string into a 2D matrix safely.
 */
function parseCsv(csvText: string): string[][] {
  const lines: string[][] = [];
  const rows = csvText.split(/\r?\n/);
  for (const row of rows) {
    if (!row.trim()) continue;
    const cells: string[] = [];
    let insideQuotes = false;
    let currentCell = '';
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        cells.push(currentCell.trim().replace(/^"|"$/g, ''));
        currentCell = '';
      } else {
        currentCell += char;
      }
    }
    cells.push(currentCell.trim().replace(/^"|"$/g, ''));
    lines.push(cells);
  }
  return lines;
}

/**
 * Fetches both notifications (banner) and notices (cards) dynamically from a single Google Sheets CSV URL.
 * Returns fallback mock data if environment variable is missing or fetch fails.
 */
export async function getAnnouncements(): Promise<AnnouncementsData> {
  // const sheetUrl = process.env.NEXT_PUBLIC_NOTICES_SHEET_CSV_URL;
  const sheetUrl = null;

  if (!sheetUrl) {
    return {
      notifications: mockNotificationsData,
      notices: mockNoticesData,
    };
    // return {
    //   notifications: [],
    //   notices: [],
    // };
  }

  try {
    const response = await fetch(sheetUrl, {
      next: { revalidate: 300 }, // Revalidate every 10 seconds
    });

    if (!response.ok) {
      console.warn(`[getAnnouncements] Failed to fetch sheet CSV (${response.status}). Returning mock data.`);
      return {
        notifications: mockNotificationsData,
        notices: mockNoticesData,
      };
    }

    const csvText = await response.text();
    const rows = parseCsv(csvText);

    if (rows.length < 2) {
      return {
        notifications: [],
        notices: [],
      };
    }

    // Match column headers dynamically
    const headers = rows[0].map((h) => h.toLowerCase().trim());
    const timestampIdx = headers.findIndex((h) => h.includes('timestamp') || h === 'date');
    const typeIdx = headers.findIndex((h) => h === 'type' || h.includes('type'));
    const titleIdx = headers.findIndex((h) => h === 'title' || h.includes('title') || h.includes('heading'));
    const linkIdx = headers.findIndex((h) => h.includes('link') || h.includes('href') || h.includes('url'));
    const activeIdx = headers.findIndex((h) => h.includes('active') || h.includes('status'));
    const courseIdx = headers.findIndex((h) => h.includes('course') || h.includes('program'));
    const badgeIdx = headers.findIndex((h) => h.includes('badge') || h.includes('tag') || h.includes('category'));

    const parsedNotifications: NotificationItem[] = [];
    const parsedNotices: NoticeItem[] = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const title = titleIdx !== -1 ? row[titleIdx] : row[1];
      if (!title || !title.trim()) continue;

      const activeStr = activeIdx !== -1 ? row[activeIdx] : 'TRUE';
      const isActive = !activeStr || ['true', 'yes', '1', 'active'].includes(activeStr.trim().toLowerCase());
      if (!isActive) continue;

      const timestamp = timestampIdx !== -1 ? row[timestampIdx] : row[0];
      const rawType = (typeIdx !== -1 && row[typeIdx] ? row[typeIdx] : 'notice').toLowerCase().trim();
      const link = (linkIdx !== -1 && row[linkIdx] ? row[linkIdx] : '#').trim();
      const course = (courseIdx !== -1 && row[courseIdx] ? row[courseIdx] : 'General').trim();
      const badge = (badgeIdx !== -1 && row[badgeIdx] ? row[badgeIdx] : '').trim();

      const parsedDate = parseDateSafe(timestamp);
      const validDate = isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString();

      // Normalize type: 'notification' | 'notice' | 'both'
      const isNotification = rawType.includes('notification') || rawType === 'both';
      const isNotice = rawType.includes('notice') || rawType === 'both' || (!isNotification && rawType !== 'notification');

      if (isNotification) {
        parsedNotifications.push({
          title: title.trim(),
          href: link,
          date: validDate,
        });
      }

      if (isNotice) {
        parsedNotices.push({
          title: title.trim(),
          href: link,
          date: validDate,
          course: course || 'General',
          badge: badge,
          type: badge, // backwards compatibility
        });
      }
    }

    // Sort newest first
    parsedNotifications.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
    parsedNotices.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());

    return {
      notifications: parsedNotifications,
      notices: parsedNotices,
    };
  } catch (error) {
    console.error('[getAnnouncements] Error fetching announcements spreadsheet:', error);
    return {
      notifications: mockNotificationsData,
      notices: mockNoticesData,
    };
  }
}

/**
 * Convenience helper returning only notices (for backwards compatibility).
 */
export async function getNotices(): Promise<NoticeItem[]> {
  const { notices } = await getAnnouncements();
  return notices;
}

