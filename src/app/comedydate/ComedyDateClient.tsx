"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import {
  Mic,
  Heart,
  Users,
  Gift,
  Wine,
  ChevronDown,
  Camera,
  Volume2,
  VolumeX,
} from "lucide-react";

const SYMPLA_URL =
  "https://www.sympla.com.br/evento/comedy-date---speed-dating-encontros-rapidos-dia-dos-namorados--stand-up-comedy-curitiba-1206/3447593";

const FEATURES = [
  { Icon: Mic, label: "STAND-UP COMEDY" },
  { Icon: Heart, label: "SPEED DATING" },
  { Icon: Wine, label: "DRINK" },
  { Icon: Users, label: "INTERAÇÃO" },
  { Icon: Gift, label: "SORTEIOS" },
];

const FAQS = [
  {
    q: "Posso ir sozinho?",
    a: "Sim! A maioria das pessoas vai sozinha. Porém você pode chamar alguns amigos pra curtir o show que na hora do speed dating todo mundo ficará em mesa separada pra poder conversar de boa.",
  },
  {
    q: "É constrangedor?",
    a: "Não. O foco é diversão, conversar e conhecer pessoas novas de forma leve.",
  },
  {
    q: "Vai ter diferença de idade?",
    a: "O público costuma ser adulto e variado, predominantemente entre 25 e 40 anos. Porém não existe uma limitação de idade, todos são bem-vindos!",
  },
  {
    q: "Como funciona o match?",
    a: "Você marca os números das pessoas que gostou e os matches em comum recebem contato depois do evento.",
  },
  {
    q: "Tem limite de vagas?",
    a: "Sim. As vagas são limitadas por gênero para manter o equilíbrio do evento.",
  },
];

const CRIMSON_GRADIENT =
  "radial-gradient(ellipse at center, #c00000 0%, #6b0000 60%, #3d0000 100%)";

