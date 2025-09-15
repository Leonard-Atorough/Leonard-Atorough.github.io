import { expect } from "vitest";
import { loadProjects } from "./projectLoader";

const testProjects = [
  {
    id: "proj-01",
    title: "First Project",
    summary: "First summary",
    details: "First details",
    link: "https://example.com/1",
    image: "/img/1.png",
  },
  {
    id: "proj-02",
    title: "Second Project",
    summary: "Second summary",
    details: "Second details",
    link: "https://example.com/2",
    image: "/img/2.png",
  },
];

let container;

const mockFetch = (response, ok = true) => {
  return vi.fn().mockResolvedValue({
    ok,
    status: ok ? 200 : 500,
    json: () => Promise.resolve(response),
    statusText: ok ? "" : "Not found",
  });
};

describe("loadProjects", () => {
  beforeEach(() => {
    document.body.innerHTML = "";

    container = document.createElement("div");
    container.classList.add("grid");
    container.id = "projects-container";

    document.body.appendChild(container);
  });

  afterEach(() => {
    vi.clearAllMocks;
  });

  it("loads project data from json and renders a card for each project", async () => {
    global.fetch = mockFetch(testProjects);

    await loadProjects();

    const articles = document.getElementsByClassName("project-card");
    expect(articles).toHaveLength(testProjects.length);
  });

  it("logs an error when the response is no success", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    global.fetch = mockFetch(null, false);

    await expect(loadProjects()).rejects.toThrow(
      "Failed to load HTML from ../data/projects.json: Not found"
    );

    expect(consoleSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenLastCalledWith(
      "Failed to load HTML from ../data/projects.json: Not found"
    );
  });
});
