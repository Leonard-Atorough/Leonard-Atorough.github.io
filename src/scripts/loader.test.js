import { beforeEach, vi, expect, describe, assert, afterEach } from "vitest";
import { loadPage } from "./loader";

const originalFetch = global.fetch;

afterEach(() => {
  vi.clearAllMocks();
  global.fetch = originalFetch;
});

describe("loadPage", () => {
  beforeEach(() => {
    document.body.innerHTML = `<main id="app"></main>`;

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve("<section><h1>Mock Page</h1></section>"),
      })
    );

    window.scrollTo = vi.fn();
  });
  it("fetches and injects html into app id element", async () => {
    await loadPage("home");
    expect(fetch).toHaveBeenCalledWith("./src/pages/home.html");
    expect(document.getElementById("app").innerHTML).toContain("Mock Page");
    expect(window.scrollTo).toBeCalledWith(0, 0);
  });
});

describe("loadPage fails", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: "Not found",
        text: () => Promise.resolve(""),
      })
    );

    document.body.innerHTML = `<main id="app"></main>`;
  });

  it("displays an error message on the screen", async () => {
    await loadPage("not-found");
    expect(document.getElementById("app").innerHTML).toContain(
      "Failed to load page: Response status: Not found"
    );
  });
});
