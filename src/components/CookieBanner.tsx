"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-24 md:max-w-sm z-50 bg-zinc-900 border border-white/10 rounded-2xl p-5 shadow-2xl">
      <p className="text-white/80 text-sm leading-relaxed">
        Este site usa cookies para melhorar sua experiência, conforme a{" "}
        <span className="text-white font-medium">LGPD</span>. Ao continuar, você concorda com o uso.{" "}
        <a href="/privacidade" className="text-red-500 hover:underline">
          Política de privacidade
        </a>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={accept}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-full text-xs uppercase tracking-wider transition-colors"
        >
          Aceitar
        </button>
        <button
          onClick={() => setVisible(false)}
          className="flex-1 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-bold py-2 rounded-full text-xs uppercase tracking-wider transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
