import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // '@' aponta para a pasta 'src'
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ), // '@components' para 'src/components'
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)), // '@styles' para 'src/styles'
      // Você pode adicionar outros aliases conforme necessário
    },
  },
});
