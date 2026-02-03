// search.js

import { courses } from "./courses.js";

export function searchCourses(keyword, target) {
  const container = document.querySelector(target);
  container.innerHTML = "";

  const result = courses.filter(c =>
    c.title.includes(keyword) || c.category.includes(keyword)
  );

  result.forEach(c => {
    const card = document.createElement("div");
    card.className = "course-card fade";
    card.innerHTML = `<h3>${c.title}</h3>`;
    container.appendChild(card);
  });
}
