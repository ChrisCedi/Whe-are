import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj0NE8i0DUX0xnBVOZYWKfHnjflS6gRQM",
  authDomain: "proyecto4-8f6cf.firebaseapp.com",
  projectId: "proyecto4-8f6cf",
  storageBucket: "proyecto4-8f6cf.appspot.com",
  messagingSenderId: "1099436170890",
  appId: "1:1099436170890:web:597271189caa8ebcb81773",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
