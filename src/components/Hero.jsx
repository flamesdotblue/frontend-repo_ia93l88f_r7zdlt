import { Phone, Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

function useCountUp(end, duration = 1200) {
  const [value, setValue] = useState(1);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.max(1, Math.floor(eased * end)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return value;
}

export default function Hero() {
  const years = useCountUp(5, 1200);
  const travelers = useCountUp(3000, 1400);

  return (
    <section id="home" className="relative min-h-[80vh] pt-24 md:pt-28 overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Decorative overlays - don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm/0"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
              ✈️ Your Journey Starts Here
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Your Trusted Partner for
              <span className="block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"> Travel & Services</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-100/90 max-w-xl">
              From international flights to visa assistance, we provide comprehensive travel solutions to make your journey seamless.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 hover:bg-white/20 transition">
                <Rocket className="h-5 w-5" />
                Get Started
              </a>
              <a href="tel:+919845666893" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20 transition">
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-white">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white">{years}+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white">{travelers.toLocaleString()}+</div>
                    <div className="text-sm text-white/80">Happy Travelers</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative hidden lg:block"
          >
            {/* Right column left intentionally minimal to let Spline shine */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
