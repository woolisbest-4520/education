// auth.js

export function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("ユーザー名とパスワードを入力してください");
    return;
  }

  localStorage.setItem("loginUser", user);
  location.href = "dashboard.html";
}

export function logout() {
  localStorage.removeItem("loginUser");
  location.href = "../index.html";
}

export function requireLogin() {
  const user = localStorage.getItem("loginUser");
  if (!user) location.href = "login.html";
}
