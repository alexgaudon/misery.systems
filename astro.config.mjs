// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import bun from "@nurodev/astro-bun";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: bun(),
  output: "server",
  headers: [
    {
      source: '/rack-min.jpg',
      headers: {
        'Cache-Control': 'public, max-age=31536000'
      }
    },
    {
      source: '/star.svg',
      headers: {
        'Cache-Control': 'public, max-age=31536000'
      }
    },
    {
      source: '/favicon.svg',
      headers: {
        'Cache-Control': 'public, max-age=31536000'
      }
    }
  ]
});
