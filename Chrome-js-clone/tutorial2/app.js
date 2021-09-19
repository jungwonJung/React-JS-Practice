const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

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
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(e) {
//   e.preventDefault();
//   console.dir(e);
// }

// loginButton.addEventListener("click", hadleBtnClick);

loginForm.addEventListener("submit", hadleLoginSubmit);
// link.addEventListener("click", handleLinkClick);
