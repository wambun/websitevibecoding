# Design Tokens

> Extract these from the design reference (`client/new`) before building.
> Typography is CRITICAL - the design feel comes from the fonts.

## Typography (MUST MATCH EXACTLY)

### Font Families

| Usage | Font Family | Source | Fallback |
|-------|-------------|--------|----------|
| Headings | | Google Fonts / Adobe / Custom | |
| Body | | | |
| Accent | | | |

**Font Import:**
```css
/* Add to globals.css or layout.tsx */
@import url('');
```

### Font Sizes

| Element | Desktop | Mobile | Tailwind Class |
|---------|---------|--------|----------------|
| H1 | | | `text-[]` |
| H2 | | | `text-[]` |
| H3 | | | `text-[]` |
| H4 | | | `text-[]` |
| Body | | | `text-[]` |
| Small | | | `text-[]` |
| Nav Links | | | `text-[]` |
| Buttons | | | `text-[]` |

### Font Weights

| Element | Weight | Tailwind Class |
|---------|--------|----------------|
| H1 | | `font-[]` |
| H2 | | `font-[]` |
| H3 | | `font-[]` |
| Body | | `font-[]` |
| Body Bold | | `font-[]` |
| Nav | | `font-[]` |
| Buttons | | `font-[]` |

### Line Heights

| Usage | Value | Tailwind Class |
|-------|-------|----------------|
| Headings | | `leading-[]` |
| Body | | `leading-[]` |

### Letter Spacing

| Usage | Value | Tailwind Class |
|-------|-------|----------------|
| Headings | | `tracking-[]` |
| Body | | `tracking-[]` |
| Nav/Buttons | | `tracking-[]` |
| Uppercase text | | `tracking-[]` |

### Text Transforms

| Element | Transform | Tailwind Class |
|---------|-----------|----------------|
| Navigation | | `uppercase` / `capitalize` / none |
| Buttons | | |
| Labels | | |

---

## Colors

| Name | Hex | Usage | Tailwind Variable |
|------|-----|-------|-------------------|
| Primary | | | `--primary` |
| Secondary | | | `--secondary` |
| Background | | | `--background` |
| Foreground | | | `--foreground` |
| Muted | | | `--muted` |
| Accent | | | `--accent` |

---

## Spacing

| Usage | Value | Tailwind |
|-------|-------|----------|
| Section Padding (Y) | | `py-[]` |
| Section Padding (X) | | `px-[]` |
| Container Max Width | | `max-w-[]` |
| Component Gap | | `gap-[]` |
| Card Padding | | `p-[]` |

---

## Border Radius

| Usage | Value | Tailwind |
|-------|-------|----------|
| Buttons | | `rounded-[]` |
| Cards | | `rounded-[]` |
| Inputs | | `rounded-[]` |
| Images | | `rounded-[]` |

---

## Shadows

| Usage | Value |
|-------|-------|
| Cards | |
| Buttons (hover) | |
| Navigation | |

---

## Animations

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Page transitions | | | |
| Hover effects | | | |
| Scroll reveals | | | |

---

## Implementation Checklist

- [ ] Fonts imported and configured in tailwind.config.js
- [ ] Colors added to CSS variables in globals.css
- [ ] Typography classes verified against design
- [ ] Spacing matches design reference
- [ ] Animations implemented with Framer Motion
