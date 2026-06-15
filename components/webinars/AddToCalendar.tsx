"use client";

import { useState } from "react";
import { Calendar, ChevronDown, ExternalLink, Download } from "lucide-react";
import {
  googleCalendarUrl,
  outlookCalendarUrl,
  icsDataUri,
  type CalendarEvent,
} from "@/lib/calendar";

interface AddToCalendarProps {
  event: CalendarEvent;
}

export function AddToCalendar({ event }: AddToCalendarProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 px-4 py-2.5 border border-brand-border bg-white text-sm font-sans font-medium text-brand-ink rounded-sm hover:bg-brand-cream transition-colors"
      >
        <Calendar size={14} aria-hidden="true" />
        Add to calendar
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute z-10 mt-1 w-56 bg-white border border-brand-border rounded-sm shadow-md py-1"
        >
          <li role="none">
            <a
              role="menuitem"
              href={googleCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2 text-sm text-brand-ink hover:bg-brand-cream"
            >
              <span>Google Calendar</span>
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href={outlookCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2 text-sm text-brand-ink hover:bg-brand-cream"
            >
              <span>Outlook</span>
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href={icsDataUri(event)}
              download={`${event.title.replace(/\s+/g, "-").toLowerCase()}.ics`}
              className="flex items-center justify-between px-4 py-2 text-sm text-brand-ink hover:bg-brand-cream"
            >
              <span>Apple / .ics download</span>
              <Download size={12} aria-hidden="true" />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
