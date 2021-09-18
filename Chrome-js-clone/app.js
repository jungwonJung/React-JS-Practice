const title = document.getElementById("title");

// title.innerText = "호잇";

// title.style.color = "blue";

//event listen

// console.dir(title)

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "마우스 여기있다";
}

function handleMouseLeave() {
  title.innerText = " 마우스 떠낫다!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
