import { Project } from "./project";

const testCard = {
  id: "proj-01",
  title: "Test Project",
  summary: "A project to test project card behaviour.",
  details: "A project to test project card behaviour.",
  link: "https://fakelink.com/fake-project",
  image: "../assets/images/320_placeholder.png",
};

let project;
let container;

describe("renderCard", () => {
  beforeEach(() => {
    document.body.innerHTML = "";

    container = document.createElement("div");
    container.classList.add("grid");

    document.body.appendChild(container);
  });

  it("renders a complete project card and attaches it to the container element", () => {
    project = new Project(testCard);
    project.renderCard(container);

    const article = container.querySelector("article.project-card");
    expect(article).toBeTruthy();

    const img = article.querySelector("img.image");
    expect(img).toBeTruthy();
    expect(img.getAttribute("src")).toEqual(testCard.image);
    expect(img.getAttribute("alt")).toContain(`${testCard.title}`);

    const title = article.querySelector("h3");
    expect(title).toBeTruthy();
    expect(title.textContent).toBe(testCard.title);

    const summary = article.querySelector("p.description");
    expect(summary.textContent).toBe(testCard.summary);
  });
});
