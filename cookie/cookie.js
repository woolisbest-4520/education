document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const toggle = document.getElementById("cookie-toggle");
  const langButtons = document.querySelectorAll(".lang");
  const texts = document.querySelectorAll(".cookie-text");
  const acceptBtn = document.getElementById("accept-btn");
  const denyBtn = document.getElementById("deny-btn");

  if (!banner || !toggle || !acceptBtn || !denyBtn) {
    console.warn("Cookie banner: missing DOM elements.");
    return;
  }

  // 初期状態：closed のまま（index.html に closed を書いておく）
  banner.classList.add("closed");
  banner.setAttribute("aria-hidden", "true");

  // Toggle をクリック -> 展開 / 閉じる
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = banner.classList.contains("open");
    if (isOpen) {
      banner.classList.remove("open");
      banner.classList.add("closed");
      banner.setAttribute("aria-hidden", "true");
      toggle.classList.remove("hidden");
    } else {
      banner.classList.remove("closed");
      banner.classList.add("open");
      banner.setAttribute("aria-hidden", "false");
      toggle.classList.add("hidden"); // アイコン隠したいならコメントアウト
    }
  });

  // バナー外側（ESCキー）で閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && banner.classList.contains("open")) {
      banner.classList.remove("open");
      banner.classList.add("closed");
      banner.setAttribute("aria-hidden", "true");
      toggle.classList.remove("hidden");
    }
  });

  // バナーをクリックしても閉じない（内部要素だけ動作）
  banner.addEventListener("click", (e) => {
    // 何もしない — 内部ボタンはそのまま機能
    e.stopPropagation();
  });

  // 言語切り替え（初期 = 日本語）
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang || "ja";
      // アイコン active 切替
      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // 表示テキスト切替
      texts.forEach(t => {
        t.classList.toggle("hidden", t.dataset.lang !== lang);
      });

      // ボタンのテキスト切替（data-text-ja / data-text-en）
      acceptBtn.textContent = acceptBtn.dataset[`text${lang === "ja" ? "Ja" : "En"}`] || acceptBtn.dataset[`text-${lang}`] || acceptBtn.textContent;
      denyBtn.textContent = denyBtn.dataset[`text${lang === "ja" ? "Ja" : "En"}`] || denyBtn.dataset[`text-${lang}`] || denyBtn.textContent;
    });
  });

  // Accept / Deny の動作
  acceptBtn.addEventListener("click", (e) => {
    e.preventDefault();
    banner.classList.remove("open");
    banner.classList.add("closed");
    banner.setAttribute("aria-hidden", "true");
    toggle.classList.remove("hidden");
    // アニメ待ってから遷移（500ms）
    setTimeout(() => {
      window.location.href = "/nextpage"; // ← 必要なら変更
    }, 500);
  });

  denyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    banner.classList.remove("open");
    banner.classList.add("closed");
    banner.setAttribute("aria-hidden", "true");
    toggle.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = "/deny"; // ← 必要なら変更
    }, 500);
  });

  // --- デバッグ用（ファイルパス等のトラブル対策） ---
  // console.log で確認したければコメントを外す
  // console.log("Cookie banner initialized.", { banner, toggle, acceptBtn, denyBtn });
});
