// Alternar entre Login e Cadastro
function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

// Função de Cadastro
function register() {
  const newUser = document.getElementById("newUser").value;
  const newPass = document.getElementById("newPass").value;
  const successMsg = document.getElementById("registerSuccess");
  const errorMsg = document.getElementById("registerError");

  if (newUser && newPass) {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    users[newUser] = newPass;
    localStorage.setItem("users", JSON.stringify(users));

    successMsg.style.display = "block";
    errorMsg.style.display = "none";

    setTimeout(() => {
      showLogin();
    }, 1500); // volta para login depois de 1.5s
  } else {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
  }
}

// Função de Login
function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const error = document.getElementById("loginError");

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[user] && users[user] === pass) {
    error.style.display = "none";
    window.location.href = "index.html"; // Redireciona para Pomodoro
  } else {
    error.style.display = "block";
  }
}