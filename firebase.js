// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
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
document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert(`User registered successfully: ${userCredential.user.email}`);
    } catch (error) {
        alert(`Error: ${error.message}`);
        console.error(error);
    }
});
