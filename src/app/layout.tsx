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
  title: "Mateus Caniceiro — Stand Up Comedy em Curitiba",
  description:
    "Mateus Caniceiro: stand-up comedy em Curitiba com humor ácido, histórias reais e zero filtro. +800 shows, +12 anos de carreira. Contrate para eventos corporativos.",
  keywords: [
    "Mateus Caniceiro",
    "stand up comedy Curitiba",
    "comediante Curitiba",
    "stand up Curitiba",
    "show de humor Curitiba",
    "evento corporativo humorista",
    "Ato Falho",
  ],
  authors: [{ name: "Mateus Caniceiro" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mateuscaniceiro.com.br" },
  openGraph: {
    title: "Mateus Caniceiro — Stand Up Comedy em Curitiba",
    description: "Humor ácido. Histórias reais. Zero filtro. +800 shows em +12 anos de carreira.",
    url: "https://mateuscaniceiro.com.br",
    siteName: "Mateus Caniceiro",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Caniceiro — Stand Up Comedy em Curitiba",
    description: "Humor ácido. Histórias reais. Zero filtro.",
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
