// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2O6lPGKR8q-8EvTB-gdBTK8IwR2CjPcc",
  authDomain: "chatgptclone-f6bd2.firebaseapp.com",
  projectId: "chatgptclone-f6bd2",
  storageBucket: "chatgptclone-f6bd2.appspot.com",
  messagingSenderId: "834290088576",
  appId: "1:834290088576:web:5d67812f468ec7f549c465",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig); //singelton
const db = getFirestore(app);

export { db };
