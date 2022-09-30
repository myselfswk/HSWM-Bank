// import firebase from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVuYRWCaN_kKrwQ-NhLlUgppKZpgP-vfQ",
    authDomain: "hwsm-bank.firebaseapp.com",
    projectId: "hwsm-bank",
    storageBucket: "hwsm-bank.appspot.com",
    messagingSenderId: "836985235972",
    appId: "1:836985235972:web:21341afd8b35c186176351",
    measurementId: "G-CMQMN4VRGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// const db = firebase.database();
// const auth = firebase.auth();
// const storage = firebase.storage();

export {
    analytics,
    db
}