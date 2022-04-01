// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDwmsx5GHpTDCR9rHHZGNaDFBQwT8vwXe0",
	authDomain: "ptvtktt.firebaseapp.com",
	projectId: "ptvtktt",
	storageBucket: "ptvtktt.appspot.com",
	messagingSenderId: "483665065801",
	appId: "1:483665065801:web:083eecf75314802feacc98",
	measurementId: "G-1JEC3RC446",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports = { analytics };

