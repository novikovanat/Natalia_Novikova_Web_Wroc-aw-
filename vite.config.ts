import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Natalia_Novikova_Web_Wroc-aw-/",
  build: {
    sourcemap: true,
  },
});
