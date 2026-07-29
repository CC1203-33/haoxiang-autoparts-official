import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Warehouse, Package, Cog, Building2, MessageCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { UniversalLink } from '@/lib/toolkit-mock';

const FACTORY_IMAGES = [
  {
    url: '/images/factory-production.jpg',
    title: 'Production Line',
    desc: 'Advanced CNC machining & automated assembly',
    alt: 'CNC machining auto parts factory',
    icon: Cog,
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    url: '/images/factory-qc.jpg',
    title: 'Quality Control',
    desc: '100% inspection before shipment',
    alt: 'quality control inspection auto parts',
    icon: ShieldCheck,
    span: '',
  },
  {
    url: '/images/factory-warehouse.jpg',
    title: 'Warehouse',
    desc: 'Organized inventory & fast order picking',
    alt: 'auto parts warehouse',
    icon: Warehouse,
    span: '',
  },
  {
    url: '/images/factory-production.jpg',
    title: 'Packaging',
    desc: 'Professional export packaging standards',
    alt: 'auto parts packaging shipping',
    icon: Package,
    span: '',
  },
  {
    url: '/images/factory-production.jpg',
    title: 'Precision Machining',
    desc: 'High-precision CNC manufacturing',
    alt: 'precision auto parts manufacturing',
    icon: Factory,
    span: '',
  },
];

const FACTORY_STATS = [
  { value: '15,000+', label: 'sqm Factory Area' },
  { value: '200+', label: 'Skilled Workers' },
  { value: '500K+', label: 'Monthly Output' },
  { value: 'ISO 9001', label: 'Quality Certified' },
];

export default function FactorySection() {
  return (
    <section id="factory" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Factory
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            In-House Manufacturing &{' '}
            <span className="text-primary">Quality Control</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            With our own manufacturing facility in Guangzhou, we control every
            step of production — from raw material sourcing to final inspection
            — ensuring consistent quality and competitive pricing for our global
            clients.
          </p>
        </motion.div>

        {/* Image gallery grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-14 md:mb-16"
        >
          {FACTORY_IMAGES.map((img, i) => {
            const Icon = img.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-xl bg-muted ${img.span}`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="size-7 md:size-8 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <Icon className="size-4" />
                    </div>
                    <h4 className="text-white font-bold text-sm md:text-base">
                      {img.title}
                    </h4>
                  </div>
                  <p className="text-white/75 text-xs md:text-sm leading-snug">
                    {img.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Factory capabilities + stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
              Manufacturing Capability You Can Trust
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Our 15,000+ square meter factory is equipped with advanced CNC
              machines, automated production lines, and a dedicated quality
              control center. We produce a wide range of auto parts including
              engine components, brake systems, suspension parts, and electrical
              components.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Every product undergoes strict quality inspection at multiple
              stages of production. Our ISO 9001 certified quality management
              system ensures that each part meets international standards before
              it reaches our customers worldwide.
            </p>
            <ul className="space-y-3">
              {[
                'Advanced CNC machining & precision stamping',
                'In-house heat treatment & surface finishing',
                'ISO 9001:2015 quality management system',
                '100% dimensional & functional testing before shipment',
                'Custom OEM/ODM manufacturing capabilities',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <svg
                      className="size-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            {FACTORY_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-5 md:p-6 border border-border/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Building2 className="size-5" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
           </motion.div>
         </div>

         {/* WhatsApp CTA */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="mt-12 md:mt-14"
         >
           <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 md:p-10 text-center relative overflow-hidden">
             <div
               className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage:
                   'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                 backgroundSize: '40px 40px',
               }}
             />
             <div className="relative max-w-2xl mx-auto">
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                 Talk to Our Sales Team
               </h3>
               <p className="text-white/80 mb-6 text-base md:text-lg">
                 Have questions about our manufacturing capabilities or need a
                 custom quote? Chat with us directly on WhatsApp for a fast
                 response.
               </p>
               <UniversalLink
                 to="https://wa.me/8613005156303"
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex items-center gap-2.5 h-12 px-8 rounded-lg bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
               >
                 <MessageCircle className="size-5" />
                 Talk to Sales on WhatsApp
               </UniversalLink>
             </div>
           </div>
         </motion.div>
       </div>
      </section>
    );
  }
