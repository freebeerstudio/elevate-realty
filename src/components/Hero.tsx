import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Star } from 'lucide-react'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgGradient} />
      <div className={styles.bgPattern} />
      <div className={styles.bgOverlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className={styles.badgeIcon} size={14} />
            <span>Trusted by 500+ families in Southwest Missouri</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Journey to the
            <span className={styles.highlight}> Perfect Home</span>
            <br />Starts Here
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Elevate Real Estate Group delivers personalized solutions for buying and
            selling homes in Springfield and surrounding communities. Experience real
            estate done differently.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="#contact"
              className={styles.primaryCta}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Search</span>
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#about"
              className={styles.secondaryCta}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={18} />
              <span>Watch Our Story</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className={styles.stat}>
              <span className={styles.statNumber}>$100M+</span>
              <span className={styles.statLabel}>In Sales</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Happy Families</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>7</span>
              <span className={styles.statLabel}>Cities Served</span>
            </div>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Beautiful modern home in Springfield"
              className={styles.heroImage}
            />
            <div className={styles.imageOverlay} />
          </div>

          {/* Floating card */}
          <motion.div
            className={styles.floatingCard}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <MapPin size={20} className={styles.cardIcon} />
            <div>
              <span className={styles.cardTitle}>Springfield, MO</span>
              <span className={styles.cardSubtitle}>& Surrounding Areas</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.scrollLine} />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}
