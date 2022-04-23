import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB8qvvUw0eWui7-OGE_KjNnDQQ2LFiVSl4",
    authDomain: "food-app-6f31a.firebaseapp.com",
    databaseURL: "https://food-app-6f31a-default-rtdb.firebaseio.com",
    projectId: "food-app-6f31a",
    storageBucket: "food-app-6f31a.appspot.com",
    messagingSenderId: "102483886004",
    appId: "1:102483886004:web:e5ebed38f0ee14748dbce1"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };