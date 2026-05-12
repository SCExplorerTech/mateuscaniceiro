"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data";

function parseStat(value: string): { prefix: string; num: number; suffix: string } {
  const prefix = value.startsWith("+") ? "+" : "";
  const raw = value.replace("+", "");
  const suffix = raw.endsWith("k") ? "k" : "";
  const num = parseInt(raw.replace("k", ""), 10);
  return { prefix, num, suffix };
}

function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const { prefix, num, suffix } = parseStat(value);
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(num, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group">
      <p className="text-4xl md:text-5xl font-black text-red-600 group-hover:scale-110 transition-transform duration-200">
        {prefix}{count}{suffix}
      </p>
      <p className="mt-2 text-white/50 text-sm uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-zinc-950 border-y border-white/5 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
