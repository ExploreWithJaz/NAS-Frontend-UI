import React, { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  variant?: "default" | "glass" | "card";
  color?: "default" | "blue" | "red" | "orange" | "yellow" | "purple";
  height?: string | number;
  width?: string | number;
  className?: string;
  style?: CSSProperties;
};

export default function Container({
  children,
  variant = "default",
  color = "default",
  height,
  width,
  className,
  style,
}: ContainerProps) {
  const variantClass = {
    default: "bg-white dark:bg-neutral-900 shadow",
    glass: "bg-white/20 backdrop-blur-md border border-white/30 shadow-lg",
    card: "border border-[#4CC9F0] bg-[#4CC9F033] rounded-lg shadow-md p-4",
  }[variant];
const colorClass = {
    default: "border-gray-300 bg-gray-700",
    blue: "border-[#4CC9F0] bg-[#4CC9F033]",
    red: "border-[#EF4444] bg-[#EF444433]",
    orange: "border-[#F97316] bg-[#F9731633]",
    yellow: "border-[#EAB308] bg-[#EAB30833]",
    purple: "border-[#8B5CF6] bg-[#8B5CF633]",
}[color];

  return (
    <div
      className={clsx("relative", variantClass, colorClass, className)}
      style={{
        height,
        width,
        ...style,
      }}
    >
      {children}
    </div>
  );
}