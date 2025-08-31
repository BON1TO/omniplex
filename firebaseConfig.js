import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyBlmt2O8Wxx2p0GcXbI8aRXen-zXF6MqTk",
  authDomain: "omniplex-8b0ba.firebaseapp.com",
  projectId: "omniplex-8b0ba",
  storageBucket: "omniplex-8b0ba.firebasestorage.app",
  messagingSenderId: "437543272199",
  appId: "1:437543272199:web:67bd12ebd96170eb064fa2",
  measurementId: "G-2199E7VSRK",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
