import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, DollarSign, Search, Sparkles, ArrowRight } from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    icon: Home,
    title: 'Sell Your Home',
    description: 'Strategic marketing, professional photography, and expert negotiation to get you top dollar for your property.',
    features: ['Professional staging advice', 'Multi-channel marketing', 'Expert price positioning'],
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Search,
    title: 'Buy Your Dream Home',
    description: 'Personalized home search with access to listings before they hit the market. Find exactly what you\'re looking for.',
    features: ['Early access to listings', 'Neighborhood insights', 'Skilled negotiation'],
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: DollarSign,
    title: 'Get an Instant Offer',
    description: 'Need to sell fast? Our SellFast program provides competitive cash offers with flexible closing timelines.',
    features: ['Cash offers in 24 hours', 'No repairs needed', 'Flexible closing dates'],
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Sparkles,
    title: 'What\'s Your Home Worth?',
    description: 'Get a free, no-obligation home valuation backed by local market expertise and recent sales data.',
    features: ['Detailed market analysis', 'Comparable sales review', 'Expert recommendations'],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.bgAccent} />
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Our Services</span>
          <h2 className={styles.headline}>
            How Can We <span className={styles.accent}>Help You?</span>
          </h2>
          <p className={styles.subheadline}>
            Whether you're buying, selling, or just exploring your options,
            we have the expertise to guide you every step of the way.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className={styles.cardImage}>
                <img src={service.image} alt={service.title} />
                <div className={styles.cardImageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <service.icon size={22} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={styles.cardLink}>
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
