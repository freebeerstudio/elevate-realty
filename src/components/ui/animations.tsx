"use client"

import type { ReactNode } from "react"
import { motion, type Variants, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Animation Primitives Library
 *
 * Reusable animation components for world-class sites:
 * - FadeIn - Simple fade with optional direction
 * - SlideIn - Slide from any direction
 * - ScaleIn - Scale up reveal
 * - StaggerContainer - Orchestrate child animations
 * - TextReveal - Character/word-by-word text animation
 * - Parallax - Subtle parallax scrolling effect
 * - Magnetic - Magnetic hover effect
 */

// ============================================================================
// ANIMATION PRESETS
// ============================================================================

export const easings = {
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  elegant: [0.25, 0.46, 0.45, 0.94],
  snappy: [0.68, -0.55, 0.27, 1.55],
} as const

export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
} as const

// ============================================================================
// FADE IN
// ============================================================================

type FadeDirection = "up" | "down" | "left" | "right" | "none"

interface FadeInProps {
  children: ReactNode
  className?: string
  direction?: FadeDirection
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

const fadeDirectionVariants = {
  up: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
  none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
} as const

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = durations.normal,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })
  const { initial, animate } = fadeDirectionVariants[direction]

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: easings.elegant,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============================================================================
// SCALE IN
// ============================================================================

interface ScaleInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  scale?: number
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = durations.normal,
  once = true,
  scale = 0.95,
}: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale }}
      transition={{
        duration,
        delay,
        ease: easings.bounce,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============================================================================
// STAGGER CONTAINER
// ============================================================================

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger Item - use inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.normal,
        ease: easings.elegant,
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

// ============================================================================
// TEXT REVEAL (Word by word)
// ============================================================================

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  once?: boolean
  wordDelay?: number
}

export function TextReveal({
  children,
  className,
  delay = 0,
  once = true,
  wordDelay = 0.05,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const words = children.split(" ")

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 20, filter: "blur(8px)" }
          }
          transition={{
            duration: durations.normal,
            delay: delay + index * wordDelay,
            ease: easings.elegant,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// ============================================================================
// CHARACTER REVEAL
// ============================================================================

interface CharRevealProps {
  children: string
  className?: string
  delay?: number
  once?: boolean
  charDelay?: number
}

export function CharReveal({
  children,
  className,
  delay = 0,
  once = true,
  charDelay = 0.02,
}: CharRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const chars = children.split("")

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: durations.fast,
            delay: delay + index * charDelay,
            ease: easings.smooth,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

// ============================================================================
// PARALLAX
// ============================================================================

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number // 0.5 = half speed, 2 = double speed
}

export function Parallax({ children, className, speed = 0.5 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        willChange: "transform",
      }}
      initial={{ y: 0 }}
      whileInView={{ y: `${(1 - speed) * 100}%` }}
      viewport={{ once: false, amount: "some" }}
      transition={{
        type: "tween",
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  )
}

// ============================================================================
// MAGNETIC (Hover effect)
// ============================================================================

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = "translate(0, 0)"
  }

  return (
    <motion.div
      ref={ref}
      className={cn("transition-transform duration-200 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

// ============================================================================
// HOVER LIFT (Card hover effect)
// ============================================================================

interface HoverLiftProps {
  children: ReactNode
  className?: string
  lift?: number
}

export function HoverLift({ children, className, lift = 8 }: HoverLiftProps) {
  return (
    <motion.div
      className={cn("will-change-transform", className)}
      whileHover={{
        y: -lift,
        transition: { duration: durations.fast, ease: easings.smooth },
      }}
    >
      {children}
    </motion.div>
  )
}

// ============================================================================
// BLUR IN
// ============================================================================

interface BlurInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function BlurIn({
  children,
  className,
  delay = 0,
  duration = durations.slow,
  once = true,
}: BlurInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(20px)" }
      }
      transition={{
        duration,
        delay,
        ease: easings.elegant,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============================================================================
// COUNTER (Number animation)
// ============================================================================

interface CounterProps {
  from?: number
  to: number
  duration?: number
  className?: string
  once?: boolean
  format?: (value: number) => string
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  className,
  once = true,
  format = (v) => Math.round(v).toString(),
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {isInView && (
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
          >
            <CounterValue from={from} to={to} duration={duration} format={format} />
          </motion.span>
        )}
      </motion.span>
    </motion.span>
  )
}

function CounterValue({
  from,
  to,
  duration,
  format,
}: {
  from: number
  to: number
  duration: number
  format: (value: number) => string
}) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      onAnimationStart={() => {
        if (!nodeRef.current) return
        const startTime = performance.now()
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / (duration * 1000), 1)
          const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
          const value = from + (to - from) * eased
          if (nodeRef.current) {
            nodeRef.current.textContent = format(value)
          }
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        requestAnimationFrame(animate)
      }}
    >
      {format(from)}
    </motion.span>
  )
}
