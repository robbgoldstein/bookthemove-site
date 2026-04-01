const CALENDLY_URL = "https://calendly.com/bookthemove";

const tiers = [
  {
    name: "Starter",
    price: 197,
    emailsPerDay: 10,
    description: "For small movers covering one local market",
    features: [
      "10 emails/day to home sellers",
      "1 exclusive county",
      "Verified homeowner contacts",
      "Personalized email campaigns",
      "Reply notifications to your inbox",
      "Dedicated sending inbox",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: 397,
    emailsPerDay: 25,
    description: "For growing companies expanding their reach",
    features: [
      "25 emails/day to home sellers",
      "Up to 3 exclusive counties",
      "Everything in Starter",
      "Priority campaign optimization",
      "Weekly performance report",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: 697,
    emailsPerDay: 50,
    description: "For established movers with multi-county coverage",
    features: [
      "50 emails/day to home sellers",
      "Up to 6 exclusive counties",
      "Everything in Growth",
      "A/B tested email sequences",
      "Realtor outreach campaigns",
    ],
    highlight: false,
  },
  {
    name: "Scale",
    price: 1197,
    emailsPerDay: 100,
    description: "For large operations dominating their region",
    features: [
      "100 emails/day to home sellers",
      "Unlimited exclusive counties",
      "Everything in Pro",
      "Custom email sequences",
      "Dedicated account manager",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            No per-lead fees. No setup costs. Just a flat monthly rate based on
            how many home sellers you want to reach.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 flex flex-col ${
                tier.highlight
                  ? "bg-blue-600 text-white ring-2 ring-blue-600 shadow-xl shadow-blue-600/20 relative"
                  : "bg-white border border-slate-200"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
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
                className={`text-sm font-medium mb-4 px-3 py-1.5 rounded-lg inline-block w-fit ${
                  tier.highlight
                    ? "bg-blue-500 text-blue-100"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {tier.emailsPerDay} emails/day
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlight ? "text-blue-200" : "text-blue-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
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
                className={`block w-full text-center font-semibold py-3 rounded-lg transition-colors ${
                  tier.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-slate-400">
          No contracts. No setup fees. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
