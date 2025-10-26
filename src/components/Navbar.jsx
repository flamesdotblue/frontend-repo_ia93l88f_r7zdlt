import { Plane, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
              <Plane className="h-5 w-5" />
            </span>
            <span className="font-semibold">Surya Travels</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-slate-600 hover:text-slate-900">Home</a>
            <a href="#services" className="text-slate-600 hover:text-slate-900">Services</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+919845666893" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-white shadow-sm hover:bg-blue-700 transition">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">Call Us Now</span>
            </a>
            <a href="mailto:suryatravelscta@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-white shadow-sm hover:bg-black transition">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
