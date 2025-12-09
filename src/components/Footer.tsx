import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Heart } from 'lucide-react'
import styles from './Footer.module.css'

const footerLinks = {
  services: [
    { label: 'Buy a Home', href: '#services' },
    { label: 'Sell Your Home', href: '#services' },
    { label: 'Home Valuation', href: '#services' },
    { label: 'Instant Offer', href: '#services' },
  ],
  areas: [
    { label: 'Springfield', href: '#areas' },
    { label: 'Republic', href: '#areas' },
    { label: 'Nixa', href: '#areas' },
    { label: 'Ozark', href: '#areas' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61567000557618', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/elevate_re_group', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@Elevate-mo', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>E</span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Elevate</span>
                <span className={styles.logoTagline}>Real Estate Group</span>
              </div>
            </a>
            <p className={styles.brandDescription}>
              Elevating real estate experiences in Southwest Missouri. Your
              trusted partner for buying, selling, and everything in between.
            </p>
            <div className={styles.social}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Services</h4>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Areas</h4>
              <ul>
                {footerLinks.areas.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <p>
              © {new Date().getFullYear()} Elevate Real Estate Group. All rights reserved.
            </p>
            <p className={styles.brokerage}>
              Backed by Alpha Realty · Springfield, Missouri
            </p>
          </div>
          <div className={styles.credits}>
            <span>
              Crafted with <Heart size={14} className={styles.heart} /> by{' '}
              <a href="https://freebeer.ai" target="_blank" rel="noopener noreferrer">
                Free Beer Studio
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
