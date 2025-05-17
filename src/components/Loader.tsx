import type React from "react";

interface DotsLoaderProps {
  size?: "small" | "medium" | "large";
  text?: string;
  className?: string;
}

export const DotsLoader: React.FC<DotsLoaderProps> = ({ size = "medium", text, className = "" }) => {
  // Size mappings for dots
  const dotSizeMap = {
    small: "w-1.5 h-1.5",
    medium: "w-2.5 h-2.5",
    large: "w-4 h-4",
  };

  // Size mappings for spacing between dots
  const spacingMap = {
    small: "gap-1",
    medium: "gap-2",
    large: "gap-3",
  };

  // Text size mappings
  const textSizeMap = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-xl",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex ${spacingMap[size]}`} role="status" aria-label="Loading">
        <div className={`${dotSizeMap[size]} rounded-full bg-[#512da8] animate-bounce`} style={{ animationDelay: "0s" }} />
        <div className={`${dotSizeMap[size]} rounded-full bg-[#512da8] animate-bounce`} style={{ animationDelay: "0.2s" }} />
        <div className={`${dotSizeMap[size]} rounded-full bg-[#512da8] animate-bounce`} style={{ animationDelay: "0.4s" }} />
      </div>

      {text && <p className={`mt-2 text-[#512da8] ${textSizeMap[size]}`}>{text}</p>}
    </div>
  );
};
