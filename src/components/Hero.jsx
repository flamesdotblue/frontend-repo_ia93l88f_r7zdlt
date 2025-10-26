import { Phone, Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/20">
              ✈️ Your Journey Starts Here
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Your Trusted Partner for
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Travel & Services</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
              From international flights to visa assistance, we provide comprehensive travel solutions to make your journey seamless.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">
                <Rocket className="h-5 w-5" />
                Get Started
              </a>
              <a href="tel:+919845666893" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20 transition">
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold">5+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600 text-white">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold">3K+</div>
                    <div className="text-sm text-slate-600">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-purple-500/10 p-2 shadow-xl">
                <div className="h-full w-full rounded-2xl bg-white grid grid-cols-2 gap-2 p-2">
                  <div className="col-span-2 rounded-xl bg-[url('https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
