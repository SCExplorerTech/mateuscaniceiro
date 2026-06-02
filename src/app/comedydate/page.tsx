import type { Metadata } from "next";
import Script from "next/script";
import ComedyDateClient from "./ComedyDateClient";

export const metadata: Metadata = {
  title: "Comedy Date — Evento para Solteiros no Dia dos Namorados | Mateus Caniceiro",
  description:
    "Stand-up comedy + speed dating + drink + interação + sorteios. O evento mais divertido do Dia dos Namorados em Curitiba. Entre para a Lista VIP!",
  openGraph: {
    title: "Comedy Date — Evento para Solteiros",
    description:
      "Um show para conhecer pessoas novas. Stand-up comedy + speed dating em Curitiba.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ComedyDatePage() {
  return (
    <>
      <ComedyDateClient />
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '310444896860515');
        fbq('track', 'PageView');
      `}</Script>
      <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=310444896860515&ev=PageView&noscript=1" />` }} />
    </>
  );
}
