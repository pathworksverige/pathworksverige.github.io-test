import cookieManager from "./cookie-manager.js"

const cm = cookieManager();

var isValidUser = cm.getCookie("valid-user");

const password = "pwsverige";
let userInput = "";

if (!isValidUser) {

  document.body.innerHTML = "";
  userInput = prompt("Ange lösenord för att se sidan:");

  if (userInput !== password || userInput === "") {

    window.location.href = "wrong-password.html";
  }
  else {

    window.location.href = "index.html";
    cm.setCookie("valid-user", true, 30);
  }
}