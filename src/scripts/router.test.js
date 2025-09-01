import { beforeEach, vi, expect, describe, assert } from "vitest";
import { createRouter } from "./router.js";

let loader;
//arrange
beforeEach(() => {
  loader = { loadPage: vi.fn() };

  document.body.innerHTML = `<main id="app">
    <div id="skills"></div>
  </main>`;
});

describe("createRouter", () => {
  it(`calls loadPage with "home" on "/" route`, async () => {
    window.history.pushState({}, "", "/");
    createRouter(loader);
    await Promise.resolve();
    expect(loader.loadPage).toHaveBeenCalledWith("home");
  });
  it(`calls loadPage when an existing route is requested`, async () => {
    window.history.pushState({}, "", "/projects");
    createRouter(loader);
    await Promise.resolve();
    expect(loader.loadPage).toHaveBeenCalledWith("projects");
  });
  it(`calls loadPage with "home" on an unknown route`, async () => {
    window.history.pushState({}, "", "/not-found");
    createRouter(loader);
    await Promise.resolve();
    expect(loader.loadPage).toHaveBeenCalledWith("home");
  });
});
