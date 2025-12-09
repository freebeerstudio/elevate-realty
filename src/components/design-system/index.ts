/**
 * Free Beer Studio Design System
 *
 * A comprehensive design system for building world-class websites.
 * All components are:
 * - Dark mode ready
 * - Responsive by default
 * - Animation-ready
 * - Accessibility-first
 *
 * Usage:
 * import { Heading, Text, FadeIn, Section } from '@/components/design-system'
 */

// Typography
export {
  Heading,
  Text,
  Lead,
  LabelText,
  Highlight,
  Blockquote,
  List,
  type HeadingProps,
  type HeadingLevel,
  type HeadingSize,
  type TextProps,
  type TextSize,
  type TextWeight,
  type TextVariant,
} from "@/components/ui/typography"

// Layout
export {
  Container,
} from "@/components/layout/Container"

export {
  Section,
  SectionHeader,
  Divider,
  type SectionProps,
  type SectionBackground,
  type SectionSpacing,
  type ContainerSize,
} from "@/components/ui/section"

export {
  Stack,
  Cluster,
} from "@/components/layout/Stack"

export {
  Grid,
} from "@/components/layout/Grid"

// Animations
export {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  CharReveal,
  Parallax,
  Magnetic,
  HoverLift,
  BlurIn,
  Counter,
  easings,
  durations,
} from "@/components/ui/animations"

// Theme
export {
  ThemeToggle,
} from "@/components/ui/theme-toggle"

// Re-export shadcn/ui primitives
export { Button, buttonVariants } from "@/components/ui/button"
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
export { Badge, badgeVariants } from "@/components/ui/badge"
export { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export { Separator } from "@/components/ui/separator"
export { Skeleton } from "@/components/ui/skeleton"
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export { Switch } from "@/components/ui/switch"
export { Progress } from "@/components/ui/progress"
export { AspectRatio } from "@/components/ui/aspect-ratio"
export { Input } from "@/components/ui/input"
export { Textarea } from "@/components/ui/textarea"
export { Label } from "@/components/ui/label"

// 21st.dev Premium Components
export { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
export { BackgroundBeams } from "@/components/ui/background-beams"
export { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
export { HeroHighlight, Highlight as HeroHighlightText } from "@/components/ui/hero-highlight"
export { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
export { LampContainer, LampDemo } from "@/components/ui/lamp"
export { Button as MovingBorderButton, MovingBorder } from "@/components/ui/moving-border"
export { SparklesCore } from "@/components/ui/sparkles"
export { TextGenerateEffect } from "@/components/ui/text-generate-effect"
