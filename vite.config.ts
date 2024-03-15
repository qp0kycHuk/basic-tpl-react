import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
})
