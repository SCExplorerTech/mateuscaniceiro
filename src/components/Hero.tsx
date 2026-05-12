import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(225,29,72,0.10)_0%,_transparent_65%)]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-[2fr_3fr] gap-8 items-end">

        {/* Left — text */}
        <div className="flex flex-col items-start">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-red-600/50 text-red-500 text-xs font-semibold uppercase tracking-widest">
            Stand Up Comedy • Curitiba
          </span>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
            MATEUS
            <br />
            <span className="text-red-600">CANICEIRO</span>
          </h1>

          <p className="mt-6 text-lg text-white/60 font-light max-w-md leading-relaxed">
            Humor ácido. Histórias reais.{" "}
            <span className="text-white font-medium">Zero filtro.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#shows"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Ver próximos shows
            </a>
            <a
              href="#videos"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/60 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:bg-white/5"
            >
              Assistir vídeos
            </a>
          </div>

          <p className="mt-10 text-white/30 text-sm tracking-wider">
            Já dividiu palco com{" "}
            <span className="text-white/60">Danilo Gentili</span>,{" "}
            <span className="text-white/60">Whindersson Nunes</span> e muito mais
          </p>
        </div>

        {/* Right — photo */}
        <div className="relative flex items-center justify-center">
          {/* Glow behind the photo */}
          <div className="absolute inset-0 rounded-3xl bg-red-600/20 blur-3xl scale-90" />

          <div className="relative w-full">
            <Image
              src="/mateus_novo.png"
              alt="Mateus Caniceiro"
              width={3024}
              height={2700}
              className="relative z-10 w-full h-auto object-cover drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#stats"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
