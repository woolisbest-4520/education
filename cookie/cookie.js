document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".cookie-banner");
  const toggle = document.querySelector(".cookie-toggle");
  const langButtons = document.querySelectorAll(".lang");
  const texts = document.querySelectorAll(".cookie-text");
  const acceptBtn = document.getElementById("accept-btn");
  const denyBtn = document.getElementById("deny-btn");

  // ▼ バナーの開閉
  toggle.addEventListener("click", () => {
    banner.classList.toggle("open");
    banner.classList.toggle("closed");
  });

  // ▼ 言語切り替え
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;

      // アイコンの active 切り替え
      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // テキスト切り替え
      texts.forEach(t => {
        t.classList.toggle("hidden", t.dataset.lang !== lang);
      });

      // ボタンの文字切り替え
      acceptBtn.textContent = acceptBtn.dataset[`text-${lang}`];
      denyBtn.textContent = denyBtn.dataset[`text-${lang}`];
    });
  });

  // ▼ 承認時（遷移前に少し待つ）
  acceptBtn.addEventListener("click", () => {
    banner.classList.remove("open");
    banner.classList.add("closed");
    setTimeout(() => {
      window.location.href = "/nextpage"; // ← 好きな遷移先
    }, 500);
  });

  // ▼ 拒否時（別ページへ）
  denyBtn.addEventListener("click", () => {
    banner.classList.remove("open");
    banner.classList.add("closed");
    setTimeout(() => {
      window.location.href = "/deny"; // ← 拒否時URL
    }, 500);
  });
});
