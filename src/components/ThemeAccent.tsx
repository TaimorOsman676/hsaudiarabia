"use client";

import React from "react";

const stripes = [
  "var(--color-ih-coral)",
  "var(--color-ih-pink)",
  "var(--color-ih-mauve)",
  "var(--color-ih-purple)",
  "var(--color-ih-blue)",
  "var(--color-ih-green)",
  "var(--color-ih-lime)",
  "var(--color-ih-peach)",
  "var(--color-ih-yellow)",
];

interface ThemeAccentProps {
  className?: string;
  /** Height of the stripe bar. Default "h-1.5" */
  height?: string;
  /** If true renders as individual rounded pill blocks instead of flush segments */
  pills?: boolean;
  /** If true, each segment animates in on load */
  animate?: boolean;
}

export default function ThemeAccent({
  className = "",
  height = "h-1.5",
  pills = false,
  animate = false,
}: ThemeAccentProps) {
  if (pills) {
    return (
      <div className={`flex items-center gap-1.5 w-full ${className}`} aria-hidden="true">
        {stripes.map((color, i) => (
          <div
            key={i}
            className={`flex-1 rounded-full ${height}`}
            style={{
              backgroundColor: color,
              animationDelay: animate ? `${i * 60}ms` : undefined,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`flex w-full ${height} ${className}`} aria-hidden="true">
      {stripes.map((color, i) => (
        <div
          key={i}
          className="flex-1"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
