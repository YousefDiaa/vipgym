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
  // Dimensions based on size prop
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-16 h-12",
    lg: "w-28 h-20",
    xl: "w-48 h-36",
    custom: iconSizeClassName,
  };

  const textSizes = {
    sm: {
      vip: "text-base tracking-tight",
      club: "text-[9px] tracking-wider",
    },
    md: {
      vip: "text-2xl tracking-normal",
      club: "text-[11px] tracking-widest",
    },
    lg: {
      vip: "text-4xl tracking-wide",
      club: "text-sm tracking-widest",
    },
    xl: {
      vip: "text-6xl tracking-widest",
      club: "text-xl tracking-widest",
    },
    custom: {
      vip: "text-xl",
      club: "text-xs",
    },
  };

  const selectedIconSize = iconSizes[size === "custom" ? "custom" : size] || iconSizes.md;
  const selectedTextSize = textSizes[size === "custom" ? "md" : size] || textSizes.md;

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* SVG Icon */}
      <svg
        viewBox="0 0 200 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${selectedIconSize} transition-transform duration-300 hover:scale-105`}
        style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4))" }}
      >
        <defs>
          {/* Metallic Silver Gradient for barbell */}
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#E5E7EB" />
            <stop offset="50%" stopColor="#9CA3AF" />
            <stop offset="75%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#4B5563" />
          </linearGradient>

          {/* Neon Yellow-Green Gradient for the V */}
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FACC15" /> {/* Vibrant Yellow */}
            <stop offset="50%" stopColor="#A3E635" /> {/* Lime Green */}
            <stop offset="100%" stopColor="#65A30D" /> {/* Deep Lime Green */}
          </linearGradient>

          {/* Inner Shadow / 3D Bevel effect for V */}
          <filter id="bevel" x="-10%" y="-10%" width="120%" height="120%">
            <feOffset dx="0" dy="1.5" />
            <feGaussianBlur stdDeviation="1" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.6" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* The Barbell Connecting Arc */}
        <path
          d="M 32 68 Q 100 24 168 68"
          stroke="url(#silverGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Underlay dark curve for 3D depth */}
        <path
          d="M 32 69 Q 100 25 168 69"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
          style={{ transform: "translateY(2px)" }}
        />

        {/* Left Weight Plates (Grouped and rotated) */}
        <g transform="translate(32, 68) rotate(-18)">
          {/* Inner connector sleeve */}
          <rect x="0" y="-3" width="10" height="6" fill="url(#silverGradient)" rx="1" />
          <rect x="10" y="-5" width="4" height="10" fill="url(#silverGradient)" rx="1" />
          
          {/* Plate 1 (Innermost, largest) */}
          <rect x="14" y="-22" width="7" height="44" fill="url(#silverGradient)" rx="1.5" />
          {/* Plate 2 (Middle) */}
          <rect x="23" y="-18" width="6" height="36" fill="url(#silverGradient)" rx="1.5" />
          {/* Plate 3 (Outermost, smallest) */}
          <rect x="31" y="-14" width="5" height="28" fill="url(#silverGradient)" rx="1.5" />
          
          {/* Bar end handle */}
          <rect x="36" y="-2.5" width="8" height="5" fill="url(#silverGradient)" rx="0.5" />
        </g>

        {/* Right Weight Plates (Grouped and rotated) */}
        <g transform="translate(168, 68) rotate(18) scale(-1, 1)">
          {/* Inner connector sleeve */}
          <rect x="0" y="-3" width="10" height="6" fill="url(#silverGradient)" rx="1" />
          <rect x="10" y="-5" width="4" height="10" fill="url(#silverGradient)" rx="1" />
          
          {/* Plate 1 (Innermost, largest) */}
          <rect x="14" y="-22" width="7" height="44" fill="url(#silverGradient)" rx="1.5" />
          {/* Plate 2 (Middle) */}
          <rect x="23" y="-18" width="6" height="36" fill="url(#silverGradient)" rx="1.5" />
          {/* Plate 3 (Outermost, smallest) */}
          <rect x="31" y="-14" width="5" height="28" fill="url(#silverGradient)" rx="1.5" />
          
          {/* Bar end handle */}
          <rect x="36" y="-2.5" width="8" height="5" fill="url(#silverGradient)" rx="0.5" />
        </g>

        {/* Arch over the barbell (Upper Thin Arc) */}
        <path
          d="M 45 52 Q 100 13 155 52"
          stroke="url(#silverGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />

        {/* Stylized "V" Icon in the Center */}
        <path
          d="M 66 38 L 52 45 C 56 46, 68 47, 83 48 L 100 118 L 117 48 C 132 47, 144 46, 148 45 L 134 38 L 111 38 C 105 38, 103 48, 100 48 C 97 48, 95 38, 89 38 Z"
          fill="url(#neonGradient)"
          stroke="#000000"
          strokeWidth="1.2"
          strokeLinejoin="round"
          filter="url(#bevel)"
        />
      </svg>

      {/* Text Branding */}
      {showText && (
        <div className="mt-2 text-center font-display uppercase">
          {/* VIP GYM text with chrome-like silver styling */}
          <h1
            className={`font-black tracking-wider leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-200 to-stone-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${selectedTextSize.vip}`}
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            VIP GYM
          </h1>
          {/* HEALTH CLUB text in neon lime-yellow */}
          <p
            className={`font-black leading-none mt-1 select-none text-secondary drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)] ${selectedTextSize.club}`}
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            HEALTH CLUB
          </p>
        </div>
      )}
    </div>
  );
}
