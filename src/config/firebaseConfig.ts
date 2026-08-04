import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBd2OugMuxhr9bLxsqlMY_xSOe__kUVB0Y",
  authDomain: "smart-ecommerce-rn-expo.firebaseapp.com",
  projectId: "smart-ecommerce-rn-expo",
  storageBucket: "smart-ecommerce-rn-expo.firebasestorage.app",
  messagingSenderId: "662449083649",
  appId: "1:662449083649:web:83d768902e41f843177700",
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth, firestore };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
