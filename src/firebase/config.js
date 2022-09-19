import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';




const firebaseConfig = {
   apiKey: "AIzaSyB3ejzUfSfiU3kWEIKG2TWqhQ7ZRAb3dOk",
   authDomain: "live-chat-acba8.firebaseapp.com",
   projectId: "live-chat-acba8",
   storageBucket: "live-chat-acba8.appspot.com",
   messagingSenderId: "423124117127",
   appId: "1:423124117127:web:f5cf6b268b0a86a22dfa22"
 };


 firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const projectAuth = firebase.auth()

export {projectFirestore, timestamp, projectAuth}