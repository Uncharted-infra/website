"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const WORD = "UNCHARTED";

const COGNATES: Record<string, string> = {
  U: "Ʉ",
  N: "Ɲ",
  C: "ϽҪ",
  H: "Η",
  A: "Λ",
  R: "2₹",
  T: "7",
  E: "3ΣΞ€Ǝ",
  D: "ⅮΔ",
};

function sample<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function natural(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

function permutation(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function glitchWord(original: string, odds: number[]): string {
  const swaps = sample(odds);
  if (swaps === 0) return original;
  const glitched = [...original];
  const opts = original.length === 1 ? [0] : permutation(original.length);
  for (let i = 0; i < swaps; i++) {
    const chars = COGNATES[original[opts[i]]] ?? original[opts[i]];
    glitched[opts[i]] = sample([...chars]);
  }
  return glitched.join("");
}

interface GlitchTitleProps {
  className?: string;
}

export function GlitchTitle({ className }: GlitchTitleProps) {
  const [text, setText] = useState(WORD);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    const MIN_DELAY = 400;
    const MAX_DELAY = 2000;
    const GLITCH_CHANCE = 0.1;
    const GLITCH_DELAY = 30;

    function loop() {
      if (!mounted.current) return;

      setText(glitchWord(WORD, [0, 0, 0, 1, 1, 2, 2, 2, 3]));
      const delay = natural(MAX_DELAY - MIN_DELAY) + MIN_DELAY;

      if (Math.random() < GLITCH_CHANCE) {
        const glitched = glitchWord(WORD, [2, 3, 4, 4, 5, 5, 5, 6, 6]);
        setTimeout(() => {
          if (!mounted.current) return;
          setText(WORD);
        }, delay);
        setTimeout(() => {
          if (!mounted.current) return;
          setText(glitched);
        }, delay + GLITCH_DELAY);
        setTimeout(() => {
          if (!mounted.current) return;
          setText(WORD);
        }, delay + GLITCH_DELAY * 2);
        setTimeout(() => {
          if (!mounted.current) return;
          setText(glitched);
        }, delay + GLITCH_DELAY * 3);
        setTimeout(() => {
          if (mounted.current) loop();
        }, delay + GLITCH_DELAY * 4);
      } else {
        setTimeout(() => {
          if (mounted.current) loop();
        }, delay);
      }
    }

    loop();

    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <span
      className={cn(
        "inline-block text-foreground leading-none font-synthesis-none antialiased",
        className
      )}
    >
      {text}
    </span>
  );
}
