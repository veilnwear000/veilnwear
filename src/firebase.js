// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBXvszEHXkQj0Oxph7eMNZGWP8UBKYdwWs",
	authDomain: "veilnwear-4c413.firebaseapp.com",
	projectId: "veilnwear-4c413",
	storageBucket: "veilnwear-4c413.firebasestorage.app",
	messagingSenderId: "413122096222",
	appId: "1:413122096222:web:26f4b2ccb7b75349ff98cf",
	measurementId: "G-XNMV6WYHTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize analytics only in browser environments
let analytics;
try {
	analytics = getAnalytics(app);
} catch (e) {
	// analytics may fail during SSR or in non-browser environments — ignore
	analytics = null;
}

// Auth exports
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider };

