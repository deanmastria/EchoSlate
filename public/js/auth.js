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

// Check if Firebase is initialized
import { getApps } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

if (getApps().length === 0) {
  console.log("Firebase is not initialized.");
} else {
  console.log("Firebase is already initialized.");
}

// Handle registration form submission
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  console.log("Register form submitted with:", email, password); // Debugging output

  // More logging to see when the creation begins
  console.log("Attempting to create a user...");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created successfully:", user);
      alert("Registration successful!");
    })
    .catch((error) => {
      console.error("Error during user creation:", error.code, error.message); // Show full error details
      alert(`Error: ${error.message}`);
    });
});

// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  console.log("Login form submitted with:", email, password); // Debugging output

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in successfully:", user);
      alert("Login successful!");
    })
    .catch((error) => {
      console.error("Error during login:", error.code, error.message); // Show full error details
      alert(`Error: ${error.message}`);
    });
});
