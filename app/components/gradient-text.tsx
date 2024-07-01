import { cn } from "../lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span
      className={cn(
        "text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#022E60] via-[#0E4A82] to-[#022E60]",
        className
      )}
    >
      {children}
    </span>
  );
};
