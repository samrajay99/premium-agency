import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  globalIgnores([".next/**", "node_modules/**", "next-env.d.ts", "src/App.jsx", "src/main.jsx", "vite.config.js"]),
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
