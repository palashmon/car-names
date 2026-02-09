import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(rootDir, "src/index.js"),
      name: "carNames",
      formats: ["es", "umd"],
      fileName: (format) => (format === "es" ? "index.js" : "index.umd.min.js"),
    },
    sourcemap: true,
    minify: "esbuild",
  },
});
