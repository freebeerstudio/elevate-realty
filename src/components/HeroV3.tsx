/**
 * Hero V3 - Polished Version with Animated Highlight
 *
 * Built on the proven CSS Modules layout with ONE elegant animation:
 * - Animated highlight sweep on "Perfect Home"
 * - Same spacing, typography, and brand colors as original
 * - Clean, restrained, world-class
 */

import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Star } from 'lucide-react'

// Brand colors (exact match to CSS variables)
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

// Subtle fade-in animation
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Stats data
const stats = [
  { value: '$100M+', label: 'In Sales' },
  { value: '500+', label: 'Happy Families' },
  { value: '7', label: 'Cities Served' },
]

// Animated highlight component - the ONE special effect
function AnimatedHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: colors.forest, position: 'relative', display: 'inline' }}>
      {children}
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: '0.1em',
          left: 0,
          height: '0.3em',
          background: `linear-gradient(90deg, ${colors.gold}, ${colors.goldLight})`,
          opacity: 0.3,
          zIndex: -1,
        }}
      />
    </span>
  )
}

export function HeroV3() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
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
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(26,58,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,58,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Diagonal overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, transparent 40%, rgba(250, 248, 245, 0.8) 100%)',
        }}
      />

      {/* Main container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '4rem',
          alignItems: 'center',
          width: '100%',
        }}
        className="hero-container"
      >
        {/* Left column - Content */}
        <motion.div
          initial="initial"
          animate="animate"
          style={{ maxWidth: '600px' }}
          className="hero-content"
        >
          {/* Trust badge */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(26, 58, 58, 0.08)',
              border: '1px solid rgba(26, 58, 58, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '100px',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: colors.forest,
              marginBottom: '1.5rem',
            }}
          >
            <Star size={14} style={{ color: colors.gold }} />
            <span>Trusted by 500+ families in Southwest Missouri</span>
          </motion.div>

          {/* Headline with animated highlight */}
          <motion.h1
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              color: colors.charcoal,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Your Journey to the
            <br />
            <AnimatedHighlight>Perfect Home</AnimatedHighlight>
            <br />
            Starts Here
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: colors.warmGray,
              marginBottom: '2rem',
              maxWidth: '520px',
            }}
          >
            Elevate Real Estate Group delivers personalized solutions for buying and
            selling homes in Springfield and surrounding communities. Experience real
            estate done differently.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem',
            }}
            className="hero-ctas"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: `linear-gradient(135deg, ${colors.forest} 0%, ${colors.forestLight} 100%)`,
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(26, 58, 58, 0.25)',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 40px rgba(26, 58, 58, 0.35)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 58, 58, 0.25)'}
            >
              <span>Start Your Search</span>
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'transparent',
                color: colors.charcoal,
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                border: `2px solid ${colors.creamDark}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.gold
                e.currentTarget.style.background = 'rgba(212, 168, 83, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.creamDark
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Play size={18} />
              <span>Watch Our Story</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${colors.creamDark}`,
            }}
            className="hero-stats"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {i > 0 && (
                  <div
                    style={{
                      width: '1px',
                      height: '40px',
                      backgroundColor: colors.creamDark,
                    }}
                    className="stat-divider"
                  />
                )}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: colors.forest,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: colors.warmGray,
                      marginTop: '0.25rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
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
          style={{ position: 'relative' }}
          className="hero-visual"
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(26, 58, 58, 0.2)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Beautiful modern home in Springfield"
              style={{
                width: '100%',
                height: '550px',
                objectFit: 'cover',
              }}
              className="hero-image"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(26, 58, 58, 0.4) 100%)',
              }}
            />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-30px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              background: 'white',
              padding: '1.25rem 1.5rem',
              borderRadius: '16px',
              boxShadow: '0 15px 50px rgba(26, 58, 58, 0.15)',
            }}
            className="floating-card"
          >
            <MapPin size={20} style={{ color: colors.gold }} />
            <div>
              <span style={{ display: 'block', fontWeight: 600, color: colors.charcoal, fontSize: '1rem' }}>
                Springfield, MO
              </span>
              <span style={{ display: 'block', fontSize: '0.8rem', color: colors.warmGray }}>
                & Surrounding Areas
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}
        className="scroll-indicator"
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: `linear-gradient(180deg, ${colors.forest}, transparent)`,
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: colors.warmGray,
          }}
        >
          Scroll to explore
        </span>
      </motion.div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-content {
            max-width: 100% !important;
            text-align: center;
          }
          .hero-ctas {
            justify-content: center;
            flex-wrap: wrap;
          }
          .hero-stats {
            justify-content: center;
          }
          .hero-visual {
            max-width: 600px;
            margin: 0 auto;
          }
          .floating-card {
            left: 50% !important;
            transform: translateX(-50%) !important;
            bottom: -15px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-container {
            padding: 0 1rem !important;
          }
          .hero-ctas {
            flex-direction: column;
          }
          .hero-ctas > a {
            width: 100%;
            justify-content: center;
          }
          .hero-stats {
            flex-wrap: wrap;
            gap: 1.5rem !important;
          }
          .stat-divider {
            display: none;
          }
          .hero-image {
            height: 350px !important;
          }
          .scroll-indicator {
            display: none !important;
          }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  )
}
