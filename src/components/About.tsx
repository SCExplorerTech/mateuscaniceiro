import { famousWith } from "@/data";

export default function About() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
            Quem é
          </span>
          <p className="mt-6 text-white/60 leading-relaxed">
            Mateus Caniceiro escreve piadas desde criança e subiu ao palco pela primeira vez em setembro de 2012. Vencedor da Copa de Novos Comediantes do Curitiba Comedy Club em 2013, já fez mais de 800 shows entre bares, teatros e eventos corporativos — sempre misturando histórias reais com piadas ácidas e humor provocativo.
          </p>
        </div>

        {/* Famous with */}
        <div className="bg-zinc-950 rounded-2xl p-8 border border-white/5">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">
            Já dividiu palco com
          </p>
          <ul className="space-y-4">
            {famousWith.map((name) => (
              <li key={name} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                <span className="text-white text-lg font-semibold">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
