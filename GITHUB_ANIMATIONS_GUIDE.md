# 🎨 GitHub-Style Animations Guide

I've implemented GitHub-inspired animations throughout your portfolio! Here's what's been added and how to use them.

## ✨ What GitHub Does (and now you do too!)

### 1. **Scroll-Reveal Animations**

Elements fade in and slide up as you scroll down the page - just like GitHub's homepage!

### 2. **Gradient Text**

Animated color gradients that shift through blue → purple → pink (GitHub's signature style)

### 3. **Glow Cards**

Cards that glow when you hover over them with subtle border effects

### 4. **Smooth Transitions**

Everything moves butter-smooth with custom easing curves

## 🛠️ New Components You Can Use

### `<ScrollReveal>`

Animates elements when they enter the viewport:

```tsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";

<ScrollReveal delay={0.1} direction="up">
  <h2>This fades in when scrolling!</h2>
</ScrollReveal>;
```

**Props:**

- `delay` - Delay before animation starts (in seconds)
- `direction` - "up", "down", "left", or "right"
- `className` - Additional Tailwind classes

### `<GradientText>`

Animated gradient text effect:

```tsx
import { GradientText } from "@/components/animations/ScrollReveal";

<h1>
  Building <GradientText>amazing websites</GradientText>
</h1>;
```

Result: "amazing websites" will have a shifting blue→purple→pink gradient

### `<GlowCard>`

Glowing hover effect on cards:

```tsx
import { GlowCard } from "@/components/animations/ScrollReveal";

<GlowCard>
  <h3>My Card</h3>
  <p>Hover me to see the glow!</p>
</GlowCard>;
```

## 🎯 GitHub Animation Techniques Used

### 1. **Radial Gradients** (Background blur effects)

```tsx
<div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent" />
```

### 2. **Animated Gradients** (Shifting colors)

```tsx
<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient" />
```

### 3. **Backdrop Blur** (Glass effect)

```tsx
<div className="bg-card/50 backdrop-blur-sm" />
```

### 4. **Group Hover Effects**

```tsx
<Link className="group">
  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
</Link>
```

### 5. **Framer Motion with Custom Easing**

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.21, 0.47, 0.32, 0.98], // GitHub's easing curve
  }}
/>
```

## 🎨 Custom CSS Animations Added

In `globals.css`:

### **@keyframes gradient** - Shifting background

```css
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
```

### **@keyframes float** - Floating effect

```css
.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### **@keyframes glow** - Pulsing glow

```css
.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
```

## 🚀 Where These Animations Are Used

### Homepage (`src/app/page.tsx`)

- ✅ Gradient text in hero heading
- ✅ Scroll-reveal for sections
- ✅ Glow cards for "What I Do" section
- ✅ Animated gradient backgrounds
- ✅ Floating 3D canvas
- ✅ Stats counter animation
- ✅ CTA with gradient button

## 💡 How to Add More Animations

### Add scroll animations to ANY page:

```tsx
"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function MyPage() {
  return (
    <div>
      <ScrollReveal>
        <h1>This will animate on scroll!</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2} direction="left">
        <p>This comes in from the left, 0.2s later</p>
      </ScrollReveal>
    </div>
  );
}
```

### Add gradient text anywhere:

```tsx
import { GradientText } from "@/components/animations/ScrollReveal";

<h1>
  I build <GradientText>stunning websites</GradientText>
</h1>;
```

### Add glow effect to any card:

```tsx
import { GlowCard } from "@/components/animations/ScrollReveal";

<GlowCard>
  <h3>Project Title</h3>
  <p>Project description</p>
</GlowCard>;
```

## 🎨 GitHub's Color Palette (now yours!)

```css
Blue:   from-blue-600 to-blue-400
Purple: from-purple-600 to-purple-400
Pink:   from-pink-600 to-pink-400

Gradients:
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
```

## ⚡ Performance Tips

1. **Use `ScrollReveal` sparingly** - Don't animate every single element
2. **Limit `GlowCard` usage** - Glow effects can be expensive
3. **Prefer CSS animations** over JavaScript when possible
4. **Use `once: true`** in ScrollReveal (already implemented) - elements animate only once

## 🔥 Advanced: Create Your Own Animations

### Custom scroll animation with different easing:

```tsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function MyComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        ease: "easeOut", // or [0.21, 0.47, 0.32, 0.98]
      }}
    >
      Content here
    </motion.div>
  );
}
```

## 📚 Learn More

- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind Animations**: https://tailwindcss.com/docs/animation
- **GitHub Design**: View source on github.com and inspect their animations!

---

**Pro Tip:** Open your portfolio in Chrome DevTools → Performance tab → Record → Scroll down.
This shows you which animations are smooth and which might need optimization!

Enjoy your GitHub-style portfolio! 🎉
