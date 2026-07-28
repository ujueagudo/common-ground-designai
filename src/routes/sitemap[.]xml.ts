import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { notes } from "@/data/notes";
import { principles } from "@/data/principles";

// TODO: sustituir por la URL del proyecto cuando haya nombre o dominio propio.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre-el-proyecto", changefreq: "yearly", priority: "0.5" },
          ...principles
            .filter((p) => p.published)
            .map((p) => ({
              path: `/principios/${p.slug}`,
              changefreq: "monthly" as const,
              priority: "0.8",
            })),
          ...notes
            .filter((n) => n.published)
            .map((n) => ({
              path: `/notas/${n.slug}`,
              changefreq: "monthly" as const,
              priority: "0.8",
            })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
