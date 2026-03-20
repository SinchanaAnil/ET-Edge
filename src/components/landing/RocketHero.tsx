import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import etEdgeLogo from "@/assets/et-edge-logo.png";

const RocketHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep layered background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[200px]"
        style={{ top: "5%", left: "10%", background: "hsl(var(--deep-purple) / 0.25)" }}
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[180px]"
        style={{ bottom: "5%", right: "5%", background: "hsl(var(--teal) / 0.20)" }}
        animate={{ x: [0, -35, 0], y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── ROCKET ANIMATION ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rocket body — loops upward */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          animate={{ bottom: ["5%", "85%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Rocket glow */}
          <div
            className="w-3 h-10 rounded-full"
            style={{
              background: "linear-gradient(to top, hsl(var(--accent) / 0.9), hsl(var(--neon-cyan) / 0.6), transparent)",
              boxShadow: "0 0 20px hsl(var(--accent) / 0.5), 0 0 60px hsl(var(--accent) / 0.2)",
            }}
          />
          {/* Rocket head */}
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
            style={{ background: "hsl(var(--neon-cyan))", boxShadow: "0 0 12px hsl(var(--neon-cyan) / 0.8)" }}
          />
          {/* Exhaust trail */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-24 blur-sm"
            style={{ background: "linear-gradient(to bottom, hsl(var(--accent) / 0.5), transparent)" }}
          />
          {/* Wider glow trail */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-32 blur-xl"
            style={{ background: "linear-gradient(to bottom, hsl(var(--accent) / 0.15), transparent)" }}
          />
        </motion.div>

        {/* Ambient radial glow that follows rocket path */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl"
          style={{ background: "hsl(var(--accent) / 0.08)" }}
          animate={{ bottom: ["5%", "85%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Rising particles along beam */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `calc(50% + ${(i % 2 === 0 ? -1 : 1) * (3 + i * 3)}px)`,
              background: "hsl(var(--accent) / 0.6)",
            }}
            animate={{ bottom: ["15%", "75%"], opacity: [0, 0.7, 0] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* ── EXPANDING RIPPLE CIRCLES at top area ── */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ border: "1px solid hsl(var(--accent) / 0.2)" }}
            animate={{ width: [24, 280, 400], height: [24, 280, 400], opacity: [0.5, 0.1, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* ── HERO TEXT ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main title — ET Edge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold leading-[0.9] tracking-tight">
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--teal)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px hsl(var(--neon-cyan) / 0.3))",
              }}
            >
              ET
            </span>{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, hsl(var(--electric-violet)), hsl(var(--deep-purple)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px hsl(var(--electric-violet) / 0.3))",
              }}
            >
              Edge
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          See the event before it becomes everyone else's story.
        </motion.p>

        {/* Login CTA */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/login")}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-semibold text-base transition-shadow duration-500"
          style={{
            background: "hsl(var(--accent))",
            color: "hsl(var(--accent-foreground))",
            boxShadow: "0 0 0px hsl(var(--accent) / 0)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 50px hsl(var(--accent) / 0.4)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0px hsl(var(--accent) / 0)")}
        >
          Login
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 vignette-soft pointer-events-none" />
    </section>
  );
};

export default RocketHero;
