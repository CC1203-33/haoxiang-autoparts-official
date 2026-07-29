import { NavLink } from '@/lib/toolkit-mock';
import { Mail, Phone, MapPin, MessageCircle, Building2 } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';
import { UniversalLink } from '@/lib/toolkit-mock';

const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Factory', href: '#factory' },
  { label: 'Why Us', href: '#advantages' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const company = MOCK_COMPANY;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[hsl(222_47%_11%)] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-md">
                HX
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg tracking-tight">
                  {company.brand}
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">
                  Auto Parts Co., Ltd.
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-4">
              {company.description}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Visit our store:</span>
              <UniversalLink
                to={company.alibabaStore}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-primary-foreground/80 hover:text-white underline underline-offset-2"
              >
                Alibaba Store
              </UniversalLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="size-4 text-[#25D366] shrink-0 mt-0.5" />
                <UniversalLink
                  to={`https://wa.me/8613005156303`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  WhatsApp: {company.whatsapp}
                </UniversalLink>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 text-primary-foreground/60 shrink-0 mt-0.5" />
                <UniversalLink
                  to={`mailto:${company.email}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors break-all"
                >
                  {company.email}
                </UniversalLink>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="size-4 text-primary-foreground/60 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">Tel: {company.tel}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-primary-foreground/60 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {company.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            <Building2 className="size-3.5" />
            Contact: {company.contactPerson}
          </p>
        </div>
      </div>
    </footer>
  );
}
