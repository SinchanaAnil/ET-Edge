import { useRef, useState, useEffect, useCallback, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Activity, ArrowLeft } from "lucide-react";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import OpportunityRadar from "@/components/OpportunityRadar";
import MarketOverview from "@/components/dashboard/MarketOverview";
import MarketCards from "@/components/dashboard/MarketCards";
import StockChart from "@/components/dashboard/StockChart";
import EventHighlights from "@/components/dashboard/EventHighlights";
import LearningLoop from "@/components/dashboard/LearningLoop";
import FeatureCards from "@/components/dashboard/FeatureCards";

const ChartIntelligence = lazy(() => import("@/components/ChartIntelligence"));
const MarketChat = lazy(() => import("@/components/MarketChat"));
const AIVideoEngine = lazy(() => import("@/components/AIVideoEngine"));
const WhatIfScenarioEngine = lazy(() => import("@/components/WhatIfScenarioEngine"));

const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-48 h-2 rounded-full shimmer" />
  </div>
);

const sceneIds = ["overview", "event", "explain", "impact", "validate", "scenario"];

const Dashboard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedEventId, setSelectedEventId] = useState("rbi-rate-hike");
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const index = Math.round(container.scrollTop / container.clientHeight);
    setActiveIndex(Math.min(index, sceneIds.length - 1));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navigateTo = useCallback((index: number) => {
    containerRef.current?.scrollTo({ top: index * containerRef.current.clientHeight, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-background min-h-screen noise-overlay ambient-light relative">
      <CursorGlow />

      {/* Top bar */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-strong"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-text-secondary text-xs font-medium hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Home
        </button>
        <span className="font-display text-sm font-bold text-gradient-primary tracking-wide">ET Edge</span>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs text-accent">
            <Activity className="w-3 h-3" />
            <span className="hidden sm:inline">System Active</span>
          </span>
        </div>
      </motion.header>

      <ScrollProgress activeIndex={activeIndex} onNavigate={navigateTo} labels={sceneIds} />

      <div ref={containerRef} className="h-screen overflow-y-auto scroll-snap-container">
        {/* ── SCENE 0: DASHBOARD OVERVIEW ── */}
        <section id="overview" className="scroll-snap-section gradient-hero">
          <div className="min-h-screen flex flex-col justify-center px-6 py-24 relative z-10">
            <div className="max-w-6xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5"
              >
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ textWrap: "balance" } as React.CSSProperties}>
                  Intelligence Dashboard
                </h1>
                <p className="text-text-secondary text-sm max-w-lg">
                  Five AI layers working together to give you an edge. Scroll down to dive into each module.
                </p>
              </motion.div>

              {/* Market index cards */}
              <div className="mb-4">
                <MarketCards />
              </div>

              {/* Main market overview: NIFTY chart + movers + signals */}
              <MarketOverview />

              {/* Secondary row: stock chart + events + AI accuracy */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
                <div className="lg:col-span-5">
                  <StockChart />
                </div>
                <div className="lg:col-span-4">
                  <EventHighlights />
                </div>
                <div className="lg:col-span-3">
                  <LearningLoop />
                </div>
              </div>

              {/* Feature cards */}
              <FeatureCards onNavigate={navigateTo} />

              {/* Scroll hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="mt-10 text-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex flex-col items-center gap-2 text-text-secondary text-xs"
                >
                  <span>Scroll to explore</span>
                  <div className="w-5 h-8 rounded-full border border-border/40 flex items-start justify-center p-1">
                    <motion.div
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1 h-2 rounded-full bg-accent/60"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SCENE 1–5: MODULES ── */}
        <section id="event" className="scroll-snap-section">
          <OpportunityRadar selectedEventId={selectedEventId} onSelectEvent={setSelectedEventId} onContinue={() => navigateTo(2)} />
        </section>
        <section id="explain" className="scroll-snap-section">
          <Suspense fallback={<SectionLoader />}><ChartIntelligence eventId={selectedEventId} /></Suspense>
        </section>
        <section id="impact" className="scroll-snap-section">
          <Suspense fallback={<SectionLoader />}><MarketChat eventId={selectedEventId} /></Suspense>
        </section>
        <section id="validate" className="scroll-snap-section">
          <Suspense fallback={<SectionLoader />}><AIVideoEngine eventId={selectedEventId} /></Suspense>
        </section>
        <section id="scenario" className="scroll-snap-section">
          <Suspense fallback={<SectionLoader />}><WhatIfScenarioEngine /></Suspense>
        </section>

        <footer className="relative z-10 border-t border-border/20 py-12 text-center">
          <p className="text-text-secondary text-xs">© 2026 ET Edge. Event-driven AI intelligence for Indian markets.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
