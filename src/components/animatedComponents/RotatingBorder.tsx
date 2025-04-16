"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";

interface RotatingWavyCircleProps {
  children: ReactNode;
  className?: string;
}

/**
 * Generates an SVG path for a circle whose radius oscillates with a sine wave.
 * @param cx        - Center X
 * @param cy        - Center Y
 * @param baseR     - Base circle radius
 * @param amplitude - Wave amplitude
 * @param frequency - Number of wave "ripples" around the circle
 * @param phase     - Offset for the sine wave, used for animation
 */
const generateWavyCircle = (
  cx: number,
  cy: number,
  baseR: number,
  amplitude: number,
  frequency: number,
  phase: number
) => {
  const segments = 100;
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const offset = Math.sin(frequency * angle + phase) * amplitude;
    const r = baseR + offset;
    const x = Math.round((cx + r * Math.cos(angle)) * 100) / 100;
    const y = Math.round((cy + r * Math.sin(angle)) * 100) / 100;
    points.push(`${x} ${y}`);
  }
  return `M ${points.join(" L ")} Z`;
};

const RotatingBorder = ({
  children,
  className = "",
}: RotatingWavyCircleProps) => {
  const colors = [
    "#FF6B6B", // Red
    "#9e5555", // Teal
    "#FF6B6B", // Blue
    "#c83939", // Green
    "#d19a9a", // Yellow
    "#FF6B6B", // Pink
    "#FF6B6B", // Purple
    "#FF6B6B", // Light Blue
  ];

  // Memoize the paths to prevent recalculation on re-renders
  const paths = useMemo(() => {
    return [...Array(4)].map((_, i) => {
      const baseRadius = 220;
      const amplitude = 8 + i * 2;
      const frequency = 3 + i;
      return {
        initial: generateWavyCircle(
          200,
          200,
          baseRadius,
          amplitude,
          frequency,
          0
        ),
        final: generateWavyCircle(
          200,
          200,
          baseRadius,
          amplitude,
          frequency,
          Math.PI * 2
        ),
        rotationDuration: i % 2 === 0 ? 8 + i * 2 : 25 + i * 5,
        waveDuration: i % 2 === 0 ? 2 + i : 8 + i * 2,
        color: colors[i % colors.length],
      };
    });
  }, []); // Empty dependency array since these values are static

  return (
    <div className={`relative overflow-visible ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 400 400"
        style={{ overflow: "visible" }}
      >
        {paths.map((path, i) => (
          <motion.path
            key={i}
            fill={path.color}
            opacity={0.99}
            initial={{ d: path.initial }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              d: [path.initial, path.final],
            }}
            transition={{
              rotate: {
                duration: path.rotationDuration,
                repeat: Infinity,
                ease: "linear",
              },
              d: {
                duration: path.waveDuration,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformOrigin: "200px 200px" }}
          />
        ))}
      </svg>

      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default RotatingBorder;
