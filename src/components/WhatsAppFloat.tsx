import { MessageCircle } from 'lucide-react';
import { UniversalLink } from '@/lib/toolkit-mock';

export default function WhatsAppFloat() {
  return (
    <UniversalLink
      to="https://wa.me/8613005156303"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="flex items-center gap-2">
        {/* Text label */}
        <span className="hidden sm:flex items-center h-10 px-4 rounded-full bg-[#25D366] text-white text-sm font-semibold shadow-lg shadow-[#25D366]/30 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          WhatsApp Us
        </span>
        {/* Button */}
        <div className="relative">
          <div className="size-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300">
            <MessageCircle className="size-8" />
          </div>
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
          {/* Online badge */}
          <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-white flex items-center justify-center">
            <span className="size-2.5 rounded-full bg-[#25D366] animate-pulse" />
          </span>
        </div>
      </div>
    </UniversalLink>
  );
}
