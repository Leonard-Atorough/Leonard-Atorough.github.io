import globals from "globals";
import { defineConfig } from "eslint/config";
import { configs } from "eslint-plugin-lit";

export default defineConfig([
  {
    ...configs["flat/recommended"],
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    extends: ["plugin:wc/recommended", "plugin:lit/recommended"],
  },
]);
