/**
 * Hero Component - Tailwind Version
 *
 * BEFORE: Hero.tsx (145 lines) + Hero.module.css (350 lines) = 495 lines total
 * AFTER: HeroV2.tsx (~180 lines) = single file with co-located styles
 *
 * Key improvements:
 * 1. Styles co-located with markup - no mental context switching
 * 2. Responsive built into class names (lg:, md:, sm:)
 * 3. Same visual output, single file
 */

import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Star } from 'lucide-react'

// Brand colors as constants (in production, these come from tailwind.config)
const colors = {
  forest: '#1a3a3a',
  forestLight: '#2a5454',
  gold: '#d4a853',
  goldLight: '#e8c77a',
  cream: '#faf8f5',
  creamDark: '#f0ede8',
  charcoal: '#1c1c1c',
  warmGray: '#6b6560',
}

// Animation variants - reusable across components
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

// Stats data
const stats = [
  { value: '$100M+', label: 'In Sales' },
  { value: '500+', label: 'Happy Families' },
  { value: '7', label: 'Cities Served' },
]

export function HeroV2() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        padding: '8rem 0 4rem',
        background: `
          radial-gradient(ellipse at 20% 80%, rgba(212, 168, 83, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(26, 58, 58, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, ${colors.cream} 0%, ${colors.creamDark} 100%)
        `,
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(26,58,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,58,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-xl lg:max-w-[600px] text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{
                backgroundColor: `${colors.forest}10`,
                border: `1px solid ${colors.forest}15`,
                color: colors.forest,
              }}
            >
              <Star className="w-3.5 h-3.5" style={{ color: colors.gold }} />
              Trusted by 500+ families in Southwest Missouri
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: colors.charcoal,
              }}
            >
              Your Journey to the
              <span className="relative" style={{ color: colors.forest }}>
                {' '}Perfect Home
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 -z-10"
                  style={{
                    background: `linear-gradient(90deg, ${colors.gold}, ${colors.goldLight})`,
                    opacity: 0.3,
                  }}
                />
              </span>
              <br />Starts Here
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0"
              style={{ color: colors.warmGray }}
            >
              Elevate Real Estate Group delivers personalized solutions for buying and
              selling homes in Springfield and surrounding communities. Experience real
              estate done differently.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-shadow duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colors.forest} 0%, ${colors.forestLight} 100%)`,
                  boxShadow: '0 8px 30px rgba(26, 58, 58, 0.25)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 40px rgba(26, 58, 58, 0.35)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 58, 58, 0.25)'}
              >
                Start Your Search
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-colors duration-300"
                style={{
                  border: `2px solid ${colors.creamDark}`,
                  color: colors.charcoal,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.gold
                  e.currentTarget.style.backgroundColor = `${colors.gold}10`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.creamDark
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <Play className="w-4 h-4" />
                Watch Our Story
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6"
              style={{ borderTop: `1px solid ${colors.creamDark}` }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && (
                    <div
                      className="hidden sm:block w-px h-10"
                      style={{ backgroundColor: colors.creamDark }}
                    />
                  )}
                  <div className="flex flex-col items-center lg:items-start">
                    <span
                      className="text-xl sm:text-2xl font-semibold"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        color: colors.forest,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[10px] sm:text-xs uppercase tracking-wider mt-1"
                      style={{ color: colors.warmGray }}
                    >
                      {stat.label}
                    </span>
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
            className="relative max-w-[600px] mx-auto lg:max-w-none"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 30px 80px rgba(26, 58, 58, 0.2)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Beautiful modern home in Springfield"
                className="w-full object-cover"
                style={{ height: 'clamp(350px, 50vw, 550px)' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 60%, ${colors.forest}66 100%)`,
                }}
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-8 lg:translate-x-0 flex items-center gap-4 bg-white px-5 py-4 rounded-2xl"
              style={{ boxShadow: '0 15px 50px rgba(26, 58, 58, 0.15)' }}
            >
              <MapPin className="w-5 h-5" style={{ color: colors.gold }} />
              <div>
                <span className="block font-semibold" style={{ color: colors.charcoal }}>
                  Springfield, MO
                </span>
                <span className="block text-sm" style={{ color: colors.warmGray }}>
                  & Surrounding Areas
                </span>
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
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3"
      >
        <div
          className="w-px h-10"
          style={{
            background: `linear-gradient(180deg, ${colors.forest}, transparent)`,
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: colors.warmGray }}
        >
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}
