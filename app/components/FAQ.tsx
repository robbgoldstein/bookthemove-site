"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How fast will I start getting replies?",
    answer:
      "Campaigns typically launch within 24 hours of signup. Most clients see their first replies within the first week. Our email sequences are multi-step, so responses continue coming in over the following weeks.",
  },
  {
    question: "What do the emails actually say?",
    answer:
      'We send personalized, conversational emails from your company name that reference the seller\'s specific property. For example: "Hi [Name], now that [Address] is on the market, have you started thinking about movers?" — followed by a brief intro to your company and an offer for a free estimate.',
  },
  {
    question: "What makes the territory exclusive?",
    answer:
      "Each county is assigned to exactly one moving company. Once you claim a county, no other mover on our platform receives leads from that area. It's first come, first served.",
  },
  {
    question: "Where do the leads come from?",
    answer:
      "We monitor real estate listings daily for new homes hitting the market in your counties. We then find the homeowner's contact information and verify their email before reaching out. Every lead is a real person actively selling their home.",
  },
  {
    question: "Can I see a sample of leads in my area?",
    answer:
      "Absolutely. Book a demo and we'll pull a live sample of home sellers currently listing in your counties — including volume estimates and the types of emails we'd send.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "No contracts, no commitments. Cancel anytime and your campaigns stop at the end of your billing period. Your exclusive counties get released back to the market.",
  },
  {
    question: "Do I need to set anything up?",
    answer:
      "Almost nothing. We handle the email infrastructure, domain setup, and campaign management. All we need is your company info and service area. You get access to your own inbox where you can see and respond to every conversation.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-slate-900 pr-4 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Questions? We&apos;ve Got Answers.
          </h2>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
