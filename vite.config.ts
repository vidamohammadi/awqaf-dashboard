import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@core": resolve(__dirname, "src/core"),
      "@packages": resolve(__dirname, "src/packages"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
});
