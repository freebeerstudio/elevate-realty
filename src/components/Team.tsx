import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone } from 'lucide-react'
import styles from './Team.module.css'

const team = [
  {
    name: 'Stefan Bunch',
    role: 'Founder & CEO',
    bio: 'Leading Elevate with a vision to transform real estate in Southwest Missouri through innovation and integrity.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Drew Sanford',
    role: 'Marketing & Business Strategist',
    bio: 'Bringing extensive marketing expertise to ensure every property gets maximum exposure and every client gets results.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Wyatt McHaffie',
    role: 'Listing & Buyer\'s Specialist',
    bio: 'Dedicated to helping clients navigate the complexities of buying and selling with ease and confidence.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Blake Woolman',
    role: 'Listing & Buyer\'s Specialist',
    bio: 'Committed to providing personalized service and expert guidance throughout every real estate journey.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Elijah Wolfard',
    role: 'Buyer\'s Specialist',
    bio: 'Passionate about helping buyers find their perfect home in Southwest Missouri\'s diverse neighborhoods.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Eddie Gutierrez',
    role: 'Listing & Buyer\'s Specialist',
    bio: 'Bringing energy and expertise to every transaction, ensuring clients achieve their real estate goals.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
]

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className={styles.team} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Our Team</span>
          <h2 className={styles.headline}>
            Meet the <span className={styles.accent}>Experts</span>
          </h2>
          <p className={styles.subheadline}>
            A dedicated team of professionals committed to elevating your
            real estate experience in Southwest Missouri.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            >
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} />
                <div className={styles.imageOverlay}>
                  <div className={styles.socialLinks}>
                    <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@elevate-mo.com`} aria-label="Email">
                      <Mail size={18} />
                    </a>
                    <a href="tel:4174131132" aria-label="Phone">
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
