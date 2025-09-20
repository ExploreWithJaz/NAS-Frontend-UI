'use client';
import React, { ReactNode, useMemo } from "react";
import { motion } from "framer-motion";

type Variant = "blue" | "red" | "orange" | "yellow" | "purple";

type BlueGlitchProps = {
  children: ReactNode;
  animation?: boolean;
  variant?: Variant;
};

const variantColors: Record<Variant, { main: string; bg: string; gradient: string }> = {
  blue:   { main: "76, 201, 240", bg: "#1a1f2e", gradient: "#242a3d" },
  red:    { main: "255, 99, 132", bg: "#2e1a1a", gradient: "#3d2424" },
  orange: { main: "255, 159, 64", bg: "#2e231a", gradient: "#3d2f24" },
  yellow: { main: "255, 205, 86", bg: "#2e2c1a", gradient: "#3d3824" },
  purple: { main: "153, 102, 255", bg: "#231a2e", gradient: "#2f243d" },
};

export default function BlueGlitch({
  children,
  animation = true,
  variant = "blue",
}: BlueGlitchProps) {
  const colors = variantColors[variant];

  // Generate random positions for particles ONCE per mount
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 5 + 5,
      })),
    []
  );

  // Generate random glitch squares ONCE per mount
  const glitchSquares = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        width: Math.random() * 60 + 20,
        height: Math.random() * 40 + 15,
        x: Math.random() * 90,
        y: Math.random() * 90,
        duration: Math.random() * 1.3 + 0.7,
      })),
    []
  );

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: colors.bg }}>
      {/* Background gradient with subtle animation */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.gradient} 0%, ${colors.bg} 50%, #141823 100%)`,
        }}
        animate={
          animation
            ? {
                background: [
                  `radial-gradient(ellipse at 50% 50%, ${colors.gradient} 0%, ${colors.bg} 50%, #141823 100%)`,
                  `radial-gradient(ellipse at 60% 40%, ${colors.gradient} 0%, ${colors.bg} 50%, #141823 100%)`,
                  `radial-gradient(ellipse at 40% 60%, ${colors.gradient} 0%, ${colors.bg} 50%, #141823 100%)`,
                ],
              }
            : undefined
        }
        transition={
          animation
            ? {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
            : undefined
        }
      />

      {/* Grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, rgba(${colors.main}, 0.10) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(${colors.main}, 0.10) 50%, transparent 51%)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={
          animation
            ? {
                backgroundPosition: ["0px 0px", "60px 60px"],
              }
            : undefined
        }
        transition={
          animation
            ? {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
      />

      {/* Glow orbs */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${colors.main}, 0.12) 0%, transparent 70%)`,
          filter: "blur(2px)",
          top: "30%",
          left: "40%",
        }}
        animate={
          animation
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [-10, 10, -10],
                y: [-5, 5, -5],
              }
            : undefined
        }
        transition={
          animation
            ? {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      <motion.div
        className="absolute w-36 h-36 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${colors.main}, 0.10) 0%, transparent 60%)`,
          filter: "blur(1px)",
          top: "60%",
          left: "70%",
        }}
        animate={
          animation
            ? {
                scale: [1.1, 0.9, 1.1],
                opacity: [0.4, 0.7, 0.4],
                x: [5, -5, 5],
                y: [8, -8, 8],
              }
            : undefined
        }
        transition={
          animation
            ? {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            background: `rgb(${colors.main})`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={
            animation
              ? {
                  x: [-20, 20, -20],
                  y: [-15, 15, -15],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }
              : undefined
          }
          transition={
            animation
              ? {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.id * 0.5,
                }
              : undefined
          }
        />
      ))}

      {/* Glitch squares */}
      {glitchSquares.map((square) => (
        <motion.div
          key={square.id}
          className="absolute"
          style={{
            border: `1px solid rgba(${colors.main}, 0.6)`,
            width: `${square.width}px`,
            height: `${square.height}px`,
            left: `${square.x}%`,
            top: `${square.y}%`,
            background: `rgba(${colors.main}, 0.1)`,
          }}
          animate={
            animation
              ? {
                  opacity: [0, 1, 0.2, 1, 0, 1, 0],
                  scale: [1, 1.1, 0.9, 1.05, 1],
                  x: [0, 2, -1, 1, 0],
                  y: [0, -1, 2, -1, 0],
                }
              : undefined
          }
          transition={
            animation
              ? {
                  duration: square.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: square.id * 0.5,
                }
              : undefined
          }
        />
      ))}

      {/* Noise overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(${colors.main}, 0.03) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(${colors.main}, 0.02) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(${colors.main}, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 150px 150px, 80px 80px",
        }}
        animate={
          animation
            ? {
                backgroundPosition: [
                  "0px 0px, 0px 0px, 0px 0px",
                  "-50px -50px, -75px -75px, -40px -40px",
                ],
              }
            : undefined
        }
        transition={
          animation
            ? {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
      />

      {/* Content container */}
      <div className="flex z-50 w-full h-full items-center justify-center">{children}</div>
    </div>
  );
}