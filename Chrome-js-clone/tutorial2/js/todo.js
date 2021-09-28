const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item) {
  console.log("hello");
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const paresdTodos = JSON.parse(savedTodos);
  todos = paresdTodos;
  paresdTodos.forEach((item) => console.log("투두리스트" + item));
}
