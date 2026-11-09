import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE lets the same build run at a domain root ("/") or a sub-path such as
// GitHub Pages ("/Repo-Name/"): `BASE=/Repo-Name/ npm run build`.
export default defineConfig({
  base: process.env.BASE || "/",
  plugins: [react()],
  build: { assetsDir: "static" }, // keep bundles apart from /assets (images, docs) in public/
  server: { port: 5173, open: false },
});
