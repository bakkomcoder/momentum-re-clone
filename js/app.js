const loginDiv = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input:last-child");

const loginInputBlock = document.createElement("h1");
loginDiv.appendChild(loginInputBlock);

loginForm.classList.remove("hidden");

function loginFn(event) {
  event.preventDefault();
  const loginInputValue = loginInput.value;
  localStorage.setItem("username", loginInputValue);
  const savedInputValue = localStorage.getItem("username");
  if (loginInputValue === null) {
    loginInputBlock.innerText = `Hello, ${loginInputValue}`;
  } else {
    loginInputBlock.innerText = `Hello, ${savedInputValue}`;
    loginForm.classList.remove("hidden");
  }
  loginForm.classList.add("hidden");
}

loginForm.addEventListener("submit", loginFn);
