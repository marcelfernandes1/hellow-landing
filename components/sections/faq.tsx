"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Item = {
  q: string;
  a: React.ReactNode;
  featured?: boolean;
};

const ITEMS: Item[] = [
  {
    q: "Will my customers know they're talking to AI?",
    featured: true,
    a: (
      <>
        Most won't. A 2025 University of Michigan study found that{" "}
        <strong>71% of callers can't tell modern voice AI from a human</strong>. Hellow uses
        natural-sounding voices, contextual responses, and your business's own personality —
        and we're transparent: if a caller asks directly, Hellow will tell them.
      </>
    ),
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are live in under 10 minutes. You forward your existing number (or port it for free), share your hours, services, and FAQs, and Hellow is answering by lunch.",
  },
  {
    q: "What happens if Hellow can't answer something?",
    a: "Hellow handles ~90–95% of calls end-to-end. For anything outside its scope — emergencies, complex disputes, VIP clients — it routes the call to you instantly with a transcript and full context, so you pick up already knowing the situation.",
  },
  {
    q: "How good is the call quality?",
    a: "Studio-grade. Hellow runs on the same low-latency telephony infrastructure used by Fortune 500 contact centers, with sub-300ms response times. Callers don't experience that 'robot' lag.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No annual lock-in, no cancellation fees, no penalty. Every plan includes a 14-day free trial with full functionality.",
  },
  {
    q: "What integrations do you support?",
    a: "Google Calendar, Outlook, HubSpot, Salesforce, Pipedrive, Jobber, Housecall Pro, Acuity, Calendly, and Zapier (which connects to 6,000+ more). Custom webhooks available on Scale plans.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. SOC 2 Type II, HIPAA-eligible (Growth and Scale plans), end-to-end encryption, and US-based data residency. We don't train models on your call data.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-bg py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-eyebrow font-semibold uppercase text-coral-600">
              Frequently asked
            </p>
            <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
              Answers, before you ask.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted text-pretty">
              Still have questions? The fastest answer is to call Hellow directly — it can
              tell you about itself, and our team is on the line if you need them.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="border-t border-line"
            >
              {ITEMS.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>
                    {item.featured ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="rounded-full bg-coral-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-coral-700">
                          Most asked
                        </span>
                        <span>{item.q}</span>
                      </span>
                    ) : (
                      item.q
                    )}
                  </AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
