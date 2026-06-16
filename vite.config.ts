import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { existsSync, readFileSync } from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(() => {
  const certPath = path.resolve(__dirname, ".cert/localhost.pem");
  const keyPath = path.resolve(__dirname, ".cert/localhost-key.pem");
  const https =
    process.env.HTTPS === "true" && existsSync(certPath) && existsSync(keyPath)
      ? {
          cert: readFileSync(certPath),
          key: readFileSync(keyPath),
        }
      : undefined;

  return {
    plugins: [
      react(),
      tailwindcss(),

      // optional but VERY useful for finding big JS
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      target: "esnext",
      minify: "esbuild",
      sourcemap: false,
      cssCodeSplit: true,

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            if (id.includes("react")) return "react-vendor";
            if (id.includes("react-router")) return "router";
            if (id.includes("lucide")) return "icons";

            return "vendor";
          },
        },
      },
    },

    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
    },

    server: {
      https,
      hmr: process.env.DISABLE_HMR !== "true",
      watch:
        process.env.DISABLE_HMR === "true"
          ? null
          : {},
    },
  };
});
