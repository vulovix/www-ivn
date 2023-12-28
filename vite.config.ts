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
        target: "https://blog.ivn.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oaza/, ""),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        sourcemap: true,
        minifyInternalExports: true,
        manualChunks: {
          reactjs: ["react", "react-dom"],
        },
      },
    },
  },
});
