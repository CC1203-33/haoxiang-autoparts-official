import { motion } from 'framer-motion';
import { NavLink } from '@/lib/toolkit-mock';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';
import { UniversalLink } from '@/lib/toolkit-mock';
import { Image } from '@/components/ui/image';

export default function HeroSection() {
  const company = MOCK_COMPANY;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={company.heroImageUrl}
          alt="precision auto engine parts manufacturing factory"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_75%_12%_/_0.92)] via-[hsl(222_75%_15%_/_0.85)] to-[hsl(222_47%_20%_/_0.75)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="size-2 rounded-full bg-[#25D366] animate-pulse" />
            Trusted by Global Buyers Since 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Professional{' '}
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
              Auto Parts
            </span>
            <br />
            Supplier from China
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            {company.tagline}. Guangzhou Hao Xiang supplies premium automotive
            parts for global importers and distributors — quality-engineered
            components at competitive wholesale prices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="relative">
              <UniversalLink
                to="https://wa.me/8613005156303"
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center gap-3 h-14 px-8 rounded-lg bg-[#25D366] text-white font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-xl shadow-[#25D366]/40 hover:shadow-[#25D366]/50 hover:-translate-y-0.5"
              >
                <MessageCircle className="size-6" />
                Chat on WhatsApp
              </UniversalLink>
              <span className="absolute -inset-1 rounded-lg bg-[#25D366]/40 animate-ping" />
            </div>
            <NavLink
              to="#about"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all backdrop-blur-sm"
            >
              Learn More
              <ArrowRight className="size-4" />
            </NavLink>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '50+', label: 'Countries Served' },
              { value: '2000+', label: 'Happy Clients' },
              { value: '8+', label: 'Product Categories' },
            ].map((stat, i) => (
              <div key={i} className="border-l-2 border-white/20 pl-4">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <NavLink
          to="#about"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="size-5 animate-bounce" />
        </NavLink>
      </motion.div>
    </section>
  );
}
