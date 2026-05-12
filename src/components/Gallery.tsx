import Image from "next/image";
import { galleryImages } from "@/data";

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  like_count: number;
}

interface GalleryItem {
  src: string;
  alt: string;
  href: string;
}

async function getInstagramPosts(): Promise<GalleryItem[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,like_count&limit=50&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();
    const posts: InstagramPost[] = data.data ?? [];

    return posts
      .filter((p) => p.media_type !== "VIDEO" || p.thumbnail_url)
      .sort((a, b) => b.like_count - a.like_count)
      .slice(0, 6)
      .map((p) => ({
        src: p.media_type === "VIDEO" ? p.thumbnail_url! : p.media_url,
        alt: "Mateus Caniceiro",
        href: p.permalink,
      }));
  } catch {
    return [];
  }
}

export default async function Gallery() {
  const instagramPosts = await getInstagramPosts();

  const images: GalleryItem[] =
    instagramPosts.length > 0
      ? instagramPosts
      : galleryImages.map((img) => ({ ...img, href: "https://www.instagram.com/mateuscaniceiro/" }));

  return (
    <section id="galeria" className="bg-zinc-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
            Galeria
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
            Nos bastidores
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Fotos do palco e dos bastidores.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <a
              key={i}
              href={img.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 block"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/mateuscaniceiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-red-600/60 text-white/70 hover:text-white font-semibold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
