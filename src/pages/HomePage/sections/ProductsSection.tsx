import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MOCK_PRODUCT_CATEGORIES } from '@/data/products';
import { MOCK_BRANDS } from '@/data/brands';
import { UniversalLink } from '@/lib/toolkit-mock';
import { Image } from '@/components/ui/image';
import { Car } from 'lucide-react';

export default function ProductsSection() {
  const categories = MOCK_PRODUCT_CATEGORIES;
  const brands = MOCK_BRANDS;

  return (
    <section id="products" className="w-full py-20 md:py-28 bg-muted/30">
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
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Auto Parts Catalog
          </h2>
           <p className="text-base md:text-lg text-muted-foreground">
             We supply thousands of SKUs covering engine parts, electrical
             systems, brake systems, suspension, steering, cooling systems, and
             diesel fuel systems (exterior body parts excluded). EGR valves and
             diesel injection pumps are our flagship product lines with
             extensive model coverage.
           </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={cat.imageUrl}
                  alt={cat.altText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-3xl mb-1">{cat.icon}</div>
                  <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cat.description}
                </p>
                <UniversalLink
                  to="https://wa.me/8613005156303"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 group/link"
                >
                  Request Quote
                  <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                </UniversalLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Can't find note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Can't find what you need?
            </span>{' '}
            Contact us with your part number — EGR valves and diesel injection
            pumps are our specialties, and we have wide coverage across many
            vehicle models and systems.
          </p>
        </motion.div>

        {/* Compatible brands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-2xl border border-border/60 p-8 md:p-10 shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Compatible with Leading Car Brands
            </h3>
            <p className="text-sm text-muted-foreground">
              Our parts fit vehicles from the world's top manufacturers
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4 items-center">
             {brands.map((brand, i) => (
               <motion.div
                 key={brand.id}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: i * 0.05 }}
                 className="group flex items-center justify-center gap-2 px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-border/60 bg-muted/30 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
               >
                 <Car className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                 <span className="text-xs md:text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors truncate">
                   {brand.name}
                 </span>
               </motion.div>
             ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
