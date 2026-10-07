import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // site exportado como estático (output: "export")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mateuscaniceiro.com.br",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mateuscaniceiro.com.br/privacidade",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
