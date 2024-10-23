// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

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

// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful!");
      updateUserHeader(user); // Update the user info in the header
    })
    .catch((error) => {
      alert('Error: ${error.message}');
    });
});
// Auth state listener to manage user session persistence
onAuthStateChanged(auth, (user) => {
  if (user) {
    updateUserHeader(user); // Update UI if the user is logged in
  }
});

// Function to update the user information in the header
function updateUserHeader(user) {
  const userHeader = document.getElementById("userHeader");

  if (userHeader) {
    // If displayName exists (Google sign-in), else fallback to email
    const userInfo = user.displayName || user.email;
    userHeader.textContent = userInfo;
    userHeader.style.display = "block"; // Make sure it's visible
  }
}

// Handle logout
document.getElementById("logoutButton")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out!");
    location.reload(); // Refresh the page to clear the UI
  }).catch((error) => {
    alert('Error: ${error.message}');
  });
});
