const loginDiv = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input:last-child");

const loginInputBlock = document.createElement("h1");
loginDiv.appendChild(loginInputBlock);

const savedInputValue = localStorage.getItem("username");

if (savedInputValue === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  function paintGreetings(savedInputValue) {
    loginInputBlock.innerText = `Hello, ${savedInputValue}`;
    loginInputBlock.classList.remove("hidden");
  }
  paintGreetings(savedInputValue);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const loginInputValue = loginInput.value;
  localStorage.setItem("username", loginInputValue);
  function paintGreetings(loginInputValue) {
    loginInputBlock.innerText = `Hello, ${loginInputValue}`;
    loginInputBlock.classList.remove("hidden");
  }
  paintGreetings(loginInputValue);
}
// 함수 정의 후 실행을 위해 한 번 더 작성
