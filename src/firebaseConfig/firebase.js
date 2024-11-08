import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMGH7IajnOk3uuofw4b1YwC_AWDm2VIxw",
  authDomain: "react-crud-62ec7.firebaseapp.com",
  projectId: "react-crud-62ec7",
  storageBucket: "react-crud-62ec7.appspot.com",
  messagingSenderId: "918055968542",
  appId: "1:918055968542:web:51a77f3dc55b8c9c43f30f",
  measurementId: "G-KF751MBW34"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
