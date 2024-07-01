import { cn } from "../lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span
      className={cn(
        "text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400",
        className
      )}
    >
      {children}
    </span>
  );
};
