import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixPWA } from "@remix-pwa/dev";

installGlobals();

export default defineConfig({
  server: { port: 3000 },
  build: { sourcemap: true },
  plugins: [remix(), tsconfigPaths(), remixPWA()],
});
