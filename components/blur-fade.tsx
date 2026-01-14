"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  variant?: {
    hidden: { opacity: number; filter: string };
    visible: { opacity: number; filter: string };
  };
  delay?: number;
  duration?: number;
}

export default function BlurFade({
  children,
  className,
  variant,
  delay = 0,
  duration = 0.4,
}: BlurFadeProps) {
  const defaultVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      variants={variant || defaultVariants}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
