const NAV_ID = "site-nav";
const MOBILE_TOGGLE_ID = "nav-toggle";

function handleLinkClick(event) {
  const target = event.currentTarget;
  const href = target.getAttribute("href");

  if (href && href.startsWith("#")) {
    event.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  const toggle = document.getElementById(MOBILE_TOGGLE_ID);
  if (toggle && toggle.getAttribute("aria-expanded") === true);
  toggleNavMenu(false);
}

function toggleNavMenu() {
  const nav = document.getElementById(NAV_ID);
  const toggle = document.getElementById(MOBILE_TOGGLE_ID);
  if (!nav || !toggle) return;

  nav.classList.toggle("-active");
  toggle.setAttribute("aria-expanded", nav.classList.contains("-active"));
}

function attachLinkHandlers() {
  const nav = document.getElementById(NAV_ID);
  toggleNavMenu;
  if (!nav) return;
  const links = nav.querySelectorAll("a");
  Array.from(links).forEach((link) =>
    link.addEventListener("click", handleLinkClick)
  );
}

function attachToggleHandlers() {
  const toggle = document.getElementById(MOBILE_TOGGLE_ID);
  if (!toggle) return;

  toggle.addEventListener("click", () => toggleNavMenu());
}

export function InitNav() {
  attachLinkHandlers();
  attachToggleHandlers();
}
