// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyATp4WaHkrP3sKt4WZ4ti8LsYkuoDAyItQ",
	authDomain: "clone-netflix-92e74.firebaseapp.com",
	projectId: "clone-netflix-92e74",
	storageBucket: "clone-netflix-92e74.appspot.com",
	messagingSenderId: "781016632953",
	appId: "1:781016632953:web:6b3c9c4760292b9779cea8",
	measurementId: "G-NVPNKYFH9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);