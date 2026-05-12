import { videos } from "@/data";

export default function Videos() {
  return (
    <section id="videos" className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 text-2xl font-black uppercase tracking-widest">
            Conteúdo
          </span>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Apresentações nas principais casas de comédia do Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="group">
              <div className="relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-red-600/40 transition-all duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              </div>
              <p className="mt-3 text-white/70 text-sm font-medium text-center">{v.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@mateuscaniceiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-red-600/60 text-white/70 hover:text-white font-semibold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200"
          >
            Ver mais no YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
