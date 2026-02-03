// courses.js

export const courses = [
  { id: 1, title: "HTML 入門", level: "初級", category: "HTML" },
  { id: 2, title: "CSS 基礎", level: "初級", category: "CSS" },
  { id: 3, title: "JavaScript 初級", level: "初級", category: "JS" },
  { id: 4, title: "DOM 操作", level: "中級", category: "JS" },
  { id: 5, title: "ミニアプリ制作", level: "上級", category: "JS" }
];

export function renderCourses(target) {
  const container = document.querySelector(target);
  container.innerHTML = "";

  courses.forEach(c => {
    const card = document.createElement("div");
    card.className = "course-card fade";
    card.innerHTML = `
      <h3>${c.title}</h3>
      <p>レベル：${c.level}</p>
      <p>カテゴリ：${c.category}</p>
    `;
    container.appendChild(card);
  });
}
