import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mateus Caniceiro — Comediante em Curitiba | Stand Up Corporativo",
  description:
    "Mateus Caniceiro: comediante curitibano com +800 shows em bares, teatros e eventos corporativos. Stand up para empresa, show corporativo, humorista para evento em Curitiba e em todo o Brasil.",
  keywords: [
    "Mateus Caniceiro",
    "comediante Curitiba",
    "comediante curitibano",
    "comediante em Curitiba",
    "humorista em Curitiba",
    "humorista curitibano",
    "humorista de Curitiba",
    "comediante de Curitiba",
    "stand up comedy Curitiba",
    "stand up corporativo",
    "stand up para empresa",
    "stand up para empresas",
    "show corporativo",
    "comédia corporativo",
    "show de comédia em evento",
    "show de comédia em empresa",
    "show de comédia para evento",
    "show de comédia para empresa",
    "show de comédia para equipe",
    "show de humor Curitiba",
    "humorista para evento corporativo",
    "Ato Falho",
  ],
  authors: [{ name: "Mateus Caniceiro" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mateuscaniceiro.com.br" },
  openGraph: {
    title: "Mateus Caniceiro — Comediante em Curitiba | Stand Up Corporativo",
    description: "Stand Up em Evento Corporativo, Bares e Teatros. +800 shows em +14 anos de carreira. Contrate o comediante curitibano Mateus Caniceiro.",
    url: "https://mateuscaniceiro.com.br",
    siteName: "Mateus Caniceiro",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Caniceiro — Comediante em Curitiba | Stand Up Corporativo",
    description: "Stand Up em Evento Corporativo, Bares e Teatros. Comediante curitibano com +800 shows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}')`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
