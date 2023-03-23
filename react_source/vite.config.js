import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      react: path.posix.resolve("src/react"),
      "react-dom": path.posix.resolve("src/react-dom"),
      "react-reconciler": path.posix.resolve("src/react-reconciler"),
      "react-dom-bindings": path.posix.resolve("src/react-dom-bindings"),
      scheduler: path.posix.resolve("src/scheduler"),
      shared: path.posix.resolve("src/shared"),
    },
  },
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
});
