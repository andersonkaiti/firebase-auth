import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./bin", "./src"],
  format: "esm",
  outDir: "./dist",
  clean: true,
});
