import Navigo from "navigo";

export function createRouter(loader) {
  const router = new Navigo("", { hash: true });
  console.log("router");
  router
    .on({
      "/": async () => {
        await loader.loadPage("home");
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
