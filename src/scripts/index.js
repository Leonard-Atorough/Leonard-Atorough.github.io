import { createRouter } from "./router.js";
import * as loader from "./loader.js";

window.addEventListener("DOMContentLoaded", () => {
  createRouter(loader);
});
