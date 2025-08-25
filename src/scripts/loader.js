export async function loadPage(page) {
  try {
    const route = `./src/pages/${page}.html`;
    var response = await fetch(route);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    var text = await response.text();
    const app = document.getElementById("app");
    app.innerHTML = text;
    scrollTo(0, 0);
    console.log(`${page} page loaded successfully`);
  } catch (error) {
    console.error(error.message);
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `<div class="error">Failed to load page: ${error.message}</div>`;
    }
  }
}
