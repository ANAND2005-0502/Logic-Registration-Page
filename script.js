const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");


// Show Registration Form
showRegister.addEventListener("click", function (e) {
    e.preventDefault();

    loginBox.classList.add("hidden");
    registerBox.classList.remove("hidden");
});


// Show Login Form
showLogin.addEventListener("click", function (e) {
    e.preventDefault();

    registerBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
});


// Registration
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const message = document.getElementById("registerMessage");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    // Save user information
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    message.textContent = "Registration successful!";
    message.style.color = "green";

    document.getElementById("registerForm").reset();
});


// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    const message = document.getElementById("loginMessage");

    if (email === savedEmail && password === savedPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid email or password!";
        message.style.color = "red";
    }
});