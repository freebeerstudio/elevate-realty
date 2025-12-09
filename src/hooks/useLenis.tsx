import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * useLenis - Initialize Apple-quality smooth scrolling
 *
 * Features:
 * - Buttery smooth scroll with momentum
 * - Touch device support
 * - Integrates with Framer Motion
 *
 * Usage:
 * function App() {
 *   useLenis()
 *   return <div>...</div>
 * }
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Expose lenis to window for debugging
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis
    }

    return () => {
      lenis.destroy()
    }
  }, [])
}

/**
 * LenisProvider - Component wrapper version
 *
 * Usage:
 * <LenisProvider>
 *   <App />
 * </LenisProvider>
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis()
  return <>{children}</>
}
