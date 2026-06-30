"use client";

import { useRef, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: "bg-accent-blue text-white hover:bg-accent-blue/90 shadow-[0_0_15px_rgba(79,70,229,0.3)]",
    outline: "border border-accent-blue/50 text-white hover:bg-accent-blue/10",
    ghost: "text-muted hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative rounded-full px-6 py-3 font-medium transition-colors duration-300 overflow-hidden",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 block">{children}</span>
    </motion.button>
  );
}
