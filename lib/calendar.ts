/**
 * Calendar attach helpers.
 *
 * Generate URLs / payloads for Google Calendar, Outlook web, and ICS
 * download for a given event. Used on /webinars/[slug] under the
 * registration form for one-click add-to-calendar.
 */

export interface CalendarEvent {
  title: string;
  description: string;
  startISO: string;
  endISO: string;
  url: string;
}

const stripTz = (iso: string) =>
  iso.replace(/[-:]/g, "").replace(/\.\d+/, "");

export function googleCalendarUrl(e: CalendarEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    details: `${e.description}\n\nJoin link: ${e.url}`,
    dates: `${stripTz(e.startISO)}/${stripTz(e.endISO)}`,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

export function outlookCalendarUrl(e: CalendarEvent): string {
  const params = new URLSearchParams({
    rru: "addevent",
    subject: e.title,
    body: `${e.description}\n\nJoin link: ${e.url}`,
    startdt: e.startISO,
    enddt: e.endISO,
    path: "/calendar/action/compose",
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function icsString(e: CalendarEvent): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Federal EEO LLC//Webinars//EN",
    "BEGIN:VEVENT",
    `UID:${stripTz(e.startISO)}@federal-eeo.com`,
    `DTSTAMP:${stripTz(new Date().toISOString())}Z`,
    `DTSTART:${stripTz(e.startISO)}`,
    `DTEND:${stripTz(e.endISO)}`,
    `SUMMARY:${e.title}`,
    `DESCRIPTION:${e.description.replace(/\n/g, "\\n")}`,
    `URL:${e.url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}

export function icsDataUri(e: CalendarEvent): string {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsString(e))}`;
}
