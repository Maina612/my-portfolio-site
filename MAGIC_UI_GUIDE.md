# Magic UI Components Installation Guide

This guide explains how to install and use the Magic UI-style components (Blur Fade and Typing Animation) in your Next.js portfolio.

## 📦 Installation

### Step 1: Install Dependencies

The required dependency has already been added to your `package.json`. To install it, run:

```bash
npm install
# or
yarn install
# or
pnpm install
```

**Required Dependency:**
- `framer-motion` - For animations (already added to package.json)
- `clsx` and `tailwind-merge` - Already installed (used for className merging)

### Step 2: Verify Installation

After running `npm install`, verify that `framer-motion` is installed:

```bash
npm list framer-motion
```

## 🎨 Components Created

### 1. BlurFade Component (`components/blur-fade.tsx`)

A component that applies a smooth blur-to-focus fade-in effect to any content, perfect for images.

**Features:**
- Smooth fade-in animation with blur effect
- Triggered when scrolled into view (viewport detection)
- Customizable delay and duration
- Fully responsive

**Usage:**
```tsx
import BlurFade from "@/components/blur-fade";
import Image from "next/image";

// Wrap any content (images, divs, etc.) with BlurFade
<BlurFade delay={0.2} duration={0.6}>
  <Image 
    src="/your-image.jpg" 
    alt="Description" 
    width={500} 
    height={300} 
  />
</BlurFade>

// Or with custom styling
<BlurFade delay={0.5} duration={0.8} className="rounded-lg">
  <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-500">
    Your content here
  </div>
</BlurFade>
```

**Props:**
- `children` (required): React node to animate
- `className` (optional): Additional CSS classes
- `delay` (optional): Animation delay in seconds (default: 0)
- `duration` (optional): Animation duration in seconds (default: 0.4)
- `variant` (optional): Custom animation variants

### 2. TypingAnimation Component (`components/typing-animation.tsx`)

A component that creates a typewriter/typing effect for hero text, cycling through multiple words.

**Features:**
- Realistic typing animation with blinking cursor
- Auto-deletes and types next word
- Customizable typing/deleting speeds
- Pause duration between words

**Usage:**
```tsx
import TypingAnimation from "@/components/typing-animation";

<h1 className="text-4xl font-bold">
  <TypingAnimation
    words={[
      "Welcome to My Portfolio",
      "I'm a Full Stack Developer",
      "Building Amazing Web Apps"
    ]}
    className="text-foreground"
    cursorClassName="bg-primary"
    typingSpeed={100}
    deletingSpeed={50}
    pauseDuration={2000}
  />
</h1>
```

**Props:**
- `words` (required): Array of strings to type
- `className` (optional): Additional CSS classes for text
- `cursorClassName` (optional): CSS classes for the blinking cursor
- `typingSpeed` (optional): Milliseconds between each character while typing (default: 50)
- `deletingSpeed` (optional): Milliseconds between each character while deleting (default: 30)
- `pauseDuration` (optional): Milliseconds to pause after completing a word (default: 1000)

### 3. TextAnimate Component (`components/text-animate.tsx`)

An alternative text animation that animates words individually (fade up effect).

**Usage:**
```tsx
import TextAnimate from "@/components/text-animate";

<TextAnimate 
  text="Welcome to My Portfolio" 
  delay={0.1}
  duration={0.1}
  className="text-4xl font-bold"
/>
```

## 🚀 Implementation Examples

### Example 1: Hero Section with Typing Animation

```tsx
"use client";

import TypingAnimation from "@/components/typing-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          <TypingAnimation
            words={[
              "Hello, I'm John Doe",
              "I Build Web Applications",
              "Welcome to My Portfolio"
            ]}
          />
        </h1>
      </div>
    </section>
  );
}
```

### Example 2: Image Gallery with Blur Fade

```tsx
"use client";

import BlurFade from "@/components/blur-fade";
import Image from "next/image";

const images = [
  { src: "/image1.jpg", alt: "Project 1" },
  { src: "/image2.jpg", alt: "Project 2" },
  { src: "/image3.jpg", alt: "Project 3" },
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img, index) => (
        <BlurFade key={index} delay={index * 0.2} duration={0.6}>
          <Image
            src={img.src}
            alt={img.alt}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </BlurFade>
      ))}
    </div>
  );
}
```

### Example 3: Combined Usage

```tsx
"use client";

import BlurFade from "@/components/blur-fade";
import TypingAnimation from "@/components/typing-animation";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Typing Animation */}
      <BlurFade delay={0.2}>
        <h1 className="text-5xl font-bold mb-8">
          <TypingAnimation
            words={["Full Stack Developer", "UI/UX Designer", "Creative Coder"]}
          />
        </h1>
      </BlurFade>

      {/* Profile Image with Blur Fade */}
      <BlurFade delay={0.5} duration={0.8}>
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full"
        />
      </BlurFade>
    </section>
  );
}
```

## 🎯 Tips & Best Practices

1. **Performance**: BlurFade uses `viewport={{ once: true }}` to animate only once when scrolled into view, improving performance.

2. **Accessibility**: Always include proper `alt` text for images wrapped in BlurFade.

3. **Sequencing**: Use different `delay` values to create staggered animations (e.g., 0.2, 0.4, 0.6).

4. **Responsive Design**: Both components work with Tailwind's responsive classes.

5. **Customization**: You can customize the animation variants in BlurFade by passing a custom `variant` prop.

## 📚 Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Magic UI Website](https://magicui.design/)
- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image)

## 🐛 Troubleshooting

**Issue**: Animations not working
- **Solution**: Ensure `framer-motion` is installed: `npm install framer-motion`

**Issue**: TypeScript errors
- **Solution**: Make sure `@types/react` and `@types/react-dom` are installed

**Issue**: Animations too fast/slow
- **Solution**: Adjust `duration`, `typingSpeed`, or `deletingSpeed` props

**Issue**: BlurFade not triggering
- **Solution**: Ensure the component is in the viewport when the page loads, or scroll to it

---

Happy animating! 🎉
