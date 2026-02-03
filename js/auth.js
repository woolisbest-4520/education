function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("ユーザー名とパスワードを入力してください");
    return;
  }

  // 本来はサーバー認証
  localStorage.setItem("loginUser", user);

  location.href = "dashboard.html";
}
