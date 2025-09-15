export class Project {
  /**
   *
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.summary = data.summary;
    this.image = data.image;
    this.details = data.details;

    this.element = null;
  }

  renderCard(container) {
    const projectCard = document.createElement("article");
    const cardClasses = [
      "flex",
      "flex-col",
      "project-card",
      "card-secondary",
      "gap-2",
    ];
    projectCard.classList.add(...cardClasses);
    projectCard.dataset.projectId = this.id;

    const imageHolder = document.createElement("div");
    imageHolder.classList.add("project-image");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = this.image;
    image.alt = `${this.title} thumbnail`;
    imageHolder.appendChild(image);

    projectCard.appendChild(imageHolder);

    const projectDetails = document.createElement("div");
    projectDetails.classList.add("project-content");

    const title = document.createElement("h3");
    title.textContent = this.title;
    projectDetails.appendChild(title);

    const summary = document.createElement("p");
    summary.textContent = this.summary;
    summary.classList.add("description");
    projectDetails.append(summary);

    projectCard.appendChild(projectDetails);

    this.element = projectCard;
    container.appendChild(projectCard);
  }
}
