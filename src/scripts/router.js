import Navigo from "navigo";

export function createRouter(loader) {
  const router = new Navigo("/", { strategy: "HASH" });
  var content = document.getElementById("app");
  router
    .on({
      "/": async () => {
        await loader.loadPage("home");
        router.updatePageLinks();
      },
      "/projects": async () => {
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
