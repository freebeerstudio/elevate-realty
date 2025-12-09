/**
 * Demo Toggle - Switch between CSS Modules and Tailwind implementations
 */

import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

interface DemoToggleProps {
  useTailwind: boolean
  onToggle: () => void
}

export function DemoToggle({ useTailwind, onToggle }: DemoToggleProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
              padding: '20px',
              width: '300px',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  Demo Mode
                </div>
                <div style={{ fontSize: '18px', fontWeight: 600, color: '#1c1c1c' }}>
                  Compare Approaches
                </div>
              </div>
              <button
                onClick={() => setExpanded(false)}
                style={{
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} color="#666" />
              </button>
            </div>

            {/* Current mode indicator */}
            <div
              style={{
                background: useTailwind ? '#ecfdf5' : '#eff6ff',
                border: `1px solid ${useTailwind ? '#a7f3d0' : '#bfdbfe'}`,
                borderRadius: '12px',
                padding: '14px 16px',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: useTailwind ? '#10b981' : '#3b82f6',
                  }}
                />
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#1c1c1c' }}>
                  {useTailwind ? 'Tailwind + Inline Styles' : 'CSS Modules'}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
                {useTailwind ? (
                  <>
                    <strong style={{ color: '#059669' }}>~280 lines</strong> in a single file.
                    <br />Styles co-located with markup.
                  </>
                ) : (
                  <>
                    <strong style={{ color: '#2563eb' }}>495 lines</strong> across 2 files.
                    <br />Separate .tsx + .module.css
                  </>
                )}
              </div>
            </div>

            {/* Toggle button */}
            <button
              onClick={onToggle}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 20px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #1a3a3a 0%, #2a5454 100%)',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(26, 58, 58, 0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(26, 58, 58, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(26, 58, 58, 0.3)'
              }}
            >
              {useTailwind ? (
                <>
                  <Code2 size={18} />
                  Switch to CSS Modules
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Switch to Tailwind
                </>
              )}
            </button>

            {/* Note */}
            <p style={{ fontSize: '11px', color: '#999', marginTop: '12px', textAlign: 'center', lineHeight: 1.4 }}>
              Only the Hero section changes. Same visual, different code.
            </p>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setExpanded(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 20px',
              borderRadius: '50px',
              border: 'none',
              background: 'linear-gradient(135deg, #1a3a3a 0%, #2a5454 100%)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(26, 58, 58, 0.35)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: useTailwind ? '#10b981' : '#3b82f6',
              }}
            />
            {useTailwind ? 'Tailwind' : 'CSS Modules'}
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