export default function ComedyDateClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [muted, setMuted] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }, []);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const target = 40;
          const duration = 2000;
          const start = performance.now();
          const frame = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─────────────── NAVBAR ─────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
        style={{ background: "rgba(30,0,0,0.85)", backdropFilter: "blur(10px)" }}
      >
        <div className="font-black text-lg leading-none">
          <span className="italic text-white">Comedy</span>
          <span className="text-red-400 ml-1">Date</span>
          <Heart className="inline-block w-4 h-4 text-red-400 fill-red-400 ml-1 mb-0.5" />
        </div>
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#b30000] border border-white/30 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-[#d60000] transition-colors"
        >
          Fazer minha reserva ❤️
        </a>
      </nav>

      <main className="overflow-x-hidden pt-12">

        {/* ─────────────── HERO ─────────────── */}
        <section
          style={{ background: CRIMSON_GRADIENT }}
          className="min-h-screen px-4 py-14 flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10">

            {/* Badge topo */}
            <div
              style={{ animation: "fadeInUp 0.5s ease both 0s" }}
              className="border border-white/40 text-white/75 text-[10px] md:text-xs font-bold uppercase tracking-normal md:tracking-widest rounded-full px-3 md:px-5 py-2"
            >
              ❤️ Especial Dia dos Namorados Para Solteiros
            </div>

            {/* Grid: vídeo | texto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">

              {/* Vídeo vertical */}
              <div
                style={{ animation: "fadeInUp 0.7s ease both 0.1s" }}
                className="flex justify-center"
              >
                <div className="relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/comedydate/mateuscapa.png"
                    className="rounded-2xl w-full object-cover"
                    style={{
                      maxWidth: "300px",
                      maxHeight: "560px",
                      boxShadow:
                        "0 0 60px rgba(220,38,38,0.45), 0 25px 50px rgba(0,0,0,0.5)",
                    }}
                  >
                    <source src="/comedydate/video.mp4" type="video/mp4" />
                  </video>
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Ativar som" : "Desativar som"}
                    className="absolute bottom-3 right-3 w-9 h-9 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  >
                    {muted
                      ? <VolumeX className="w-4 h-4" />
                      : <Volume2 className="w-4 h-4" />
                    }
                  </button>
                </div>
              </div>

              {/* Conteúdo textual */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">

                {/* Logo tipográfico */}
                <div style={{ animation: "fadeInUp 0.7s ease both 0.2s" }}>
                  <h1 className="font-black leading-[0.88]">
                    <span
                      className="italic text-white block"
                      style={{ fontSize: "clamp(3.5rem, 10vw, 5.5rem)" }}
                    >
                      Comedy
                    </span>
                    <span
                      className="text-white flex items-center gap-3 justify-center md:justify-start"
                      style={{ fontSize: "clamp(3.5rem, 10vw, 5.5rem)" }}
                    >
                      Date
                      <Heart
                        className="fill-red-400 text-red-400 flex-shrink-0"
                        style={{
                          width: "clamp(2.2rem, 6vw, 3.8rem)",
                          height: "clamp(2.2rem, 6vw, 3.8rem)",
                          filter: "drop-shadow(0 0 12px rgba(248,113,113,0.8))",
                        }}
                      />
                    </span>
                  </h1>
                  <div
                    className="h-1 w-20 mt-3 rounded-full mx-auto md:mx-0"
                    style={{
                      background: "#d60000",
                      boxShadow: "0 0 14px #d60000",
                    }}
                  />
                </div>

                {/* Headline */}
                <p
                  style={{ animation: "fadeInUp 0.7s ease both 0.35s" }}
                  className="text-base md:text-xl font-bold text-white uppercase tracking-wide"
                >
                  Um show para conhecer<br className="md:hidden" /> pessoas novas
                </p>

                {/* Pills de features */}
                <div
                  style={{ animation: "fadeInUp 0.7s ease both 0.5s" }}
                  className="flex flex-wrap justify-center md:justify-start gap-2"
                >
                  {FEATURES.map(({ Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-1.5 border border-white/30 text-white/70 rounded-full px-3 py-1.5 text-xs font-semibold"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  style={{ animation: "fadeInUp 0.7s ease both 0.65s" }}
                  className="flex flex-col items-center md:items-start gap-3"
                >
                  <a
                    href={SYMPLA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#b30000] border-2 border-white text-white font-black text-base md:text-lg uppercase px-8 py-4 rounded-full hover:scale-105 hover:bg-[#d60000] transition-all duration-200"
                    style={{ boxShadow: "0 0 32px rgba(220,38,38,0.65)" }}
                  >
                    Quero reservar minha vaga! ❤️
                  </a>
                  <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest">
                    Vagas limitadas por gênero!
                  </span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── CONTADOR DE VAGAS ─────────────── */}
        <section className="bg-white py-20 px-4">
          <FadeIn>
            <div className="max-w-xl mx-auto text-center" ref={counterRef}>
              <div
                className="font-black leading-none"
                style={{ color: "#b30000", fontSize: "clamp(5rem, 20vw, 9rem)" }}
              >
                {count}%
              </div>
              <p className="text-gray-800 text-xl md:text-2xl font-bold mt-2">
                dos lugares já reservados!
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-6 overflow-hidden">
                <div
                  className="h-4 rounded-full transition-all duration-100"
                  style={{
                    width: `${count}%`,
                    background: "linear-gradient(90deg, #b30000, #d60000)",
                    boxShadow: "0 0 10px rgba(179,0,0,0.5)",
                  }}
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ─────────────── CTA RESERVA (após contador) ─────────────── */}
        <section className="bg-white pb-20 px-4">
          <div className="max-w-xl mx-auto text-center">
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#b30000] border-2 border-[#b30000] text-white font-black text-lg uppercase px-10 py-5 rounded-full hover:scale-105 hover:bg-[#d60000] transition-all duration-200"
              style={{ boxShadow: "0 0 32px rgba(179,0,0,0.4)" }}
            >
              Quero reservar<br />meu lugar! ❤️
            </a>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section className="bg-white py-20 px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                  Perguntas frequentes
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {FAQS.map((faq, i) => (
                  <div key={i} className="rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between gap-4 p-4 text-left text-white font-bold transition-colors duration-200"
                      style={{
                        background: openIndex === i ? "#d60000" : "#b30000",
                      }}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      aria-expanded={openIndex === i}
                    >
                      <span className="text-sm leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: openIndex === i ? "200px" : "0",
                        background: "#d60000",
                      }}
                    >
                      <p className="text-white/90 px-4 pt-2 pb-4 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ─────────────── FORMULÁRIO VIP ─────────────── */}
        <section
          id="formulario"
          style={{ background: CRIMSON_GRADIENT }}
          className="py-20 px-4"
        >
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Entre para a<br />Lista VIP ❤️
              </h2>
              <p className="text-white/80 mt-4 text-base">
                Não conseguiu reservar seu lugar e/ou tem interesse nas próximas edições? Receba primeiro as informações, abertura das vendas e novidades do Comedy Date.
              </p>
              <p className="text-yellow-300 italic mt-2 font-medium">
                Quem entra na lista recebe tudo primeiro 😉
              </p>
            </div>

            <div
              className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.45)" }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdGgAC0UwXxr4DsKJqefY89bcAHU7f0CZ1G8kFP6LwC0Y_SYQ/viewform?embedded=true"
                width="100%"
                height={1679}
                style={{ border: 0, display: "block" }}
                title="Lista VIP Comedy Date"
              >
                Carregando…
              </iframe>
            </div>
          </FadeIn>
        </section>

        {/* ─────────────── CTA RESERVA (após formulário) ─────────────── */}
        <section style={{ background: "#3d0000" }} className="py-14 px-4">
          <div className="max-w-xl mx-auto text-center">
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#b30000] border-2 border-white text-white font-black text-lg uppercase px-10 py-5 rounded-full hover:scale-105 hover:bg-[#d60000] transition-all duration-200"
              style={{ boxShadow: "0 0 32px rgba(220,38,38,0.65)" }}
            >
              Quero reservar<br />meu lugar! ❤️
            </a>
          </div>
        </section>

        {/* ─────────────── FOOTER ─────────────── */}
        <footer style={{ background: "#3d0000" }} className="py-10 px-4 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left mb-8">

              {/* Logo */}
              <div className="flex flex-col items-center md:items-start">
                <div className="font-black text-2xl leading-tight">
                  <span className="italic text-white">Comedy</span>
                  <br />
                  <span className="text-red-400">Date</span>
                </div>
                <div
                  className="h-0.5 w-12 mt-2 rounded-full"
                  style={{ background: "#d60000" }}
                />
              </div>

              {/* Info central */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-2 text-white/75">
                  <Camera className="w-4 h-4" />
                  <a
                    href="https://www.instagram.com/mateuscaniceiro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-white transition-colors"
                  >
                    @MateusCaniceiro
                  </a>
                </div>
                <span className="text-white/45 text-sm">Curitiba / PR</span>
              </div>

              {/* Apresentador */}
              <div className="flex flex-col items-center md:items-end">
                <span className="text-white/45 text-xs uppercase tracking-widest">com:</span>
                <span className="text-white font-bold text-xl">Mateus Caniceiro</span>
              </div>

            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-center text-white/40 text-sm italic">
                Feito para solteiros que querem rir, conhecer pessoas e viver uma noite diferente.
              </p>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
