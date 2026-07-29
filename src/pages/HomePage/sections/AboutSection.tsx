import { motion } from 'framer-motion';
import { CheckCircle2, Award, Globe, Factory } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';
import { Image } from '@/components/ui/image';

const HIGHLIGHTS = [
  {
    icon: Factory,
    title: 'Own Manufacturing Facility',
    desc: '15,000+ sqm factory in Guangzhou with advanced CNC equipment',
  },
  {
    icon: Award,
    title: 'ISO 9001 Certified',
    desc: 'Strict quality control system with 100% pre-shipment inspection',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    desc: 'Serving 50+ countries with reliable worldwide logistics',
  },
];

export default function AboutSection() {
  const company = MOCK_COMPANY;

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src={company.aboutImageUrl}
                alt="auto parts warehouse Guangzhou factory"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-xl p-5 border border-border/50 max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {company.foundedYear}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Founded in Guangzhou
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Your Trusted Partner for{' '}
              <span className="text-primary">Quality Auto Parts</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
              {company.description} With our own manufacturing facility in
              Guangzhou and over {new Date().getFullYear() - 2010} years of
              experience, we specialize in producing and supplying a comprehensive
              range of high-quality auto parts for passenger and commercial
              vehicles worldwide.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Our in-house manufacturing capability means we control every stage
              of production — from precision machining to final quality
              inspection. This vertical integration allows us to offer
              factory-direct pricing while maintaining strict quality standards
              that meet international requirements.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Our commitment to quality, competitive pricing, and reliable
              service has earned us the trust of importers and distributors
              across {company.countriesServed}+ countries worldwide.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
