/**
 * Demo Toggle - Switch between CSS Modules and Tailwind implementations
 *
 * This floating button lets you see the same design built two ways.
 */

import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Sparkles } from 'lucide-react'

interface DemoToggleProps {
  useTailwind: boolean
  onToggle: () => void
}

export function DemoToggle({ useTailwind, onToggle }: DemoToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Info card */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 max-w-[280px]"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${useTailwind ? 'bg-emerald-500' : 'bg-blue-500'}`} />
            <span className="text-sm font-semibold text-gray-800">
              {useTailwind ? 'Tailwind 4' : 'CSS Modules'}
            </span>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <p>
              <span className="font-medium">{useTailwind ? '196' : '495'} lines</span>
              {' '}of code for Hero section
            </p>
            <p className="text-[10px] text-gray-400">
              {useTailwind
                ? 'Styles co-located with markup'
                : 'Separate .tsx + .module.css files'}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-5 py-3 rounded-full font-medium text-sm
                   bg-gradient-to-r from-gray-800 to-gray-900 text-white
                   shadow-lg shadow-gray-900/25 hover:shadow-xl hover:shadow-gray-900/35
                   transition-shadow duration-300"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={useTailwind ? 'tailwind' : 'css'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            {useTailwind ? (
              <>
                <Code2 size={16} />
                <span>Switch to CSS Modules</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Switch to Tailwind</span>
              </>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}
