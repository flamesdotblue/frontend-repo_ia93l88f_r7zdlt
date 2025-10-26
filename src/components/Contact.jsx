import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/40 to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/20">Get In Touch</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-slate-900">Contact Us</h3>
            <p className="mt-3 text-slate-600 max-w-xl">Get in touch with us for all your travel and service needs</p>

            <div className="mt-8 grid gap-5">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-sm text-slate-700">
                  <div className="font-semibold text-slate-900">Address</div>
                  <p>
                    Manohara Mandira Building,<br />
                    Head Post Office Road,<br />
                    Near KSRTC Bus Stand,<br />
                    Chitradurga – 577501
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <a href="mailto:suryatravelscta@gmail.com" className="text-sm text-slate-700 hover:text-slate-900">suryatravelscta@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col text-sm text-slate-700">
                  <a href="tel:+919845666893" className="hover:text-slate-900">+91 98456 66893</a>
                  <a href="tel:+919980654760" className="hover:text-slate-900">+91 99806 54760</a>
                </div>
              </div>
            </div>

            <iframe
              title="map"
              className="mt-8 h-64 w-full rounded-xl border border-slate-200"
              src="https://www.google.com/maps?q=KSRTC+Bus+Stand+Chitradurga&output=embed"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Using formsubmit.co to send inquiries directly to email */}
            <form action="https://formsubmit.co/info@suryatravels.com" method="POST" className="grid grid-cols-1 gap-4">
              {/* FormSubmit options */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New enquiry from Surya Travels website" />

              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input type="tel" name="phone" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">© 2025 Surya Travels & Computers | Developed by Fubixe</p>
          </div>
        </div>
      </div>
    </section>
  );
}
