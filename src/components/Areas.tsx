import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, ArrowUpRight } from 'lucide-react'
import styles from './Areas.module.css'

const areas = [
  {
    name: 'Springfield',
    description: 'The heart of the Ozarks. A vibrant city with diverse neighborhoods for every lifestyle.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    stats: { listings: '200+', avgPrice: '$285K' },
  },
  {
    name: 'Republic',
    description: 'Family-friendly suburb with excellent schools and a tight-knit community feel.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    stats: { listings: '45+', avgPrice: '$310K' },
  },
  {
    name: 'Nixa',
    description: 'One of Missouri\'s fastest growing cities with top-rated schools and modern amenities.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    stats: { listings: '60+', avgPrice: '$340K' },
  },
  {
    name: 'Ozark',
    description: 'Charming downtown, beautiful parks, and easy access to Table Rock Lake.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    stats: { listings: '55+', avgPrice: '$295K' },
  },
  {
    name: 'Rogersville',
    description: 'Small-town charm with rural properties and newer developments.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    stats: { listings: '30+', avgPrice: '$265K' },
  },
  {
    name: 'Willard',
    description: 'Growing community with affordable homes and strong community values.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    stats: { listings: '35+', avgPrice: '$275K' },
  },
]

export function Areas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="areas" className={styles.areas} ref={ref}>
      <div className={styles.bgPattern} />
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Areas We Serve</span>
          <h2 className={styles.headline}>
            Southwest Missouri's <span className={styles.accent}>Finest Communities</span>
          </h2>
          <p className={styles.subheadline}>
            From urban convenience to rural tranquility, we help you find your
            perfect place in the Ozarks.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {areas.map((area, index) => (
            <motion.a
              key={area.name}
              href="#contact"
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            >
              <div className={styles.cardImage}>
                <img src={area.image} alt={area.name} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.location}>
                    <MapPin size={16} />
                    <span>{area.name}</span>
                  </div>
                  <ArrowUpRight size={20} className={styles.arrow} />
                </div>
                <p className={styles.cardDescription}>{area.description}</p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{area.stats.listings}</span>
                    <span className={styles.statLabel}>Listings</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{area.stats.avgPrice}</span>
                    <span className={styles.statLabel}>Avg. Price</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
