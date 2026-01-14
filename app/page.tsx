import BlurFade from "@/components/blur-fade";
import TypingAnimation from "@/components/typing-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm space-y-12">
        {/* Hero Section with Typing Animation */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <TypingAnimation
              words={[
                "Welcome to My Portfolio",
                "I'm a Full Stack Developer",
                "Building Amazing Web Apps",
                "Let's Create Something Great",
              ]}
              className="text-foreground"
              cursorClassName="bg-primary"
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
            />
          </h1>
          <p className="text-center text-lg text-muted-foreground">
            Get started by editing{" "}
            <code className="bg-muted px-2 py-1 rounded">
              app/page.tsx
            </code>
          </p>
        </div>

        {/* Images with Blur Fade Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <BlurFade delay={0.2} duration={0.6}>
            <div className="relative w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
            </div>
          </BlurFade>
          
          <BlurFade delay={0.4} duration={0.6}>
            <div className="relative w-full h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Example: Using BlurFade with actual image */}
        <BlurFade delay={0.6} duration={0.8}>
          <div className="relative w-full h-48 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">
                Your Image Here - Blur Fade Effect Applied
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
