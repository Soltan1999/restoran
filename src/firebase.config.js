import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA18Fhtsw67M4oo8M5SX-QTOsg4YPYDo9U",
  authDomain: "restoranapp-57cab.firebaseapp.com",
  databaseURL: "https://restoranapp-57cab-default-rtdb.firebaseio.com",
  projectId: "restoranapp-57cab",
  storageBucket: "restoranapp-57cab.appspot.com",
  messagingSenderId: "65320450523",
  appId: "1:65320450523:web:dab74a18a5e60010318ffe",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
