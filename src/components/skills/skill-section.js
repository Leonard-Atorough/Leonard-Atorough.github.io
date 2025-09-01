import { LitElement, html, css } from "lit";
import "./skill-item.js";

class SkillSection extends LitElement {
  static properties = {
    title: {},
    skills: {},
  };

  static styles = css`
    div {
    }

    h1 {
      -webkit-text-stroke: 0.5px #333;
      font-size: 2.5rem;
      line-height: 1.1;
      text-shadow: -2px 2px 1px var(--color-white);
      margin: 0;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex: 1 1 auto;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: start;
      align-items: center;
      min-height: 80px;
    }
  `;

  constructor() {
    super();
    this.title = "";
    this.skills = [];
  }

  render() {
    return html`
      <div>
        <h1>${this.title}</h1>
        <ul>
          ${this.skills.map(
            (skill) =>
              html`<skill-item
                .src="${skill.src}"
                .alt="${skill.alt}"
              ></skill-item>`
          )}
        </ul>
      </div>
    `;
  }
}

customElements.define("skill-section", SkillSection);
