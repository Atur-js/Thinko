import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAvBMviEpuGCbluIO9VbLFX8Nd55WLYfhU",
  authDomain: "thinko-d6544.firebaseapp.com",
  projectId: "thinko-d6544",
  storageBucket: "thinko-d6544.appspot.com",
  messagingSenderId: "2863415703",
  appId: "1:2863415703:web:b2772cf0b3a7cfb75bc4d2",
}).auth();