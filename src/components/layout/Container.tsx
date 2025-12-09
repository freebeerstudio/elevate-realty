import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

interface ContainerProps {
  children: ReactNode
  size?: ContainerSize
  className?: string
  as?: ElementType
}

const sizeMap: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',      // 768px - narrow content
  md: 'max-w-5xl',      // 1024px - standard content
  lg: 'max-w-6xl',      // 1152px - wide content
  xl: 'max-w-7xl',      // 1280px - extra wide
  full: 'max-w-[1400px]' // 1400px - full width hero sections
}

/**
 * Container - Consistent max-width wrapper with responsive padding
 *
 * Usage:
 * <Container>Content</Container>
 * <Container size="sm">Narrow content</Container>
 * <Container size="full" as="section">Full-width section</Container>
 */
export function Container({
  children,
  size = 'lg',
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeMap[size],
        className
      )}
    >
      {children}
    </Component>
  )
}
