const circleBtn = document.getElementById("circle");
const text = document.getElementById("text");

circleBtn.addEventListener("click", () => {
  circleBtn.classList.toggle("on");

  if (circleBtn.classList.contains("on")) {
    text.textContent = "LIGHT MODE";
    circleBtn.style.left = "112px";
    circleBtn.style.marginRight = "4px";
    text.style.left = "15px";
    text.style.color = "black";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    circleBtn.style.backgroundColor = "black";
    document.getElementById("switch").style.backgroundColor = "white";
  } else {
    text.textContent = "DARK MODE";
    circleBtn.style.left = "0px";
    circleBtn.style.marginRight = "5px";
    text.style.left = "62px";
    text.style.color = "white";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    circleBtn.style.backgroundColor = "white";
    document.getElementById("switch").style.backgroundColor = "black";
  }
});
