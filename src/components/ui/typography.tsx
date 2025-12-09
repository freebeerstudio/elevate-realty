import type { ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Typography Design System
 *
 * Reusable typography components with:
 * - Fluid responsive sizing
 * - Dark mode support built-in
 * - Semantic HTML elements
 * - Animation-ready variants
 */

// Heading Component
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type HeadingSize = "hero" | "display" | "title" | "subtitle" | "section" | "subsection"

interface HeadingProps {
  children: ReactNode
  as?: HeadingLevel
  size?: HeadingSize
  className?: string
  gradient?: boolean
  balance?: boolean
}

const headingSizeMap: Record<HeadingSize, string> = {
  hero: "text-5xl md:text-6xl lg:text-7xl tracking-tight",
  display: "text-4xl md:text-5xl lg:text-6xl tracking-tight",
  title: "text-3xl md:text-4xl lg:text-5xl tracking-tight",
  subtitle: "text-2xl md:text-3xl tracking-tight",
  section: "text-xl md:text-2xl tracking-tight",
  subsection: "text-lg md:text-xl tracking-tight",
}

export function Heading({
  children,
  as: Component = "h2",
  size = "title",
  className,
  gradient = false,
  balance = true,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-display font-medium",
        "text-foreground dark:text-foreground",
        headingSizeMap[size],
        balance && "text-balance",
        gradient && "bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Component>
  )
}

// Text Component
type TextSize = "xs" | "sm" | "base" | "lg" | "xl"
type TextWeight = "normal" | "medium" | "semibold" | "bold"
type TextVariant = "default" | "muted" | "accent" | "inverted"

interface TextProps {
  children: ReactNode
  as?: ElementType
  size?: TextSize
  weight?: TextWeight
  variant?: TextVariant
  className?: string
  prose?: boolean
}

const textSizeMap: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
}

const textWeightMap: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
}

const textVariantMap: Record<TextVariant, string> = {
  default: "text-foreground dark:text-foreground",
  muted: "text-muted-foreground dark:text-muted-foreground",
  accent: "text-primary dark:text-primary",
  inverted: "text-background dark:text-background",
}

export function Text({
  children,
  as: Component = "p",
  size = "base",
  weight = "normal",
  variant = "default",
  className,
  prose = false,
}: TextProps) {
  return (
    <Component
      className={cn(
        "font-body leading-relaxed",
        textSizeMap[size],
        textWeightMap[weight],
        textVariantMap[variant],
        prose && "prose prose-neutral dark:prose-invert max-w-none",
        className
      )}
    >
      {children}
    </Component>
  )
}

// Lead/Intro Text
interface LeadProps {
  children: ReactNode
  className?: string
}

export function Lead({ children, className }: LeadProps) {
  return (
    <p
      className={cn(
        "font-body text-lg md:text-xl leading-relaxed",
        "text-muted-foreground dark:text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  )
}

// Label Component
interface LabelTextProps {
  children: ReactNode
  className?: string
}

export function LabelText({ children, className }: LabelTextProps) {
  return (
    <span
      className={cn(
        "font-body text-xs md:text-sm font-medium uppercase tracking-wider",
        "text-muted-foreground dark:text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}

// Highlight/Accent Text
interface HighlightProps {
  children: ReactNode
  className?: string
  variant?: "gold" | "gradient" | "underline"
}

export function Highlight({ children, className, variant = "gold" }: HighlightProps) {
  const variantClasses = {
    gold: "text-primary dark:text-primary",
    gradient: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
    underline: "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[0.3em] after:bg-primary/30 after:-z-10",
  }

  return (
    <span className={cn(variantClasses[variant], className)}>
      {children}
    </span>
  )
}

// Blockquote
interface BlockquoteProps {
  children: ReactNode
  cite?: string
  className?: string
}

export function Blockquote({ children, cite, className }: BlockquoteProps) {
  return (
    <figure className={cn("my-8", className)}>
      <blockquote
        className={cn(
          "font-display text-xl md:text-2xl italic",
          "text-foreground dark:text-foreground",
          "border-l-4 border-primary pl-6",
        )}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-4 text-sm text-muted-foreground">
          — {cite}
        </figcaption>
      )}
    </figure>
  )
}

// List
interface ListProps {
  children: ReactNode
  className?: string
  variant?: "bullet" | "number" | "check"
}

export function List({ children, className, variant = "bullet" }: ListProps) {
  const Component = variant === "number" ? "ol" : "ul"
  const variantClasses = {
    bullet: "list-disc",
    number: "list-decimal",
    check: "list-none",
  }

  return (
    <Component
      className={cn(
        "font-body space-y-2 pl-6",
        "text-foreground dark:text-foreground",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Component>
  )
}

// Export all
export type {
  HeadingLevel,
  HeadingSize,
  HeadingProps,
  TextSize,
  TextWeight,
  TextVariant,
  TextProps,
}
