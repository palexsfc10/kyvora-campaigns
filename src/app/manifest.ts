import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kyvora Campaigns",
    short_name: "Kyvora",
    description: "Landing pages de aquisição do Kyvora",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F7FB",
    theme_color: "#4F46E5",
    lang: "pt-BR",
    icons: [
      {
        src: "/brand/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/brand/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
