const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function hadleLoginSubmit(e) {
  e.preventDefault();
  // const username = loginInput.value;
  // if (username === "") {
  //   alert("이름을 입력해주세요");
  // } else if (username.length > 15) {
  //   alert("이름이 너무 깁니다");
  // }
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGrerting(username);
}

function paintGrerting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

// function handleLinkClick(e) {
//   e.preventDefault();
//   console.dir(e);
// }

// loginButton.addEventListener("click", hadleBtnClick);

// link.addEventListener("click", handleLinkClick);
const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", hadleLoginSubmit);
} else {
  paintGrerting(savedUsername);
}
