const CALENDLY_URL = "https://calendly.com/bookthemove/bookthemove";

const tiers = [
  {
    name: "Growth",
    price: 397,
    emailsPerDay: 25,
    description: "Great for movers building a steady pipeline",
    features: [
      "25 emails/day to home sellers",
      "Up to 3 exclusive counties",
      "Verified homeowner contacts",
      "Personalized email campaigns",
      "Reply notifications to your inbox",
      "Weekly performance report",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: 697,
    emailsPerDay: 50,
    description: "For movers ready to dominate their market",
    features: [
      "50 emails/day to home sellers",
      "Up to 3 exclusive counties",
      "Everything in Growth, plus:",
      "A/B tested email sequences",
      "Realtor outreach campaigns",
      "Priority support",
    ],
    highlight: true,
    cta: "Get Started",
  },
  {
    name: "Scale",
    price: 1197,
    emailsPerDay: 100,
    description: "For operations covering an entire region",
    features: [
      "100 emails/day to home sellers",
      "Unlimited exclusive counties",
      "Everything in Pro, plus:",
      "Custom email sequences",
      "Dedicated account manager",
      "Monthly strategy call",
    ],
    highlight: false,
    cta: "Get Started",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Simple, Predictable Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Flat monthly rate. No per-lead fees. No setup costs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-blue-600 text-white ring-2 ring-blue-600 shadow-xl shadow-blue-600/20 relative scale-[1.02]"
                  : "bg-white border border-slate-200"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`text-lg font-bold ${
                    tier.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    tier.highlight ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {tier.description}
                </p>
              </div>
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    tier.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  ${tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlight ? "text-blue-200" : "text-slate-400"
                  }`}
                >
                  /month
                </span>
              </div>
              <div
                className={`text-sm font-medium mb-6 px-3 py-1.5 rounded-lg inline-block w-fit ${
                  tier.highlight
                    ? "bg-blue-500/50 text-blue-100"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {tier.emailsPerDay} emails/day
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlight ? "text-blue-200" : "text-blue-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span
                      className={
                        tier.highlight ? "text-blue-50" : "text-slate-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-semibold py-3.5 rounded-lg transition-colors ${
                  tier.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-slate-400">
          No contracts. No setup fees. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
