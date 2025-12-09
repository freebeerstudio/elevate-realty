import type { ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Section Component
 *
 * A reusable section wrapper with:
 * - Multiple background variants (auto dark mode)
 * - Consistent spacing options
 * - Container width control
 * - Semantic HTML
 */

type SectionBackground = "default" | "muted" | "accent" | "dark" | "gradient"
type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl"
type ContainerSize = "sm" | "md" | "lg" | "xl" | "full" | "none"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: SectionBackground
  spacing?: SectionSpacing
  container?: ContainerSize
  id?: string
  as?: ElementType
}

const backgroundMap: Record<SectionBackground, string> = {
  default: "bg-background dark:bg-background",
  muted: "bg-muted/50 dark:bg-muted/30",
  accent: "bg-accent/10 dark:bg-accent/5",
  dark: "bg-foreground text-background dark:bg-foreground dark:text-background",
  gradient: "bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20",
}

const spacingMap: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-40",
}

const containerMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-[1400px]",
  none: "",
}

export function Section({
  children,
  className,
  background = "default",
  spacing = "lg",
  container = "xl",
  id,
  as: Component = "section",
}: SectionProps) {
  const hasContainer = container !== "none"

  return (
    <Component
      id={id}
      className={cn(
        backgroundMap[background],
        spacingMap[spacing],
        className
      )}
    >
      {hasContainer ? (
        <div
          className={cn(
            "mx-auto w-full px-4 sm:px-6 lg:px-8",
            containerMap[container]
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  )
}

/**
 * SectionHeader - Consistent section header with title and description
 */
interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs md:text-sm font-medium uppercase tracking-wider text-primary mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

/**
 * Divider - Section divider with optional text
 */
interface DividerProps {
  className?: string
  text?: string
}

export function Divider({ className, text }: DividerProps) {
  if (text) {
    return (
      <div className={cn("relative py-8", className)}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-4 text-sm text-muted-foreground">
            {text}
          </span>
        </div>
      </div>
    )
  }

  return <hr className={cn("border-t border-border my-8", className)} />
}

export type { SectionBackground, SectionSpacing, ContainerSize, SectionProps }
