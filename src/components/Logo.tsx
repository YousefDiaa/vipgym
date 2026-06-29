import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "custom";
  iconSizeClassName?: string;
}

export default function Logo({
  className = "",
  showText = true,
  size = "md",
  iconSizeClassName = "",
}: LogoProps) {
  // Dimensions based on size prop and showText state
  const sizes = {
    sm: showText ? "h-12 md:h-14" : "h-8 md:h-9",
    md: showText ? "h-20 md:h-24" : "h-12 md:h-14",
    lg: showText ? "h-32 md:h-36" : "h-20 md:h-24",
    xl: showText ? "h-48 md:h-56" : "h-32 md:h-36",
    custom: iconSizeClassName || (showText ? "h-24" : "h-14"),
  };

  const selectedSize = sizes[size] || sizes.md;
  const imgSrc = showText ? "logo-full.png" : "logo-icon.png";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={imgSrc}
        className={`${selectedSize} object-contain transition-transform duration-300 hover:scale-105`}
        alt="VIP GYM Logo"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

