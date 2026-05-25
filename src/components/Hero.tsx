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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[2fr_3fr] gap-8 items-end">

        {/* Left — text */}
        <div className="flex flex-col items-start">
          <span
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-red-600/50 text-red-500 text-xs font-semibold uppercase tracking-widest opacity-0"
            style={{ animation: "fadeInUp 0.7s ease both 0.1s" }}
          >
            Stand Up Comedy • Curitiba
          </span>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight opacity-0"
            style={{ animation: "fadeInUp 0.7s ease both 0.25s" }}
          >
            MATEUS
            <br />
            <span className="text-red-600">CANICEIRO</span>
          </h1>

          <p
            className="mt-6 text-lg text-white/60 font-light max-w-md leading-relaxed opacity-0"
            style={{ animation: "fadeInUp 0.7s ease both 0.4s" }}
          >
            Show de Stand Up em Evento Corporativo,<br />Bares e Teatros.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0"
            style={{ animation: "fadeInUp 0.7s ease both 0.55s" }}
          >
            <a
              href="https://linktr.ee/mateuscaniceiro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Comprar ingressos
            </a>
            <a
              href="#videos"
              className="inline-flex items-center justify-center text-center gap-2 border border-white/20 hover:border-white/60 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:bg-white/5"
            >
              Assistir vídeos
            </a>
            <a
              href="https://wa.me/5541988589635?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Mateus%20Caniceiro%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <p className="mt-10 text-white/30 text-sm tracking-wider opacity-0" style={{ animation: "fadeInUp 0.7s ease both 0.7s" }}>
            Já dividiu palco com{" "}
            <span className="text-white/60">Danilo Gentili</span>,{" "}
            <span className="text-white/60">Whindersson Nunes</span> e vários dos principais nomes da comédia no Brasil.
          </p>
        </div>

        {/* Right — photo */}
        <div className="relative flex items-center justify-center group">
          {/* Glow behind the photo */}
          <div className="absolute inset-0 rounded-3xl bg-red-600/20 blur-3xl scale-90" />

          <Image
            src="/mateus_novo.webp"
            alt="Mateus Caniceiro"
            width={1800}
            height={1811}
            className="relative z-10 w-full h-auto max-h-72 md:max-h-none object-contain md:object-cover drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            priority
          />
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
