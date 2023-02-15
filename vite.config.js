import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginString from "vite-plugin-string";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    vitePluginString({
      include: [
        "**/*.vs",
        "**/*.fs",
        "**/*.vert",
        "**/*.frag",
        "**/*.glsl",
        "**/*.wgsl",
        "**/*.xml",
      ],
    }),
  ],
});
