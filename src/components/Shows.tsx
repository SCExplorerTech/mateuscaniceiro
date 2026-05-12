import { Ticket } from "lucide-react";

export default function Shows() {
  return (
    <section id="shows" className="bg-zinc-950 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
            Agenda
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
            Próximos Shows
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Garanta seu ingresso e venha dar risada comigo.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://linktr.ee/mateuscaniceiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-12 py-5 rounded-full text-base uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-600/30"
          >
            <Ticket size={18} />
            Comprar Ingressos
          </a>
        </div>
      </div>
    </section>
  );
}
