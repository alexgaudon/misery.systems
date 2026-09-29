// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    // dev port, override with PORT. Prod runs the standalone server,
    // which reads PORT at runtime (see Dockerfile).
    port: Number(process.env.PORT ?? 4321),
  },
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
