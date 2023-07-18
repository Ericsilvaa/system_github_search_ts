// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDXRXD7_oxj75Pbjfh78I9ZU31J9MXuS4g",
  authDomain: "system-register-ts-redux.firebaseapp.com",
  projectId: "system-register-ts-redux",
  storageBucket: "system-register-ts-redux.appspot.com",
  messagingSenderId: "864051223385",
  appId: "1:864051223385:web:bba5c0c81717c035cd0a48",
  measurementId: "G-2FLES831MZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
