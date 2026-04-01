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
              width={140}
              height={30}
              className="brightness-0 invert"
            />
            <p className="text-sm text-slate-400">
              Exclusive home seller leads for moving companies.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-slate-400">
            <a
              href="https://calendly.com/bookthemove"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
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
