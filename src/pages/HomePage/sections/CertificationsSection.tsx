import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Image } from '@/components/ui/image';

const CERTIFICATES = [
  {
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    description:
      'Our quality management system is certified to ISO 9001:2015 standards, ensuring consistent product quality, reliable processes, and continuous improvement across all operations.',
    icon: Award,
    color: 'from-primary to-primary/70',
    altText: 'ISO 9001 certification auto parts manufacturer',
  },
  {
    title: 'CE Marking',
    subtitle: 'CE Compliance Certified',
    description:
      'Our products comply with CE marking requirements for the European market, meeting EU health, safety, and environmental protection standards for automotive components.',
    icon: ShieldCheck,
    color: 'from-[#1e40af] to-[#3b82f6]',
    altText: 'CE certified auto parts',
  },
];

const QUALITY_POINTS = [
  '100% dimensional inspection before shipment',
  'Raw material traceability system',
  'ISO-standardized production processes',
  'CE-compliant product testing protocols',
  'Continuous quality improvement program',
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-20 md:py-28 bg-muted/30">
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
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Certifications &amp;{' '}
            <span className="text-primary">Quality Assurance</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Internationally recognized standards for reliable quality
          </p>
        </motion.div>

        {/* Two certificate cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-14">
          {CERTIFICATES.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${cert.color} p-8 md:p-10 relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <div className="relative flex items-center gap-5">
                    <div className="size-16 md:size-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
                      <Icon className="size-8 md:size-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base font-medium">
                        {cert.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 md:p-7">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality assurance text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl border border-border/60 p-8 md:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quality You Can Trust
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                All our products undergo strict quality control processes and meet
                international standards. We are ISO 9001 certified and our
                products comply with CE requirements for European markets.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                From raw material inspection to final packaging, every step is
                documented and controlled to ensure that every part leaving our
                factory meets the highest quality benchmarks.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QUALITY_POINTS.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border/40"
                  >
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-medium">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
