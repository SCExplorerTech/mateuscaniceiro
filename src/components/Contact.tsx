import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
          Contato
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
          Quer o Mateus no seu{" "}
          <span className="text-red-600">evento?</span>
        </h2>
        <p className="mt-6 text-white/50 leading-relaxed max-w-xl mx-auto">
          Shows corporativos, em bares e teatros. Entre em contato e torne seu evento único!
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:mateuscaniceiro@gmail.com?subject=Contato%20pelo%20site%20-%20Solicita%C3%A7%C3%A3o%20de%20show&body=Ol%C3%A1%2C%20Mateus!%0A%0AVim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20shows%20e%20eventos.%0A%0ANome%3A%20%0AEvento%3A%20%0AData%20prevista%3A%20%0ACidade%3A%20%0A%0AObrigado!"
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Mail size={16} />
            Enviar e-mail
          </a>
          <a
            href="https://wa.me/5541988589635?text=Ol%C3%A1!%20Vim%20pela%20se%C3%A7%C3%A3o%20de%20contato%20do%20site%20do%20Mateus%20Caniceiro%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20shows.%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-green-500/60 text-white hover:text-green-400 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:bg-green-500/5"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <p className="mt-8 text-white/25 text-xs">
          Resposta em até 24h — exceto em dia de show, aí demora só um pouquinho mais.
        </p>
      </div>
    </section>
  );
}
