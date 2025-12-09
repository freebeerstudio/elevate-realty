/**
 * Hero Component - Tailwind + shadcn/ui Approach
 *
 * This demonstrates how the SAME design can be implemented with utility-first CSS.
 * Notice: same visual result, but more concise and maintainable.
 *
 * Key differences from CSS Modules approach:
 * 1. Styles are co-located with markup (no separate .module.css file)
 * 2. Design tokens come from tailwind.config.ts
 * 3. Common patterns extracted to reusable components (Button, Badge)
 * 4. Accessibility built into primitives
 *
 * To use this, you'd need:
 * - Tailwind CSS configured with custom colors
 * - shadcn/ui Button and Badge components installed
 * - Framer Motion (same as before)
 */

import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Star } from 'lucide-react'

// In a real shadcn setup, these would be imported from @/components/ui
// For demo, we'll create inline versions showing the pattern

// shadcn-style Button component (normally from @/components/ui/button)
const Button = ({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}: {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'lg'
  className?: string
  children: React.ReactNode
  [key: string]: any
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    default: 'bg-gradient-to-br from-forest to-forest-light text-white shadow-lg shadow-forest/25 hover:shadow-xl hover:shadow-forest/35',
    outline: 'border-2 border-cream-dark bg-transparent hover:border-gold hover:bg-gold/5',
    ghost: 'hover:bg-cream-dark',
  }

  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// shadcn-style Badge component
const Badge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-forest/5 border border-forest/10 text-forest ${className}`}>
    {children}
  </span>
)

// Animation variants (reusable across components)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export function HeroTailwind() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-32 lg:py-24">
      {/* Background layers - using Tailwind's gradient utilities */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-cream-dark" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 80%, rgba(212, 168, 83, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(26, 58, 58, 0.05) 0%, transparent 50%)
          `,
        }}
      />
      {/* Grid pattern - could be a reusable <GridPattern /> component */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(26,58,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,58,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-xl"
          >
            {/* Trust badge */}
            <motion.div variants={fadeInUp}>
              <Badge>
                <Star className="w-3.5 h-3.5 text-gold" />
                Trusted by 500+ families in Southwest Missouri
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal"
            >
              Your Journey to the
              <span className="relative text-forest">
                {' '}Perfect Home
                {/* Highlight underline - could be a <Highlight> component */}
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-gold to-gold-light opacity-30 -z-10" />
              </span>
              <br />Starts Here
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-warm-gray leading-relaxed"
            >
              Elevate Real Estate Group delivers personalized solutions for buying and
              selling homes in Springfield and surrounding communities. Experience real
              estate done differently.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="default" size="lg">
                  Start Your Search
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg">
                  <Play className="w-4 h-4" />
                  Watch Our Story
                </Button>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 pt-8 border-t border-cream-dark flex items-center gap-8"
            >
              {[
                { value: '$100M+', label: 'In Sales' },
                { value: '500+', label: 'Happy Families' },
                { value: '7', label: 'Cities Served' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-cream-dark" />}
                  <div>
                    <div className="font-display text-2xl font-semibold text-forest">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-warm-gray mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/20">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Beautiful modern home in Springfield"
                className="w-full h-[400px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-4 -left-4 lg:-left-8 flex items-center gap-4 bg-white px-5 py-4 rounded-2xl shadow-xl shadow-forest/10"
            >
              <MapPin className="w-5 h-5 text-gold" />
              <div>
                <div className="font-semibold text-charcoal">Springfield, MO</div>
                <div className="text-sm text-warm-gray">& Surrounding Areas</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-px h-10 bg-gradient-to-b from-forest to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">Scroll to explore</span>
      </motion.div>
    </section>
  )
}
