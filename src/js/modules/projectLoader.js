import { Project } from "./project";

/**
 *
 * @param {boolean} [featuredOnly=false] – If true, render only projects
 *                                          that have `featured: true`.
 */

export async function loadProjects(featuredOnly = false) {
  const DATA_URL = "data/projects.json";
  const container = document.getElementById("projects-container");

  var res = await fetch(DATA_URL);
  console.log(res);
  if (!res.ok) {
    const errorMsg = `Failed to load HTML from ${DATA_URL}: ${res.statusText}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }
  const projects = await res.json();
  const projectsToRender = featuredOnly
    ? projects.filter((p) => Boolean(p.featured))
    : projects;

  projectsToRender.forEach((project) => {
    console.log(project);
    let card = new Project(project);
    card.renderCard(container);
  });
}
