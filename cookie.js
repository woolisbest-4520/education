const banner = document.querySelector('.cookie-banner');
const toggleBtn = document.querySelector('.cookie-toggle');

// 開閉
toggleBtn.addEventListener('click', () => {
  banner.classList.toggle('closed');
  toggleBtn.classList.toggle('hidden');
});

// バナーの外側クリックで閉じないように
banner.addEventListener('click', (e) => {
  if (e.target === banner) {
    banner.classList.toggle('closed');
    toggleBtn.classList.toggle('hidden');
  }
});

// 言語切り替え
document.querySelectorAll('.lang').forEach(el => {
  el.addEventListener('click', () => {
    const lang = el.dataset.lang;

    document.querySelectorAll('.cookie-text').forEach(t => {
      t.classList.toggle('hidden', t.dataset.lang !== lang);
    });

    document.querySelectorAll('.lang').forEach(l => {
      l.classList.toggle('active', l.dataset.lang === lang);
    });
  });
});

// 遅延してページ遷移
document.getElementById("accept-btn").addEventListener("click", () => {
  banner.classList.add("hide");
  setTimeout(() => window.location.href = "https://example.com/accept", 800);
});

document.getElementById("deny-btn").addEventListener("click", () => {
  banner.classList.add("hide");
  setTimeout(() => window.location.href = "https://example.com/deny", 800);
});
