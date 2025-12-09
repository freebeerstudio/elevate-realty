/**
 * Hero V3 - Flashy Animated Version
 *
 * Uses 21st.dev components (Aceternity UI):
 * - HeroHighlight with mouse-tracking dot pattern
 * - Highlight text animation
 * - TextGenerateEffect for typing animation
 * - SparklesCore for particle effects
 */

import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Star, Sparkles } from 'lucide-react'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { SparklesCore } from '@/components/ui/sparkles'

// Brand colors
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

// Stats data
const stats = [
  { value: '$100M+', label: 'In Sales' },
  { value: '500+', label: 'Happy Families' },
  { value: '7', label: 'Cities Served' },
]

export function HeroV3() {
  return (
    <HeroHighlight
      containerClassName="min-h-screen !bg-gradient-to-br from-slate-50 via-white to-slate-100"
      className="w-full"
    >
      {/* Sparkles overlay */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor={colors.gold}
          speed={0.8}
        />
      </div>

      {/* Main container */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[600px]"
        >
          {/* Trust badge with sparkle animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
            style={{ color: colors.forest }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles size={16} style={{ color: colors.gold }} />
            </motion.div>
            <span>Trusted by 500+ families in Southwest Missouri</span>
          </motion.div>

          {/* Animated headline with Highlight effect */}
          <h1
            className="text-5xl lg:text-6xl font-medium leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: colors.charcoal,
            }}
          >
            Your Journey to the
            <br />
            <Highlight className="!from-emerald-700 !to-teal-600">
              Perfect Home
            </Highlight>
            <br />
            Starts Here
          </h1>

          {/* Typewriter effect subheadline */}
          <div className="mb-8">
            <TextGenerateEffect
              words="Elevate Real Estate Group delivers personalized solutions for buying and selling homes in Springfield and surrounding communities. Experience real estate done differently."
              className="!text-lg !font-normal !leading-relaxed"
              duration={0.3}
            />
          </div>

          {/* Animated CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(26, 58, 58, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-xl transition-all"
              style={{
                background: `linear-gradient(135deg, ${colors.forest} 0%, ${colors.forestLight} 100%)`,
              }}
            >
              <span>Start Your Search</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05,
                borderColor: colors.gold,
                backgroundColor: 'rgba(212, 168, 83, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-medium text-lg border-2 border-slate-200 bg-white/50 backdrop-blur-sm transition-all"
              style={{ color: colors.charcoal }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play size={18} fill={colors.gold} stroke={colors.gold} />
              </motion.div>
              <span>Watch Our Story</span>
            </motion.a>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-8 pt-6 border-t border-slate-200"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                className="flex flex-col"
              >
                <motion.span
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: colors.forest,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.span>
                <span
                  className="text-xs uppercase tracking-wider mt-1"
                  style={{ color: colors.warmGray }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          {/* Glowing background effect */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-4 rounded-3xl blur-2xl"
            style={{
              background: `linear-gradient(135deg, ${colors.gold}40 0%, ${colors.forest}30 100%)`,
            }}
          />

          {/* Main image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Beautiful modern home in Springfield"
              className="w-full h-[500px] lg:h-[550px] object-cover"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, transparent 50%, rgba(26, 58, 58, 0.6) 100%)',
              }}
            />

            {/* Image sparkle effect on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0"
            >
              <SparklesCore
                id="image-sparkles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={30}
                className="w-full h-full"
                particleColor="#ffffff"
                speed={1.5}
              />
            </motion.div>
          </motion.div>

          {/* Floating location card */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-100"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin size={24} style={{ color: colors.gold }} />
            </motion.div>
            <div>
              <span className="block font-bold text-lg" style={{ color: colors.charcoal }}>
                Springfield, MO
              </span>
              <span className="block text-sm" style={{ color: colors.warmGray }}>
                & Surrounding Areas
              </span>
            </div>
          </motion.div>

          {/* Floating rating badge */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="absolute -top-4 -right-4 flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-xl border border-slate-100"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + star * 0.1 }}
                >
                  <Star size={16} fill={colors.gold} stroke={colors.gold} />
                </motion.div>
              ))}
            </div>
            <span className="font-bold" style={{ color: colors.charcoal }}>5.0</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-0.5 h-12"
          style={{
            background: `linear-gradient(180deg, ${colors.forest}, transparent)`,
          }}
        />
        <span
          className="text-xs uppercase tracking-[0.2em]"
          style={{ color: colors.warmGray }}
        >
          Scroll to explore
        </span>
      </motion.div>
    </HeroHighlight>
  )
}
