import { useState, useEffect } from 'react';
import { NavLink } from '@/lib/toolkit-mock';
import { Menu, X, MessageCircle } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';
import { UniversalLink } from '@/lib/toolkit-mock';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Factory', href: '#factory' },
  { label: 'Why Us', href: '#advantages' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_URL = 'https://wa.me/8613005156303';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <NavLink to="#hero" className="flex items-center gap-2 group">
          <div className="size-9 md:size-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base shadow-md">
            HX
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-foreground text-base md:text-lg tracking-tight">
              Hao Xiang
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
              Auto Parts
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2 md:gap-3">
          <UniversalLink
            to={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 h-9 px-4 rounded-md bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            <MessageCircle className="size-4" />
            Get Quote
          </UniversalLink>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-md text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/98 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-medium rounded-md ${
                    isActive
                      ? 'text-primary bg-accent/50'
                      : 'text-foreground/80 hover:text-primary hover:bg-accent/30'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <UniversalLink
              to={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 h-10 rounded-md bg-[#25D366] text-white text-sm font-medium"
            >
              <MessageCircle className="size-4" />
              Get Quote on WhatsApp
            </UniversalLink>
          </nav>
        </div>
      )}
    </header>
  );
}
