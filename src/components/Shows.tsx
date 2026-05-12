import { shows } from "@/data";
import { Calendar, MapPin, Ticket } from "lucide-react";

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
            Garanta seu ingresso e venha rir sem culpa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {shows.map((show) => (
            <div
              key={show.id}
              className="group relative bg-black rounded-2xl border border-white/5 p-8 hover:border-red-600/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Red accent line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-red-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <h3 className="text-2xl font-black text-white mb-2">{show.title}</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">{show.description}</p>

              <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Calendar size={14} className="text-red-600" />
                  <span>{show.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <MapPin size={14} className="text-red-600" />
                  <span>{show.venue}</span>
                </div>
              </div>

              <a
                href={show.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Ticket size={14} />
                Comprar ingresso
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
