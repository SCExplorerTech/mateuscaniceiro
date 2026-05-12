import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Mateus Caniceiro",
  description: "Política de privacidade e uso de dados do site Mateus Caniceiro, em conformidade com a LGPD.",
  robots: { index: false, follow: false },
};

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-red-500 text-sm uppercase tracking-widest transition-colors mb-12"
        >
          ← Voltar
        </Link>

        <h1 className="text-4xl font-black mb-2">Política de Privacidade</h1>
        <p className="text-white/40 text-sm mb-12">Última atualização: maio de 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Quem somos</h2>
            <p>
              Este site é mantido por <strong className="text-white">Mateus Caniceiro</strong>,
              comediante de stand-up com sede em Curitiba, PR. Para contato:{" "}
              <a href="mailto:mateuscaniceiro@gmail.com" className="text-red-500 hover:underline">
                mateuscaniceiro@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. Quais dados coletamos</h2>
            <p>Este site não coleta dados pessoais diretamente. Podemos utilizar:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-white">Cookies técnicos</strong> — necessários para o funcionamento correto do site (ex: guardar seu consentimento de cookies).</li>
              <li><strong className="text-white">Dados de navegação anônimos</strong> — caso utilizemos ferramentas de analytics (como Google Analytics), coletamos informações como páginas visitadas, tempo de sessão e origem do tráfego, sem identificar o usuário individualmente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Finalidade do uso</h2>
            <p>Os dados coletados são usados exclusivamente para:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Melhorar a experiência de navegação no site;</li>
              <li>Entender como os visitantes interagem com o conteúdo;</li>
              <li>Responder a contatos enviados via e-mail ou WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. Compartilhamento de dados</h2>
            <p>
              Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros, exceto quando
              exigido por lei ou para operação de serviços essenciais (ex: Google Analytics, sob os
              termos de privacidade do próprio Google).
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Seus direitos (LGPD)</h2>
            <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Confirmar a existência de tratamento de dados;</li>
              <li>Solicitar acesso, correção ou exclusão dos seus dados;</li>
              <li>Revogar seu consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-3">
              Para exercer esses direitos, entre em contato:{" "}
              <a href="mailto:mateuscaniceiro@gmail.com" className="text-red-500 hover:underline">
                mateuscaniceiro@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. Cookies</h2>
            <p>
              Você pode recusar o uso de cookies a qualquer momento pelo banner exibido no site ou
              pelas configurações do seu navegador. A recusa de cookies técnicos pode afetar o
              funcionamento de algumas funcionalidades.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data da última revisão é sempre
              indicada no topo desta página.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
