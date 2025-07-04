// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  umami: {
    id: "b3f5c1b4-fa3b-43a8-9922-fa560e264359",
    host: "https://umami.lsd.sk",
    autoTrack: true,
    domains: ["pgforge.dev", "www.pgforge.dev"],
    enabled: true,
  },
  app: {
    head: {
      title: "PgForge - Forge your PostgreSQL instances with precision",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Modern CLI tool for PostgreSQL instance management. Run multiple PostgreSQL instances with different configurations simultaneously.",
        },
        { name: "theme-color", content: "#0a0a0a" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },
  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxtjs/tailwindcss",
    "nuxt-umami",
    "nitro-cloudflare-dev",
  ],
});
