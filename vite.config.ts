import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: true,
    // port: 3000,
    proxy: {
      "/oazaapi": {
        target: "https://blog.ivn.dev/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oazaapi/, ""),
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
