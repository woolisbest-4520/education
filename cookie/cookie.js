// バナー要素
const banner = document.getElementById("cookie-banner");
const toggleBtn = document.getElementById("cookie-toggle");

// 言語切り替え
const langBtns = document.querySelectorAll(".lang");

// 最初に表示する
setTimeout(() => {
  banner.classList.remove("closed");
  banner.classList.add("open");
}, 500);

// 開閉ボタン
toggleBtn.addEventListener("click", () => {
  banner.classList.toggle("open");
  banner.classList.toggle("closed");
  toggleBtn.textContent = banner.classList.contains("open") ? "▼" : "▲";
});

// 承認 / 拒否
document.getElementById("accept-btn").addEventListener("click", () => {
  banner.classList.add("closed");
  setTimeout(() => {
    window.location.href = "/public/index.html";
  }, 400);
});

document.getElementById("deny-btn").addEventListener("click", () => {
  banner.classList.add("closed");
  setTimeout(() => {
    window.location.href = "/no.html";
  }, 400);
});

// ▼ 言語切り替え
langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    langBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const lang = btn.dataset.lang;

    // テキスト切替処理
    document.querySelectorAll("[data-lang-ja]").forEach(el => {
      el.textContent = el.getAttribute(`data-lang-${lang}`);
    });
  });
});
