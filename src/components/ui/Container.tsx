import React, { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  variant?: "default" | "glass" | "card";
  height?: string | number;
  width?: string | number;
  className?: string;
  style?: CSSProperties;
};

export default function Container({
  children,
  variant = "default",
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

  return (
    <div
      className={clsx("relative", variantClass, className)}
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