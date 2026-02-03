// dashboard.js

import { courses } from "./courses.js";

export function loadDashboard() {
  const user = localStorage.getItem("loginUser");
  document.getElementById("usernameDisplay").textContent = user;

  const progress = Math.floor(Math.random() * 100);
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressText").textContent = progress + "%";

  const recommend = document.getElementById("recommendCourses");
  recommend.innerHTML = "";

  courses.slice(0, 3).forEach(c => {
    const div = document.createElement("div");
    div.className = "course-card fade";
    div.textContent = c.title;
    recommend.appendChild(div);
  });
}
