// Interactive Feature 1: Change Background Color
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
  const colors = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});


// Interactive Feature 2: Toggle Secret Message
const toggleBtn = document.getElementById("toggleBtn");
const secretMsg = document.getElementById("secretMsg");

toggleBtn.addEventListener("click", () => {
  if (secretMsg.style.display === "none") {
    secretMsg.style.display = "block";
  } else {
    secretMsg.style.display = "none";
  }
});


// Custom Form Validation
const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function(event) {
  let isValid = true;

  // Reset error messages
  usernameError.textContent = "";
  emailError.textContent = "";

  // Validate username (cannot be empty)
  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Username cannot be empty!";
    isValid = false;
  }

  // Validate email (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email!";
    isValid = false;
  }

  // Prevent form submission if invalid
  if (!isValid) {
    event.preventDefault();
  }
});
