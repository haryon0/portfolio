import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      'delmy-experiential-tediously.ngrok-free.dev',
      '.ngrok-free.dev', // Allow semua subdomain ngrok
      '.ngrok.io',       // Ngrok paid domains
    ],
    // Optional: Jika HMR (Hot Module Replacement) bermasalah via ngrok
    hmr: {
      protocol: 'wss',
      host: 'delmy-experiential-tediously.ngrok-free.dev',
      clientPort: 443,
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));