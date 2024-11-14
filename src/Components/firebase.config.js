// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWD-R2aVozJl9ii_YhvqDlnx5lG1G9_zw",
  authDomain: "book-vibe-34f8a.firebaseapp.com",
  projectId: "book-vibe-34f8a",
  storageBucket: "book-vibe-34f8a.firebasestorage.app",
  messagingSenderId: "614083528819",
  appId: "1:614083528819:web:7fda5e78b2b172e2b44206"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app