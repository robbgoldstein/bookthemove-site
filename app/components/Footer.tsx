import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo.png"
              alt="Book the Move"
              width={110}
              height={24}
              className="brightness-0 invert"
            />
            <p className="text-sm text-slate-400">
              Exclusive home seller leads for moving companies.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="https://calendly.com/bookthemove/bookthemove"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-medium"
            >
              Book a Demo
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Book the Move. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
