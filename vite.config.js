import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Configure the preview server to use the PORT environment variable
  preview: {
    port: 8080,
    host: true,
  },
});
