// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4s21M1wnLmRNmWcbVxS6I6ZQ-ODMF7As",
    authDomain: "kingblack-a514f.firebaseapp.com",
    projectId: "kingblack-a514f",
    storageBucket: "kingblack-a514f.firebasestorage.app",
    messagingSenderId: "746328453980",
    appId: "1:746328453980:web:3094929493387c88cc8799",
    measurementId: "G-8Y67SDKSZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            alert(`Registration successful! Welcome, ${userCredential.user.email}`);
            window.location.href = "index.html"; // Redirect to login page
        } catch (error) {
            alert(`Error: ${error.message}`);
            console.error(error);
        }
    });
}

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert(`Login successful! Welcome back, ${userCredential.user.email}`);
        } catch (error) {
            alert(`Error: ${error.message}`);
            console.error(error);
        }
    });
}
