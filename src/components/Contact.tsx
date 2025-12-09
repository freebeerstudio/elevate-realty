import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import styles from './Contact.module.css'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to your backend
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.bgAccent} />
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>Get In Touch</span>
            <h2 className={styles.headline}>
              Ready to <span className={styles.accent}>Elevate</span> Your
              Real Estate Experience?
            </h2>
            <p className={styles.description}>
              Whether you're buying, selling, or just have questions, our team
              is here to help. Reach out and let's start a conversation about
              your real estate goals.
            </p>

            <div className={styles.contactDetails}>
              <a href="tel:4174131132" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={20} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Call Us</span>
                  <span className={styles.contactValue}>(417) 413-1132</span>
                </div>
              </a>

              <a href="mailto:info@elevate-mo.com" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Email Us</span>
                  <span className={styles.contactValue}>info@elevate-mo.com</span>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Visit Us</span>
                  <span className={styles.contactValue}>
                    1655 S Enterprise Ave, Suite B4<br />
                    Springfield, MO 65804
                  </span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Clock size={20} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Office Hours</span>
                  <span className={styles.contactValue}>
                    Monday – Friday<br />
                    9:00 AM – 4:00 PM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Thank You!</h3>
                <p>We've received your message and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(417) 555-0123"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="interest">I'm Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling My Home</option>
                    <option value="valuation">Home Valuation</option>
                    <option value="instant-offer">Instant Cash Offer</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your real estate goals..."
                    rows={4}
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
