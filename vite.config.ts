import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: true,
    // port: 3000,
    proxy: {
      "/oaza": {
        target: "https://oaza.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oaza/, ""),
      },
    },
  },
});
