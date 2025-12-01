function togglePassword() {
    const pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
  
    if (email === "" || pass === "") {
      alert("Please fill details");
      return;
    }
  
    // If filled → go to 404 page
    window.location.href = "404.html";
  });
  