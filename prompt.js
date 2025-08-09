// Select the button and greeting element
const greeting = document.getElementById("greeting");
const askNameBtn = document.getElementById("askNameBtn");

// Add click event listener
askNameBtn.addEventListener("click", function () {
  let name = prompt("What is your name?");

  if (!name) {
    name = "Guest";
  }

  greeting.textContent = "Hello, " + name + "!";
});
