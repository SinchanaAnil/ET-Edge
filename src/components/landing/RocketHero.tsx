import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RocketHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep layered background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-deep-purple/25 blur-[200px]"
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "5%", left: "10%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-teal/20 blur-[180px]"
        animate={{ x: [0, -35, 0], y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "5%", right: "5%" }}
      />

      {/* ── ROCKET / BEAM ANIMATION ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Main beam column */}
        <motion.div
          className="relative"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "55vh", opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Core beam */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-neon-cyan/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-neon-cyan/20 to-transparent blur-sm" />
          </div>

          {/* Wide glow aura */}
          <div className="absolute left-1/2 -translate-x-1/2 w-16 h-full bg-gradient-to-t from-accent/15 via-neon-cyan/8 to-transparent blur-2xl" />
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-full bg-gradient-to-t from-accent/8 via-teal/4 to-transparent blur-3xl" />

          {/* Rocket head — glowing orb at top */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 -top-4"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-8 h-8 rounded-full bg-accent/70 blur-md" />
            <div className="absolute inset-0 w-8 h-8 rounded-full bg-neon-cyan/50 blur-lg" />
            <div className="absolute inset-1 w-6 h-6 rounded-full bg-accent" />
          </motion.div>

          {/* Exhaust flare at bottom */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 -bottom-6"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.8, 0.5], scaleY: [0, 1.2, 1] }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          >
            <div className="w-6 h-16 bg-gradient-to-b from-accent/60 via-teal/30 to-transparent blur-md rounded-full" />
          </motion.div>
        </motion.div>

        {/* Expanding pulse rings */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full border border-accent/25"
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 3, 5], opacity: [0.5, 0.12, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
          />
        ))}

        {/* Data particles rising along beam */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-accent/60"
            style={{ left: `calc(50% + ${(i % 2 === 0 ? -1 : 1) * (4 + i * 2)}px)` }}
            initial={{ bottom: "30%", opacity: 0 }}
            animate={{
              bottom: ["30%", "70%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              delay: 2 + i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* ── HERO TEXT ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-accent tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            AI-Powered Event Intelligence
          </span>
        </motion.div>

        {/* Sequential headline */}
        <div className="space-y-1 mb-8">
          {["See the event", "before it becomes"].map((line, i) => (
            <motion.h1
              key={line}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.8 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.0] tracking-tight text-foreground"
            >
              {line}
            </motion.h1>
          ))}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.0] tracking-tight text-gradient-primary"
          >
            everyone else's story
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          ET Edge uses AI to detect, explain, and simulate market-moving events
          across Indian markets — so you act on insight, not noise.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/dashboard")}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-display font-semibold text-base transition-shadow duration-500 hover:shadow-[0_0_50px_hsl(var(--accent)/0.4)]"
        >
          Enter Dashboard
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 vignette-soft pointer-events-none" />
    </section>
  );
};

export default RocketHero;
