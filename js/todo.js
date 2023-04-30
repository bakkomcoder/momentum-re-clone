const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  //   console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
  if (toDos.length <= 4) {
    todoForm.classList.remove("hidden");
    span.classList.add("animation-init");
    setTimeout(function () {
      span.classList.add("animation-fade");
    }, 30);
  }
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❎";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.classList.add("animation-init");
  button.classList.add("animation-init");
  setTimeout(function () {
    span.classList.add("animation-fade");
  }, 30);
  setTimeout(function () {
    button.classList.add("animation-fade");
  }, 30);
  todoList.appendChild(li);
  if (toDos.length > 4) {
    return todoForm.classList.add("hidden");
  }
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDoValue = localStorage.getItem(TODOS_KEY);

if (savedToDoValue !== null) {
  const parsedToDos = JSON.parse(savedToDoValue);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
