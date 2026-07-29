import { motion } from 'framer-motion';
import {
  ShieldCheck,
  DollarSign,
  Truck,
  LayoutGrid,
  Users,
  MessageCircle,
} from 'lucide-react';
import { MOCK_ADVANTAGES } from '@/data/advantages';
import { UniversalLink } from '@/lib/toolkit-mock';

const ICON_MAP: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  CurrencyDollar: DollarSign,
  Truck,
  SquaresFour: LayoutGrid,
  Users,
};

export default function AdvantagesSection() {
  const advantages = MOCK_ADVANTAGES;

  return (
    <section id="advantages" className="w-full py-20 md:py-28 bg-background">
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Hao Xiang Advantage
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            We combine quality, value, and service to deliver an exceptional
            wholesale experience for automotive parts buyers worldwide.
          </p>
        </motion.div>

        {/* Advantage cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {advantages.map((adv, i) => {
            const Icon = ICON_MAP[adv.iconName] || ShieldCheck;
            return (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="group relative bg-card rounded-xl p-7 md:p-8 border border-border/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                <div className="relative">
                  <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="size-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(222_75%_22%)] to-[hsl(222_65%_30%)] p-8 md:p-12"
        >
          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Source Quality Auto Parts?
              </h3>
              <p className="text-blue-100 max-w-xl">
                Get a competitive quote today. Our team responds within 24 hours
                with detailed pricing and product information.
              </p>
            </div>
            <UniversalLink
              to="https://wa.me/8613005156303"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2.5 h-12 px-7 rounded-md bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" />
              Request a Quote
            </UniversalLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
