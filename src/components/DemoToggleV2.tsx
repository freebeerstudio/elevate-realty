/**
 * Demo Toggle V2 - Switch between 3 Hero implementations
 */

import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Sparkles, Zap, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

type HeroVersion = 'css-modules' | 'tailwind' | 'animated'

interface DemoToggleV2Props {
  heroVersion: HeroVersion
  onVersionChange: (version: HeroVersion) => void
}

const versions = {
  'css-modules': {
    name: 'CSS Modules',
    description: 'Traditional approach with separate .module.css files',
    lines: '~495 lines across 2 files',
    color: '#3b82f6',
    bgColor: '#eff6ff',
    borderColor: '#bfdbfe',
    icon: Code2,
  },
  'tailwind': {
    name: 'Tailwind + Inline',
    description: 'Styles co-located with markup using inline styles',
    lines: '~470 lines in 1 file',
    color: '#10b981',
    bgColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    icon: Sparkles,
  },
  'animated': {
    name: '21st.dev Animated',
    description: 'Premium components from 21st.dev with particle effects',
    lines: '~280 lines + UI components',
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
    borderColor: '#c4b5fd',
    icon: Zap,
  },
}

export function DemoToggleV2({ heroVersion, onVersionChange }: DemoToggleV2Props) {
  const [expanded, setExpanded] = useState(true)
  const current = versions[heroVersion]

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
              borderRadius: '20px',
              boxShadow: '0 25px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
              padding: '24px',
              width: '340px',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  Demo Mode
                </div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#1c1c1c' }}>
                  Compare 3 Approaches
                </div>
              </div>
              <button
                onClick={() => setExpanded(false)}
                style={{
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} color="#666" />
              </button>
            </div>

            {/* Version buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              {(Object.entries(versions) as [HeroVersion, typeof versions[HeroVersion]][]).map(([key, version]) => {
                const isActive = heroVersion === key
                const Icon = version.icon
                return (
                  <motion.button
                    key={key}
                    onClick={() => onVersionChange(key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      borderRadius: '14px',
                      border: isActive ? `2px solid ${version.color}` : '2px solid #e5e5e5',
                      background: isActive ? version.bgColor : 'white',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: isActive ? version.color : '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color={isActive ? 'white' : '#888'} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: '#1c1c1c', fontSize: '14px', marginBottom: '2px' }}>
                        {version.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#888' }}>
                        {version.lines}
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: version.color,
                        }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Current mode info */}
            <div
              style={{
                background: current.bgColor,
                border: `1px solid ${current.borderColor}`,
                borderRadius: '12px',
                padding: '14px 16px',
              }}
            >
              <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
                <strong style={{ color: current.color }}>{current.name}:</strong>
                <br />
                {current.description}
              </div>
            </div>

            {/* Note */}
            <p style={{ fontSize: '11px', color: '#999', marginTop: '14px', textAlign: 'center', lineHeight: 1.4 }}>
              Only the Hero section changes. Same brand, different code approaches.
            </p>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setExpanded(true)}
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 20px',
              borderRadius: '50px',
              border: 'none',
              background: `linear-gradient(135deg, ${current.color} 0%, ${current.color}dd 100%)`,
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: `0 8px 30px ${current.color}50`,
            }}
          >
            <current.icon size={18} />
            {current.name}
            <ChevronDown size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
