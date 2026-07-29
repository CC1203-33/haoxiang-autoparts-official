import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  User,
  FileText,
  Store,
  Globe,
  Hash,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { toast } from 'sonner';
import { MOCK_COMPANY } from '@/data/company';
import { UniversalLink } from '@/lib/toolkit-mock';

const PRODUCT_OPTIONS = [
  'Engine Parts',
  'Electrical Parts',
  'Brake System',
  'Suspension',
  'Steering System',
  'Cooling System',
  'Other / Multiple Categories',
];

export default function ContactSection() {
  const company = MOCK_COMPANY;
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    company: '',
    partNumber: '',
    message: '',
  });

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdnknlv';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          country: form.country,
          company: form.company,
          partNumber: form.partNumber,
          message: form.message,
        }),
      });
      if (response.ok) {
        toast.success('Inquiry sent successfully! We will reply within 24 hours.');
        setForm({
          name: '',
          email: '',
          country: '',
          company: '',
          partNumber: '',
          message: '',
        });
      } else {
        const data = await response.json().catch(() => ({}));
        toast.error(data.error || 'Failed to send. Please try again or contact us via WhatsApp.');
      }
    } catch (err) {
      toast.error('Network error. Please try again or contact us via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: company.whatsapp,
      href: 'https://wa.me/8613005156303',
      color: 'text-[#25D366]',
      bg: 'bg-[#25D366]/10',
    },
    {
      icon: Mail,
      label: 'Email',
      value: company.email,
      href: `mailto:${company.email}`,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: Phone,
      label: 'Tel / WeChat',
      value: company.tel,
      href: `tel:${company.tel.replace(/\s/g, '')}`,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: Phone,
      label: 'Fax',
      value: company.fax,
      href: undefined,
      color: 'text-muted-foreground',
      bg: 'bg-muted',
    },
    {
      icon: Store,
      label: 'Alibaba Store',
      value: 'Visit Our Store',
      href: company.alibabaStore,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: company.address,
      href: undefined,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
  ];

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch With Our Team
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Have a question or need a quote? Contact Cathy Cao directly via
            WhatsApp, email, or fill out the form below — we respond within 24
            hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-card rounded-xl p-6 md:p-7 border border-border/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border/50">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Building2 className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">
                    {company.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Contact: {company.contactPerson}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactItems.map((item, i) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`size-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color} shrink-0`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm text-foreground font-medium break-words">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <UniversalLink
                      key={i}
                      to={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="block hover:bg-muted/50 -mx-2 px-2 py-2 rounded-md transition-colors"
                    >
                      {content}
                    </UniversalLink>
                  ) : (
                    <div key={i} className="py-1">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA card */}
            <UniversalLink
              to="https://wa.me/8613005156303"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl bg-[#25D366] p-6 text-white hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="size-7" />
                </div>
                <div>
                  <div className="font-bold text-lg">Chat on WhatsApp</div>
                  <div className="text-sm text-white/80">
                    Fast response — usually within hours
                  </div>
                </div>
              </div>
            </UniversalLink>
          </motion.div>

          {/* Inquiry form */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: '-50px' }}
             transition={{ duration: 0.7 }}
             className="lg:col-span-3 space-y-5"
           >
             {/* WhatsApp quick inquiry CTA */}
             <UniversalLink
               to="https://wa.me/8613005156303"
               target="_blank"
               rel="noreferrer"
               className="block group"
             >
               <div className="relative bg-[#25D366] rounded-xl p-5 md:p-6 text-white overflow-hidden shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all">
                 <div className="relative flex items-center gap-4">
                   <div className="size-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                     <MessageCircle className="size-7" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <div className="font-bold text-lg md:text-xl">
                       Quick Inquiry via WhatsApp
                     </div>
                     <div className="text-sm text-white/85">
                       Get instant quote — usually replies within hours
                     </div>
                   </div>
                   <div className="hidden sm:flex items-center gap-1 font-semibold shrink-0 group-hover:translate-x-1 transition-transform">
                     Chat Now
                     <ArrowRight className="size-4" />
                   </div>
                 </div>
                 <span className="absolute -top-1 -right-1 size-3 rounded-full bg-white flex items-center justify-center">
                   <span className="size-2 rounded-full bg-[#25D366] animate-pulse" />
                 </span>
               </div>
             </UniversalLink>

             <form
               onSubmit={handleSubmit}
               className="bg-card rounded-xl p-6 md:p-8 border border-border/60 shadow-sm space-y-5"
             >
               <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                 Send an Inquiry
               </h3>
               <p className="text-sm text-muted-foreground mb-4">
                 Fill out the form below and we'll get back to you within 24
                 hours.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-foreground flex items-center gap-1">
                     <User className="size-3.5 text-muted-foreground" />
                     Name <span className="text-destructive">*</span>
                   </label>
                   <input
                     type="text"
                     value={form.name}
                     onChange={(e) => setForm({ ...form, name: e.target.value })}
                     placeholder="Your full name"
                     className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors"
                     required
                   />
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-foreground flex items-center gap-1">
                     <Mail className="size-3.5 text-muted-foreground" />
                     Email <span className="text-destructive">*</span>
                   </label>
                   <input
                     type="email"
                     value={form.email}
                     onChange={(e) => setForm({ ...form, email: e.target.value })}
                     placeholder="your@email.com"
                     className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors"
                     required
                   />
                 </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-foreground flex items-center gap-1">
                     <Globe className="size-3.5 text-muted-foreground" />
                     Country / Region
                   </label>
                   <input
                     type="text"
                     value={form.country}
                     onChange={(e) =>
                       setForm({ ...form, country: e.target.value })
                     }
                     placeholder="e.g. United States, Germany, UAE"
                     className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors"
                   />
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-foreground flex items-center gap-1">
                     <Building2 className="size-3.5 text-muted-foreground" />
                     Company Name
                   </label>
                   <input
                     type="text"
                     value={form.company}
                     onChange={(e) =>
                       setForm({ ...form, company: e.target.value })
                     }
                     placeholder="Your company name"
                     className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors"
                   />
                 </div>
               </div>

               <div className="space-y-1.5">
                 <label className="text-sm font-medium text-foreground flex items-center gap-1">
                   <Hash className="size-3.5 text-muted-foreground" />
                   Part Number(s) / Product Interest
                 </label>
                 <input
                   type="text"
                   value={form.partNumber}
                   onChange={(e) =>
                     setForm({ ...form, partNumber: e.target.value })
                   }
                   placeholder="Enter part numbers or describe the products you need (e.g. EGR valve for Ford Focus 2015)"
                   className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors"
                 />
               </div>

               <div className="space-y-1.5">
                 <label className="text-sm font-medium text-foreground flex items-center gap-1">
                   <FileText className="size-3.5 text-muted-foreground" />
                   Message <span className="text-destructive">*</span>
                 </label>
                 <textarea
                   value={form.message}
                   onChange={(e) =>
                     setForm({ ...form, message: e.target.value })
                   }
                   placeholder="Tell us about your requirements, quantities needed, target price, or any other details..."
                   rows={5}
                   className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors resize-none"
                   required
                 />
               </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <svg
                      className="animate-spin size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeOpacity="0.25"
                        strokeWidth="4"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Inquiry
                  </>
                )}
              </button>

               <div className="flex items-center justify-center gap-2 pt-1">
                 <Clock className="size-4 text-primary" />
                 <p className="text-xs text-foreground/70">
                   <span className="font-medium text-foreground">
                     We'll reply within 24 hours.
                   </span>{' '}
                   Your information is kept confidential.
                 </p>
               </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
