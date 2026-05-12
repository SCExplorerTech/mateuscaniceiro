import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,29,72,0.12)_0%,_transparent_70%)]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-red-600/50 text-red-500 text-xs font-semibold uppercase tracking-widest">
          Stand Up Comedy • Curitiba
        </span>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4">
          MATEUS
          <br />
          <span className="text-red-600">CANICEIRO</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg md:text-xl text-white/60 font-light max-w-xl mx-auto leading-relaxed">
          Humor ácido. Histórias reais.{" "}
          <span className="text-white font-medium">Zero filtro.</span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Social proof */}
        <p className="mt-12 text-white/30 text-sm tracking-wider">
          Já dividiu palco com{" "}
          <span className="text-white/60">Whindersson Nunes</span>,{" "}
          <span className="text-white/60">Danilo Gentili</span> e muito mais
        </p>
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
