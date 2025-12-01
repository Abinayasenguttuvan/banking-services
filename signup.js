function togglePassword(id) {
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
  }
  
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();
  
    if (name === "" || email === "" || pass === "" || confirm === "") {
      alert("Please fill details");
      return;
    }
  
    if (pass !== confirm) {
      alert("Password and Confirm Password must match!");
      return;
    }
  
    // If all valid → go to 404
    window.location.href = "404.html";
  });
  