import { Project } from "./project";

export async function loadProjects() {
  const DATA_URL = "data/projects.json";
  const container = document.getElementById("projects-container");
  console.log(container);

  var res = await fetch(DATA_URL);
  console.log(res);
  if (!res.ok) {
    const errorMsg = `Failed to load HTML from ${DATA_URL}: ${res.statusText}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }
  const projects = await res.json();

  projects.forEach((project) => {
    console.log(project);
    let card = new Project(project);
    card.renderCard(container);
  });
}