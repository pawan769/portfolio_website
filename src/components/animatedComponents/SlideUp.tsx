"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SlideUp = ({ children, delay = 0.2, className = "" }: SlideUpProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, }}
      animate={{ y: 0, opacity: 1, }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
