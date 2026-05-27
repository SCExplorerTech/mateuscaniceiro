import type { Metadata } from "next";
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
  return <ComedyDateClient />;
}
