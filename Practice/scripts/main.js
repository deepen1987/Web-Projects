let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/red-tree.jpeg") {
    myImage.setAttribute("src", "images/sun.gif");
  } else {
    myImage.setAttribute("src", "images/red-tree.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
  let myName = prompt("Please Enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Your New website is cool," + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Your new Website is not cool," + storedName;
}

myButton.onclick = function () {
  setUserName();
};
