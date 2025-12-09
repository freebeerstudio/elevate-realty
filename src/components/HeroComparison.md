# Hero Component: Three Approaches

This document shows the same Hero section built three ways, demonstrating that **design principles are portable** while implementation details vary.

---

## Approach 1: Current (CSS Modules + Framer Motion)

**When to use:** Quick prototypes, simple sites, when you want full CSS control

**Pros:**
- Full control over every style
- No external dependencies beyond Framer Motion
- Easy to understand for CSS developers

**Cons:**
- Verbose (350 lines of CSS for one component)
- No built-in accessibility
- Hard to maintain consistency across components
- Reinventing common patterns

---

## Approach 2: Tailwind + shadcn/ui + Radix

**When to use:** Production web apps, marketing sites, SaaS products

**Pros:**
- Rapid iteration with utility classes
- Built-in accessibility via Radix
- Consistent design tokens via Tailwind config
- Copy-paste components you own
- Smaller bundle (JIT compilation)

**Cons:**
- Learning curve for utility-first CSS
- Can look cluttered in JSX
- Requires Tailwind config for custom design tokens

---

## Approach 3: React Native / NativeWind

**When to use:** Cross-platform mobile apps, mobile-first PWAs

**Pros:**
- Same code runs on iOS, Android, Web
- Tailwind-like syntax via NativeWind
- Native performance on mobile

**Cons:**
- Different component primitives (View, Text, not div, p)
- Some web patterns don't translate
- More complex build setup

---

## The Pattern That Transfers

Regardless of implementation, the **design pattern** is:

```
Hero Section Pattern:
├── Background Layer (gradient + texture + overlay)
├── Content Column
│   ├── Trust Badge (social proof)
│   ├── Headline (with highlighted word)
│   ├── Subheadline (value proposition)
│   ├── CTA Group (primary + secondary)
│   └── Stats Row (3 key metrics)
├── Visual Column
│   ├── Hero Image (with overlay)
│   └── Floating Card (location/context)
└── Scroll Indicator
```

This pattern works in ANY framework. The skill should teach the pattern, then apply it with the right tool for the job.
