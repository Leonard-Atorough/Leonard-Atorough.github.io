import Navigo from "navigo";
import "../components/skills/skill-section.js";

export function createRouter(loader) {
  const router = new Navigo("", { hash: true });
  console.log("router");
  router
    .on({
      "/": async () => {
        await loader.loadPage("home");
        const skills = document.getElementById("skills");
        const skillSection = document.createElement("skill-section");
        skillSection.title = "My Tech Skills";
        skillSection.skills = [
          { alt: "A HTML Icon", src: "./src/assets/icons/html.png" },
          { alt: "A CSS Icon", src: "./src/assets/icons/css.png" },
          {
            alt: "A Javascript Icon",
            src: "./src/assets/icons/java-script.png",
          },
          { alt: "A Dotnet C# Icon", src: "" },
          { alt: "A Node JS Icon", src: "" },
        ];
        skills.innerHTML = "";
        skills.appendChild(skillSection);
        router.updatePageLinks();
      },
      "/projects": async () => {
        console.log("projects");
        await loader.loadPage("projects");
        router.updatePageLinks();
      },
      "/writings": async () => {
        await loader.loadPage("writings");
        router.updatePageLinks();
      },
      "/contact": async () => {
        await loader.loadPage("contact");
        router.updatePageLinks();
      },
    })
    .notFound(async () => {
      await loader.loadPage("home");
      router.updatePageLinks();
    })
    .resolve();
}
