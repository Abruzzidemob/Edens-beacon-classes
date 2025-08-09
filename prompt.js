// Ask the user for their name using prompt
let name = prompt("What is your name?");

// If user clicks "Cancel" or leaves it blank, use a default
if (!name) {
  name = "Guest";
}

// Update the h1 text in the HTML
document.getElementById("greeting").textContent = "Hello, " + name + "!";
