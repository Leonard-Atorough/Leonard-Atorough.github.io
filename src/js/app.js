import { InitNav } from "./modules/nav";
import { loadProjects } from "./modules/projectLoader";

document.addEventListener("DOMContentLoaded", () => {
  InitNav();
  loadProjects(true);
});
