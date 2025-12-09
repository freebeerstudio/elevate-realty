import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

type StackGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface StackProps {
  children: ReactNode
  gap?: StackGap
  className?: string
  as?: ElementType
  align?: 'start' | 'center' | 'end' | 'stretch'
}

const gapMap: Record<StackGap, string> = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12'
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
}

/**
 * Stack - Vertical flex container with consistent spacing
 *
 * Usage:
 * <Stack gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */
export function Stack({
  children,
  gap = 'md',
  className,
  as: Component = 'div',
  align = 'stretch'
}: StackProps) {
  return (
    <Component
      className={cn(
        'flex flex-col',
        gapMap[gap],
        alignMap[align],
        className
      )}
    >
      {children}
    </Component>
  )
}

interface ClusterProps {
  children: ReactNode
  gap?: StackGap
  className?: string
  as?: ElementType
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: boolean
}

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
}

/**
 * Cluster - Horizontal flex container that wraps
 *
 * Usage:
 * <Cluster gap="sm" wrap>
 *   <Badge>Tag 1</Badge>
 *   <Badge>Tag 2</Badge>
 * </Cluster>
 */
export function Cluster({
  children,
  gap = 'md',
  className,
  as: Component = 'div',
  align = 'center',
  justify = 'start',
  wrap = true
}: ClusterProps) {
  return (
    <Component
      className={cn(
        'flex',
        gapMap[gap],
        alignMap[align],
        justifyMap[justify],
        wrap && 'flex-wrap',
        className
      )}
    >
      {children}
    </Component>
  )
}
