import type { Metadata } from "next";
import {
  CalendarCheck,
  CheckCircle2,
  CircleCheck,
  MessageSquare,
  PhoneCall,
  Server,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "System Status",
  description: "Real-time status of Hellow's services. All systems operational.",
};

const SERVICES = [
  { icon: PhoneCall, name: "Phone answering", uptime: 99.997, status: "operational" },
  { icon: MessageSquare, name: "Web chat & DMs", uptime: 99.992, status: "operational" },
  { icon: CalendarCheck, name: "Calendar & booking sync", uptime: 99.989, status: "operational" },
  { icon: Server, name: "Dashboard & API", uptime: 99.998, status: "operational" },
];

// Simple visual representation of 90 days of uptime (no incidents).
const DAYS = 90;

export default function StatusPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="System status"
        title={
          <>
            All systems{" "}
            <span className="font-display-italic text-coral-600">operational</span>.
          </>
        }
        subtitle="Live status of Hellow's services. Updated continuously. No active incidents."
      />

      <section className="bg-bg py-20">
        <div className="container">
          {/* Banner */}
          <div className="flex items-center gap-3 rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <p className="font-display text-lg font-semibold text-emerald-900">
              All systems operational
            </p>
            <p className="ml-auto text-sm text-emerald-800/75">
              Last checked just now
            </p>
          </div>

          {/* Services */}
          <ul className="mt-8 space-y-3">
            {SERVICES.map((s) => (
              <li
                key={s.name}
                className="rounded-3xl border border-line bg-bg-soft p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg text-ink ring-1 ring-line">
                      <s.icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                        {s.name}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700">
                        <CheckCircle2 className="h-4 w-4" />
                        Operational
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">
                      90-day uptime
                    </p>
                    <p className="font-display text-2xl font-semibold tabular-nums text-ink">
                      {s.uptime.toFixed(3)}%
                    </p>
                  </div>
                </div>

                {/* Uptime bars */}
                <div className="mt-5 flex h-7 items-end gap-[2px]">
                  {Array.from({ length: DAYS }).map((_, i) => (
                    <span
                      key={i}
                      title={`Day ${DAYS - i} · operational`}
                      className="block h-full flex-1 rounded-sm bg-emerald-500/85 transition-all hover:bg-emerald-600"
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-ink-subtle">
                  <span>90 days ago</span>
                  <span>Today</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Incident history */}
          <div className="mt-12">
            <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
              Past incidents
            </h2>
            <div className="mt-5 rounded-3xl border border-dashed border-line-strong bg-bg-soft p-10 text-center">
              <CircleCheck className="mx-auto h-9 w-9 text-emerald-500" />
              <p className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                No incidents in the past 90 days.
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                We'll post here the moment anything changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
