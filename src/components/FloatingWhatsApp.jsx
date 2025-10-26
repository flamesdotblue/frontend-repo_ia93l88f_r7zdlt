import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const number = "9845666893"; // Provided number
  const text = encodeURIComponent("Hi Surya Travels!");
  const href = `https://wa.me/${number}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed left-4 bottom-4 z-[60] inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:bg-[#1ebe57] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] h-14 w-14 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
