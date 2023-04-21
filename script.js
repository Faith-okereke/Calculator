
var button = document.getElementsByClassName("button");
var arr = [...button];
var all = document.querySelector(".calculator")

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      all.classList.remove("second")
      all.classList.remove("third")
      all.classList.add("first")
      document.body.style.backgroundColor="hsl(222, 26%, 31%)"
      } else if (index == 1) {
        all.classList.remove("first")
        all.classList.remove("third")
        all.classList.add("second")
        document.body.style.backgroundColor="hsl(0, 0%, 90%)"
        
      } else if(index == 2) {
        all.classList.remove("second")
      all.classList.remove("first")
      all.classList.add("third")
      document.body.style.backgroundColor="hsl(268, 75%, 9%)"
      }
    arr.filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

const display = document.querySelector("#display");
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id == "clear") {
        display.innerText = "";
      } else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      } else if (display.innerText != "" && item.id == "equal") {
        display.innerText = eval(display.innerText);
      } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Null!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else {
        display.innerText += item.id;
      }
    };
  });
