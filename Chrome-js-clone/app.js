const h1 = document.getElementById("title");

// title.innerText = "호잇";

// title.style.color = "blue";

//event listen

// console.dir(title)

// function handleTitleClick() {
//   h1.style.color = "blue";
//   if (h1.style.color === "blue") {
//     document.body.style.backgroundColor = "blue";
//     h1.style.color = "tomato";
//   } else {
//     document.body.style.backgroundColor = "tomato";
//   }
// }

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }
function handleTitleClick() {
  const clickedClass = "clicked";
  const defaultClass = "";
  if (h1.className === clickedClass) {
    h1.className = defaultClass;
  } else {
    h1.className = clickedClass;
  }
}

// function handleMouseEnter() {
//   h1.innerText = "마우스 여기있다";
// }

// function handleMouseLeave() {
//   h1.innerText = " 마우스 떠낫다!";
// }

// function handelWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("복사 안됨");
// }

// function handleWindowOffline() {
//   alert("접속 끊김");
// }

// function handleWindowOnline() {
//   alert("접속중입니다");
// }

title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
// title.onmouseenter = handleMouseEnter;
// title.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handelWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("offline", handleWindowOnline);
