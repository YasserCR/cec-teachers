import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfyefHJvNChl8S_3UwSa-rYrQiiVmnfEY",
  authDomain: "sistema-cec.firebaseapp.com",
  projectId: "sistema-cec",
  storageBucket: "sistema-cec.appspot.com",
  messagingSenderId: "212787270601",
  appId: "1:212787270601:web:b999de4060dafe39bd8e18",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
