const CALENDLY_URL = "https://calendly.com/bookthemove/bookthemove";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-blue-600">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Fill Your Moving Calendar?
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
          Book a 15-minute demo. We&apos;ll show you live leads in your area and
          exactly how the emails work.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg shadow-blue-700/30"
        >
          Book a Demo
        </a>
        <p className="mt-4 text-sm text-blue-200">
          No commitment required.
        </p>
      </div>
    </section>
  );
}
