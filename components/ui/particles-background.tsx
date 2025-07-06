"use client";

import { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

/**
 * Modern particles background using tsparticles
 * Features:
 * - Theme-aware particle colors
 * - Parallax-like floating effect
 * - Smooth animations
 * - Performance optimized with slim bundle
 * - Responsive design
 */
export function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { theme, systemTheme } = useTheme();

  // Determine the actual theme being used
  const actualTheme = theme === "system" ? systemTheme : theme;
  const isDark = actualTheme === "dark";

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle configuration with theme-aware colors
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 80,
            duration: 0.3,
          },
        },
      },
      particles: {
        color: {
          value: isDark ? "#8b5cf6" : "#6366f1", // Primary color variations
        },
        links: {
          color: isDark ? "#8b5cf6" : "#6366f1",
          distance: 120,
          enable: true,
          opacity: isDark ? 0.25 : 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 40,
        },
        opacity: {
          value: isDark ? 0.4 : 0.5,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
          random: true,
          animation: {
            enable: true,
            speed: 1,
            size_min: 0.5,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [isDark]
  );

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // Optional: Add any post-load logic here
  };

  if (!init) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}
