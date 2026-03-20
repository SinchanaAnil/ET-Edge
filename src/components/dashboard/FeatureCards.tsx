import { motion } from "framer-motion";
import { Zap, Brain, TrendingUp, Shield, Eye } from "lucide-react";

const summaryCards = [
  { icon: Zap, title: "Event Intelligence", stat: "12", statLabel: "live events", status: "Live", fill: 52 },
  { icon: Brain, title: "Explainability", stat: "76%", statLabel: "confidence avg", status: "AI Active", fill: 76 },
  { icon: TrendingUp, title: "Portfolio Impact", stat: "3", statLabel: "stocks at risk", status: "Monitoring", fill: 40 },
  { icon: Shield, title: "Finfluencer Detector", stat: "89%", statLabel: "accuracy rate", status: "Ready", fill: 89 },
  { icon: Eye, title: "What-if Engine", stat: "5", statLabel: "scenarios", status: "Active", fill: 64 },
];

interface FeatureCardsProps {
  onNavigate: (index: number) => void;
}

const FeatureCards = ({ onNavigate }: FeatureCardsProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    {summaryCards.map((card, i) => (
      <motion.button
        key={card.title}
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onNavigate(i + 1)}
        className="group glass rounded-2xl p-5 text-left transition-shadow duration-500 hover:shadow-[0_0_30px_hsl(var(--accent)/0.12)] cursor-pointer"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/20">
            <card.icon className="w-4 h-4 text-accent" />
          </div>
          <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-accent/10 text-accent">
            {card.status}
          </span>
        </div>
        <h3 className="font-display text-sm font-semibold text-foreground mb-1">{card.title}</h3>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-bold text-foreground tabular-nums">{card.stat}</span>
          <span className="text-text-secondary text-xs">{card.statLabel}</span>
        </div>
        <div className="mt-3 h-1 rounded-full bg-border/30 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-accent/50"
            initial={{ width: 0 }}
            animate={{ width: `${card.fill}%` }}
            transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.button>
    ))}
  </div>
);

export default FeatureCards;
