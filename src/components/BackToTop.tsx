"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-zinc-800 hover:bg-red-600 border border-white/10 hover:border-red-600 text-white/60 hover:text-white shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
    >
      <ChevronUp size={20} />
    </button>
  );
}
