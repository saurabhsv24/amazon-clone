import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDt3gTkQc-ROOMVhcDkm4f2p2TpNZNYvwE",
    authDomain: "clone-edd39.firebaseapp.com",
    projectId: "clone-edd39",
    storageBucket: "clone-edd39.appspot.com",
    messagingSenderId: "562402482467",
    appId: "1:562402482467:web:6f9781bf5e730ee1f81496",
    measurementId: "G-3SNJ5K366B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };