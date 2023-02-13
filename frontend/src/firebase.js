// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWTGyldPduZBG_Kv4_YgjOlajBaCehvjU",
  authDomain: "datacompare-4ec32.firebaseapp.com",
  projectId: "datacompare-4ec32",
  storageBucket: "datacompare-4ec32.appspot.com",
  messagingSenderId: "49262854698",
  appId: "1:49262854698:web:957ce3c5238f345b9b7953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

