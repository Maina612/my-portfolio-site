"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function TextAnimate({
  text,
  className,
  delay = 0,
  duration = 0.05,
}: TextAnimateProps) {
  const words = text.split(" ");

  return (
    <motion.div
      className={cn("flex flex-wrap gap-x-2", className)}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: duration,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
