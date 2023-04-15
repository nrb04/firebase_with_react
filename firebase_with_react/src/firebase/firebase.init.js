// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Vc3RZaJmCXK1QRhmfZyPj_Es_fQAlFw",
  authDomain: "fir-8f6ff.firebaseapp.com",
  projectId: "fir-8f6ff",
  storageBucket: "fir-8f6ff.appspot.com",
  messagingSenderId: "762153791347",
  appId: "1:762153791347:web:cfd03c9a91eddd31219f06",
};

// Initialize Firebase
const appAuth = initializeApp(firebaseConfig);
export default appAuth;
