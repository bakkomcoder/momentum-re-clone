const loginDiv = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input");
const greeting = document.querySelector(".greeting");

// const loginInputBlock = document.createElement("h1");
// loginDiv.appendChild(loginInputBlock);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const loginInputValue = loginInput.value;
  localStorage.setItem("username", loginInputValue);
  paintGreetings(loginInputValue);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove("hidden");
}

const savedInputValue = localStorage.getItem("username");

if (savedInputValue === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedInputValue);
}
