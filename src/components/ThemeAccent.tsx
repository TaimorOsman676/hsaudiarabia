"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

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
  /** If true, renders as overlapping rounded pills matching parent website branding */
  overlapping?: boolean;
  /** If true, each segment animates in on load */
  animate?: boolean;
}

export default function ThemeAccent({
  className = "",
  height = "h-1.5",
  pills = false,
  overlapping = false,
  animate = false,
}: ThemeAccentProps) {
  const { isRTL } = useLanguage();

  if (overlapping) {
    return (
      <div 
        className={`flex items-center w-full relative ${className}`} 
        aria-hidden="true"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {stripes.map((color, i) => {
          const marginStyle = i > 0 
            ? (isRTL ? { marginRight: "-6px" } : { marginLeft: "-6px" }) 
            : {};
          
          return (
            <div
              key={i}
              className={`rounded-full border border-white ${height}`}
              style={{
                backgroundColor: color,
                zIndex: i + 1,
                flex: "1 1 0%",
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                ...marginStyle,
              }}
            />
          );
        })}
      </div>
    );
  }

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
