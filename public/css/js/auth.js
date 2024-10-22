// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9w_PQS8HnG4q4PjW8fQN1isBzftDeZBE",
  authDomain: "testechoslate.firebaseapp.com",
  projectId: "testechoslate",
  storageBucket: "testechoslate.appspot.com",
  messagingSenderId: "987831629951",
  appId: "1:987831629951:web:f37aeba48e5fc10b6ce74a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle registration form submission
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created: ", user);
      alert("Registration successful!");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in: ", user);
      alert("Login successful!");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});