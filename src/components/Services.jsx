import { Globe, Hotel, BadgeCheck, Wallet, Mail, Bus, Train, Plane, CreditCard, Package, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Passport Services", desc: "Assistance, New, Renewal, Changes", icon: BadgeCheck },
  { title: "International Air Tickets", desc: "Worldwide flight bookings", icon: Plane },
  { title: "Hotel Reservations", desc: "Worldwide accommodations", icon: Hotel },
  { title: "Visa Submissions", desc: "Visa application assistance", icon: Globe },
  { title: "Foreign Exchanges", desc: "Currency exchange services", icon: Wallet },
  { title: "International Package Tours", desc: "Curated travel packages", icon: Package },
  { title: "Online Applications", desc: "Applications and Changes", icon: Mail },
  { title: "Travel Bookings", desc: "Bus, Train & Flight bookings", icon: Train },
  { title: "GARUDAVEGA", desc: "International Couriers", icon: Package },
  { title: "Courier Services", desc: "Domestic Courier and Parcel", icon: Bus },
  { title: "Government Services", desc: "E-Aadhaar and PAN Card", icon: Building2 },
  { title: "Money Services", desc: "Transfer and Withdrawal", icon: CreditCard },
  { title: "Bill Payments", desc: "FastTag Registration", icon: Wallet },
  { title: "Bus Partners", desc: "VRL, SRS, Durgamba", icon: Bus },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">Comprehensive travel and essential services tailored to your needs</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
