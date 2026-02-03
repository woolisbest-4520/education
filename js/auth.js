/* ログイン用js */
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("ユーザー名とパスワードを入力してください");
    return;
  }

  // サーバー認証の代わりにローカルストレージ使う
  localStorage.setItem("loginUser", user);

  location.href = "dashboard.html";
}
