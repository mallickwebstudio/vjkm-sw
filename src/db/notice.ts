export interface Notice {
  title: string;
  date?: string;
  type?: string;
  href?: string;
}

export const noticesData: Notice[] = [
  {
    title: 'GCAS & Self-Finance Admission 2026-27 Open for BSW & MSW Programs',
    date: '2026-08-20T10:30:00Z',
    type: 'Admission',
    href: 'https://gcasstudent.gujgov.edu.in',
  },
  {
    title: 'SGGU Semester Examination Datesheet Declared for BSW & MSW Batches',
    date: '2026-08-22T14:15:00Z',
    type: 'Exam Cell',
    href: '/news-and-updates',
  },
  {
    title: 'Mandatory Pre-Fieldwork 7-Day Rural Camp Orientation for MSW Students',
    date: '2026-08-18T09:00:00Z',
    type: 'Fieldwork',
    href: '/fieldwork',
  },
  {
    title: 'Annual Campus Placement & CSR Recruiter Drive 2026 Registration Open',
    date: '2026-08-15T11:45:00Z',
    type: 'Placement',
    href: '/fieldwork',
  },
  {
    title: 'NSS Blood Donation Camp & Free Health Checkup Drive Announced',
    date: '2026-08-01T15:00:00Z',
    type: 'Notice',
    href: '/news-and-updates',
  },
];

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
 * Fetches notices dynamically from Google Sheets CSV URL.
 * Returns empty array [] if environment variable is missing or fetch fails.
 */
export async function getNotices(): Promise<Notice[]> {
  const sheetUrl = process.env.NEXT_PUBLIC_NOTICES_SHEET_CSV_URL || process.env.NOTICES_SHEET_CSV_URL;
  // const sheetUrl = null;

  if (!sheetUrl) {
    // return [];
    return noticesData;
  }

  try {
    const response = await fetch(sheetUrl, {
      next: { revalidate: 10 }, // Revalidate every 10 seconds
    });

    if (!response.ok) {
      console.warn(`[getNotices] Failed to fetch sheet CSV (${response.status}). Returning empty array.`);
      return [];
    }

    const csvText = await response.text();
    const rows = parseCsv(csvText);

    if (rows.length < 2) {
      return [];
    }

    // Match column headers dynamically
    const headers = rows[0].map((h) => h.toLowerCase());
    const timestampIdx = headers.findIndex((h) => h.includes('timestamp') || h.includes('date'));
    const titleIdx = headers.findIndex((h) => h.includes('title'));
    const typeIdx = headers.findIndex((h) => h.includes('type'));
    const linkIdx = headers.findIndex((h) => h.includes('link') || h.includes('href') || h.includes('url'));
    const activeIdx = headers.findIndex((h) => h.includes('active'));

    const parsedNotices: Notice[] = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const title = titleIdx !== -1 ? row[titleIdx] : row[1];
      if (!title || !title.trim()) continue;

      const activeStr = activeIdx !== -1 ? row[activeIdx] : 'TRUE';
      const isActive = ['true', 'yes', '1', 'active'].includes((activeStr || '').toLowerCase());

      if (!isActive) continue;

      const timestamp = timestampIdx !== -1 ? row[timestampIdx] : row[0];
      const type = typeIdx !== -1 ? row[typeIdx] : 'Notice';
      const link = linkIdx !== -1 ? row[linkIdx] : '#';

      const parsedDate = timestamp ? new Date(timestamp) : new Date();
      const validDate = isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString();

      parsedNotices.push({
        title: title.trim(),
        date: validDate,
        type: (type || 'Notice').trim(),
        href: (link || '#').trim(),
      });
    }

    // Sort notices newest first
    parsedNotices.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());

    return parsedNotices;
  } catch (error) {
    console.error('[getNotices] Error fetching notices spreadsheet:', error);
    return [];
  }
}
