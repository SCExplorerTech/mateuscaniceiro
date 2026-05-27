"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Mic,
  Heart,
  Users,
  Send,
  Gift,
  Wine,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Camera,
  Hash,
  Volume2,
  VolumeX,
} from "lucide-react";

const GALLERY_PHOTOS = [
  { src: "/comedydate/fotos/foto-01.jpeg", w: 1280, h: 1600 },
  { src: "/comedydate/fotos/foto-02.jpeg", w: 1280, h: 1600 },
  { src: "/comedydate/fotos/foto-03.jpeg", w: 1280, h: 1600 },
  { src: "/comedydate/fotos/foto-04.jpeg", w: 1280, h: 1600 },
  { src: "/comedydate/fotos/foto-05.jpeg", w: 1280, h: 1600 },
  { src: "/comedydate/fotos/foto-06.jpeg", w: 1280, h: 1600 },
  { src: "/comedydate/fotos/foto-07.jpeg", w: 1280, h: 1600 },
  { src: "/comedydate/fotos/foto-08.jpeg", w: 1600, h: 1290 },
];

const STEPS = [
  { num: 1, Icon: Mic, label: "Você assiste ao show de stand-up" },
  { num: 2, Icon: Hash, label: "Cada participante recebe um número" },
  { num: 3, Icon: Users, label: "Começam os encontros rápidos (speed dating)" },
  { num: 4, Icon: Heart, label: "Você marca seus matches" },
  { num: 5, Icon: Send, label: "Os matches em comum são enviados depois" },
];

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
    a: "Sim! A maioria das pessoas vai sozinha.",
  },
  {
    q: "É constrangedor?",
    a: "Não. O foco é diversão, conversa e conhecer pessoas novas de forma leve.",
  },
  {
    q: "Vai ter diferença de idade?",
    a: "O público costuma ser adulto e variado, predominantemente entre 25 e 40 anos.",
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
  const [current, setCurrent] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [muted, setMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % GALLERY_PHOTOS.length);
  }, []);

  const prevIndex = (current - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
  const nextIndex = (current + 1) % GALLERY_PHOTOS.length;

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
          href="#formulario"
          className="bg-[#b30000] border border-white/30 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-[#d60000] transition-colors"
        >
          Lista VIP ❤️
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
            className="border border-white/40 text-white/75 text-xs font-bold uppercase tracking-widest rounded-full px-5 py-2"
          >
            ❤️ Especial Dia dos Namorados
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
                Um show para conhecer pessoas novas
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
                  href="#formulario"
                  className="inline-block bg-[#b30000] border-2 border-white text-white font-black text-base md:text-lg uppercase px-8 py-4 rounded-full hover:scale-105 hover:bg-[#d60000] transition-all duration-200"
                  style={{ boxShadow: "0 0 32px rgba(220,38,38,0.65)" }}
                >
                  Entrar na Lista VIP ❤️
                </a>
                <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest">
                  Vagas limitadas por gênero!
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── COMO FUNCIONA ─────────────── */}
      <section className="bg-white py-20 px-4">
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 inline-flex items-center gap-3 flex-wrap justify-center">
                Como funciona
                <Heart className="w-8 h-8 text-[#b30000] fill-[#b30000]" />
              </h2>
              <p className="text-gray-400 mt-2 text-sm">5 passos para uma noite incrível</p>
            </div>

            {/* Cards — scroll horizontal no mobile, grid no desktop */}
            <div className="flex overflow-x-auto gap-4 pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0 snap-x snap-mandatory">
              {STEPS.map(({ num, Icon, label }) => (
                <div
                  key={num}
                  className="flex-shrink-0 w-52 md:w-auto snap-center flex flex-col items-center text-center gap-3 bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                    style={{ background: "#b30000" }}
                  >
                    {num}
                  </div>
                  <Icon className="w-7 h-7 text-[#b30000]" />
                  <p className="text-gray-700 text-sm font-medium leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─────────────── CLIMA DO EVENTO ─────────────── */}
      <section className="py-20 px-4" style={{ background: "#8b0000" }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white">
                ❤️ Clima do evento ❤️
              </h2>
            </div>

            <div className="relative px-10">
              {/* Seta esquerda */}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Mobile: 1 foto */}
              <div className="md:hidden rounded-2xl overflow-hidden">
                <Image
                  src={GALLERY_PHOTOS[current].src}
                  alt={`Foto do evento ${current + 1}`}
                  width={GALLERY_PHOTOS[current].w}
                  height={GALLERY_PHOTOS[current].h}
                  className="w-full h-auto transition-opacity duration-300"
                  sizes="100vw"
                />
              </div>

              {/* Desktop: 3 fotos — prev (dim) | current (destaque) | next (dim) */}
              <div className="hidden md:grid grid-cols-[1fr_3fr_1fr] gap-3 items-center">
                <button
                  onClick={prev}
                  className="rounded-xl overflow-hidden w-full opacity-40 hover:opacity-60 transition-opacity duration-300"
                  aria-label="Foto anterior"
                >
                  <Image
                    src={GALLERY_PHOTOS[prevIndex].src}
                    alt={`Foto do evento ${prevIndex + 1}`}
                    width={GALLERY_PHOTOS[prevIndex].w}
                    height={GALLERY_PHOTOS[prevIndex].h}
                    className="w-full h-auto"
                    sizes="25vw"
                  />
                </button>

                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 0 30px rgba(220,38,38,0.5)" }}
                >
                  <Image
                    src={GALLERY_PHOTOS[current].src}
                    alt={`Foto do evento ${current + 1}`}
                    width={GALLERY_PHOTOS[current].w}
                    height={GALLERY_PHOTOS[current].h}
                    className="w-full h-auto"
                    sizes="33vw"
                  />
                </div>

                <button
                  onClick={next}
                  className="rounded-xl overflow-hidden w-full opacity-40 hover:opacity-60 transition-opacity duration-300"
                  aria-label="Próxima foto"
                >
                  <Image
                    src={GALLERY_PHOTOS[nextIndex].src}
                    alt={`Foto do evento ${nextIndex + 1}`}
                    width={GALLERY_PHOTOS[nextIndex].w}
                    height={GALLERY_PHOTOS[nextIndex].h}
                    className="w-full h-auto"
                    sizes="25vw"
                  />
                </button>
              </div>

              {/* Seta direita */}
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots de paginação */}
            <div className="flex justify-center gap-2 mt-6">
              {GALLERY_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para foto ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === current ? "bg-white w-6 h-2" : "bg-white/40 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
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
              Receba primeiro as informações, abertura das vendas e novidades do Comedy Date.
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

      {/* ─────────────── FOOTER ─────────────── */}
      <footer style={{ background: "#3d0000" }} className="py-10 px-4">
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
                <span className="text-sm font-medium">@MateusCaniceiro</span>
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
