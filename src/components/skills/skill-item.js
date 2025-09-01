import { LitElement, html, css } from "lit";

class SkillItem extends LitElement {
  static properties = {
    alt: { type: String },
    src: { type: String },
  };

  static styles = css`
    li {
      list-style: none;
      display: inline-block;
      box-sizing: border-box;
      padding: 1rem;
      border: 2px solid var(--color-black);
      border-bottom: 10px solid var(--color-black);
      border-radius: 1rem;
      transition: border-bottom 0.25s;
    }

    li:hover {
      border-bottom: 4px solid var(--color-black);
      transition: border-bottom 0.25s;
    }

    img {
      max-width: 100px;
      max-height: 100px;
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `;

  constructor() {
    super();
    this.alt = "";
    this.src = "";
  }

  render() {
    return html` <li><img src="${this.src}" alt="${this.alt}" /></li> `;
  }
}

customElements.define("skill-item", SkillItem);
