// notify.js

export function notify(message) {
  const box = document.createElement("div");
  box.className = "notify";
  box.textContent = message;

  document.body.appendChild(box);

  setTimeout(() => {
    box.classList.add("show");
  }, 10);

  setTimeout(() => {
    box.classList.remove("show");
    setTimeout(() => box.remove(), 300);
  }, 3000);
}
