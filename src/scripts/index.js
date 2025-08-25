import { createRouter } from "./router";
import * as loader from "./loader";

window.addEventListener("load", () => {
  createRouter(loader);
});
