"use client";

import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/style.css";

interface Props {
  bookedRanges: { from: string; to: string }[];
  label: string;
}

function parseRanges(ranges: { from: string; to: string }[]): DateRange[] {
  return ranges.map(({ from, to }) => ({
    from: new Date(from),
    to: new Date(to),
  }));
}

export default function AvailabilityCalendar({ bookedRanges, label }: Props) {
  const booked = parseRanges(bookedRanges);

  const disabledDays = booked.flatMap(({ from, to }) => {
    if (!from || !to) return [];
    const days: Date[] = [];
    const current = new Date(from);
    while (current <= to) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return days;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="w-full">
      <style>{`
        .rdp-root {
          --rdp-accent-color: #C4632A;
          --rdp-accent-background-color: #F5EFE0;
          font-family: inherit;
          width: 100%;
        }
        .rdp-month_grid {
          width: 100%;
        }
        .rdp-day_button {
          border-radius: 0.5rem;
        }
        .rdp-disabled .rdp-day_button {
          background-color: #f0ebe0;
          color: #b0a090;
          text-decoration: line-through;
          opacity: 0.6;
        }
        .rdp-today .rdp-day_button {
          border: 2px solid #7A9178;
          color: #2C3D2E;
          font-weight: 600;
        }
      `}</style>

      <div className="rounded-2xl border border-warm-brown/20 bg-white p-4 sm:p-6 overflow-x-auto">
        <DayPicker
          mode="single"
          numberOfMonths={2}
          disabled={[{ before: today }, ...disabledDays]}
          showOutsideDays={false}
          pagedNavigation
        />
      </div>

      <div className="flex flex-wrap gap-5 mt-4 text-xs text-charcoal/60">
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded bg-[#f0ebe0] border border-warm-brown/20 line-through text-[10px] text-[#b0a090] flex items-center justify-center overflow-hidden">1</span>
          Unavailable
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded border-2 border-sage bg-white"></span>
          Today
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded bg-white border border-warm-brown/20"></span>
          Available
        </span>
      </div>
      <p className="mt-3 text-xs text-charcoal/40">
        {label} — to confirm availability for your dates, please{" "}
        <a href="/book" className="underline hover:text-terracotta transition-colors">
          send us an enquiry
        </a>
        .
      </p>
    </div>
  );
}
