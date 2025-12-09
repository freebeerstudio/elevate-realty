import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12
type GridGap = 'none' | 'sm' | 'md' | 'lg' | 'xl'

interface GridProps {
  children: ReactNode
  cols?: GridCols
  colsSm?: GridCols
  colsMd?: GridCols
  colsLg?: GridCols
  gap?: GridGap
  className?: string
  as?: ElementType
}

const colsMap: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12'
}

const colsSmMap: Record<GridCols, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
  12: 'sm:grid-cols-12'
}

const colsMdMap: Record<GridCols, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  12: 'md:grid-cols-12'
}

const colsLgMap: Record<GridCols, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  12: 'lg:grid-cols-12'
}

const gapMap: Record<GridGap, string> = {
  none: 'gap-0',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12'
}

/**
 * Grid - CSS Grid layout with responsive columns
 *
 * Usage:
 * <Grid cols={1} colsMd={2} colsLg={3} gap="md">
 *   <Card>...</Card>
 *   <Card>...</Card>
 *   <Card>...</Card>
 * </Grid>
 */
export function Grid({
  children,
  cols = 1,
  colsSm,
  colsMd,
  colsLg,
  gap = 'md',
  className,
  as: Component = 'div'
}: GridProps) {
  return (
    <Component
      className={cn(
        'grid',
        colsMap[cols],
        colsSm && colsSmMap[colsSm],
        colsMd && colsMdMap[colsMd],
        colsLg && colsLgMap[colsLg],
        gapMap[gap],
        className
      )}
    >
      {children}
    </Component>
  )
}
