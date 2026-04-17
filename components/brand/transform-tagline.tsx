"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Size = "hero" | "compact";

const LINE_ONE = "it was great";
// Uses a curly apostrophe (\u2019) so the editorial tone stays consistent.
const LINE_TWO = "here\u2019s what changed for me.";

const sizeClasses: Record<Size, { l1: string; l2: string }> = {
  hero: {
    l1: "text-xl md:text-2xl",
    l2: "text-4xl md:text-6xl",
  },
  compact: {
    l1: "text-base md:text-lg",
    l2: "text-2xl md:text-3xl",
  },
};

interface TransformTaglineProps {
  size?: Size;
  className?: string;
}

export function TransformTagline({
  size = "hero",
  className,
}: TransformTaglineProps) {
  const reduced = useReducedMotion();
  const s = sizeClasses[size];
  const words = LINE_TWO.split(" ");

  // Stagger timing (ms): total hero reveal ~1.8s, see plan for rationale.
  const t = {
    l1Duration: 0.4,
    arrowDelay: 0.7,
    arrowDuration: 0.3,
    chevronDelay: 0.95,
    chevronDuration: 0.2,
    l2Start: 1.0,
    wordStagger: 0.08,
    wordDuration: 0.25,
  };

  return (
    <div className={cn("flex flex-col items-start", className)}>
      <motion.p
        initial={reduced ? false : { opacity: 0, y: 8 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{
          duration: t.l1Duration,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "font-medium italic tracking-tight text-fg-subtle",
          s.l1,
        )}
      >
        &ldquo;{LINE_ONE}&rdquo;
      </motion.p>

      <div className="ml-6 my-2 md:my-3" aria-hidden="true">
        <TransitionMarker
          reduced={!!reduced}
          lineDelay={t.arrowDelay}
          lineDuration={t.arrowDuration}
          chevronDelay={t.chevronDelay}
          chevronDuration={t.chevronDuration}
        />
      </div>

      <motion.p
        className={cn(
          "font-semibold tracking-tight text-foreground",
          s.l2,
        )}
        aria-label={`\u201C${LINE_TWO}\u201D`}
      >
        <motion.span
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{
            duration: t.wordDuration,
            delay: t.l2Start,
          }}
          aria-hidden="true"
        >
          &ldquo;
        </motion.span>
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            <motion.span
              initial={reduced ? false : { opacity: 0, y: 4 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: t.wordDuration,
                delay: t.l2Start + (i + 1) * t.wordStagger,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
              aria-hidden="true"
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
        <motion.span
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{
            duration: t.wordDuration,
            delay: t.l2Start + (words.length + 1) * t.wordStagger,
          }}
          aria-hidden="true"
        >
          &rdquo;
        </motion.span>
      </motion.p>
    </div>
  );
}

interface TransitionMarkerProps {
  reduced: boolean;
  lineDelay: number;
  lineDuration: number;
  chevronDelay: number;
  chevronDuration: number;
}

function TransitionMarker({
  reduced,
  lineDelay,
  lineDuration,
  chevronDelay,
  chevronDuration,
}: TransitionMarkerProps) {
  return (
    <svg
      width="11"
      height="48"
      viewBox="0 0 11 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M5.5 0 L5.5 48"
        stroke="var(--border)"
        strokeWidth="1"
        fill="none"
        initial={reduced ? false : { pathLength: 0 }}
        animate={reduced ? undefined : { pathLength: 1 }}
        transition={{ duration: lineDuration, delay: lineDelay }}
      />
      <motion.path
        d="M1.5 22 L5.5 27 L9.5 22"
        stroke="var(--brand-accent)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={reduced ? false : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: chevronDuration, delay: chevronDelay }}
      />
    </svg>
  );
}
