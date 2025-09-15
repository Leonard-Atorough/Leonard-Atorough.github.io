import { InitNav } from "./nav";

describe("smooth scroll behaviour", () => {
  let targetSection;
  let link;
  let nav;

  function ClickLink(preventSpy) {
    const click = new MouseEvent("click", { bubbles: true, cancelable: true });
    Object.defineProperty(click, "currentTarget", { value: link });
    link.dispatchEvent(Object.assign(click, { preventDefault: preventSpy }));
  }

  beforeEach(() => {
    document.body.innerHTML = "";

    targetSection = document.createElement("section");
    targetSection.id = "section1";
    document.body.appendChild(targetSection);
    targetSection.scrollIntoView = vi.fn();

    link = document.createElement("a");
    link.href = "#section1";
    nav = document.createElement("nav");
    nav.id = "site-nav";
    nav.appendChild(link);
    document.body.appendChild(nav);

    InitNav();
  });

  it("prevents default and scrolls to the target element", () => {
    const scrollSpy = vi.spyOn(targetSection, "scrollIntoView");
    const preventSpy = vi.fn();

    // --Act--
    ClickLink(preventSpy);

    // --Assertion--
    expect(preventSpy).toHaveBeenCalledOnce();
    expect(scrollSpy).toHaveBeenCalledOnce();
    expect(scrollSpy).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("does nothing for non-hash links", () => {
    link.setAttribute("href", "/external/page");
    const preventSpy = vi.fn();

    ClickLink(preventSpy);

    expect(preventSpy).not.toHaveBeenCalled();
  });
});
