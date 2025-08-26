import { createRouter } from "./router";
import * as loader from "./loader";

window.addEventListener("DOMContentLoaded", () => {
  createRouter(loader);
});
