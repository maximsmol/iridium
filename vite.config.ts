import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  plugins: [solidPlugin()],
});
