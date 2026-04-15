import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/", // ou o nome exato do repo
  build: { outDir: "docs" },
  plugins: [react()],
});
