import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQnv-f1hPmlrGxCjFwe8gC77PBZVEwWlE",
    authDomain: "whatsappclonemern-7b264.firebaseapp.com",
    databaseURL: "https://whatsappclonemern-7b264.firebaseio.com",
    projectId: "whatsappclonemern-7b264",
    storageBucket: "whatsappclonemern-7b264.appspot.com",
    messagingSenderId: "769899882330",
    appId: "1:769899882330:web:3535f33bd48d4d9fd87563",
    measurementId: "G-XMYRHE4JFK"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;

