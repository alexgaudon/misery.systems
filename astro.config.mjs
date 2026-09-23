// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [".dev.amgau.xyz"],
    },
  },
  integrations: [],
  adapter: node({
    mode: 'standalone',
  }),
  output: "server"
});
