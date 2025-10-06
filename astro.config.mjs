// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  adapter: node({
    mode: 'standalone',
  }),
  output: "server"
});
