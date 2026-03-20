import { motion } from "framer-motion";

interface ScrollProgressProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
  labels?: string[];
}

const defaultLabels = ["overview", "event", "explain", "impact", "validate", "scenario"];

const ScrollProgress = ({ activeIndex, onNavigate, labels = defaultLabels }: ScrollProgressProps) => {
  return (
    <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 md:flex md:flex-col md:items-center md:gap-4">
      <div className="absolute top-2 bottom-2 w-px bg-border/40" />
      {labels.map((label, index) => (
        <button
          key={label}
          onClick={() => onNavigate(index)}
          className="group relative flex h-5 w-5 items-center justify-center"
          aria-label={`Go to ${label} scene`}
        >
          <span
            className={`block rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "h-3 w-3 bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.45)]"
                : "h-2 w-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
            }`}
          />
          {activeIndex === index && (
            <motion.span
              layoutId="progress-ring"
              className="absolute inset-0 rounded-full border border-accent/35"
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
            />
          )}
          {/* Tooltip */}
          <span className="absolute right-7 whitespace-nowrap text-[10px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 capitalize pointer-events-none">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ScrollProgress;
