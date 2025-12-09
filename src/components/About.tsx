import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Shield, TrendingUp, Users } from 'lucide-react'
import styles from './About.module.css'

const values = [
  {
    icon: Heart,
    title: 'Client-First Approach',
    description: 'Your needs drive every decision. We listen, understand, and deliver results that matter to you.',
  },
  {
    icon: Shield,
    title: 'Integrity Always',
    description: 'Honesty and transparency in every transaction. We build trust through actions, not just words.',
  },
  {
    icon: TrendingUp,
    title: 'Market Expertise',
    description: 'Deep knowledge of Southwest Missouri markets gives you a competitive edge in any transaction.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'Not just agents—partners in your journey. We\'re with you from first search to final signature.',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.span>
          <motion.h2
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real Estate
            <span className={styles.accent}> Reimagined</span>
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Backed by Alpha Realty, Elevate Real Estate Group has facilitated over
            $100 million in real estate transactions across the greater Springfield
            area. We combine traditional expertise with modern marketing strategies
            to create smooth, efficient, and enjoyable experiences for every client.
          </motion.p>
        </div>

        <div className={styles.values}>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <value.icon size={24} />
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.imageGrid}>
            <div className={styles.imageLarge}>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern home interior"
              />
            </div>
            <div className={styles.imageSmall}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cozy living room"
              />
            </div>
            <div className={styles.imageSmall}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Beautiful home exterior"
              />
            </div>
          </div>
          <div className={styles.quoteCard}>
            <blockquote>
              "We take the time to understand your unique needs and preferences,
              guiding you through every step of the process."
            </blockquote>
            <cite>— The Elevate Team</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
