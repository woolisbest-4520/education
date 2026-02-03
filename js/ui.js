// ui.js

// ====== テーマ切り替え ======
export function toggleTheme() {
  document.body.classList.toggle("light-theme");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light-theme") ? "light" : "dark"
  );
}

export function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light-theme");
}

// ====== フェードインアニメーション ======
export function fadeInElements() {
  const items = document.querySelectorAll(".fade");
  items.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 120);
  });
}

// ====== モーダル ======
export function openModal(id) {
  document.getElementById(id).classList.add("show");
}

export function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}
