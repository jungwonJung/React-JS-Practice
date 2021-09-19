const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");

function hadleLoginSubmit(e) {
  e.preventDefault();
  // const username = loginInput.value;
  // if (username === "") {
  //   alert("이름을 입력해주세요");
  // } else if (username.length > 15) {
  //   alert("이름이 너무 깁니다");
  // }
  console.log(loginInput.value);
}

// loginButton.addEventListener("click", hadleBtnClick);

loginForm.addEventListener("submit", hadleLoginSubmit);
