import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3NXTi7X50mfN2J78gj5Kaq3VCzbqaSsQ",
    authDomain: "react-ee79b.firebaseapp.com",
    projectId: "react-ee79b",
    storageBucket: "react-ee79b.appspot.com",
    messagingSenderId: "1000138058681",
    appId: "1:1000138058681:web:1b65e2c753cd30453c2468",
    measurementId: "G-Z9J532GYDN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
