"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How fast will I start getting leads?",
    answer:
      "Campaigns typically launch within 24 hours of signup. You'll start seeing replies within the first week. Our email sequences are multi-step, so leads continue to respond over the following weeks.",
  },
  {
    question: "What do the emails say?",
    answer:
      "We send personalized, conversational emails from your company name referencing the seller's specific property. For example: \"Hi [Name], now that [Address] is on the market, have you started thinking about movers?\" — followed by a brief intro to your company and an offer for a free estimate.",
  },
  {
    question: "How is the territory exclusive?",
    answer:
      "Each county is assigned to exactly one moving company. Once you claim a county, no other mover on our platform will receive leads from that area. First come, first served.",
  },
  {
    question: "Where do the leads come from?",
    answer:
      "We monitor real estate listings daily for new homes hitting the market in your counties. We then skip-trace the homeowner's contact information and verify their email before sending. Every lead is a real person actively selling their home.",
  },
  {
    question: "Can I see a sample of leads in my area?",
    answer:
      "Absolutely. Book a demo and we'll pull a live sample of home sellers currently listing in your counties — including volume estimates and the exact type of emails we'd send.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "No contracts, no commitments. You can cancel anytime and your campaigns stop at the end of your billing period. Your exclusive counties will be released back to the market.",
  },
  {
    question: "Do I need to set anything up?",
    answer:
      "Almost nothing. We handle the email infrastructure, domain setup, and campaign management. All we need from you is your company info and service area. You'll get access to your own inbox where you can see and respond to every conversation.",
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
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-slate-900 pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
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
      {open && (
        <div className="pb-5 text-slate-500 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
