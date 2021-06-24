import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAF5pdBD56tgndFCOtBvjSTqLPsS2KI5RA",
    authDomain: "webfp-33985.firebaseapp.com",
    projectId: "webfp-33985",
    storageBucket: "webfp-33985.appspot.com",
    messagingSenderId: "716514262463",
    appId: "1:716514262463:web:eda940a19c9403a2eab50a"
  };
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;