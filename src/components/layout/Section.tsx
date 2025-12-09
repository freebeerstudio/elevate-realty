import { cn } from '@/lib/utils'

type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl' | 'none'

interface SectionProps {
  children: React.ReactNode
  spacing?: SectionSpacing
  className?: string
  id?: string
  background?: 'default' | 'muted' | 'accent' | 'dark'
}

const spacingMap: Record<SectionSpacing, string> = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-24 lg:py-32',
  xl: 'py-24 md:py-32 lg:py-40'
}

const backgroundMap = {
  default: '',
  muted: 'bg-cream-dark',
  accent: 'bg-forest text-white',
  dark: 'bg-charcoal text-white'
}

/**
 * Section - Semantic section wrapper with consistent vertical rhythm
 *
 * Usage:
 * <Section>Content with default spacing</Section>
 * <Section spacing="lg" background="muted">Large padded muted section</Section>
 * <Section id="contact" spacing="xl">Contact section</Section>
 */
export function Section({
  children,
  spacing = 'md',
  className,
  id,
  background = 'default'
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacingMap[spacing],
        backgroundMap[background],
        className
      )}
    >
      {children}
    </section>
  )
}
