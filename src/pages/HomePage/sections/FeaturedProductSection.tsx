import { motion } from 'framer-motion';
import { NavLink } from '@/lib/toolkit-mock';
import {
  Sparkles,
  ShieldCheck,
  DollarSign,
  Layers,
  Cog,
  Gauge,
  Wrench,
  MessageCircle,
} from 'lucide-react';
import { UniversalLink } from '@/lib/toolkit-mock';
import { Image } from '@/components/ui/image';

const EGR_IMAGE =
  '/images/product-egr.svg';
const DIESEL_IMAGE =
  '/images/product-diesel.svg';

const PRODUCTS = [
  {
    title: 'EGR Valves',
    image: EGR_IMAGE,
    altText: 'EGR valve exhaust gas recirculation valve auto engine part',
    badge: '100% Tested',
    description:
      'Wide range of EGR valves for European, Japanese, and American vehicles. 100% tested before shipping with OE-grade quality and factory-direct pricing.',
    highlights: [
      { icon: ShieldCheck, label: 'OE Quality' },
      { icon: DollarSign, label: 'Factory Direct' },
      { icon: Layers, label: '500+ Models' },
    ],
  },
  {
    title: 'Diesel Injection Pumps',
    image: DIESEL_IMAGE,
    altText: 'diesel injection pump diesel fuel system part',
    badge: 'Precision Built',
    description:
      'Premium diesel fuel injection pumps for various diesel engine applications. Precision engineered, reliable performance, and competitively priced from our own manufacturing facility.',
    highlights: [
      { icon: Cog, label: 'Precision Built' },
      { icon: Gauge, label: 'Wide Application' },
      { icon: Wrench, label: 'Rigorous Testing' },
    ],
  },
];

export default function FeaturedProductSection() {
  return (
    <section
      id="featured-products"
      className="w-full py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            <Sparkles className="size-4" />
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Core <span className="text-primary">Products</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Two Specialized Product Lines — Factory Direct, Quality Assured.
            Extensive model coverage and competitive wholesale pricing from our
            Guangzhou manufacturing facility.
          </p>
        </motion.div>

        {/* Two-column product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14 md:mb-16">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                {/* Badge */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-lg">
                  <ShieldCheck className="size-4" />
                  {product.badge}
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {product.highlights.map((item, j) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={j}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-muted/50 border border-border/40"
                      >
                        <Icon className="size-5 text-primary" />
                        <span className="text-xs font-semibold text-foreground text-center">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <UniversalLink
                  to="https://wa.me/8613005156303"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-md bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/20 hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <MessageCircle className="size-4" />
                  Inquire on WhatsApp
                </UniversalLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-xl border border-border/60 p-6 md:p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="size-5 text-primary" />
            <span className="font-semibold text-foreground">
              Can't find the part you need?
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            EGR valves and diesel injection pumps are our specialties, but we
            supply thousands of other auto parts too. Contact us with your part
            number or vehicle details — we have wide model coverage and can
            source or manufacture specific parts to meet your requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
